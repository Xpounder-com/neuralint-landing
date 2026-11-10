import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.SITE_EXPORT_URL ?? "http://localhost:3001";
const outputDir = path.resolve("static-site");
const catalogResponse = await fetch(new URL("/apps/catalog.json", baseUrl));
if (!catalogResponse.ok) throw new Error("Unable to export app catalog: " + catalogResponse.status);
const catalog = await catalogResponse.json();
const routes = [
  { source: "/about", output: "about/index.html" },
  { source: "/contact", output: "contact/index.html" },
  { source: "/privacy", output: "privacy/index.html" },
  ...catalog.apps.filter(app => app.slug !== "persian-ink").map(app => ({
    source: "/apps/" + app.slug, output: "apps/" + app.slug + "/index.html",
  })),
  { source: "/apps/persian-ink", output: "apps/persian-ink/index.html" },
  { source: "/apps/persian-ink/privacy", output: "apps/persian-ink/privacy/index.html" },
  { source: "/apps/persian-ink/support", output: "apps/persian-ink/support/index.html" },
  { source: "/apps/persian-ink/review", output: "apps/persian-ink/review/index.html", indexable: false },
  { source: "/apps/persian-swipe/privacy", output: "apps/persian-swipe/privacy/index.html" },
  { source: "/apps/persian-swipe/support", output: "apps/persian-swipe/support/index.html" },

  { source: "/", output: "index.html" },
  { source: "/people/mehrdad", output: "people/mehrdad/index.html" },
  { source: "/apps", output: "apps/index.html" },
  { source: "/apps/terms", output: "apps/terms/index.html" },
  {
    source: "/apps/trailhead/privacy",
    output: "apps/trailhead/privacy/index.html",
  },
  {
    source: "/apps/trailhead/support",
    output: "apps/trailhead/support/index.html",
  },
  {
    source: "/apps/trailhead/review",
    output: "apps/trailhead/review/index.html", indexable: false,
  },
  { source: "/apps/lady/privacy", output: "apps/lady/privacy/index.html" },
  { source: "/apps/lady/support", output: "apps/lady/support/index.html" },
  { source: "/apps/lady/review", output: "apps/lady/review/index.html", indexable: false },
];

const staticThemeRuntime = `<script data-theme-runtime>
(function () {
  function applyTheme(theme) {
    var isDark = theme === "dark";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    document.querySelectorAll(".theme-toggle").forEach(function (button) {
      var nextTheme = isDark ? "light" : "dark";
      button.setAttribute("aria-label", "Switch to " + nextTheme + " theme");
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("title", "Switch to " + nextTheme + " theme");

      var icon = button.querySelector(".theme-toggle-icon");
      var label = button.querySelector(".theme-toggle-label");
      if (icon) icon.textContent = isDark ? "☀" : "☾";
      if (label) label.textContent = isDark ? "Light" : "Dark";
    });
  }

  var theme = document.documentElement.dataset.theme;
  if (theme !== "light" && theme !== "dark") {
    theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  applyTheme(theme);

  document.addEventListener("click", function (event) {
    var button = event.target.closest(".theme-toggle");
    if (!button) return;

    var nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("nil-theme", nextTheme);
    applyTheme(nextTheme);
  });
})();
</script>`;

function pageMeta(html, key) {
  for (const tag of html.match(/<meta\b[^>]*>/g) ?? []) {
    const attrs = Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(match => [match[1], match[2]]));
    if (attrs.name === key || attrs.property === key) return attrs.content;
  }
}
function makeStatic(html, route) {
  const documentEnd = html.indexOf("</html>");
  const completeDocument =
    documentEnd === -1 ? html : html.slice(0, documentEnd + "</html>".length);

  const result = completeDocument
    .replace(
      /<script\b(?![^>]*(?:data-theme-bootstrap|type=["']application\/ld\+json["']))[^>]*>[\s\S]*?<\/script>/gi,
      "",
    )
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*\/?>/gi, "")
    .replace(
      /<link rel="stylesheet" href="\/(?:app\/globals\.css|assets\/[^"]+\.css)"[^>]*\/?>/i,
      '<link rel="stylesheet" href="/assets/site.css"/>',
    )
    .replace(/\sdata-rsc-[\w-]+="[^"]*"/gi, "")
    .replace("</body>", `${staticThemeRuntime}</body>`);
  // Give every static page its own social title, summary and canonical URL.
  // Policy pages must not inherit the research homepage's share metadata.
  const title = completeDocument.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = pageMeta(completeDocument, "description");
  if (!title || !description) throw new Error("Missing page metadata: " + route.source);
  const canonical = "https://neuralint.io" + (route.source === "/" ? "/" : route.source + "/");
  const app = catalog.apps.find(app => route.source === "/apps/" + app.slug || route.source.startsWith("/apps/" + app.slug + "/"));
  const image = app?.image ?? "https://neuralint.io/og.webp";
  const escape = value => value.replace(/"/g, "&quot;");
  const social = {
    "og:title": title, "og:description": description, "og:url": canonical,
    "og:type": "website", "og:site_name": "Neural Intelligence Labs", "og:image": image,
    "og:image:alt": app ? app.name + " app icon" : "Neural Intelligence Labs",
    "twitter:card": app ? "summary" : "summary_large_image",
    "twitter:title": title, "twitter:description": description, "twitter:image": image,
  };
  const socialTags = Object.entries(social).map(([key, value]) =>
    '<meta ' + (key.startsWith("og:") ? "property" : "name") + '="' + key + '" content="' + escape(value) + '"/>'
  ).join("");
  return result.replace(/<meta\b[^>]*>/g, tag =>
    /(?:property|name)="(?:og:|twitter:)[^"]*"/.test(tag) ? "" : tag
  ).replace("</head>", socialTags + "</head>");

}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const route of routes) {
  const response = await fetch(new URL(route.source, baseUrl));
  if (!response.ok) {
    throw new Error(`Unable to export ${route.source}: ${response.status}`);
  }

  const destination = path.join(outputDir, route.output);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, makeStatic(await response.text(), route));
}

