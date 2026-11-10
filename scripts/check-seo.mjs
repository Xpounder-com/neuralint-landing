import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.argv[2] ?? "static-site");
const origin = "https://neuralint.io";
const catalog = JSON.parse(await readFile(path.join(root, "apps/catalog.json"), "utf8"));
const sitemap = await readFile(path.join(root, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.ok(urls.length > 0, "Sitemap must list canonical pages");
assert.equal(new Set(urls).size, urls.length, "Sitemap URLs must be unique");
assert.deepEqual(catalog.apps.map(app => app.slug).sort(), ["lady", "linkedfull", "persian-ink", "persian-swipe", "trailhead"]);
const titles = new Set();
const descriptions = new Set();
const schemasByUrl = new Map();
const htmlByUrl = new Map();
function attrs(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w-]+)=["']([^"']*)["']/g)].map(match => [match[1], match[2]]));
}
function nodes(data) { return data["@graph"] ?? [data]; }
function decode(value) { return value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'"); }
for (const url of urls) {
  const parsed = new URL(url);
  assert.equal(parsed.origin, origin, "Canonical host: " + url);
  assert.ok(parsed.pathname.endsWith("/"), "Trailing slash: " + url);
  assert.ok(!parsed.pathname.includes("/review/"), "Reviewer pages are not search landing pages");
  assert.notEqual(parsed.pathname, "/research/", "Do not submit the redirect");
  const html = await readFile(path.join(root, parsed.pathname, "index.html"), "utf8");
  htmlByUrl.set(url, html);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), "Unique title: " + url);
  titles.add(title);
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(match => attrs(match[0]));
  assert.deepEqual(links.filter(tag => tag.rel === "canonical").map(tag => tag.href), [url], "One final canonical: " + url);
  const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map(match => attrs(match[0]));
  const descriptionTags = metas.filter(tag => tag.name === "description");
  assert.equal(descriptionTags.length, 1, "One description: " + url);
  const description = descriptionTags[0].content;
  assert.ok(description && !descriptions.has(description), "Unique description: " + url);
  descriptions.add(description);
  assert.ok(!metas.some(tag => tag.name === "robots" && /noindex/i.test(tag.content)), "Indexable sitemap URL: " + url);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, "One main heading: " + url);
  for (const [key, expected] of Object.entries({
    "og:title": title, "og:description": description, "og:url": url,
    "twitter:title": title, "twitter:description": description,
  })) {
    const tags = metas.filter(tag => tag.name === key || tag.property === key);
    assert.equal(tags.length, 1, "One " + key + ": " + url);
    assert.equal(decode(tags[0].content), decode(expected), "Page-specific " + key + ": " + url);
  }
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(match => nodes(JSON.parse(match[1])));
  assert.ok(schemas.length, "Static structured data: " + url);
  schemasByUrl.set(url, schemas);
  const organizations = schemas.filter(data => data["@type"] === "Organization");
  assert.equal(organizations.length, 1, "One publisher entity: " + url);
  assert.equal(organizations[0]["@id"], origin + "/#organization");
  assert.ok(organizations[0].description && organizations[0].contactPoint?.email, "Factual publisher identity and contact");
  for (const data of schemas) {
    assert.ok(["Organization", "MobileApplication", "BreadcrumbList", "CollectionPage", "AboutPage", "ContactPage", "WebPage"].includes(data["@type"]), "Expected entity type: " + data["@type"]);
  }
  for (const match of html.matchAll(/(?:href|src)="(\/(?!\/)[^"?#]*)[^"#]*(?:#[^"]*)?"/g)) {
    const pathname = match[1];
    await access(path.join(root, pathname, path.extname(pathname) ? "" : "index.html")).catch(() => assert.fail("Missing link or asset " + pathname + " in " + url));
  }
}
const directoryHtml = htmlByUrl.get(origin + "/apps/");
const homepage = htmlByUrl.get(origin + "/");
const directory = schemasByUrl.get(origin + "/apps/").find(data => data["@type"] === "CollectionPage");
assert.equal(directory.mainEntity.itemListElement.length, catalog.apps.length);
for (const app of catalog.apps) {
  assert.ok(urls.includes(app.url), "Product page in sitemap: " + app.name);
  assert.ok(directoryHtml.includes('href="' + app.url + '"'), "Product reachable from directory: " + app.name);
  assert.ok(homepage.includes('href="' + app.url + '"'), "Product reachable from homepage: " + app.name);
  const data = schemasByUrl.get(app.url).filter(node => node["@type"] === "MobileApplication");
  assert.equal(data.length, 1, "One app entity: " + app.name);
  const entity = data[0];
  assert.equal(entity.url, app.url);
  assert.equal(entity.name, app.name);
  assert.equal(entity.operatingSystem, app.operatingSystem);
  assert.equal(entity.image, app.image);
  assert.equal(entity.publisher["@id"], origin + "/#organization");
  // Do not invent reviews or ratings to qualify for a Google rich result.
  assert.equal(entity.aggregateRating, undefined);
  assert.equal(entity.review, undefined);
  if (app.availability === "available") {
    assert.equal(entity.installUrl, app.downloadUrl);
    assert.equal(entity.offers.price, app.priceUSD);
    assert.equal(entity.offers.priceCurrency, "USD");
    const storeId = app.downloadUrl.match(/id(\d+)/)[1];
    const storeLinks = [...htmlByUrl.get(app.url).matchAll(/href="([^"]+)"/g)].map(match => decode(match[1]));
    assert.ok(storeLinks.some(href => href.startsWith("https://apps.apple.com/") && new URL(href).pathname.endsWith("id" + storeId)), "Visible install path: " + app.name);
  } else {
    assert.equal(entity.installUrl, undefined, "Unreleased app has no install offer");
    assert.equal(entity.offers, undefined, "Unreleased app has no purchase offer");
    assert.equal(app.downloadUrl, null);
    assert.equal(app.priceUSD, null);
  }
}
for (const slug of ["trailhead", "lady", "persian-ink"]) {
  const html = await readFile(path.join(root, "apps", slug, "review/index.html"), "utf8");
  assert.match(html, /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/);
  assert.ok(!urls.includes(origin + "/apps/" + slug + "/review/"));
}
for (const [pathname, target] of [["research", "/"], ["apps/persian-swipe/review", "/apps/persian-swipe/"]]) {
  const html = await readFile(path.join(root, pathname, "index.html"), "utf8");
  assert.ok(html.includes('rel="canonical" href="' + origin + target + '"'));
  assert.ok(html.includes('http-equiv="refresh" content="0;url=' + target + '"'));
  assert.match(html, /location\.search \+ location\.hash/);
}
const robots = await readFile(path.join(root, "robots.txt"), "utf8");
assert.match(robots, /Sitemap: https:\/\/neuralint.io\/sitemap.xml/);
assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/m);
for (const bot of ["OAI-SearchBot", "Claude-SearchBot"]) assert.ok(robots.includes("User-agent: " + bot + "\nAllow: /"));
const llms = await readFile(path.join(root, "llms.txt"), "utf8");
for (const app of catalog.apps) assert.ok(llms.includes("](" + app.url + ")"), "Discovery overview: " + app.name);
assert.ok(llms.includes(origin + "/apps/catalog.json"));
const notFound = await readFile(path.join(root, "404.html"), "utf8");
assert.match(notFound, /name="robots" content="noindex"/);
assert.match(notFound, /<h1>Page not found<\/h1>/);
console.log("SEO checks passed: " + urls.length + " canonical pages; all five apps; app, publisher and breadcrumb data; truthful offers; metadata; links; discovery files; reviewer exclusions and legacy redirects.");
