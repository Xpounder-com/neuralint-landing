import type { Metadata } from "next";
import { AppLegalPage, AppPageLinks, LegalSection, persianSwipeApp } from "../../../components/AppLegalPage";

export const metadata: Metadata = {
  title: "Persian Swipe · Offline Farsi Keyboard",
  description: "Swipe to write in Persian on iPhone and iPad. Offline typing, half-space, and local learning. One-time purchase. No subscription or Full Access required.",
  alternates: { canonical: "/apps/persian-swipe/review/" },
};
const storeUrl = "https://apps.apple.com/app/apple-store/id6811263515?pt=127399605&ct=ps_website_202611&mt=8";
function DownloadButton() {
  return <a className="button primary swipe-download" href={storeUrl} aria-label="Download Persian Swipe on the App Store">Download on the App Store <span aria-hidden="true">↗</span></a>;
}
export default function Page() {
  return <AppLegalPage app={persianSwipeApp} eyebrow="Persian Swipe · iPhone & iPad" title="Persian, in one motion." lede="Swipe through the letters. Lift to write. An offline Farsi keyboard for everyday messages and your favorite verse." updated="November 8, 2026"
    hero={<div className="swipe-hero">
      <div className="swipe-pitch">
        <p className="swipe-persian" lang="fa" dir="rtl">فارسی را با حرکت انگشت بنویسید.</p>
        <DownloadButton />
        <p className="swipe-purchase">One-time purchase. No subscription.</p>
        <ul className="swipe-benefits"><li>Works offline. No Full Access required.</li><li>Swipe or tap, with نیم‌فاصله and word suggestions.</li><li>Your words and learning stay on your device.</li></ul>
        <a className="swipe-demo-link" href="#swipe-demo">Watch the swipe demo ↓</a>
      </div>
      <figure className="swipe-demo" id="swipe-demo">
        <video controls playsInline loop muted preload="metadata" poster="/projects/persian-swipe/demo-poster.jpg" width="720" height="720" aria-label="Rehearsed Persian swipe typing demonstration">
          <source src="/projects/persian-swipe/swipe-demo.mp4" type="video/mp4" />
          <a href="/projects/persian-swipe/swipe-demo.mp4">Watch the Persian swipe demonstration</a>
        </video>
        <figcaption>Hafez, written with swipes in the app’s practice keyboard. Rehearsed simulator demo with vocabulary learned before capture; recognition varies by word and gesture.</figcaption>
      </figure>
    </div>}
    sections={[{id:"typing",label:"Swipe or tap"},{id:"learning",label:"Learns from corrections"},{id:"privacy",label:"Local by design"},{id:"availability",label:"Get Persian Swipe"}]}>
    <LegalSection id="typing" title="Write with swipes or taps"><p>Trace a Persian word, lift to insert, and select another candidate when needed. Add نیم‌فاصله with the half-space key, or hold Space and slide to move the cursor. Guided setup and a practice keyboard help you get started.</p></LegalSection>
    <LegalSection id="learning" title="Learns from your corrections"><p>Delete or edit a wrong swipe, type the intended word, and finish with Space or Return. Similar future swipes can then prefer the corrected word. Personalization runs locally and can be disabled or cleared.</p></LegalSection>
    <LegalSection id="privacy" title="Your typing stays yours"><p>No account, ads, analytics SDK, servers, or Full Access. Recognition and learning run on your device. Available wherever iOS supports custom keyboards.</p></LegalSection>
    <LegalSection id="availability" title="Make Persian Swipe your keyboard"><p>A one-time paid App Store download for iPhone and iPad, with no subscriptions or in-app purchases. Apple displays the current price and availability for your storefront.</p><DownloadButton /></LegalSection>
    <AppPageLinks app={persianSwipeApp} />
  </AppLegalPage>;
}
