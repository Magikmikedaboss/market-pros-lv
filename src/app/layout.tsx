import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Las Vegas Web Design & SEO | Market Pros LV",
  description: "Fast Next.js websites, Local SEO that ranks, and conversion-focused funnels.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* GA4 (optional) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
