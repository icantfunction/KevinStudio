import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig, seoKeywords } from "@/data/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyBookButton from "@/components/StickyBookButton";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bodoni",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Worldwide Studio Space | Studio + Event Venue",
    template: "%s | Worldwide Studio Space",
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  openGraph: {
    title: "Worldwide Studio Space",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Worldwide Studio Space",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${bodoni.variable}`}>
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <StickyBookButton />
      </body>
    </html>
  );
}
