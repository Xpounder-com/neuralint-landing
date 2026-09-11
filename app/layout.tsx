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
  metadataBase: new URL("https://neuralint.io"),
  title: {
    default: "AI Agent RL Environments | Neural Intelligence Labs",
    template: "%s · Neural Intelligence Labs",
  },
  description:
    "Neural Intelligence Labs researches reinforcement learning environments, planning, and verification for software, terminal, and web agents.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "AI Agent RL Environments | Neural Intelligence Labs",
    description:
      "Research on reinforcement learning environments, planning, and verification for software, terminal, and web agents.",
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
    title: "AI Agent RL Environments | Neural Intelligence Labs",
    description:
      "Research on reinforcement learning environments, planning, and verification for software, terminal, and web agents.",
    images: ["/og.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://neuralint.io/#organization",
            name: "Neural Intelligence Labs",
            alternateName: "NeuralInt",
            url: "https://neuralint.io/",
            founder: {
              "@type": "Person",
              name: "Mehrdad Zaker",
              alternateName: "Mehrdad Zakershahrak",
              url: "https://www.mehrdadzaker.com/",
            },
          }).replace(/</g, "\\u003c") }}
        />
        <script
          data-theme-bootstrap=""
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("nil-theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
