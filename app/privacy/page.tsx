import { AppLegalPage, LegalSection } from "../components/AppLegalPage";
export const metadata = {
  title: "NeuralInt Website Privacy",
  description: "How the NeuralInt website handles theme preferences, hosting requests, contact email, and links to separate app privacy policies.",
  alternates: { canonical: "/privacy/" },
};
export default function Page() {
  return <AppLegalPage eyebrow="Website privacy" title="A straightforward public website."
    lede="This policy covers neuralint.io. The apps have separate privacy policies because their permissions, services, and data handling differ."
    updated="November 10, 2026" sections={[{ id: "browsing", label: "Browsing the site" }, { id: "contact", label: "Email and external links" }, { id: "apps", label: "App policies" }]}>
    <LegalSection id="browsing" title="Browsing and appearance preferences"><p>The website publishes static pages through GitHub Pages. It does not include a developer-operated visitor account, advertising tracker, or analytics SDK. Choosing a light or dark theme stores that preference in your browser&apos;s local storage under the key nil-theme; clearing site data removes it. Fonts, images, and the Persian Swipe demo video are served with the site rather than loaded from a third-party media widget.</p><p>The hosting provider processes ordinary web requests to serve and secure the site. This can include technical request information such as an IP address and browser details. See <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub&apos;s privacy statement</a> for its handling of hosting data.</p></LegalSection>
    <LegalSection id="contact" title="Email and external destinations"><p>A contact link opens your email application. If you email us, the contents and sender information you provide are used to respond to that inquiry. App Store, GitHub, personal-site, and other external links lead to services with their own privacy practices; following those links is separate from browsing this website.</p></LegalSection>
    <LegalSection id="apps" title="Read the policy for the app you use"><p>Visit the <a href="/apps/">NeuralInt app directory</a> for the privacy and support information specific to each product. Website privacy does not replace an app&apos;s policy or Apple&apos;s App Privacy disclosures. Questions about this page can be sent to <a href="mailto:mehrdadz@neuralint.io">mehrdadz@neuralint.io</a>.</p></LegalSection>
  </AppLegalPage>;
}
