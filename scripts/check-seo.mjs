import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.argv[2] ?? 'static-site');
const origin = 'https://neuralint.io';
const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.ok(urls.length > 0, 'Sitemap must list the exported pages');
assert.equal(new Set(urls).size, urls.length, 'Sitemap URLs must be unique');
const titles = new Set();
const descriptions = new Set();
function attrs(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w-]+)=["']([^"']*)["']/g)].map(m => [m[1], m[2]]));
}
for (const url of urls) {
  const parsed = new URL(url);
  assert.equal(parsed.origin, origin, `Canonical host: ${url}`);
  assert.ok(parsed.pathname.endsWith('/'), `Final trailing slash: ${url}`);
  assert.notEqual(parsed.pathname, '/research/', 'Do not submit the redirect');
  const html = await readFile(path.join(root, parsed.pathname, 'index.html'), 'utf8');
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert.ok(title, `Missing title: ${url}`);
  assert.ok(!titles.has(title), `Duplicate title: ${title}`);
  titles.add(title);
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(m => attrs(m[0]));
  const canonicals = links.filter(a => a.rel === 'canonical');
  assert.deepEqual(canonicals.map(a => a.href), [url], `One final canonical: ${url}`);
  const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map(m => attrs(m[0]));
  const descriptionsForPage = metas.filter(a => a.name === 'description');
  assert.equal(descriptionsForPage.length, 1, `One description: ${url}`);
  const description = descriptionsForPage[0].content;
  assert.ok(description, `Nonempty description: ${url}`);
  assert.ok(!descriptions.has(description), `Unique description: ${url}`);
  descriptions.add(description);
  assert.ok(!metas.some(a => a.name === 'robots' && /noindex/i.test(a.content)), `Indexable sitemap URL: ${url}`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `One main heading: ${url}`);
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert.ok(schemas.length, `Static export must preserve structured data: ${url}`);
  for (const schema of schemas) {
    const data = JSON.parse(schema[1]);
    assert.equal(data['@type'], 'Organization');
    assert.equal(data.url, `${origin}/`);
  }
  for (const match of html.matchAll(/(?:href|src)="(\/(?!\/)[^"?#]*)[^"#]*(?:#[^"]*)?"/g)) {
    const pathname = match[1];
    const target = path.join(root, pathname, path.extname(pathname) ? '' : 'index.html');
    await access(target).catch(() => assert.fail(`Missing local link or asset ${pathname} in ${url}`));
  }
}
const redirect = await readFile(path.join(root, 'research/index.html'), 'utf8');
assert.match(redirect, /rel="canonical" href="https:\/\/neuralint.io\/"/);
assert.match(redirect, /http-equiv="refresh" content="0;url=\/"/);
assert.match(redirect, /location\.search \+ location\.hash/);
const robots = await readFile(path.join(root, 'robots.txt'), 'utf8');
assert.match(robots, /Sitemap: https:\/\/neuralint.io\/sitemap.xml/);
assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/m);
const notFound = await readFile(path.join(root, '404.html'), 'utf8');
assert.match(notFound, /name="robots" content="noindex"/);
assert.match(notFound, /<h1>Page not found<\/h1>/);
console.log(`SEO checks passed: ${urls.length} canonical pages, unique metadata, structured data, links, assets, sitemap, robots, and legacy redirect.`);
