import type { ReactNode } from "react";
import ThemeToggle from "./ThemeToggle";

export type NeuralIntApp = {
  name: string;
  listingName: string;
  slug: "trailhead" | "lady";
  accentLabel: string;
};

type SectionLink = {
  id: string;
  label: string;
};

type AppLegalPageProps = {
  app?: NeuralIntApp;
  eyebrow: string;
  title: string;
  lede: string;
  updated: string;
  sections: SectionLink[];
  children: ReactNode;
};

export const trailheadApp: NeuralIntApp = {
  name: "Trailhead",
  listingName: "Trailhead: Deep Focus",
  slug: "trailhead",
  accentLabel: "Focus with a destination",
};

export const ladyApp: NeuralIntApp = {
  name: "Lady",
  listingName: "Lady: Family Routines",
  slug: "lady",
  accentLabel: "Family, on cue",
};

export function AppLegalPage({
  app,
  eyebrow,
  title,
  lede,
  updated,
  sections,
  children,
}: AppLegalPageProps) {
  return (
    <div className={`app-legal-site ${app ? `app-${app.slug}` : "app-neuralint"}`}>
      <header className="shell topbar legal-topbar">
        <a className="wordmark" href="/apps" aria-label="NeuralInt apps home">
          <span className="mark" aria-hidden="true" />
          <span>NeuralInt</span>
        </a>
        <nav className="nav legal-nav" aria-label="App legal navigation">
          <a href="/apps">Apps</a>
          <a href="/research">Research</a>
          <ThemeToggle />
        </nav>
      </header>

      <main className="shell legal-main">
        <header className="legal-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="legal-lede">{lede}</p>
          <div className="legal-meta">
            <span>Last updated {updated}</span>
            {app ? <span>{app.listingName}</span> : <span>NeuralInt apps</span>}
          </div>
        </header>

        <div className="legal-layout">
          <aside className="legal-index" aria-label="On this page">
            <p>On this page</p>
            <nav>
              {sections.map((section, index) => (
                <a href={`#${section.id}`} key={section.id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.label}
                </a>
              ))}
            </nav>
          </aside>

          <article className="legal-document">{children}</article>
        </div>
      </main>

      <footer className="shell footer legal-footer">
        <span>© 2026 Neural Intelligence Labs</span>
        <div className="legal-footer-links">
          <a href="/apps/terms">Terms</a>
          <a href="mailto:mehrdadz@neuralint.io">Contact</a>
          <a href="/research">Research</a>
        </div>
      </footer>
    </div>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="legal-section" id={id}>
      <h2>{title}</h2>
      <div className="legal-copy">{children}</div>
    </section>
  );
}

export function LegalCallout({ children }: { children: ReactNode }) {
  return <div className="legal-callout">{children}</div>;
}

export function AppPageLinks({ app }: { app: NeuralIntApp }) {
  return (
    <div className="app-page-links" aria-label={`${app.name} information`}>
      <a href={`/apps/${app.slug}/privacy`}>Privacy</a>
      <a href={`/apps/${app.slug}/support`}>Support</a>
      <a href={`/apps/${app.slug}/review`}>App Review guide</a>
      <a href="/apps/terms">Terms</a>
    </div>
  );
}
