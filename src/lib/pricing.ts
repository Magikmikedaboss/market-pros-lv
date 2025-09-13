export type PlanId = "starter" | "pro" | "premium" | "enterprise";

export const featuresCatalog = {
  designSystem: "Custom design system & style guide",
  mobilePerf: "Mobile-first build, Core Web Vitals attention",
  cms: "Easy content editing (WordPress / Headless CMS)",
  seo: "Technical SEO setup + on-page basics",
  localSeo: "Local SEO (GMB, citations, schema)",
  blog: "Blog setup + 3 starter posts",
  analytics: "Analytics + dashboard reporting",
  ecommerce: "E-commerce / booking / payments",
  a11y: "Accessibility pass (WCAG informed)",
  support: "Priority support & maintenance",
  hosting: "Managed hosting & SSL",
  copy: "Conversion copywriting (up to 5 pages)",
  brandKit: "Logo refresh + brand kit",
  automations: "Lead automations (forms → email/CRM)",
} as const;
export type FeatureKey = keyof typeof featuresCatalog;

export type Tier = {
  id: PlanId;
  name: string;
  tagline: string;
  highlight?: boolean;
  monthly: number; // base monthly price
  ctaLabel: string;
  features: FeatureKey[];
};

export const TIERS: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Launch fast with a clean, credible site",
    monthly: 99,
    ctaLabel: "Get Starter",
    features: ["mobilePerf", "seo", "analytics", "cms"],
  },
  {
    id: "pro",
    name: "Professional",
    tagline: "Brand, speed, and SEO that moves needles",
    highlight: true,
    monthly: 249,
    ctaLabel: "Choose Pro",
    features: [
      "designSystem",
      "mobilePerf",
      "seo",
      "localSeo",
      "analytics",
      "cms",
      "copy",
      "automations",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Content, analytics, and growth playbook",
    monthly: 499,
    ctaLabel: "Go Premium",
    features: [
      "designSystem",
      "mobilePerf",
      "seo",
      "localSeo",
      "blog",
      "analytics",
      "cms",
      "a11y",
      "hosting",
      "support",
      "automations",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "E-commerce, custom apps, and scale",
    monthly: 1299,
    ctaLabel: "Talk to Sales",
    features: [
      "designSystem",
      "mobilePerf",
      "seo",
      "localSeo",
      "analytics",
      "cms",
      "ecommerce",
      "a11y",
      "hosting",
      "support",
      "automations",
      "brandKit",
    ],
  },
];

// Helper to compute yearly pricing once (no React needed)
export function computePrice(
  monthly: number,
  billing: "monthly" | "yearly",
  yearlyDiscountPct: number
) {
  if (billing === "monthly") return monthly;
  const d = Math.max(0, Math.min(100, yearlyDiscountPct));
  return Math.round(monthly * 12 * (1 - d / 100));
}
