import type { Metadata } from "next";
import {
  AppLegalPage,
  AppPageLinks,
  ladyApp,
  LegalCallout,
  LegalSection,
} from "../../../components/AppLegalPage";

export const metadata: Metadata = {
  title: "Lady Support",
  description: "Help with Lady family routines, Google Home speakers, schedules, and subscriptions.",
};

const sections = [
  { id: "contact", label: "Contact support" },
  { id: "connect", label: "Connect Google Home" },
  { id: "speakers", label: "Speakers" },
  { id: "schedules", label: "Schedules" },
  { id: "announcements", label: "Announcements" },
  { id: "deletion", label: "Delete routines" },
  { id: "billing", label: "Billing" },
];

export default function LadySupportPage() {
  return (
    <AppLegalPage
      app={ladyApp}
      eyebrow="Lady · Support"
      title="Less repeating. More rhythm."
      lede="Lady depends on an adult Google Account, an authorized Home, and a compatible speaker. These checks solve the most common setup issues."
      updated="August 6, 2026"
      sections={sections}
    >
      <LegalSection id="contact" title="Contact support">
        <p>
          Email <a href="mailto:mehrdadz@neuralint.io?subject=Lady%20support">mehrdadz@neuralint.io</a>.
          Include the Lady version, iOS version, iPhone model, and a short
          description. Do not send passwords, OAuth codes, private family details,
          or announcement text you consider sensitive.
        </p>
        <LegalCallout>
          Lady never needs your Google password. Authorization happens only inside
          Google&apos;s own sign-in and Home permission flow.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="connect" title="Google Home will not connect">
        <ol>
          <li>Confirm the iPhone is signed into the Google Account that manages the Home.</li>
          <li>Open Google Home and verify the Home is available.</li>
          <li>Return to Lady, connect again, and grant the intended structure.</li>
        </ol>
        <p>
          Google Home APIs require a physical iPhone and Apple App Attest. They do
          not provide a complete simulator-only connection flow.
        </p>
      </LegalSection>

      <LegalSection id="speakers" title="No speakers appear">
        <p>
          Confirm the speaker is online, belongs to the granted Home, and supports
          Google Assistant broadcasts. If the device moved rooms or Homes, reconnect
          so Lady can refresh the authorized structure and device list.
        </p>
      </LegalSection>

      <LegalSection id="schedules" title="A schedule is rejected">
        <p>
          Add a street address to the Home in the Google Home app, then confirm the
          selected days and time. Google Home&apos;s recurring clock automations require
          a properly configured structure.
        </p>
      </LegalSection>

      <LegalSection id="announcements" title="A reminder does not play">
        <p>
          Use Test now, confirm the destination speaker is online and audible, and
          verify the routine is enabled. Check the automation in Google Home if the
          schedule exists but execution does not occur.
        </p>
      </LegalSection>

      <LegalSection id="deletion" title="Delete a routine completely">
        <p>
          Delete the routine in Lady while connected so the app can remove its Google
          Home automation. If Lady was already uninstalled or access was revoked,
          remove the automation directly in Google Home. Uninstalling an app does
          not automatically delete cloud automations.
        </p>
      </LegalSection>

      <LegalSection id="billing" title="Trial, subscription, and restore">
        <p>
          Apple handles payment and cancellation. Use Restore Purchases in Lady if
          an active subscription is not recognized. To manage or cancel, open iPhone
          Settings → your name → Subscriptions. Cancel at least 24 hours before
          renewal if you do not want the next period to begin.
        </p>
        <AppPageLinks app={ladyApp} />
      </LegalSection>
    </AppLegalPage>
  );
}
