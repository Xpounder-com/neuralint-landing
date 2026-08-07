import type { Metadata } from "next";
import ThemeToggle from "../components/ThemeToggle";
import { ladyApp, trailheadApp } from "../components/AppLegalPage";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Privacy, support, review information, and product policies for NeuralInt apps.",
};

const apps = [
  {
    ...trailheadApp,
    summary:
      "A deep-focus timer that turns protected work into progress along a national-park trail.",
    capabilities: ["Screen Time", "Live Activities", "Local-first"],
  },
  {
    ...ladyApp,
    summary:
      "A parent-operated assistant for gentle Google Home routines throughout the family day.",
    capabilities: ["Google Home", "Parent operated", "No recordings"],
  },
];

export default function AppsPage() {
  return (
    <div className="app-legal-site app-neuralint">
      <header className="shell topbar legal-topbar">
        <a className="wordmark" href="/apps" aria-label="NeuralInt apps home">
          <span className="mark" aria-hidden="true" />
          <span>NeuralInt</span>
        </a>
        <nav className="nav legal-nav" aria-label="Apps navigation">
          <a href="/research">Research</a>
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
                <h2>{app.name}</h2>
                <p className="app-card-summary">{app.summary}</p>
                <div className="app-capabilities">
                  {app.capabilities.map((capability) => (
                    <span key={capability}>{capability}</span>
                  ))}
                </div>
              </div>
              <div className="app-card-links">
                <a href={`/apps/${app.slug}/privacy`}>Privacy</a>
                <a href={`/apps/${app.slug}/support`}>Support</a>
                <a href={`/apps/${app.slug}/review`}>App Review</a>
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
          <a className="button secondary" href="/apps/terms">Read app terms</a>
        </section>
      </main>

      <footer className="shell footer legal-footer">
        <span>© 2026 Neural Intelligence Labs</span>
        <div className="legal-footer-links">
          <a href="/apps/terms">Terms</a>
          <a href="mailto:mehrdadz@neuralint.io">Support</a>
          <a href="/research">Research</a>
        </div>
      </footer>
    </div>
  );
}
