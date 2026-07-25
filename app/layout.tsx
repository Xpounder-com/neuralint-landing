import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.neuralint.io"),
  title: {
    default: "Research · Neural Intelligence Labs",
    template: "%s · Neural Intelligence Labs",
  },
  description:
    "Research and maker portfolio spanning agent systems, software repair, document operations, reinforcement-learning environments, and consumer apps.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Research · Neural Intelligence Labs",
    description:
      "Building environments and systems for agents that learn, reason, and act reliably.",
    type: "website",
    siteName: "Neural Intelligence Labs",
    images: [
      {
        url: "/og.webp",
        width: 1731,
        height: 909,
        alt: "Environments for agents that learn by doing.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research · Neural Intelligence Labs",
    description:
      "Building environments and systems for agents that learn, reason, and act reliably.",
    images: ["/og.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
