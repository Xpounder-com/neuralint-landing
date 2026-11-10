import { getApp } from "../content/apps";
import { AppLegalPage, LegalSection } from "../components/AppLegalPage";
export const metadata = {
  title: "About NeuralInt — Apps & AI Agent Research",
  description: "Neural Intelligence Labs is the research lab and product studio led by Mehrdad Zaker, building focused apps and environments for reliable AI agents.",
  alternates: { canonical: "/about/" },
};
export default function Page() {
  return <AppLegalPage eyebrow="About NeuralInt" title="Useful systems, carefully built."
    lede="Neural Intelligence Labs brings AI agent research and focused everyday software under one roof. Mehrdad Zaker leads the lab and product studio."
    updated="November 10, 2026" sections={[{ id: "apps", label: "Our apps" }, { id: "research", label: "Our research" }, { id: "people", label: "People and contact" }]}>
    <LegalSection id="apps" title="Software for everyday use"><p>Our app family includes Persian Ink for Apple Pencil handwriting, Persian Swipe for Farsi typing, Trailhead for focused work, Lady for family routines, and LinkedFull for fashion discovery. Each product has its own requirements, purchase terms, and privacy information. The <a href="/apps/">app directory</a> links to product details and verified installation destinations.{!getApp("persian-ink").available && " Persian Ink remains pending public App Store release."}</p></LegalSection>
    <LegalSection id="research" title="Environments for agents that learn by doing"><p>Our research explores reinforcement learning environments, planning, verification, and recovery for agents working with software repositories, terminals, and web workflows. The <a href="/#portfolio">maker portfolio</a> distinguishes products, prototypes, and research builds rather than treating every experiment as a shipped service.</p></LegalSection>
    <LegalSection id="people" title="People and contact"><p>Read <a href="/people/mehrdad/">Mehrdad Zaker&apos;s profile</a> for the work behind the lab. For app support or research and product inquiries, use the <a href="/contact/">NeuralInt contact page</a>.</p></LegalSection>
  </AppLegalPage>;
}
