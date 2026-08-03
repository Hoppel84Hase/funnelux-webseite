import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { CookieSettingsPanel } from "@/components/cookies/CookieSettingsPanel";
import { GTMLoader } from "@/components/cookies/GTMLoader";
import { UtmCapture } from "@/components/cookies/UtmCapture";
import { LeadModalProvider } from "@/components/leads/LeadModalProvider";
import { LeadModal } from "@/components/leads/LeadModal";
import { JsonLd } from "@/components/seo/JsonLd";
import { company } from "@/content/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Funnelux Marketing, Websites und Funnels für Schweizer KMU",
    template: "%s, Funnelux Marketing",
  },
  description:
    "Funnelux Marketing baut Websites und Sales Funnels für Schweizer KMU und Start-ups. Ein Ansprechpartner, direkter Kontakt, transparente Preise.",
  keywords: ["Webdesign Winterthur", "Website erstellen lassen Schweiz", "Funnel Agentur Schweiz"],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#12141f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-CH" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd />
        <CookieConsentProvider>
          <LeadModalProvider>
            <UtmCapture />
            <GTMLoader />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieBanner />
            <CookieSettingsPanel />
            <LeadModal />
          </LeadModalProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
