import type { Metadata } from "next";
import { AppLegalPage, AppPageLinks, LegalSection, persianSwipeApp } from "../../../components/AppLegalPage";
export const metadata: Metadata = {title: "Persian Swipe", description: "Persian, in one motion: an offline Persian keyboard with swipe prediction and local correction learning.", alternates: {canonical: "/apps/persian-swipe/review/"}};
export default function Page() { return <AppLegalPage app={persianSwipeApp} eyebrow="Persian Swipe" title="Persian Swipe" lede="Persian, in one motion: an offline Persian keyboard with swipe prediction and local correction learning." updated="September 17, 2026" sections={[{"id": "typing", "label": "Swipe or tap"}, {"id": "learning", "label": "Learns from corrections"}, {"id": "privacy", "label": "Local by design"}, {"id": "availability", "label": "Availability"}]}>
<LegalSection id="typing" title="Swipe or tap"><p>{"Trace a Persian word, lift to insert, and select another candidate when needed. A familiar Persian letter grid includes compact half-space handling and long-press alternate forms."}</p></LegalSection>
<LegalSection id="learning" title="Learns from corrections"><p>{"Delete or edit a wrong swipe, type the intended word, and finish with Space or Return. Similar future swipes can then prefer the corrected word. Personalization runs locally and can be disabled or cleared."}</p></LegalSection>
<LegalSection id="privacy" title="Local by design"><p>{"No account, ads, analytics SDK, servers, or Full Access. The host app explains setup and provides a separate practice keyboard. Recognition accuracy varies by word and gesture."}</p></LegalSection>
<LegalSection id="availability" title="Availability"><p>{"Persian Swipe is a one-time paid App Store download. There are no subscriptions or in-app purchases. Apple displays the current price and availability in each storefront."}</p></LegalSection>
<AppPageLinks app={persianSwipeApp} />
</AppLegalPage>; }