await mkdir(path.join(outputDir, "assets"), { recursive: true });
await cp(
  "dist/client/assets/_vinext_fonts",
  path.join(outputDir, "assets/_vinext_fonts"),
  { recursive: true },
);
await cp("public/projects", path.join(outputDir, "projects"), {
  recursive: true,
});
await cp("public/apps", path.join(outputDir, "apps"), { recursive: true });

const compiledAssets = await readdir("dist/client/assets");
const cssFile = compiledAssets.find((file) => file.endsWith(".css"));

if (!cssFile) {
  throw new Error("Unable to find the compiled site stylesheet.");
}

await cp(
  path.join("dist/client/assets", cssFile),
  path.join(outputDir, "assets/site.css"),
);

for (const asset of [
  "favicon.png",
  "favicon.svg",
  "og.webp",
  "mehrdad-zaker-headshot.jpeg",
  "mehrdad-zaker-three-quarter-transparent.webp",
]) {
  await cp(path.join("public", asset), path.join(outputDir, asset));
}

const discovery = JSON.parse(await readFile("scripts/discovery-config.json", "utf8"));
await cp("public/" + discovery.indexNowKey + ".txt", path.join(outputDir, discovery.indexNowKey + ".txt"));
await writeFile(path.join(outputDir, ".nojekyll"), "");
await writeFile(path.join(outputDir, "CNAME"), "neuralint.io\n");
// GitHub Pages serves files rather than application redirects. Keep the old
// research URL as an immediate redirect document, preserving inbound fragments.
await mkdir(path.join(outputDir, "research"), { recursive: true });
await writeFile(path.join(outputDir, "research/index.html"), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Research has moved | NeuralInt</title>
<link rel="canonical" href="https://neuralint.io/">
<script>location.replace("/" + location.search + location.hash);</script>
<meta http-equiv="refresh" content="0;url=/"></head>
<body><p>Research is now on the <a href="/">Neural Intelligence Labs homepage</a>.</p></body></html>`);

const canonicalUrls = routes.filter(route => route.indexable !== false).map(({ source }) =>
  `https://neuralint.io${source === "/" ? "/" : `${source}/`}`,
);
await writeFile(path.join(outputDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${canonicalUrls.map(url => `  <url><loc>${url}</loc></url>`).join("\n")}\n</urlset>\n`,
);
await writeFile(path.join(outputDir, "robots.txt"),
  "User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: Claude-SearchBot\nAllow: /\n\nSitemap: https://neuralint.io/sitemap.xml\n",
);
await writeFile(path.join(outputDir, "apps/catalog.json"), JSON.stringify(catalog, null, 2) + "\n");
const appLines = catalog.apps.map(app =>
  "- [" + app.name + "](" + app.url + "): " + app.description +
  " " + app.pricing + " Status: " + app.availability + "." +
  (app.downloadUrl ? " [App Store](" + app.downloadUrl + ")." : " No public App Store download yet.") +
  (app.supportUrl ? " [Setup and support](" + app.supportUrl + "). [Privacy](" + app.privacyUrl + ")." : "")
).join("\n");
await writeFile(path.join(outputDir, "llms.txt"),
  "# NeuralInt\n\n> Neural Intelligence Labs builds focused apps and researches AI agent environments.\n\n" +
  "## Apps\n\n" + appLines + "\n\n" +
  "## When these apps are useful\n\n" +
  "Compare Persian handwriting with swipe typing, build focused work sessions, set up parent-initiated family announcements, or explore fashion search. Read requirements, paid-feature limits and release status before choosing an installation link.\n\n" +
  "## Product information\n\n" +
  "- [App directory](https://neuralint.io/apps/): Compare the apps and open each product page.\n" +
  "- [App catalog JSON](https://neuralint.io/apps/catalog.json): Structured descriptions, requirements, prices, and release status from the same product facts as the website.\n" +
  "- [App terms](https://neuralint.io/apps/terms/): Terms for the NeuralInt app family.\n\n" +
  "## Research\n\n- [Neural Intelligence Labs](https://neuralint.io/): Research and maker portfolio.\n" +
  "- [Mehrdad Zaker](https://neuralint.io/people/mehrdad/): Founder profile.\n\n" +
  "App Store prices vary by country. Free download does not imply that every feature is free. " +
  "This optional overview supplements the public pages, robots.txt and sitemap; it does not grant access or change crawler policy.\n",
);
// Preserve the former Persian Swipe marketing URL and its inbound deep links.
await mkdir(path.join(outputDir, "apps/persian-swipe/review"), { recursive: true });
await writeFile(path.join(outputDir, "apps/persian-swipe/review/index.html"),
  '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Persian Swipe has moved</title>' +
  '<link rel="canonical" href="https://neuralint.io/apps/persian-swipe/">' +
  '<script>location.replace("/apps/persian-swipe/" + location.search + location.hash);</script>' +
  '<meta http-equiv="refresh" content="0;url=/apps/persian-swipe/"></head>' +
  '<body><p><a href="/apps/persian-swipe/">Visit Persian Swipe</a>.</p></body></html>'
);
await writeFile(path.join(outputDir, "404.html"), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex"><title>Page not found | NeuralInt</title></head>
<body><main><h1>Page not found</h1><p>Visit <a href="/">Neural Intelligence Labs</a> or the <a href="/apps/">app directory</a>.</p></main></body></html>`);

console.log(`Exported ${routes.length} routes to ${outputDir}`);
