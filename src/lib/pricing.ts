// src/lib/pricing.ts

// ---------- Types ----------
export type PlanId = "starter" | "pro" | "premium" | "enterprise";

export const featuresCatalog = {
  designSystem: "Custom design system & style guide",
  mobilePerf: "Mobile-first build, Core Web Vitals attention",
  cms: "Easy content editing (Headless CMS / WordPress)",
  seo: "Technical SEO setup + on-page basics",
  localSeo: "Local SEO (GBP, citations, schema)",
  blog: "Blog setup + 3 starter posts",
  analytics: "Analytics + pixels + dashboard",
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
  /** Base monthly for care/maintenance (NO hosting included). */
  monthly: number;
  /** One-time project setup / build fee. */
  setup: number;
  /** If hosting is included, add this per-month. */
  hostingAddOn: number;
  ctaLabel: string;
  features: FeatureKey[];
};

export type PlanDetail = {
  overview: string;
  deliverables: string[];
  seo: string[];
  performance: string[];
  maintenance: string[];
  timeline: string;
  tech: string[];
  addOns?: string[];
  notes?: string[];
};

export type StandaloneService = {
  name: string;
  fromMonthly: number;
  blurb: string;
};

// ---------- Settings ----------
export const PRICING_SETTINGS = {
  brand: "Market Pros LV",
  currencySymbol: "$",
  yearlyDiscountPctDefault: 20,
};

