import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Las Vegas Web Design & SEO | Market Pros LV",
  description: "Fast Next.js websites, Local SEO that ranks, and conversion-focused funnels.",
};

// ✅ Ensures proper mobile scaling
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // helps with iPhone safe areas
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
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

      {/* ✅ dvh works better than 100vh on iOS; overflow hidden prevents tiny overflow causing “narrow look” */}
      <body className="min-h-dvh bg-slate-950 text-slate-100 antialiased overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
