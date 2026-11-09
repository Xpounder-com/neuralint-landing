import type { Metadata } from "next";
import { AppLegalPage, AppPageLinks, LegalSection, persianInkApp } from "../../components/AppLegalPage";
import InstallActions from "./InstallActions";
import { persianInkRelease } from "./release";

export const metadata: Metadata = {
  title: "Persian Ink — Download & Setup",
  description: "Get Persian Ink for iPad. Write Persian with Apple Pencil, review the text and insert it in Notes or another supported app. Offline after model setup.",
  alternates: { canonical: "/apps/persian-ink/" },
};

export default function PersianInkPage() {
  return (
    <AppLegalPage app={persianInkApp} eyebrow="Persian Ink · iPad" title="Your handwriting. Persian text."
      lede="Write with Apple Pencil. Review a candidate. Insert Persian text in Notes or another supported app. Recognition runs on your iPad after a one-time model download."
      updated="November 9, 2026" hero={<InstallActions />}
      sections={[{ id: "beta", label: "Install the test build" }, { id: "setup", label: "Start writing" }, { id: "requirements", label: "What you need" }]}>
      <LegalSection id="beta" title="Install the test build">
        <p>Open this page on your iPad. Beta access is limited to invited testers while the App Store release is under review.</p>
        <ol>
          <li><a className="button primary" href={persianInkRelease.testFlightDownloadUrl}>Download TestFlight</a><p>Install Apple’s free TestFlight app from the App Store.</p></li>
          <li>Open your Persian Ink invitation and tap <strong>View in TestFlight</strong>. If you have a redemption code, open TestFlight, tap <strong>Redeem</strong> and enter it there.</li>
          <li>In TestFlight, choose <strong>Persian Ink</strong>, tap <strong>Accept</strong> if shown, then <strong>Install</strong> and <strong>Open</strong>.</li>
        </ol>
        <p>Already installed? Open Persian Ink and continue with keyboard setup. An invitation is still required; downloading TestFlight alone does not unlock the beta. If the invitation is missing, search your email and spam for “Persian Ink” or <a href="mailto:mehrdadz@neuralint.io?subject=Persian%20Ink%20installation%20help">contact support</a>. Keep your redemption code private.</p>
      </LegalSection>
      <LegalSection id="setup" title="From install to your first line">
        <ol>
          <li>Add Persian Ink in <strong>Settings → General → Keyboard → Keyboards → Add New Keyboard</strong>.</li>
          <li>Temporarily enable <strong>Allow Full Access</strong> for Persian Ink while online. In Notes or the app’s practice page, hold the globe key and choose Persian Ink.</li>
          <li>Tap <strong>Download Persian model</strong> in the keyboard. Keep it open until it confirms installation, then return to Settings and turn <strong>Allow Full Access off</strong>.</li>
          <li>Back in the keyboard’s white panel, write a line with Apple Pencil, tap <strong>Recognize</strong>, review the candidates and tap one to insert it. You can now use recognition offline.</li>
        </ol>
        <p><a href="/apps/persian-ink/support/">Full setup instructions and troubleshooting →</a></p>
      </LegalSection>
      <LegalSection id="requirements" title="What you need">
        <p>An iPad running iPadOS 16 or later and a compatible Apple Pencil for handwriting. Internet is needed for installation and the first model download. Normal recognition and character typing work offline with Full Access off.</p>
        <p>The keyboard works in supported text fields. Protected fields and apps that block third-party keyboards use Apple’s keyboard. It does not convert existing Notes drawings, photos or PDFs. Review recognition results before sending or saving them.</p>
        <p>Google ML Kit supplies the recognizer and may send operational metrics when network access is available. Handwriting and recognition output stay on device. <a href="/apps/persian-ink/privacy/">Read the privacy policy</a>.</p>
      </LegalSection>
      <AppPageLinks app={persianInkApp} />
    </AppLegalPage>
  );
}
