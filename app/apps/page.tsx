import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "../components/ThemeToggle";
import { apps, appUrl, siteOrigin } from "../content/apps";
import StructuredData from "../components/StructuredData";

const title = "Persian Keyboards, Focus & Family Apps";
const description = "Explore NeuralInt apps: Persian Ink handwriting, Persian Swipe typing, Trailhead focus sessions, Lady family routines, and LinkedFull fashion search.";
export const metadata: Metadata = {
  alternates: { canonical: "/apps/" }, title, description,
  openGraph: { title, description, url: "https://neuralint.io/apps/", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};
const capabilities: Record<string, string[]> = {
  "persian-ink": ["Apple Pencil", "Offline after setup", "US$1.99 once"],
  "persian-swipe": ["Persian swipe typing", "On-device learning", "No Full Access"],
  trailhead: ["Focus timer", "Screen Time", "Live Activities"],
  lady: ["Family reminders", "Google Cast", "No recordings"],
  linkedfull: ["AI fashion search", "Photo inspiration", "Virtual try-on"],
};
const directoryData = {
  "@context": "https://schema.org", "@type": "CollectionPage",
  "@id": siteOrigin + "/apps/#directory", name: title, description,
  url: siteOrigin + "/apps/", publisher: { "@id": siteOrigin + "/#organization" },
  mainEntity: { "@type": "ItemList", itemListElement: apps.map((app, index) => ({
    "@type": "ListItem", position: index + 1, name: app.listingName, url: appUrl(app),
  })) },
};

export default function AppsPage() {
  return (
    <div className="app-legal-site app-neuralint">
      <StructuredData data={directoryData} />
      <header className="shell topbar legal-topbar">
        <a className="wordmark" href="/apps/" aria-label="NeuralInt apps home">
          <span className="mark" aria-hidden="true" />
          <span>NeuralInt</span>
        </a>
        <nav className="nav legal-nav" aria-label="Apps navigation">
          <Link href="/">Research</Link>
          <a href="mailto:mehrdadz@neuralint.io">Contact</a>
          <ThemeToggle />
        </nav>
      </header>

      <main className="shell apps-main">
        <section className="apps-heading">
          <p className="eyebrow">NeuralInt · App factory</p>
          <h1>Useful software,<br />made with care.</h1>
          <p>
            NeuralInt is the product studio and business identity behind a growing
            family of focused, privacy-conscious apps. Each product has its own
            character; the craft, support standard, and quiet NeuralInt signature
            stay consistent.
          </p>
        </section>

        <section className="app-directory" aria-label="NeuralInt apps">
          {apps.map((app, index) => (
            <article className={`app-directory-card app-${app.slug}`} key={app.slug}>
              <div className="app-card-index">0{index + 1}</div>
              <div>
                <p className="app-card-label">{app.accentLabel}</p>
                <h2><a href={appUrl(app)}>{app.listingName}</a></h2>
                <p className="app-card-summary">{app.description}</p>
                <div className="app-capabilities">
                  {capabilities[app.slug].map((capability) => (
                    <span key={capability}>{capability}</span>
                  ))}
                </div>
              </div>
              <div className="app-card-links">
                <a href={appUrl(app)}>{app.slug === "persian-ink" ? "Download & setup" : "Explore " + app.name}</a>
                {app.hasLocalPolicies ? <>
                  <a href={appUrl(app) + "privacy/"}>Privacy</a>
                  <a href={appUrl(app) + "support/"}>Support</a>
                </> : <a href={app.storeUrl}>App Store</a>}
              </div>
            </article>
          ))}
        </section>

        <section className="apps-trust-band">
          <div>
            <span>One standard</span>
            <h2>Private by default. Clear when a service is involved.</h2>
          </div>
          <p>
            We minimize developer-operated accounts and analytics, explain every
            platform permission in plain language, and publish review paths that
            make app behavior inspectable.
          </p>
          <a className="button secondary" href="/apps/terms/">Read app terms</a>
        </section>
      </main>

      <footer className="shell footer legal-footer">
        <span>© 2026 Neural Intelligence Labs</span>
        <div className="legal-footer-links">
          <a href="/about/">About</a>
          <a href="/contact/">Contact</a>
          <a href="/privacy/">Website privacy</a>
          <a href="/apps/terms/">Terms</a>
          <a href="mailto:mehrdadz@neuralint.io">Support</a>
          <Link href="/">Research</Link>
        </div>
      </footer>
    </div>
  );
}
