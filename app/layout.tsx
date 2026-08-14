import type { Metadata } from "next";
import { Fraunces, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://real-or-ai-india.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Real or AI? — India's Independence",
    template: "%s | Real or AI?",
  },
  description:
    "Can you tell authentic Indian history from AI-generated reconstructions? Test yourself with photographs, posters, speeches and documents from India's independence era.",
  keywords: [
    "India independence day",
    "Real or AI game",
    "AI generated history quiz",
    "Indian history quiz",
    "media literacy game",
    "1947 independence",
  ],
  authors: [{ name: "Real or AI?" }],
  openGraph: {
    title: "Real or AI? — India's Independence",
    description:
      "Can you tell authentic Indian history from AI-generated reconstructions? Test yourself with photographs, posters, speeches and documents from India's independence era.",
    url: siteUrl,
    siteName: "Real or AI?",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real or AI? — India's Independence",
    description:
      "Can you tell authentic Indian history from AI-generated reconstructions?",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-parchment text-ink font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-parchment"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
