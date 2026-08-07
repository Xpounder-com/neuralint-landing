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
  description: "Help with Lady family routines, Cast speakers, reminders, and subscriptions.",
};

const sections = [
  { id: "contact", label: "Contact support" },
  { id: "setup", label: "Choose a speaker" },
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
      lede="Lady needs a compatible Cast speaker on the same Wi-Fi. It does not need a Google Account connection. These checks solve the most common setup issues."
      updated="August 7, 2026"
      sections={sections}
    >
      <LegalSection id="contact" title="Contact support">
        <p>
          Email <a href="mailto:mehrdadz@neuralint.io?subject=Lady%20support">mehrdadz@neuralint.io</a>.
          Include the Lady version, iOS version, iPhone model, and a short
          description. Do not send passwords, private family details,
          or announcement text you consider sensitive.
        </p>
        <LegalCallout>
          Lady never needs your Google password. Speaker discovery uses Apple&apos;s
          Local Network permission and Google&apos;s standard Cast picker.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="setup" title="Choose a speaker">
        <ol>
          <li>Connect the iPhone and speaker to the same Wi-Fi network.</li>
          <li>Tap the Cast symbol in Lady.</li>
          <li>Allow Local Network access and choose the receiver you want.</li>
        </ol>
        <p>
          Lady uses Google&apos;s Default Media Receiver. No Google sign-in or custom
          receiver registration is required.
        </p>
      </LegalSection>

      <LegalSection id="speakers" title="No speakers appear">
        <p>
          Confirm both devices are on the same non-guest Wi-Fi and the speaker
          supports Google Cast. If Local Network access was denied, open iPhone
          Settings → Privacy &amp; Security → Local Network and enable Lady.
        </p>
      </LegalSection>

      <LegalSection id="schedules" title="A scheduled reminder is missing">
        <p>
          Open iPhone Settings → Notifications → Lady and enable notifications.
          Lady schedules an iPhone reminder; it cannot begin a new Cast session
          unattended while the app is closed. iOS allows up to 64 pending Lady
          reminders, so pause a routine or select fewer days if you reach that limit.
        </p>
      </LegalSection>

      <LegalSection id="announcements" title="A reminder does not play">
        <p>
          Keep Lady open, confirm the Cast symbol shows an active connection, turn
          up the speaker, and tap Play This Announcement again. If the speaker is on
          an isolated guest network, move both devices to the same regular Wi-Fi.
        </p>
      </LegalSection>

      <LegalSection id="deletion" title="Delete a routine">
        <p>
          Delete the routine in Lady to remove its local data and scheduled
          notifications. Lady does not create a cloud automation or leave a copy in
          a Google Home account.
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
