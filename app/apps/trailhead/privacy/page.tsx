import type { Metadata } from "next";
import {
  AppLegalPage,
  AppPageLinks,
  LegalCallout,
  LegalSection,
  trailheadApp,
} from "../../../components/AppLegalPage";

export const metadata: Metadata = {
  title: "Trailhead Privacy Policy",
  description: "How Trailhead handles focus, Screen Time, trail, and purchase data.",
};

const sections = [
  { id: "summary", label: "Summary" },
  { id: "screen-time", label: "Screen Time" },
  { id: "device-data", label: "Data on your device" },
  { id: "services", label: "External services" },
  { id: "purchases", label: "Purchases" },
  { id: "retention", label: "Retention and deletion" },
  { id: "children", label: "Children" },
  { id: "contact", label: "Contact and changes" },
];

export default function TrailheadPrivacyPage() {
  return (
    <AppLegalPage
      app={trailheadApp}
      eyebrow="Trailhead · Privacy"
      title="Your focus stays yours."
      lede="Trailhead is built as a local-first focus tool. NeuralInt does not operate a Trailhead account system, advertising network, or developer analytics service in the current version."
      updated="August 6, 2026"
      sections={sections}
    >
      <LegalSection id="summary" title="Summary">
        <p>
          Trailhead stores focus sessions, preferences, achievements, and trail
          cache data on your iPhone. NeuralInt does not receive your task text,
          Screen Time selections, focus history, or precise location.
        </p>
        <LegalCallout>
          <strong>Data controller.</strong> Neural Intelligence Labs, operating
          publicly as NeuralInt, is responsible for this policy. Contact
          <a href="mailto:mehrdadz@neuralint.io"> mehrdadz@neuralint.io</a>.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="screen-time" title="Screen Time permissions">
        <p>
          If you grant access, Trailhead uses Apple Family Controls, Managed
          Settings, and Device Activity to shield apps and website categories you
          select during a focus session. Apple provides privacy-preserving tokens;
          Trailhead does not receive a readable list of the apps or websites you
          choose.
        </p>
        <p>
          Shielding is voluntary. You can change the selection, revoke permission,
          or end a session at any time.
        </p>
      </LegalSection>

      <LegalSection id="device-data" title="Data stored on your device">
        <ul>
          <li>Task text, duration, pause state, and focus progress</li>
          <li>Selected trail, park, soundscape, achievements, and streaks</li>
          <li>Cached public trail catalogs</li>
          <li>Subscription entitlement state supplied by Apple</li>
        </ul>
        <p>
          An active session is shared only with Trailhead&apos;s own extensions through
          an Apple App Group so Screen Time shielding and Lock Screen progress can
          continue. The Lock Screen Live Activity can show the trail, park, timing,
          and progress you selected.
        </p>
      </LegalSection>

      <LegalSection id="services" title="External services">
        <h3>National Park Service</h3>
        <p>
          When a park is first loaded, Trailhead requests public trail information
          from a National Park Service ArcGIS service. That service may receive
          ordinary network information such as an IP address. Trailhead does not
          add your task, Screen Time tokens, advertising identifier, or precise
          location to the request.
        </p>
        <h3>Apple platform services</h3>
        <p>
          Apple operates Screen Time, notifications, Live Activities, and App Store
          purchasing under Apple&apos;s privacy terms. Nature audio ships with the app;
          colored noise is generated on the device.
        </p>
      </LegalSection>

      <LegalSection id="purchases" title="Subscriptions and purchases">
        <p>
          Trailhead subscriptions are processed by Apple through StoreKit. NeuralInt
          does not receive your payment-card number. Apple may provide the app with
          product, transaction, renewal, expiration, and refund status so Trailhead
          can unlock paid features and restore a purchase.
        </p>
        <p>
          The planned launch offer is a 14-day free trial followed by an
          auto-renewing subscription. The exact localized price and renewal terms
          appear in Apple&apos;s purchase sheet before confirmation.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="Retention, sharing, and deletion">
        <p>
          NeuralInt does not sell Trailhead personal data. Local data remains until
          you clear it, uninstall Trailhead, or iOS removes its storage. App Group
          data may remain while a related Trailhead extension is installed. Cached
          trail data can be downloaded again from the public service.
        </p>
        <p>
          Apple retains purchase history under its terms. You can manage or cancel
          a subscription in your Apple Account subscription settings.
        </p>
      </LegalSection>

      <LegalSection id="children" title="Children">
        <p>
          Trailhead is not directed to children under 13 and NeuralInt does not
          knowingly collect personal information from children through Trailhead.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact and policy changes">
        <p>
          Email <a href="mailto:mehrdadz@neuralint.io">mehrdadz@neuralint.io</a> for
          privacy questions. If Trailhead&apos;s data practices materially change, this
          policy and the app&apos;s disclosures will be updated before the affected
          version is released.
        </p>
        <AppPageLinks app={trailheadApp} />
      </LegalSection>
    </AppLegalPage>
  );
}
