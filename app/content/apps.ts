import type { Metadata } from "next";
import { persianInkRelease } from "../apps/persian-ink/release";

export const siteOrigin = "https://neuralint.io";
export type AppSlug = "persian-ink" | "persian-swipe" | "trailhead" | "lady" | "linkedfull";
export type AppInfo = {
  slug: AppSlug;
  name: string;
  listingName: string;
  accentLabel: string;
  description: string;
  category: string;
  operatingSystem: string;
  image: string;
  storeUrl: string;
  available: boolean;
  price: number;
  pricing: string;
  requirements: string;
  features: string[];
  steps: string[];
  questions: { question: string; answer: string }[];
  hasLocalPolicies: boolean;
};

// Public facts checked against Apple's US listings; Persian app icons and Ink availability updated November 11, 2026.
// Persian Ink availability follows the same gate as its visible download button.
export const apps: AppInfo[] = [
  {
    slug: "persian-ink", name: "Persian Ink", listingName: "Persian Ink",
    accentLabel: "Your handwriting. Persian text.",
    description: "An offline Persian handwriting keyboard for iPad. Write Farsi with Apple Pencil, review recognition candidates, and insert text into Notes or another supported app.",
    category: "UtilitiesApplication", operatingSystem: "iPadOS 16.0 or later",
    image: "/apps/persian-ink/app-icon-calligraphy.jpg", storeUrl: persianInkRelease.appStoreUrl,
    available: persianInkRelease.publicDownloadAvailable, price: 1.99,
    pricing: persianInkRelease.publicDownloadAvailable ? "US$1.99, one-time purchase. No subscription. Local App Store prices may vary." : "US$1.99, one-time purchase. No subscription. Public download is pending App Store approval and release.",
    requirements: "An iPad, a compatible Apple Pencil, and a one-time online model download. Recognition then works offline with Allow Full Access off. Protected text fields and apps that disable third-party keyboards are not supported.",
    features: ["Apple Pencil handwriting in the keyboard panel", "On-device Persian handwriting recognition after model setup", "Review candidates before inserting text", "Persian and English character keys, numbers, and نیم‌فاصله"],
    steps: ["Install the app and enable its keyboard.", "Temporarily allow Full Access and download the Persian model online.", "Turn Full Access off, write in the keyboard panel, recognize, and select a candidate."],
    questions: [], hasLocalPolicies: true,
  },
  {
    slug: "persian-swipe", name: "Persian Swipe", listingName: "Persian Swipe",
    accentLabel: "Persian, in one motion",
    description: "An offline Persian and Farsi swipe keyboard for iPhone and iPad, with tap typing, نیم‌فاصله, word suggestions, and learning from your corrections. No Full Access required.",
    category: "UtilitiesApplication", operatingSystem: "iOS 16.0 or later",
    image: "/apps/persian-swipe/app-icon-calligraphy.jpg",
    storeUrl: "https://apps.apple.com/us/app/persian-swipe/id6811263515",
    available: true, price: 1.99,
    pricing: "US$1.99, one-time purchase. No subscriptions or in-app purchases. Local App Store prices may vary.",
    requirements: "iOS 16 or later on a compatible iPhone or iPad. Available where iOS permits third-party keyboards; password fields and apps that disable them use Apple's keyboard.",
    features: ["Swipe or tap to write Persian", "Half-space, word suggestions, and a sliding spacebar cursor", "On-device learning from words and corrections", "Guided setup and a practice keyboard"],
    steps: ["Install Persian Swipe and follow its keyboard setup.", "Select Persian Swipe with the globe key in a supported text field.", "Trace a word and lift to insert it, or type with taps."],
    questions: [], hasLocalPolicies: true,
  },
  {
    slug: "trailhead", name: "Trailhead", listingName: "Trailhead: Deep Focus",
    accentLabel: "Focus with a destination",
    description: "A focus timer for iPhone that turns completed work sessions into a simulated national-park hike, with optional Screen Time distraction blocking, soundscapes, and Lock Screen Live Activities.",
    category: "ProductivityApplication", operatingSystem: "iOS 17.0 or later",
    image: "/apps/trailhead/app-icon.jpg",
    storeUrl: "https://apps.apple.com/us/app/trailhead-deep-focus/id6798798615",
    available: true, price: 0,
    pricing: "Free to download, explore trails, and complete a first focus hike. Further hikes require Trailhead Plus: US$4.99/month or US$34.99/year. Eligible subscribers can receive a 14-day introductory trial. Local prices and eligibility are shown by Apple.",
    requirements: "iOS 17 or later on a compatible device. Screen Time access is optional. An internet connection loads public trail data, which is cached for return visits. This is a simulated focus journey, not a navigation or trail-safety app.",
    features: ["A focus timer with progress saved across sessions", "National-park trails and a simulated hiking destination", "Optional shielding of distracting apps with Apple's Screen Time controls", "Soundscapes and Lock Screen Live Activities"],
    steps: ["Choose an intention, focus duration, national park, and trail.", "Optionally select distracting apps to shield and a soundscape.", "Begin a focus hike and build trail progress by completing work sessions."],
    questions: [
      { question: "Is Trailhead a hiking navigation app?", answer: "No. Trailhead represents your focused work as a simulated hike. Use official park guidance for real-world navigation and trail conditions." },
      { question: "Do I have to allow Screen Time access?", answer: "No. The focus timer can run without it. Screen Time access enables optional shielding of the distracting apps you choose." },
      { question: "What can I use for free?", answer: "You can explore the parks and trails, preview soundscapes, configure Screen Time, and complete your first focus hike. Starting further hikes requires Trailhead Plus." },
    ], hasLocalPolicies: true,
  },
  {
    slug: "lady", name: "Lady", listingName: "Lady: Family Routines",
    accentLabel: "Family, on cue",
    description: "A family routine and reminder app for parents. Write your own announcements, schedule iPhone reminders, and tap to play speech on a compatible Google, Nest, or Cast-enabled speaker.",
    category: "LifestyleApplication", operatingSystem: "iOS 17.0 or later",
    image: "/apps/lady/app-icon.jpg",
    storeUrl: "https://apps.apple.com/us/app/lady-family-routines/id6798800587",
    available: true, price: 0,
    pricing: "Free to download and use one complete routine. Additional routines require Lady Plus: US$4.99/month or US$34.99/year, with a 14-day trial and Family Sharing. Apple displays applicable local prices and trial terms.",
    requirements: "iOS 17 or later. Speaker playback requires a compatible Google, Nest, or Cast receiver on the same Wi-Fi and Local Network permission. Scheduled reminders prompt the parent to open Lady and tap Play; announcements do not start unattended while the app is closed.",
    features: ["Templates for mornings, homework, dinner, chores, and bedtime", "Your own message, weekdays, and reminder time", "One-tap announcements on a compatible Cast speaker", "Local routine storage with no microphone recording"],
    steps: ["Choose a routine template or write your own family message.", "Set the days and reminder time, then select a compatible speaker.", "When reminded, open Lady and tap Play This Announcement."],
    questions: [
      { question: "Will Lady announce a routine automatically while closed?", answer: "No. Lady sends the scheduled iPhone reminder. Open the app and tap Play This Announcement to start speaker playback." },
      { question: "Does Lady listen to my family?", answer: "No. Lady generates speech from the words the parent enters. It does not activate a microphone or record the household." },
      { question: "Which speakers work?", answer: "A compatible Google, Nest, or other Cast-enabled receiver on the same Wi-Fi. Local Network access is needed to discover and play to the chosen receiver." },
    ], hasLocalPolicies: true,
  },
  {
    slug: "linkedfull", name: "LinkedFull", listingName: "LinkedFull",
    accentLabel: "From inspiration to style",
    description: "An AI fashion discovery app for iPhone. Search for clothing with a description or reference photo, explore products across stores, and preview styles with virtual try-on.",
    category: "ShoppingApplication", operatingSystem: "iOS 13.0 or later",
    image: "/apps/linkedfull/app-icon.jpg",
    storeUrl: "https://apps.apple.com/us/app/linkedfull/id6737245343",
    available: true, price: 0,
    pricing: "Free to download from the App Store. Check Apple's listing and the app for current availability and any purchase terms.",
    requirements: "iOS 13 or later on a compatible device. Search, product availability, and virtual try-on use online services. A virtual preview does not establish a garment's physical fit.",
    features: ["Fashion search from text or a reference photo", "Product discovery across multiple online stores", "Virtual try-on using a photo you provide", "Personalized fashion recommendations"],
    steps: ["Describe a style or choose a reference photo.", "Explore matching products across stores.", "Use virtual try-on where available and check the retailer's item and sizing details before buying."],
    questions: [
      { question: "Can I search with a photo?", answer: "Yes. LinkedFull accepts visual inspiration as well as a written description to help find clothing across online stores." },
      { question: "Does virtual try-on guarantee fit?", answer: "No. It is a visual preview. Check the retailer's measurements, size information, and return terms before purchasing." },
    ], hasLocalPolicies: false,
  },
];

