import Hero from "@/sections/Hero";
import AboutSection from "@/sections/AboutHero";
import ServicesSection from "@/sections/ServicesSection";
import SeoServicesSection from "@/sections/SeoServicesSection";
import SocialProofSection from "@/sections/SocialProofSection";
import PricingTeaser from "@/sections/PricingTeaser";
import ContactSection from "@/sections/ContactSection";

export default function Page() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SeoServicesSection />
      <SocialProofSection />
      <PricingTeaser limit={4} href="/pricing" hashByTier />  {/* centered + 4 tiers + deep links */}
      <ContactSection />
    </main>
  );
}
