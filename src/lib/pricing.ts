export type PlanId = "starter" | "pro" | "premium" | "enterprise";

export type Tier = {
  id: PlanId;
  name: string;
  tagline: string;
  monthly: number;        // base monthly (no hosting)
  setup: number;          // one-time setup
  hostingAddOn: number;   // add per-month if "Include hosting?" is On
  highlight?: boolean;    // marks "Most Popular"
  ctaLabel: string;
  features: string[];     // keys into featuresCatalog
};

export const PRICING_SETTINGS = {
  brand: "Webcraft Lab",           // ✅ update
  currencySymbol: "$",
  yearlyDiscountPctDefault: 15,
};


// Utility used by your component
export function computeDisplayPrice(
  monthly: number,
  withHosting: boolean,
  hostingAddOn: number,
  billing: "monthly" | "yearly",
  yearlyDiscountPct: number
) {
  const base = monthly + (withHosting ? hostingAddOn : 0);
  if (billing === "monthly") return base;
  const discounted = Math.round(base * (12 * (1 - yearlyDiscountPct / 100)));
  return discounted;
}

/* -------------------------------------------
   Feature catalog (human-readable labels)
   Use short keys in tiers to keep things tidy.
-------------------------------------------- */
export const featuresCatalog: Record<string, string> = {
  pages3: "1–3 page website (Home, About, Contact)",
  mobile: "Mobile-first responsive design",
  form: "Contact form + anti-spam",
  onpageBasic: "On-page SEO basics (titles, metas, H1/H2)",
  analytics: "Google Analytics 4 + basic conversions",
  speedBasic: "Speed pass (image/asset optimization)",
  supportEmail: "Email support",

  pages7: "Up to 7 pages (incl. Services & Blog setup)",
  gbp: "Google Business Profile setup/optimization",
  schemaLocal: "LocalBusiness schema markup",
  blog3: "Blog setup + 3 starter posts",
  reviews: "Review funnel (auto ask for Google reviews)",
  tracking: "Call & form conversion tracking",
  supportPriority: "Priority support",

  pages12: "10–12 pages incl. service & location pages",
  contentMonthly: "Monthly content (blog or case study)",
  funnel: "Lead funnel (landing page + email capture)",
  ab: "A/B testing starter & heatmaps",
  backlinksLite: "Local/citation links + 2 quality links/mo",
  quarterlyCall: "Quarterly strategy calls",

  unlimited: "Unlimited pages (within agreed scope)",
  advancedSEO: "Advanced SEO (20–40 keywords tracked)",
  outreach: "Link outreach & digital PR",
  crm: "CRM & automation integration (HubSpot/GoHighLevel)",
  paidStarter: "Paid ads starter (Google/Facebook) setup",
  am: "Dedicated account manager",
  monthlySprints: "Monthly optimization sprints",
};

/* -------------------------------------------
   4 Package Tiers
-------------------------------------------- */
export const TIERS: Tier[] = [
  {
    id: "starter",
    name: "Launch",
    tagline: "Get online fast with a clean, lead-ready site.",
    monthly: 79,
    setup: 995,
    hostingAddOn: 20,
    ctaLabel: "Start Launch",
    features: ["pages3", "mobile", "form", "onpageBasic", "speedBasic", "analytics", "supportEmail"],
  },
  {
    id: "pro",
    name: "Growth",
    tagline: "Rank locally and turn visitors into leads.",
    monthly: 179,
    setup: 2495,
    hostingAddOn: 25,
    highlight: true,
    ctaLabel: "Start Growth",
    features: ["pages7", "gbp", "schemaLocal", "blog3", "reviews", "tracking", "supportPriority"],
  },
  {
    id: "premium",
    name: "Authority",
    tagline: "Content, funnels, and CRO for competitive niches.",
    monthly: 449,
    setup: 4995,
    hostingAddOn: 30,
    ctaLabel: "Build Authority",
    features: ["pages12", "contentMonthly", "funnel", "ab", "backlinksLite", "quarterlyCall"],
  },
  {
    id: "enterprise",
    name: "Dominate",
    tagline: "Full web + marketing system with aggressive growth.",
    monthly: 0, // computed as Custom in the UI
    setup: 0,   // computed as Custom in the UI
    hostingAddOn: 0,
    ctaLabel: "Book a Discovery",
    features: ["unlimited", "advancedSEO", "outreach", "crm", "paidStarter", "am", "monthlySprints"],
  },
];

/* -------------------------------------------
   Deep details shown in the bottom panel
-------------------------------------------- */
type PlanDetail = {
  overview: string;
  deliverables: string[];
  seo: string[];
  performance: string[];
  maintenance: string[];
  tech: string[];
  addOns?: string[];
  notes?: string[];
  timeline: string;
};

