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
  description: "How Lady handles local family routines, Cast playback, notifications, and purchases.",
};

const sections = [
  { id: "summary", label: "Summary" },
  { id: "information", label: "Information handled" },
  { id: "cast", label: "Cast and local network" },
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
      lede="Lady helps an adult save family prompts, receive scheduled iPhone reminders, and play spoken announcements on a nearby Cast speaker. It does not listen to the household, record people, or create child profiles."
      updated="August 7, 2026"
      sections={sections}
    >
      <LegalSection id="summary" title="Summary">
        <p>
          Lady stores your routine library on your iPhone. When you explicitly
          press Play This Announcement, the iPhone generates temporary speech and
          shares it only with the Cast receiver you selected on the local network.
          NeuralInt does not operate a Lady account system, advertising network, or
          developer analytics service in the current version.
        </p>
        <LegalCallout>
          <strong>Data controller.</strong> Neural Intelligence Labs, operating
          publicly as NeuralInt, is responsible for this policy. Google separately
          processes information handled by its Cast SDK under its own terms.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="information" title="Information Lady handles">
        <ul>
          <li>Routine name, spoken message, type, days, time, and enabled state</li>
          <li>The selected Cast receiver&apos;s local address while an announcement is loading</li>
          <li>Local notification authorization and pending reminder requests</li>
          <li>Apple subscription product and entitlement status</li>
        </ul>
        <p>
          Lady does not ask for a child&apos;s name, birth date, contacts, photos, voice
          recording, school, or precise location. Parents should avoid placing
          sensitive personal information in announcement text.
        </p>
      </LegalSection>

      <LegalSection id="cast" title="Cast speakers and the local network">
        <p>
          Lady does not require a Google Account or receive a Google password. The
          standard Google Cast picker searches for compatible receivers only after
          you tap the Cast symbol and allow iOS Local Network access.
        </p>
        <p>
          After you select a receiver and press Play This Announcement, Lady creates
          speech on the iPhone. For no more than 90 seconds, the audio is available
          at a random local URL. Requests from devices other than the selected
          receiver are rejected. The temporary audio and URL are then discarded.
        </p>
        <p>
          Google&apos;s Cast SDK can process an unlinked device identifier,
          product-interaction information, and diagnostic data for app functionality
          and analytics under Google&apos;s terms. Lady disables optional Cast analytics
          logging. NeuralInt does not receive routine text, generated audio, or Cast
          device names.
        </p>
      </LegalSection>

      <LegalSection id="purposes" title="Why information is used">
        <dl className="legal-facts wide">
          <div><dt>App functionality</dt><dd>Save, edit, pause, and delete routines and generate requested speech on the iPhone.</dd></div>
          <div><dt>Local notifications</dt><dd>Remind the adult at the days and times they chose.</dd></div>
          <div><dt>Local network</dt><dd>Find a user-selected Cast receiver and deliver one temporary announcement.</dd></div>
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
          accounts. An adult controls the wording, timing, and selected speaker.
          Lady does not activate a microphone or build child profiles.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="Sharing, retention, and deletion">
        <p>
          NeuralInt does not sell Lady personal data. Local routines remain until
          you delete them or uninstall Lady. Pending reminders are removed when you
          pause or delete a routine. Temporary announcement audio is retained only
          long enough for the selected receiver to load it.
        </p>
        <p>
          Uninstalling Lady removes its local routines and notifications. Apple
          retains purchase history under its terms. Google controls any Cast SDK
          diagnostics it processes under its own privacy terms.
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
