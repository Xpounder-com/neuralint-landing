import type { Metadata } from "next";
import { AppLegalPage, AppPageLinks, LegalSection, persianInkApp } from "../../../components/AppLegalPage";

export const metadata: Metadata = {
  title: "Persian Ink Support",
  description: "Set up the Persian Ink handwriting keyboard, recognize Persian with Apple Pencil and get help.",
  alternates: { canonical: "/apps/persian-ink/support/" },
};
const sections = [
  { id: "release", label: "Release status" },
  { id: "enable", label: "Enable the keyboard" },
  { id: "model", label: "Download the Persian model" },
  { id: "write", label: "Write and insert" },
  { id: "offline", label: "Offline use" },
  { id: "limits", label: "Supported text fields" },
  { id: "purchase", label: "Purchase help" },
  { id: "contact", label: "Contact support" },
];
export default function PersianInkSupportPage() {
  return (
    <AppLegalPage app={persianInkApp} eyebrow="Persian Ink · Support" title="Write, review, insert."
      lede="Persian handwriting recognition in a keyboard panel for iPad."
      updated="November 9, 2026" sections={sections}>
      <LegalSection id="release" title="Release in preparation">
        <p>Persian Ink’s first App Store release is being prepared. It focuses on handwriting input through an iPad keyboard panel. No account is required.</p>
      </LegalSection>
      <LegalSection id="model" title="Download the Persian model once">
        <p>Connect to the internet. In the Persian Ink keyboard’s Settings page, temporarily enable Allow Full Access. Return to a text field, choose Persian Ink, tap Download Persian model and keep the keyboard open until it confirms that the model is installed.</p>
        <p>Then turn Allow Full Access off in Settings. Recognition works offline after this setup. Full Access permits network activity, including the Google SDK’s operational metrics; handwriting and typed text are not uploaded. If setup fails, check the connection and retry with the keyboard open.</p>
      </LegalSection>
      <LegalSection id="enable" title="Enable the keyboard">
        <p>Open Persian Ink, then add the keyboard in Settings → General → Keyboard → Keyboards → Add New Keyboard → Persian Ink. In a supported text field, hold the globe key and choose Persian Ink.</p>
      </LegalSection>
      <LegalSection id="write" title="Write and insert">
        <p>Use Apple Pencil in the white panel. Finish any missing dots, tap Recognize and review the candidates. Tap one to insert its literal text. The panel clears for your next line.</p>
        <p>Recognition quality varies with handwriting. Use Persian or English character keys to correct a result, enter names and numbers, or add نیم‌فاصله. Review text before sending or saving it in another app.</p>
      </LegalSection>
      <LegalSection id="offline" title="Offline use and temporary ink">
        <p>Handwriting recognition needs the Persian model installed first. After setup, recognition and character typing work offline with Allow Full Access off. Keep the model on your iPad; a missing model does not trigger a silent cloud fallback.</p>
        <p>Unsaved keyboard ink is temporary and may clear when the keyboard closes. Copy practice text you want to keep before leaving that page.</p>
      </LegalSection>
      <LegalSection id="limits" title="Supported text fields">
        <p>The keyboard has been tested in Apple Notes and a native text editor. Password fields, some protected inputs and apps that disallow third-party keyboards use Apple’s keyboard. Persian Ink does not replace handwriting recognition on another app’s page canvas and does not convert existing photos or PDFs.</p>
      </LegalSection>
      <LegalSection id="purchase" title="Purchase help">
        <p>The first release is planned as a one-time US$1.99 App Store download, with no subscription or in-app purchases. Apple displays the final price and currency for your storefront. Billing and refund requests are handled by Apple.</p>
      </LegalSection>
      <LegalSection id="contact" title="Contact support">
        <p>Email <a href="mailto:mehrdadz@neuralint.io">mehrdadz@neuralint.io</a> with the app version, iPad model, iPadOS version and a description of the issue. Share a handwriting example only if you choose to. Do not send passwords or private notes.</p>
      </LegalSection>
      <AppPageLinks app={persianInkApp} />
    </AppLegalPage>
  );
}
