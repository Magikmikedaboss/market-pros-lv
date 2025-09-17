import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrackClicks from "@/components/TrackClicks.client";

export const metadata: Metadata = {
  title: "Las Vegas Web Design & SEO | Market Pros LV",
  description: "Fast Next.js websites, Local SEO that ranks, and conversion-focused funnels.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden"
      data-scroll-behavior="smooth"
    >
      <head>
        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </head>

      <body className="min-h-dvh bg-slate-950 text-slate-100 antialiased">
        <TrackClicks />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
