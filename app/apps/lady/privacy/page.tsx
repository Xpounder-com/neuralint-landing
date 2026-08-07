import type { Metadata } from "next";
import {
  AppLegalPage,
  AppPageLinks,
  ladyApp,
  LegalCallout,
  LegalSection,
} from "../../../components/AppLegalPage";

export const metadata: Metadata = {
  title: "Lady Privacy Policy",
  description: "How Lady handles family routines, Google Home authorization, devices, and purchases.",
};

const sections = [
  { id: "summary", label: "Summary" },
  { id: "information", label: "Information handled" },
  { id: "google-home", label: "Google Home" },
  { id: "purposes", label: "Why data is used" },
  { id: "purchases", label: "Purchases" },
  { id: "children", label: "Children" },
  { id: "retention", label: "Retention and deletion" },
  { id: "contact", label: "Contact and changes" },
];

export default function LadyPrivacyPage() {
  return (
    <AppLegalPage
      app={ladyApp}
      eyebrow="Lady · Privacy"
      title="A parent stays in control."
      lede="Lady helps an adult create spoken Google Home routines for the whole family day. It does not listen to the household, record audio, or create child profiles."
      updated="August 6, 2026"
      sections={sections}
    >
      <LegalSection id="summary" title="Summary">
        <p>
          Lady stores your routine library on your iPhone and sends the routines you
          choose to Google Home. NeuralInt does not operate a Lady account system,
          advertising network, or developer analytics service in the current
          version.
        </p>
        <LegalCallout>
          <strong>Data controller.</strong> Neural Intelligence Labs, operating
          publicly as NeuralInt, is responsible for this policy. Google separately
          processes Google Account and Home data under its own terms.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="information" title="Information Lady handles">
        <ul>
          <li>Home, room, and compatible-speaker names and identifiers supplied by Google</li>
          <li>Routine name, spoken message, schedule, destination, and enabled state</li>
          <li>The Google Home automation identifier needed to update or delete a routine</li>
          <li>Apple subscription product and entitlement status</li>
        </ul>
        <p>
          Lady does not ask for a child&apos;s name, birth date, contacts, photos, voice
          recording, school, or precise location. Parents should avoid placing
          sensitive personal information in announcement text.
        </p>
      </LegalSection>

      <LegalSection id="google-home" title="Google authorization and Home APIs">
        <p>
          Google Home is connected only after you choose to authorize it. Google&apos;s
          flow can process a user identifier to record the OAuth grant and an IP
          address that may indicate approximate location for security and fraud
          prevention. Lady never receives your Google password.
        </p>
        <p>
          To list destinations and create automations, the Google Home APIs process
          authorized structure, room, and device metadata. When you save or test a
          routine, its message, schedule, destination, and operational identifiers
          are sent to Google Home. Google may process security, network, and
          diagnostic information needed to provide the service.
        </p>
        <p>
          Local-network access is used only where the Home APIs require it to
          discover or communicate with compatible devices. Google Home automations
          are stored and executed in the Google Home ecosystem.
        </p>
      </LegalSection>

      <LegalSection id="purposes" title="Why information is used">
        <dl className="legal-facts wide">
          <div><dt>App functionality</dt><dd>Show authorized speakers and create, test, edit, enable, or delete requested routines.</dd></div>
          <div><dt>Authentication</dt><dd>Maintain the Google authorization grant chosen by the adult user.</dd></div>
          <div><dt>Security</dt><dd>Support Google OAuth, Apple App Attest, abuse prevention, and reliable service operation.</dd></div>
          <div><dt>Purchases</dt><dd>Recognize Apple subscription access and restore eligible purchases.</dd></div>
        </dl>
        <p>
          NeuralInt does not use Lady data for third-party advertising or track you
          across other companies&apos; apps and websites.
        </p>
      </LegalSection>

      <LegalSection id="purchases" title="Subscriptions and purchases">
        <p>
          Lady subscriptions are processed by Apple through StoreKit. NeuralInt does
          not receive your payment-card number. Apple may provide product,
          transaction, renewal, expiration, and refund status so Lady can unlock
          paid features and restore a purchase.
        </p>
        <p>
          The planned launch offer is a 14-day free trial followed by an
          auto-renewing subscription. The localized price and renewal terms appear
          in Apple&apos;s purchase sheet before confirmation.
        </p>
      </LegalSection>

      <LegalSection id="children" title="Children and family use">
        <p>
          Lady is designed for parents and guardians, not for children to create
          accounts. An adult controls the connection, wording, timing, and speakers.
          Lady does not activate a microphone or build child profiles.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="Sharing, retention, and deletion">
        <p>
          NeuralInt does not sell Lady personal data. Local routines remain until
          you delete them or uninstall Lady. Google Home automations remain in the
          authorized Google Home account until deleted.
        </p>
        <p>
          To remove both copies, delete the routine in Lady while connected before
          uninstalling, or remove the automation in Google Home afterward. You can
          revoke Lady&apos;s access in Google Account controls. Apple retains purchase
          history under its terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact and policy changes">
        <p>
          Email <a href="mailto:mehrdadz@neuralint.io">mehrdadz@neuralint.io</a> for
          privacy questions. If Lady&apos;s data practices materially change, this
          policy, the binary privacy manifest, and App Store disclosures will be
          updated before the affected version is released.
        </p>
        <AppPageLinks app={ladyApp} />
      </LegalSection>
    </AppLegalPage>
  );
}
