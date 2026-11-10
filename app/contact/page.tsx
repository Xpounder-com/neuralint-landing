import { AppLegalPage, LegalSection } from "../components/AppLegalPage";
export const metadata = {
  title: "Contact NeuralInt — App Support & Product Inquiries",
  description: "Contact Neural Intelligence Labs for Persian Ink, Persian Swipe, Trailhead, Lady, and LinkedFull support, or research and product collaboration.",
  alternates: { canonical: "/contact/" },
};
export default function Page() {
  return <AppLegalPage eyebrow="Contact NeuralInt" title="Talk to the people who build it."
    lede="For app support, product questions, or research collaboration, email mehrdadz@neuralint.io."
    updated="November 10, 2026" sections={[{ id: "support", label: "App support" }, { id: "collaboration", label: "Research and products" }, { id: "privacy", label: "Privacy questions" }]}>
    <LegalSection id="support" title="Help with an app"><p>Email <a href="mailto:mehrdadz@neuralint.io">mehrdadz@neuralint.io</a> with the app name, device and operating-system version, and the steps that led to the problem. The <a href="/apps/">app directory</a> links to setup instructions, compatibility information, and purchase details. Apple manages App Store payments and subscriptions; the relevant app page explains which features are included in a download and which require a separate purchase.</p></LegalSection>
    <LegalSection id="collaboration" title="Research and product inquiries"><p>Use the same email for questions about NeuralInt&apos;s AI agent environments, verification workflows, or product work. Describe the system or workflow you have in mind so the conversation can start with the actual problem. The <a href="/about/">About page</a> and <a href="/">research portfolio</a> provide context on the lab&apos;s current focus.</p></LegalSection>
    <LegalSection id="privacy" title="Questions about data"><p>The <a href="/privacy/">website privacy page</a> explains this site. Individual apps have separate data flows and policies linked from their product pages. Include the app name when asking about an app&apos;s permissions or data handling.</p></LegalSection>
  </AppLegalPage>;
}
