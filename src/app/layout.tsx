import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrackClicks from "@/components/TrackClicks.client"; // ✅ lightweight client island

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
    <html lang="en" className="scroll-smooth overflow-x-hidden" data-scroll-behavior="smooth">
      <head>
        {/* Optional perf hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* GA4 loader — lazy so it doesn’t touch LCP */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX', { anonymize_ip: true });
          `}
        </Script>
      </head>

      <body className="min-h-dvh bg-slate-950 text-slate-100 antialiased overflow-x-hidden">
        <TrackClicks /> {/* ✅ mount once to capture data-track clicks */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
