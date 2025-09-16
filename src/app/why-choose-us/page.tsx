import type { Metadata } from "next";
import AboutHero from "@/sections/AboutHero";
import AboutEditorial from "@/sections/AboutEditorial";

// ---- SEO / Metadata ----
export const metadata: Metadata = {
  title: "Why Choose Us — Market Pros LV",
  description:
    "See how our Next.js websites, local SEO, and conversion-first approach turn clicks into clients. Built for speed, rankings, and measurable results.",
  alternates: { canonical: "https://your-domain.com/why-choose-us" }, // <-- update domain
  openGraph: {
    title: "Why Choose Us — Market Pros LV",
    description:
      "Performance, SEO, and conversion clarity—see why businesses choose us for web design and marketing.",
    url: "https://your-domain.com/why-choose-us",
    type: "website",
    images: [{ url: "https://your-domain.com/og-why-choose-us.jpg" }], // optional
  },
};

export default function WhyChooseUsPage() {
  return (
    <main>
      {/* Keep the hero’s JSON-LD (LocalBusiness) inside AboutHero */}
      <AboutHero />
      <AboutEditorial />
    </main>
  );
}
