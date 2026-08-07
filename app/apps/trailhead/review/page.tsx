import type { Metadata } from "next";
import {
  AppLegalPage,
  AppPageLinks,
  LegalCallout,
  LegalSection,
  trailheadApp,
} from "../../../components/AppLegalPage";

export const metadata: Metadata = {
  title: "Trailhead App Review Guide",
  description: "A reproducible App Review path for Trailhead permissions, focus sessions, and Live Activities.",
};

const sections = [
  { id: "identity", label: "App identity" },
  { id: "review-path", label: "Review path" },
  { id: "permissions", label: "Permission use" },
  { id: "subscription", label: "Subscription" },
  { id: "network", label: "Network behavior" },
  { id: "contact", label: "Review contact" },
];

export default function TrailheadReviewPage() {
  return (
    <AppLegalPage
      app={trailheadApp}
      eyebrow="Trailhead · App Review"
      title="A clear path through the app."
      lede="This public guide explains Trailhead's review path and platform permissions. Confidential reviewer contact details remain in App Store Connect."
      updated="August 6, 2026"
      sections={sections}
    >
      <LegalSection id="identity" title="App identity">
        <dl className="legal-facts">
          <div><dt>Listing</dt><dd>Trailhead: Deep Focus</dd></div>
          <div><dt>Apple ID</dt><dd>6798798615</dd></div>
          <div><dt>Bundle ID</dt><dd>com.mehrdad.trailhead</dd></div>
          <div><dt>Sign-in</dt><dd>Not required</dd></div>
        </dl>
      </LegalSection>

      <LegalSection id="review-path" title="Representative review path">
        <ol>
          <li>Launch Trailhead and continue through Apple&apos;s Screen Time request.</li>
          <li>Choose apps or categories in the Family Activity Picker.</li>
          <li>Enter any task, choose a focus length, trail, and soundscape.</li>
          <li>Tap Begin focus hike and confirm the route begins moving.</li>
          <li>Lock the iPhone to inspect percentage, route, and moving-hiker progress.</li>
          <li>Unlock and end the session; selected shields are removed.</li>
        </ol>
        <LegalCallout>
          The national-park picker and focus simulation do not require an account.
          Screen Time selection is optional; the core timer can still be reviewed.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="permissions" title="Why each permission exists">
        <dl className="legal-facts wide">
          <div><dt>Family Controls</dt><dd>Voluntarily shield user-selected distractions during an active session.</dd></div>
          <div><dt>Device Activity</dt><dd>End shielding reliably when the scheduled focus interval completes.</dd></div>
          <div><dt>Live Activities</dt><dd>Show focus timing and simulated trail progress on the Lock Screen.</dd></div>
          <div><dt>Notifications</dt><dd>Tell the user when the destination is reached.</dd></div>
          <div><dt>Background audio</dt><dd>Continue the chosen soundscape while the iPhone is locked.</dd></div>
        </dl>
      </LegalSection>

      <LegalSection id="subscription" title="Subscription review">
        <p>
          Trailhead uses Apple StoreKit. The launch plan is $4.99 per month with a
          14-day introductory free trial, plus a discounted annual option. The
          purchase screen states trial duration, renewal price, auto-renewal, and
          cancellation terms before confirmation. Restore Purchases and Manage
          Subscription remain accessible from the paywall/settings surface.
        </p>
      </LegalSection>

      <LegalSection id="network" title="Network behavior">
        <p>
          First-time trail loads request public data from the National Park Service
          ArcGIS endpoint and are cached. No task, Screen Time selection, precise
          location, or advertising identifier is added to that request.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Review contact">
        <p>
          App Review can use the contact information saved with the version in App
          Store Connect. General support is available at
          <a href="mailto:mehrdadz@neuralint.io"> mehrdadz@neuralint.io</a>.
        </p>
        <AppPageLinks app={trailheadApp} />
      </LegalSection>
    </AppLegalPage>
  );
}
