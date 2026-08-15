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
      updated="August 15, 2026"
      sections={sections}
    >
      <LegalSection id="identity" title="App identity">
        <dl className="legal-facts">
          <div><dt>Listing</dt><dd>Trailhead: Deep Focus</dd></div>
          <div><dt>Apple ID</dt><dd>6798798615</dd></div>
          <div><dt>Bundle ID</dt><dd>com.mehrdad.trailhead</dd></div>
          <div><dt>Sign-in</dt><dd>Not required</dd></div>
          <div><dt>Demo account</dt><dd>Not applicable; Trailhead has no app account system</dd></div>
        </dl>
      </LegalSection>

      <LegalSection id="review-path" title="Representative review path">
        <p><strong>Fresh installation:</strong></p>
        <ol>
          <li>Launch Trailhead. No sign-in or account creation is required.</li>
          <li>Set Focus length to 5 minutes. App selection through Apple&apos;s Family Activity Picker is optional.</li>
          <li>Tap Begin focus hike and let the first free hike complete naturally.</li>
          <li>Return to Focus and tap Begin focus hike again to open the StoreKit purchase screen.</li>
        </ol>
        <p><strong>Returning installation:</strong> If the free completed hike is already recorded, launch Trailhead, open Focus, and tap Begin focus hike to open the purchase screen immediately.</p>
        <LegalCallout>
          The national-park picker and focus simulation do not require an account.
          Screen Time selection is optional; the core timer can be reviewed without
          granting Family Controls access.
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
          Trailhead uses Apple StoreKit and has no developer-operated subscription
          account or backend. Apple&apos;s current-entitlement state is the source of
          truth. An expired subscription is no longer a current entitlement, so
          Trailhead treats it as the free tier; after the free completed hike, the
          same StoreKit purchase screen is presented.
        </p>
        <p>
          The purchase screen offers $4.99 per month and $34.99 per year. For an
          Apple Account that is eligible, StoreKit displays the configured 14-day
          introductory free trial. StoreKit owns the eligibility, offer, price,
          and renewal copy so returning subscribers see only the terms that apply
          to them. Restore Subscription, Terms, and Privacy are available on that
          screen, and subscription management remains accessible from Settings.
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
