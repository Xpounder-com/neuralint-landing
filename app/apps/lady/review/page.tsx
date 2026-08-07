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
  description: "A reproducible App Review path for Lady and its Google Home integration.",
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
      lede="This guide documents Lady's Google Home path without publishing confidential reviewer credentials. Account access details belong only in App Store Connect Review Notes."
      updated="August 6, 2026"
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
          <li>A physical iPhone with network and local-network access</li>
          <li>A Google Account authorized for the review project</li>
          <li>An accessible Google Home structure and compatible speaker</li>
          <li>The confidential review account/path supplied in App Store Connect</li>
        </ul>
        <LegalCallout>
          The Home APIs use Apple App Attest and physical smart-home resources, so a
          complete production-path review cannot be performed only in Simulator.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="review-path" title="Representative review path">
        <ol>
          <li>Launch Lady and tap Connect Google Home.</li>
          <li>Use the review account supplied privately and grant the review Home.</li>
          <li>Choose a routine template or create a custom family moment.</li>
          <li>Set the message, days, time, and whole Home or one speaker.</li>
          <li>Use Test now to hear the selected announcement.</li>
          <li>Save, disable, edit, and delete the routine.</li>
        </ol>
        <p>
          Lady creates only user-requested Google Home automations. It does not
          activate a microphone, record audio, infer behavior, or create a child
          profile.
        </p>
      </LegalSection>

      <LegalSection id="permissions" title="Why each permission exists">
        <dl className="legal-facts wide">
          <div><dt>Google authorization</dt><dd>Grant access to one Home without exposing the user&apos;s password to Lady.</dd></div>
          <div><dt>Local network</dt><dd>Support Google Home discovery and communication where the Home APIs require it.</dd></div>
          <div><dt>App Attest</dt><dd>Allow Google to verify the authentic app instance and protect Home access.</dd></div>
          <div><dt>App Group</dt><dd>Support Google Home SDK components that coordinate inside Lady&apos;s signed app family.</dd></div>
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
          Confidential credentials and the named review contact are maintained in
          App Store Connect. General support is available at
          <a href="mailto:mehrdadz@neuralint.io"> mehrdadz@neuralint.io</a>.
        </p>
        <AppPageLinks app={ladyApp} />
      </LegalSection>
    </AppLegalPage>
  );
}
