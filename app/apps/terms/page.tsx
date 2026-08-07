import type { Metadata } from "next";
import {
  AppLegalPage,
  LegalCallout,
  LegalSection,
} from "../../components/AppLegalPage";

export const metadata: Metadata = {
  title: "App Terms of Use",
  description: "Terms for Trailhead, Lady, and other NeuralInt consumer apps.",
};

const sections = [
  { id: "agreement", label: "Agreement" },
  { id: "subscriptions", label: "Subscriptions" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "services", label: "Third-party services" },
  { id: "safety", label: "Safety and availability" },
  { id: "warranty", label: "Warranty and liability" },
  { id: "changes", label: "Changes and contact" },
];

export default function AppTermsPage() {
  return (
    <AppLegalPage
      eyebrow="NeuralInt apps · Terms"
      title="Clear terms for useful software."
      lede="These terms apply to Trailhead, Lady, and consumer apps published under the NeuralInt product identity. Apple's licensed application terms also apply to downloads from the App Store."
      updated="August 6, 2026"
      sections={sections}
    >
      <LegalSection id="agreement" title="Agreement and license">
        <p>
          By downloading or using a NeuralInt app, you agree to these terms and
          Apple&apos;s Standard End User License Agreement. NeuralInt grants you a
          limited, personal, non-transferable license to use the app on Apple devices
          associated with your Apple Account, subject to those terms.
        </p>
        <LegalCallout>
          Apple&apos;s Standard EULA is available at
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"> apple.com/legal/internet-services/itunes/dev/stdeula</a>.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="subscriptions" title="Trials and auto-renewing subscriptions">
        <ul>
          <li>The purchase sheet shows the trial duration, price, billing period, and localized terms before confirmation.</li>
          <li>Payment is charged to the Apple Account after the trial unless canceled.</li>
          <li>The subscription renews automatically until canceled in Apple Account settings.</li>
          <li>Cancel at least 24 hours before the end of the current period to avoid the next renewal.</li>
          <li>Deleting an app does not cancel its subscription.</li>
          <li>Refunds, billing recovery, Family Sharing, and eligibility are handled under Apple&apos;s rules.</li>
        </ul>
        <p>
          Introductory-offer eligibility is determined by Apple. NeuralInt apps
          provide Restore Purchases and a route to Apple&apos;s subscription-management
          screen.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" title="Acceptable use">
        <p>
          Do not misuse an app, interfere with its services, attempt unauthorized
          access, reverse engineer except where law permits, or use it to violate
          another person&apos;s rights. Adults using Lady are responsible for the
          content, timing, and appropriateness of household announcements.
        </p>
      </LegalSection>

      <LegalSection id="services" title="Third-party services">
        <p>
          Some features rely on Apple, Google Cast, the National Park Service, or
          device and network providers. Their terms and privacy policies apply to
          their services. NeuralInt does not control their availability, account
          decisions, data accuracy, or platform changes.
        </p>
      </LegalSection>

      <LegalSection id="safety" title="Safety and availability">
        <p>
          Trailhead is a focus simulation, not a navigation, emergency, medical, or
          trail-safety service. Lady is a household reminder tool, not an emergency,
          caregiving, medical, or child-monitoring service. Do not rely on either app
          where failure or delay could cause harm.
        </p>
      </LegalSection>

      <LegalSection id="warranty" title="Warranty and liability">
        <p>
          To the maximum extent permitted by law, apps are provided as available
          without warranties beyond those that cannot legally be excluded. NeuralInt
          is not responsible for indirect or consequential loss, third-party service
          failures, or user-created content. Nothing here limits rights that cannot
          be waived under applicable consumer law.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="Changes and contact">
        <p>
          We may update these terms when products or legal requirements change. The
          date above identifies the current version. Questions can be sent to
          <a href="mailto:mehrdadz@neuralint.io"> mehrdadz@neuralint.io</a>.
        </p>
        <div className="app-page-links">
          <a href="/apps/trailhead/privacy">Trailhead privacy</a>
          <a href="/apps/lady/privacy">Lady privacy</a>
          <a href="/apps">All apps</a>
        </div>
      </LegalSection>
    </AppLegalPage>
  );
}