export const PLAN_DETAILS: Record<PlanId, PlanDetail> = {
  starter: {
    overview:
      "Perfect for solo pros and small teams who need a credible, mobile-first presence that can start capturing leads immediately.",
    deliverables: [
      "1–3 page site (Home, About, Contact)",
      "Brand-matched design system",
      "Contact form with honeypot",
    ],
    seo: [
      "On-page basics (titles, metas, H1/H2)",
      "LocalBusiness schema starter",
      "Google Business Profile checklist",
    ],
    performance: ["Image compression", "Lazy-loading media", "Core vitals pass (baseline)"],
    maintenance: ["Security updates (monthly)", "Uptime monitoring (basic)"],
    tech: ["Next.js + Tailwind", "GA4", "Vercel/Bluehost"],
    addOns: ["Logo refresh", "Copy polish (up to 1k words)", "Simple gallery or FAQ"],
    notes: ["Content supplied by client", "One revision round included"],
    timeline: "~1–2 weeks",
  },
  pro: {
    overview:
      "For growing local businesses that want stronger Maps visibility, reviews, and consistent inbound lead flow.",
    deliverables: [
      "Up to 7 pages (incl. Services & Blog)",
      "3 starter blog posts (SEO-optimized)",
      "Review funnel (email/text prompts)",
    ],
    seo: [
      "GBP optimization (categories, photos, services)",
      "LocalBusiness & FAQ schema",
      "Keyword tracking (8–12 terms)",
    ],
    performance: ["Image/CDN optimization", "Critical CSS & prefetch", "Lighthouse 90+ targets"],
    maintenance: ["Monthly updates & backups", "Bug fixes and small edits (up to 1 hr/mo)"],
    tech: ["Next.js + Tailwind", "GA4 + conversions", "Basic heatmaps (optional)"],
    addOns: ["Location page pack", "Service page expansion", "Photo shoot plan"],
    notes: ["Two revision rounds included"],
    timeline: "~3–4 weeks",
  },
  premium: {
    overview:
      "Built for competitive niches (lawyers, dentists, contractors) where content, funnels, and CRO drive meaningful lift.",
    deliverables: [
      "10–12 pages incl. service & location pages",
      "Monthly content (blog or case study)",
      "Lead magnet + landing page funnel",
    ],
    seo: [
      "Content plan, intent mapping",
      "Keyword tracking (15–25 terms)",
      "Link building (citations + 2 quality links/mo)",
    ],
    performance: ["Route-level code-splitting", "Image automation & next-gen formats", "A/B testing starter"],
    maintenance: ["Proactive checks, fix backlog", "Quarterly site improvements"],
    tech: ["Next.js 15", "GA4 + events", "Heatmaps & session replay", "Form/CRM capture"],
    addOns: ["Advanced dashboards", "Case-study production", "Landing page variants for ads"],
    notes: ["Includes monthly growth call"],
    timeline: "~4–6 weeks (initial build), ongoing monthly",
  },
  enterprise: {
    overview:
      "A custom growth program for multi-location brands or aggressive markets. We combine advanced SEO, automation, and paid acquisition.",
    deliverables: [
      "Custom UX + unlimited pages (agreed scope)",
      "Multi-location architecture & playbooks",
      "Campaigns across organic + paid",
    ],
    seo: [
      "20–40 keywords tracked per market",
      "Editorial calendar & link outreach/PR",
      "Technical SEO sprints",
    ],
    performance: ["Budgets for tests at scale", "Full CRO stack", "Data pipelines & reporting"],
    maintenance: ["Dedicated AM", "Monthly sprint cadence", "Roadmap with clear KPIs"],
    tech: ["Next.js + Edge", "GA4/Looker", "HubSpot/GoHighLevel", "Tag Manager"],
    addOns: ["Paid media management", "Video & photo production", "Landing page factories"],
    notes: ["Custom SOW after discovery", "Minimum 3-month commitment recommended"],
    timeline: "Custom — defined in discovery",
  },
};

/* -------------------------------------------
   Stand-alone / A-la-carte services
-------------------------------------------- */
export const STANDALONE_SERVICES = [
  {
    name: "Local SEO Care",
    fromMonthly: 395,
    blurb: "GBP optimization, citation cleanup, and ranking improvements.",
  },
  {
    name: "Content Pack",
    fromMonthly: 450,
    blurb: "2 SEO posts/month (1,000+ words) incl. briefs and upload.",
  },
  {
    name: "Landing Page Sprint",
    fromMonthly: 750,
    blurb: "1 conversion-focused page with copy, design, and build.",
  },
  {
    name: "Review Engine",
    fromMonthly: 99,
    blurb: "Automate review requests via email/text and monitor feedback.",
  },
];