// ---------- Plans (with setup + hosting add-on) ----------
export const TIERS: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Credible one-pager, launch fast",
    highlight: false,
    monthly: 129,            // care only
    setup: 2000,             // one-time
    hostingAddOn: 30,        // add if hosting included
    ctaLabel: "Get Starter",
    features: ["mobilePerf", "seo", "analytics", "cms"],
  },
  {
    id: "pro",
    name: "Professional",
    tagline: "Brand system, blog, local SEO",
    highlight: true,
    monthly: 349,
    setup: 5000,
    hostingAddOn: 80,
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
    tagline: "Content engine, reporting, growth",
    highlight: false,
    monthly: 999,
    setup: 12000,
    hostingAddOn: 160,
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
    tagline: "E-commerce, custom apps, scale",
    highlight: false,
    monthly: 0,              // show as "Custom"
    setup: 20000,
    hostingAddOn: 0,
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

// ---------- Detailed per-plan content ----------
export const PLAN_DETAILS: Record<PlanId, PlanDetail> = {
  starter: {
    overview:
      "Credible one-pager designed to convert. Perfect for new brands or quick campaigns.",
    deliverables: [
      "1 landing page (hero, services, about, contact)",
      "Conversion copy assist (up to 5 sections)",
      "Contact form with email notifications",
      "Basic schema (Organization/LocalBusiness)",
    ],
    seo: [
      "On-page SEO (titles, meta, headings)",
      "Basic keyword mapping",
      "Google Business Profile connection (if applicable)",
    ],
    performance: [
      "Next.js + Tailwind build",
      "Core Web Vitals attention on mobile",
      "Optimized images (Next/Image + AVIF/WebP)",
    ],
    maintenance: [
      "Launch checklist",
      "Basic analytics install (GA4 + pixels)",
    ],
    timeline: "≈ 2–3 weeks",
    tech: ["Next.js", "Tailwind", "Vercel", "GA4"],
    addOns: ["Extra pages", "Simple blog", "Lead magnet setup"],
    notes: ["Great starting point; can expand into Pro later."],
  },
  pro: {
    overview:
      "Small business site with a brand system, local SEO, and tracking that proves ROI.",
    deliverables: [
      "Up to 6 pages (Home, Services, About, Testimonials, Blog, Contact)",
      "Brand system (colors, type, UI tokens)",
      "CMS setup for pages/blog",
    ],
    seo: [
      "Local SEO foundations (GBP, citations plan, local schema)",
      "On-page optimization + internal linking",
      "Initial content briefs (2–3 pages)",
    ],
    performance: [
      "Mobile-first layout, LCP/CLS targets",
      "Image/CDN best practices",
      "Monitoring dashboard for vitals",
    ],
    maintenance: [
      "Analytics + pixels wired to goals",
      "Lead tracking events",
      "Monthly light SEO review (optional care plan)",
    ],
    timeline: "≈ 3–5 weeks",
    tech: ["Next.js", "Tailwind", "Headless CMS/MDX", "Vercel", "GA4"],
    addOns: ["Booking/Calendar", "Email automations", "Review widgets"],
    notes: ["Most popular for local service businesses."],
  },
  premium: {
    overview:
      "Growth-ready build with content engine, managed hosting, and ongoing support.",
    deliverables: [
      "10–15 pages incl. pillar/service pages",
      "Blog setup + 3 starter posts",
      "Component library & design system tokens",
    ],
    seo: [
      "Content strategy + briefs for key pages",
      "Entity/schema improvements",
      "Quarterly content roadmap",
    ],
    performance: [
      "Aggressive vitals targets (LCP ≤ 1.8s)",
      "Image/CDN automation + caching",
      "Accessibility pass (WCAG-informed)",
    ],
    maintenance: [
      "Managed hosting + SSL",
      "Priority support & updates",
      "Monthly reporting + insights",
    ],
    timeline: "≈ 5–8 weeks",
    tech: ["Next.js", "Tailwind", "Headless CMS", "Vercel", "GA4", "A/B testing hooks"],
    addOns: ["Landing page funnels", "Heatmaps/session replay", "Quarterly CRO tests"],
    notes: ["Ideal when content and SEO are core to growth."],
  },
  enterprise: {
    overview:
      "Custom functionality and scale: e-commerce, bookings, or app-like experiences.",
    deliverables: [
      "Custom features (cart/checkout, bookings, dashboards)",
      "Design system + storybook-level components",
      "Integration to CRM, inventory, or payments",
    ],
    seo: [
      "Technical SEO for large sites",
      "Structured data at scale",
      "Programmatic content patterns (as needed)",
    ],
    performance: [
      "Edge caching, ISR/SSR balance for speed",
      "Core Web Vitals budgets & monitoring",
      "Accessibility and QA workflows",
    ],
    maintenance: [
      "SLA support options",
      "Performance & SEO monitoring",
      "Security reviews and backups",
    ],
    timeline: "Custom (milestone plan)",
    tech: ["Next.js", "Tailwind", "Vercel/Edge", "Headless CMS", "Payments", "CDP/CRM"],
    addOns: ["Internationalization", "Multi-brand theming", "Advanced analytics"],
    notes: ["Scoping session required; fixed price after discovery."],
  },
};

// ---------- Stand-alone services ----------
export const STANDALONE_SERVICES: StandaloneService[] = [
  { name: "Local SEO", fromMonthly: 500, blurb: "Map Pack wins, GBP, citations, reviews." },
  { name: "Core SEO", fromMonthly: 1200, blurb: "Technical, on-page, content briefs." },
  { name: "PPC Management", fromMonthly: 750, blurb: "Google/Meta. Floor or 10–20% of spend." },
  { name: "Content Marketing", fromMonthly: 2000, blurb: "Briefs + 2–4 posts/mo." },
  { name: "Care & Maintenance", fromMonthly: 99, blurb: "Updates, backups, small edits." },
  { name: "Managed Hosting", fromMonthly: 30, blurb: "CDN/SSL, monitored, scalable tiers." },
];

// ---------- Helpers ----------
export function computeDisplayPrice(
  monthlyCare: number,
  withHosting: boolean,
  hostingAddOn: number,
  billing: "monthly" | "yearly",
  yearlyDiscountPct: number
) {
  const base = monthlyCare + (withHosting ? hostingAddOn : 0);
  if (billing === "monthly") return base;
  const d = Math.max(0, Math.min(100, yearlyDiscountPct));
  return Math.round(base * 12 * (1 - d / 100));
}
