import Hero from "@/sections/Hero";
import AboutSection from "@/sections/AboutSection";
import SeoServicesSection from "@/sections/SeoServicesSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import CaseStudySection from "@/sections/CaseStudySection";
import PricingSection from "@/sections/PricingSection";
import ContactSection from "@/sections/ContactSection";

export default function Page() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SeoServicesSection />
      <TestimonialsSection />
      <CaseStudySection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
