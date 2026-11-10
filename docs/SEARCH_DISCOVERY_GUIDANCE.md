# Search and AI discovery guidance

Reviewed 2026-11-10 for `https://neuralint.io` and its native app pages. This is a primary-source research note, not evidence that a search engine has indexed the latest deployment. No implementation, portal, or publication changes were made for this research.

## What matters first

Google's AI Overviews and AI Mode use the same SEO foundations as ordinary Search. A supporting page must be indexed and eligible for a snippet. Google recommends allowing crawling, using discoverable internal links, publishing important facts as text, providing useful images, and keeping structured data consistent with the visible page. It states that special AI text files and special schema are unnecessary. Meeting the requirements does not guarantee crawling, indexing, or inclusion. [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)

Bing likewise connects Bing search, Copilot, and grounding experiences to crawlability, indexing, clear content, canonical URLs, internal links, and freshness. Its published guidelines name XML sitemaps and IndexNow as discovery mechanisms. Treat improvements to factual product pages and their internal links as the main work; a technical agent-readiness score is supplementary evidence, not a search-ranking measurement. [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)

## Repository observations and implementation priorities

Read-only observations from the existing checkout:

- `app/apps/page.tsx` lists Persian Ink, Persian Swipe, Trailhead, and Lady, but its metadata still describes a policy/support directory. Only Persian Ink currently has a product landing route and product link in that directory.
- The Trailhead, Lady, and Persian Swipe routes in `scripts/export-github-pages.mjs` are privacy, support, and reviewer pages. Product-specific landing pages would give human readers and search systems a clearer destination for each app.
- `app/layout.tsx` publishes an Organization entity and research-focused Open Graph/Twitter defaults. Check that each app overrides inherited social metadata with its actual name, purpose, canonical URL, and representative image.
- The export preserves static HTML and JSON-LD, creates a sitemap and permissive robots.txt, and gives the 404 page `noindex`. These are useful existing foundations to retain.
- `scripts/check-seo.mjs` currently asserts that every JSON-LD object is `Organization`. Expand it before introducing application, breadcrumb, or app-directory entities so it checks the intended graph rather than rejecting all additional types.

Recommended order: create or strengthen crawlable product landing destinations; connect them from the homepage and app directory; publish accurate app facts; add matching entity markup; verify canonical export, assets, and links; then submit or inspect the released URLs in search-owner tools. Keep App Store availability, operating systems, prices, and limitations tied to verified product evidence. Avoid implying that an unreleased app can already be purchased.

## Application structured data

Google supports `SoftwareApplication` and its `MobileApplication` subtype. Its software-app rich result requires an app name, an offer price, and either a real aggregate rating or a real review. Category and operating system are recommended; paid offers should include currency. Do not create ratings or editorial reviews just to satisfy a validator. An honest app entity without a rating can still describe the product, but it must not be reported as fully eligible for Google's software-app rich result. Validate the deployed markup and inspect its rendered page. [Google: Software app structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app)

Implementation inference: use a stable entity ID per app, linked to the existing Organization ID, with an accurate description, canonical product URL, supported operating system, category, image, and verified Store link. Include a price/offer only where the visible page and current release evidence support it. Directory `ItemList` and breadcrumb entities can express navigation; they are not substitutes for useful product text or guarantees of enhanced search appearance.

## Canonicals, robots, and sitemap

Use one preferred HTTPS URL per page and match its self-canonical, sitemap entry, and internal links. Google treats redirects and canonical link annotations as stronger consolidation signals than sitemap inclusion, and recommends linking consistently to canonical URLs. Keep redirect destinations out of the sitemap. [Google: Canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

Keep the sitemap limited to canonical URLs intended for discovery. Submit it through Search Console and reference it in robots.txt. If adding `lastmod`, derive it from meaningful page changes rather than the build clock; Google ignores sitemap `priority` and `changefreq`. [Google: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

Robots.txt controls crawling rather than reliably removing a URL from search. If reviewer-only instructions should stay out of search results, use a crawlable `noindex` page and omit it from the sitemap; do not block crawling and expect the crawler to read its `noindex`. Whether to exclude these currently public reviewer pages is a product decision, not a mandatory SEO rule. [Google: Robots.txt introduction](https://developers.google.com/search/docs/crawling-indexing/robots/intro)

## Search crawlers and training crawlers are separate choices

OpenAI's `OAI-SearchBot` supports discovery in ChatGPT Search. `GPTBot` concerns possible use in model training; the settings are independent, and allowing training is not required to allow search. `ChatGPT-User` handles certain user-initiated retrievals, does not determine Search eligibility, and robots rules may not apply to those requests. OpenAI recommends allowing its search bot and its published source IP ranges; robot-rule changes can take approximately a day to propagate. [OpenAI: Overview of crawlers](https://developers.openai.com/api/docs/bots)

Anthropic documents `Claude-SearchBot` for search indexing, `Claude-User` for user-directed retrieval, and `ClaudeBot` for potential training data. Its bots honor robots.txt. Allowing search/user retrieval does not require granting training access. If the current wildcard rules already permit crawling, separate explicit allow groups are chiefly clarity and regression protection; check hosting or CDN blocks as well. [Anthropic: Web crawlers and controls](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)

Preserve the site's existing training preference unless the owner requests a change. Search optimization does not call for changing it.

## Bing submission and IndexNow on GitHub Pages

Bing supports sitemap submission in Webmaster Tools, including sitemaps imported from Search Console or discovered through robots.txt. The portal exposes processing status and discovered URL counts; submitting is different from indexing. Avoid retired anonymous sitemap-ping endpoints. [Bing: Sitemaps](https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed), [Bing: Anonymous sitemap submission removal](https://blogs.bing.com/webmaster/2022/5/Spring-cleaning-Removed-Bing-anonymous-sitemap-submission/)

IndexNow proves control through a UTF-8 key file on the same host. A root-level key file covers the host; a key in a subdirectory limits its URL scope. Notifications can be sent as HTTP requests after the new pages and verification file are publicly available. A 200 response acknowledges receipt; 202 means key validation is pending. Neither proves indexing. [IndexNow protocol](https://www.indexnow.org/documentation)

GitHub Pages publishes static files from a repository/build. Therefore a static key file plus a local or deployment-workflow HTTP notification is technically feasible without adding a production server. This is an implementation inference from the two documented contracts. [GitHub: What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

Notify only for substantive new, changed, redirected, or deleted URLs, rather than repeatedly resubmitting unchanged pages. Search engines retain their own crawl and index decisions. Record the actual HTTP response separately from later index inspection. [IndexNow FAQ](https://www.indexnow.org/faq)

## Optional llms.txt

The current llms.txt specification calls itself a proposal. It provides a concise, curated Markdown overview and links for agents, alongside rather than replacing robots.txt and sitemaps. An accurate small file linking the app catalog, product pages, support, privacy, and terms may help clients that choose to read it. The specification is not evidence that Google, Bing, or every assistant consumes the file for ranking or citations. Do not claim universal support, guaranteed discovery, or a ranking boost. [llms.txt proposal](https://llmstxt.org/)

If implemented, generate it from the same product facts as the visible directory and check its links during export. Do not use it to publish app capabilities, prices, availability, or instructions that differ from the normal pages.

## Verification boundaries

Confirm four layers separately: exported HTML and assets; the live site's crawlable responses and metadata; sitemap/submission receipt in available search-owner tools; and actual indexing or search traffic later. Source validation and an agent-readiness scan establish technical readiness, not index inclusion, ranking, recommendations, or App Store release.
