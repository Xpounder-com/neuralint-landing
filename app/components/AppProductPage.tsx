import { AppLegalPage, AppPageLinks, LegalSection } from "./AppLegalPage";
import StructuredData from "./StructuredData";
import { type AppInfo, productStructuredData } from "../content/apps";

export default function AppProductPage({ app }: { app: AppInfo }) {
  return <>
    <StructuredData data={productStructuredData(app)} />
    <AppLegalPage app={app} eyebrow={"NeuralInt apps · " + app.accentLabel}
      title={app.listingName} lede={app.description} updated="November 10, 2026"
      hero={<div className="app-product-intro">
        {/* App artwork from Apple's verified public listing. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={app.image} width="112" height="112" alt={app.name + " app icon"} />
        <div><a className="button primary" href={app.storeUrl}>Download {app.name} on the App Store <span aria-hidden="true">↗</span></a><p>{app.pricing}</p></div>
      </div>}
      sections={[{ id: "features", label: "What it does" }, { id: "getting-started", label: "Getting started" }, { id: "requirements", label: "Requirements" }, { id: "questions", label: "Common questions" }]}>
      <LegalSection id="features" title={"What you can do with " + app.name}><ul>{app.features.map(feature => <li key={feature}>{feature}</li>)}</ul></LegalSection>
      <LegalSection id="getting-started" title="Getting started"><ol>{app.steps.map(step => <li key={step}>{step}</li>)}</ol></LegalSection>
      <LegalSection id="requirements" title="Requirements and availability"><p>{app.requirements}</p><p>{app.pricing}</p></LegalSection>
      <LegalSection id="questions" title="Common questions">{app.questions.map(item => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</LegalSection>
      {app.hasLocalPolicies ? <AppPageLinks app={app} /> : <p>See the <a href={app.storeUrl}>LinkedFull App Store listing</a> for developer information, privacy details, and current availability.</p>}
    </AppLegalPage>
  </>;
}
