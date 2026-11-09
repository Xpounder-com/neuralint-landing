import type { Metadata } from "next";
import PersianInkLanding from "./PersianInkLanding";

export const metadata: Metadata = {
  title: "Persian Ink — Your Handwriting. Persian Text.",
  description: "A Persian handwriting keyboard for iPad. Write with Apple Pencil, review the words and insert them in Notes or another supported app. Offline after setup. US$1.99 once.",
  alternates: { canonical: "/apps/persian-ink/" },
  openGraph: {
    title: "Persian Ink — Your handwriting. Persian text.",
    description: "Write with Apple Pencil. Bring Persian to your everyday apps. Offline after a one-time model download.",
    url: "https://neuralint.io/apps/persian-ink/",
    images: [{ url: "/apps/persian-ink/app-icon.png", width: 1024, height: 1024, alt: "Persian Ink app icon" }],
  },
};

export default function PersianInkPage() {
  return <PersianInkLanding />;
}
