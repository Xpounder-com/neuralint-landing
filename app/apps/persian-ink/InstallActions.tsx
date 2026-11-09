import { persianInkRelease } from "./release";

export default function InstallActions({ statusId = "persian-ink-release-status", showFacts = true, showSetup = true }: { statusId?: string; showFacts?: boolean; showSetup?: boolean }) {
  return (
    <div className="persian-ink-install" aria-label="Get Persian Ink">
      {showFacts && <p className="persian-ink-install-facts">iPad + Apple Pencil · {persianInkRelease.price} once · No subscription</p>}
      <div className="button-row">
        {persianInkRelease.publicDownloadAvailable ? (
          <a className="button primary" href={persianInkRelease.appStoreUrl}>Download on the App Store</a>
        ) : (
          <button className="button primary" disabled aria-describedby={statusId}>Download on the App Store</button>
        )}
        <a className="button secondary" href="/apps/persian-ink/#beta">Install with TestFlight</a>
        {showSetup && <a className="button secondary" href="/apps/persian-ink/support/#enable">Set up the keyboard</a>}
      </div>
      <p id={statusId} className="persian-ink-install-status">
        {persianInkRelease.publicDownloadAvailable
          ? "Open the App Store on your iPad to purchase and install. Local prices may vary."
          : "Submitted to Apple. Public download opens after approval and release. TestFlight currently requires an invitation or redemption code."}
      </p>
    </div>
  );
}
