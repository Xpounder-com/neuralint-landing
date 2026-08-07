import type { Metadata } from "next";
import {
  AppLegalPage,
  AppPageLinks,
  ladyApp,
  LegalCallout,
  LegalSection,
} from "../../../components/AppLegalPage";

export const metadata: Metadata = {
  title: "Lady App Review Guide",
  description: "A reproducible App Review path for Lady and its local Cast integration.",
};

const sections = [
  { id: "identity", label: "App identity" },
  { id: "requirements", label: "Review requirements" },
  { id: "review-path", label: "Review path" },
  { id: "permissions", label: "Permission use" },
  { id: "subscription", label: "Subscription" },
  { id: "contact", label: "Review contact" },
];

export default function LadyReviewPage() {
  return (
    <AppLegalPage
      app={ladyApp}
      eyebrow="Lady · App Review"
      title="Review the real family workflow."
      lede="This guide documents Lady's complete local Cast path. No reviewer account or confidential Google credentials are required."
      updated="August 7, 2026"
      sections={sections}
    >
      <LegalSection id="identity" title="App identity">
        <dl className="legal-facts">
          <div><dt>Listing</dt><dd>Lady: Family Routines</dd></div>
          <div><dt>Apple ID</dt><dd>6798800587</dd></div>
          <div><dt>Bundle ID</dt><dd>com.mehrdadzakershahrak.bedtimebuddy</dd></div>
          <div><dt>Audience</dt><dd>Parents and guardians</dd></div>
        </dl>
      </LegalSection>

      <LegalSection id="requirements" title="Reviewer requirements">
        <ul>
          <li>A physical iPhone with Local Network access</li>
          <li>A Google, Nest, or other Cast-enabled speaker</li>
          <li>The iPhone and speaker connected to the same Wi-Fi</li>
        </ul>
        <LegalCallout>
          Simulator demonstrates the routine and playback UI. Hearing the actual
          announcement requires a physical Cast receiver on the reviewer&apos;s network.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="review-path" title="Representative review path">
        <ol>
          <li>Launch Lady and choose a routine template or custom family moment.</li>
          <li>Set the message, days, and time.</li>
          <li>Tap the Cast symbol, allow Local Network access, and choose a speaker.</li>
          <li>Tap Play This Announcement and hear the on-device-generated speech.</li>
          <li>Save the routine, then enable, pause, edit, and delete it.</li>
          <li>Allow notifications to verify the scheduled-reminder behavior.</li>
        </ol>
        <p>
          Lady does not create a cloud automation. Playback is foreground and user
          initiated. It does not activate a microphone, record people, infer
          behavior, or create a child profile.
        </p>
      </LegalSection>

      <LegalSection id="permissions" title="Why each permission exists">
        <dl className="legal-facts wide">
          <div><dt>Local network</dt><dd>Discover Cast receivers and deliver temporary audio only to the receiver the user chose.</dd></div>
          <div><dt>Notifications</dt><dd>Remind the adult at the local days and times they saved.</dd></div>
          <div><dt>No microphone</dt><dd>Speech is synthesized from user-entered text; Lady never listens to the household.</dd></div>
          <div><dt>No sign-in</dt><dd>The Default Media Receiver path requires no Google account authorization or reviewer credentials.</dd></div>
        </dl>
      </LegalSection>

      <LegalSection id="subscription" title="Subscription review">
        <p>
          Lady uses Apple StoreKit. The launch plan is $4.99 per month with a 14-day
          introductory free trial, plus a discounted annual option. The purchase
          screen states trial duration, renewal price, auto-renewal, and cancellation
          terms before confirmation. Restore Purchases and Manage Subscription are
          available from the paywall/settings surface.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Review contact">
        <p>
          No app or Google credentials are required. The named review contact is
          maintained in App Store Connect. General support is available at
          <a href="mailto:mehrdadz@neuralint.io"> mehrdadz@neuralint.io</a>.
        </p>
        <AppPageLinks app={ladyApp} />
      </LegalSection>
    </AppLegalPage>
  );
}
