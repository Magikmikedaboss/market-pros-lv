import Hero from "@/sections/Hero";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import SeoServicesSection from "@/sections/SeoServicesSection";
import SocialProofSection from "@/sections/SocialProofSection";
import PricingTeaser from "@/sections/PricingTeaser";   // 👈 teaser
import ContactSection from "@/sections/ContactSection";

export default function Page() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SeoServicesSection />
      <SocialProofSection />
      <PricingTeaser />                                  {/* 👈 small homepage teaser */}
      <ContactSection />
    </main>
  );
}
