# App search and agent discovery

Updated November 10, 2026. The public site is a static GitHub Pages export at https://neuralint.io/. These changes preserve its research identity and existing app designs.

## Product destinations

The homepage and app directory link directly to these canonical pages:

- https://neuralint.io/apps/persian-ink/
- https://neuralint.io/apps/persian-swipe/
- https://neuralint.io/apps/trailhead/
- https://neuralint.io/apps/lady/
- https://neuralint.io/apps/linkedfull/

The former Persian Swipe /review/ marketing URL redirects to its product page and preserves query strings and fragments. The other reviewer guides stay accessible, use noindex, follow, and are excluded from the sitemap.

Product facts live in app/content/apps.ts. They supply metadata, MobileApplication and breadcrumb entities, visible product details, the app directory, and /apps/catalog.json. The export derives /llms.txt from that catalog. Persian Ink's availability follows its existing release flag, so an unreleased app gets neither an install URL nor an Offer in structured data. Free downloads clearly identify paid-feature limits in the visible pages.

Apple's public US listings supplied the released app names, identities, OS requirements, current download prices and icons. The recorded URLs and verification date are in APP_CATALOG_SOURCES.json. Persian Ink uses its owner-approved release configuration and existing public artwork. Private handwriting samples were not used.

## Search controls

- Twenty canonical pages are in the sitemap. Product pages, support, privacy, terms, About, Contact and the founder page are discoverable.
- Every exported canonical page has unique title and description, one H1, one canonical URL, page-specific Open Graph/Twitter metadata, and static readable content.
- App entities link to the common publisher. No review, rating, business address or product claim was invented.
- Google software-app rich results have additional rating/review requirements. This implementation describes the apps honestly and does not claim eligibility for a rich result.
- robots.txt retains public crawling and explicitly allows OAI-SearchBot and Claude-SearchBot. The previous wildcard allowance, including its training-bot implications, is unchanged.
- llms.txt is an optional curated overview, not a Google requirement or a guarantee of agent recommendations. The JSON catalog and HTML pages remain usable without it.
- The website privacy page explains the static host, local theme storage, email contact and separate app policies.

Current primary-source guidance and its limits are recorded in SEARCH_DISCOVERY_GUIDANCE.md.

## Owner tools and notifications

The canonical HTTPS URL-prefix property was verified in Google Search Console on November 10 through the existing domain-provider record, with owner approval. A deployment must be verified live before submitting its updated sitemap. Submission and indexing are separate states.

IndexNow's verification key is intentionally public. scripts/discovery-config.json identifies its root-level text file. After a substantive change is deployed, notify only its changed canonical URLs:

    npm run seo:notify -- https://neuralint.io/apps/ https://neuralint.io/apps/trailhead/

The helper verifies the live key file before sending. A 200 receipt acknowledges a notification; 202 means verification is pending. Neither establishes indexing. This is a manual publication helper, not a recurring job.

## Validation

- Build and ten rendered-page tests pass.
- The static checker validates twenty canonical pages, all five app destinations, publisher/app/breadcrumb data, release offers, local assets and links, crawler files, reviewer exclusions, and redirects.
- Browser QA used the actual static export: 1440×1000 desktop and 390×844 mobile. All five app pages and the directory had one H1, no horizontal overflow, no overflowing download buttons, and no broken images. Light and dark themes were checked. The old Swipe URL reached its product page with the fragment preserved.
- Repository-wide TypeScript checking still reports the pre-existing missing Cloudflare Fetcher and D1Database types in unchanged worker/index.ts. It reports no new app errors.
- The Is Agentic baseline was 74/100. Its Markdown content-negotiation and Markdown-404 checks require request-header handling not provided by GitHub Pages. We did not migrate hosting or invent a postal address to change that score. Readable HTML and the public catalog are available independently.

Run npm test, export against the production preview, then npm run seo:check. The publication job runs the same build, page tests and static SEO checks. Check the exact successful Pages run, live URLs and assets before reporting a release. Search engines decide subsequent crawling, indexing and ranking.
