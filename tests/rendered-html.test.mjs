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
  assert.match(html, /Research · Neural Intelligence Labs/);
  assert.match(html, /Environments for agents that/);
  assert.match(html, /Maker(?:&apos;|&#x27;|')s portfolio/i);

  for (const project of [
    "Selva",
    "RepoFix",
    "Index",
    "Executable Worlds",
    "Deep Focus",
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

test("server-renders the researcher profile", async () => {
  const response = await render("/people/mehrdad");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Mehrdad Zaker, Ph\.D\./);
  assert.match(html, /reinforcement-learning/i);
  assert.match(html, /Neural Intelligence Labs/);
});
