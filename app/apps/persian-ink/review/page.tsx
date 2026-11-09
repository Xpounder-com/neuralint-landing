import type { Metadata } from "next";
import { AppLegalPage, AppPageLinks, LegalSection, persianInkApp } from "../../../components/AppLegalPage";

export const metadata: Metadata = {
  title: "Persian Ink Review Guide",
  description: "The Persian Ink keyboard workflow, offline requirements and honest compatibility limits.",
  alternates: { canonical: "/apps/persian-ink/review/" },
};
const sections = [
  { id: "scope", label: "The first release" },
  { id: "workflow", label: "Keyboard workflow" },
  { id: "privacy", label: "Offline and privacy" },
  { id: "limits", label: "Compatibility limits" },
];
export default function PersianInkReviewPage() {
  return (
    <AppLegalPage app={persianInkApp} eyebrow="Persian Ink · Review guide" title="Your handwriting. Persian text."
      lede="A handwriting keyboard for iPad, with local recognition and literal text insertion. The first App Store release is in preparation."
      updated="November 9, 2026" sections={sections}>
      <LegalSection id="scope" title="The first release">
        <p>Persian Ink focuses on entering handwriting through its own keyboard panel. It requires no account or sign-in. Photo/PDF recognition and a separate document library are outside this release.</p>
      </LegalSection>
      <LegalSection id="workflow" title="Try the keyboard workflow">
        <p>After the required model setup, open a blank note in Apple Notes or use the practice page in Persian Ink. Choose Persian Ink with the globe key. Write a line with Apple Pencil, tap Recognize, review the candidate and tap it to insert. Character typing, نیم‌فاصله and the next-keyboard key are also available.</p>
        <p>For first-time setup, connect to the internet and temporarily enable Allow Full Access in the keyboard’s Settings page. Return to Persian Ink in a text field, tap Download Persian model and keep the keyboard open until installation is confirmed. Then turn Allow Full Access off and try recognition offline. See Support for the complete setup path.</p>
      </LegalSection>
      <LegalSection id="privacy" title="Offline recognition and privacy">
        <p>Once the model is installed, recognition works offline with Full Access off. Google ML Kit supplies the recognizer and may send operational metrics when network access is available. Handwriting input and recognition output stay on device. See the privacy policy for the SDK disclosures.</p>
      </LegalSection>
      <LegalSection id="limits" title="Compatibility limits">
        <p>The panel inserts text into compatible fields; it does not replace Apple Notes’ own page recognizer. Protected fields and hosts that reject third-party keyboards use Apple’s keyboard. Recognition varies with handwriting, so the candidate remains reviewable before insertion.</p>
      </LegalSection>
      <AppPageLinks app={persianInkApp} />
    </AppLegalPage>
  );
}