export function getApp(slug: AppSlug): AppInfo {
  return apps.find(app => app.slug === slug)!;
}

export function appUrl(app: AppInfo) {
  return siteOrigin + "/apps/" + app.slug + "/";
}

export function appMetadata(app: AppInfo): Metadata {
  const titles: Record<AppSlug, string> = {
    "persian-ink": "Persian Ink — Offline Persian Handwriting Keyboard",
    "persian-swipe": "Persian Swipe — Offline Farsi Keyboard for iPhone & iPad",
    trailhead: "Trailhead — Focus Timer & Screen Time App Blocker",
    lady: "Lady — Family Routine Reminders & Speaker Announcements",
    linkedfull: "LinkedFull — AI Fashion Search & Virtual Try-On",
  };
  const title = titles[app.slug];
  return {
    title: { absolute: title + " | NeuralInt" }, description: app.description, alternates: { canonical: appUrl(app) },
    openGraph: { title, description: app.description, url: appUrl(app), type: "website", images: [{ url: app.image, alt: app.name + " app icon" }] },
    twitter: { card: "summary", title, description: app.description, images: [app.image] },
  };
}

export function productStructuredData(app: AppInfo) {
  const url = appUrl(app);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MobileApplication", "@id": url + "#app", name: app.listingName,
        url, description: app.description, applicationCategory: app.category,
        operatingSystem: app.operatingSystem, image: siteOrigin + app.image,
        featureList: app.features, publisher: { "@id": siteOrigin + "/#organization" },
        ...(app.available ? { installUrl: app.storeUrl, offers: { "@type": "Offer", price: app.price, priceCurrency: "USD", url: app.storeUrl } } : {}),
      },
      {
        "@type": "BreadcrumbList", "@id": url + "#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "NeuralInt", item: siteOrigin + "/" },
          { "@type": "ListItem", position: 2, name: "Apps", item: siteOrigin + "/apps/" },
          { "@type": "ListItem", position: 3, name: app.name, item: url },
        ],
      },
    ],
  };
}
