import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the research and maker portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /AI Agent RL Environments \| Neural Intelligence Labs/);
  assert.match(html, /Reinforcement learning environments for/);
  assert.match(html, /Maker(?:&apos;|&#x27;|')s portfolio/i);
  assert.match(html, /San Francisco \+ Chicago/);
  assert.match(html, /Switch to dark theme/);
  assert.match(html, /\/mehrdad-zaker-three-quarter-transparent\.webp/);
  assert.match(html, /Personal site &amp; writing/);

  for (const project of [
    "Selva",
    "RepoFix",
    "Index",
    "Executable Worlds",
    "Trailhead: Deep Focus",
    "LinkedFull",
  ]) {
    assert.match(html, new RegExp(`>${project}<`));
  }
});

test("uses the shared visual system and web-optimized project artwork", async () => {
  const source = await readFile(
    new URL("../app/research/ResearchPage.tsx", import.meta.url),
    "utf8",
  );

  assert.match(source, /NIL–01/);
  assert.match(source, /MZ \/ NIL/);
  assert.match(source, /One visual language, many systems/);
  assert.equal((source.match(/\/projects\/[^"]+\.webp/g) ?? []).length, 6);
  assert.doesNotMatch(source, /\/projects\/[^"]+\.png/);
});

test("supports a persistent dark theme and narrow mobile layouts", async () => {
  const [toggle, styles, exporter, layout] = await Promise.all([
    readFile(
      new URL("../app/components/ThemeToggle.tsx", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(
      new URL("../scripts/export-github-pages.mjs", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(toggle, /localStorage\.setItem\("nil-theme"/);
  assert.match(toggle, /prefers-color-scheme: dark/);
  assert.match(styles, /:root\[data-theme="dark"\]/);
  assert.match(styles, /@media \(max-width: 620px\)/);
  assert.match(styles, /@media \(max-width: 480px\)/);
  assert.match(layout, /data-theme-bootstrap/);
  assert.match(exporter, /data-theme-runtime/);
  assert.match(exporter, /localStorage\.setItem\("nil-theme"/);
  assert.match(exporter, /data-theme-bootstrap/);
  assert.match(exporter, /mehrdad-zaker-headshot\.jpeg/);
  assert.match(exporter, /mehrdad-zaker-three-quarter-transparent\.webp/);
});

test("server-renders the researcher profile", async () => {
  const response = await render("/people/mehrdad");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Mehrdad Zaker, Ph\.D\./);
  assert.match(html, /reinforcement-learning/i);
  assert.match(html, /Neural Intelligence Labs/);
  assert.match(html, /San Francisco \+ Chicago/);
  assert.match(html, /\/mehrdad-zaker-three-quarter-transparent\.webp/);
  assert.match(html, /Personal site &amp; writing/);
});

test("server-renders the NeuralInt app directory and legal routes", async () => {
  const expectations = [
    ["/apps", /Useful software,[\s\S]*made with care/],
    ["/apps/trailhead/privacy", /Your focus stays yours/],
    ["/apps/trailhead/support", /Keep moving forward/],
    ["/apps/trailhead/review", /A clear path through the app/],
    ["/apps/lady/privacy", /A parent stays in control/],
    ["/apps/lady/support", /Less repeating/],
    ["/apps/lady/review", /Review the real family workflow/],
    ["/apps/persian-ink/privacy", /Google ML Kit operational data/],
    ["/apps/persian-ink", /Download on the App Store/],
    ["/apps/persian-ink/support", /Write, review, insert/],
    ["/apps/persian-ink/review", /Your handwriting\. Persian text/],
    ["/apps/terms", /Clear terms for useful software/],
  ];

  for (const [pathname, pattern] of expectations) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, pattern, pathname);
    assert.match(html, /mehrdadz@neuralint\.io/, pathname);
  }
});

test("static export includes every app policy and review route", async () => {
  const exporter = await readFile(
    new URL("../scripts/export-github-pages.mjs", import.meta.url),
    "utf8",
  );

  for (const pathname of [
    "/apps/trailhead/privacy",
    "/apps/trailhead/support",
    "/apps/trailhead/review",
    "/apps/lady/privacy",
    "/apps/lady/support",
    "/apps/lady/review",
    "/apps/persian-ink/privacy",
    "/apps/persian-ink",
    "/apps/persian-ink/support",
    "/apps/persian-ink/review",
    "/apps/terms",
  ]) {
    assert.match(exporter, new RegExp(pathname.replaceAll("/", "\\/")));
  }
});

test("the legacy research route redirects to the canonical homepage", async () => {
  const response = await render("/research");
  assert.equal(response.status, 308);
  assert.equal(new URL(response.headers.get("location"), "http://localhost").href, "http://localhost/");
});

test("Persian Ink offers a truthful install path while public release is pending", async () => {
  const html = await (await render("/apps/persian-ink")).text();
  assert.match(html, /<button[^>]*disabled[^>]*>Download on the App Store<\/button>/);
  assert.doesNotMatch(html, /href="https:\/\/apps\.apple\.com\/app\/id6832685437"/);
  assert.match(html, /href="https:\/\/apps\.apple\.com\/app\/testflight\/id899247664"/);
  assert.match(html, /id="beta"/);
  assert.match(html, /redemption code/);
  assert.match(html, /US\$1\.99/);
  const support = await (await render("/apps/persian-ink/support")).text();
  assert.ok(support.indexOf('id="enable"') < support.indexOf('id="model"'));
  assert.match(support, /href="\/apps\/persian-ink\/#beta"/);
  const directory = await (await render("/apps")).text();
  assert.match(directory, /href="https:\/\/neuralint\.io\/apps\/persian-ink\/">Download &amp; setup/);
});


test("all five apps have discoverable product destinations and truthful release data", async () => {
  const response = await render("/apps/catalog.json");
  assert.equal(response.status, 200);
  const catalog = await response.json();
  assert.deepEqual(catalog.apps.map(app => app.slug).sort(), ["lady", "linkedfull", "persian-ink", "persian-swipe", "trailhead"]);
  const home = await (await render("/")).text();
  const directory = await (await render("/apps")).text();
  for (const app of catalog.apps) {
    assert.ok(home.includes('href="' + app.url + '"'));
    assert.ok(directory.includes('href="' + app.url + '"'));
    const page = await render(new URL(app.url).pathname.replace(/\/$/, ""));
    assert.equal(page.status, 200);
    const html = await page.text();
    const entities = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(match => {
      const data = JSON.parse(match[1]); return data["@graph"] ?? [data];
    });
    const entity = entities.find(data => data["@type"] === "MobileApplication");
    assert.equal(entity.url, app.url);
    if (app.availability === "available") {
      assert.equal(entity.installUrl, app.downloadUrl);
      assert.equal(entity.offers.price, app.priceUSD);
    } else {
      assert.equal(app.downloadUrl, null);
      assert.equal(entity.installUrl, undefined);
      assert.equal(entity.offers, undefined);
    }
  }
  const lady = await (await render("/apps/lady")).text();
  assert.match(lady, /do not start unattended/);
  const trailhead = await (await render("/apps/trailhead")).text();
  assert.match(trailhead, /Further hikes require Trailhead Plus/);
  const linkedfull = await (await render("/apps/linkedfull")).text();
  assert.match(linkedfull, /does not establish a garment/);
});

test("the former Persian Swipe marketing URL redirects to its product page", async () => {
  const response = await render("/apps/persian-swipe/review");
  assert.equal(response.status, 308);
  assert.equal(new URL(response.headers.get("location"), "http://localhost").pathname, "/apps/persian-swipe/");
});
