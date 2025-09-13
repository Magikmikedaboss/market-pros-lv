import PricingSection from "@/sections/PricingSection";

export default function PricingPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <PricingSection
        brand="Market Pros LV"
        contactHref="/#contact"
        currencySymbol="$"
        yearlyDiscountPct={20}
      />
    </main>
  );
}
