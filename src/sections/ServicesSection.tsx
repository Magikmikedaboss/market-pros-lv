"use client";

import { useId, useState } from "react";
import Link from "next/link";

type TabKey = "design" | "seo" | "marketing" | "maintenance" | "addons";

const TABS: { key: TabKey; label: string; emoji: string }[] = [
  { key: "design",      label: "Web Design",   emoji: "💻" },
  { key: "seo",         label: "SEO",          emoji: "🔎" },
  { key: "marketing",   label: "Marketing",    emoji: "🚀" },
  { key: "maintenance", label: "Maintenance",  emoji: "🧰" },
  { key: "addons",      label: "Add-ons",      emoji: "➕" },
];

const CONTENT: Record<
  TabKey,
  {
    title: string;
    blurb: string;
    items: string[];
    ctaHref: string;
    ctaLabel: string;
    auxHref?: string;
    auxLabel?: string;
  }
> = {
  design: {
    title: "Las Vegas Web Design & Development",
    blurb:
      "Conversion-focused Next.js + Tailwind sites that look premium, load fast, and turn visitors into leads.",
    items: [
      "Custom UI systems & reusable components",
      "Lightning-fast performance (Core Web Vitals: LCP/CLS/TTFB)",
      "SEO-ready architecture (SSR/SSG/ISR, clean URLs, sitemaps)",
      "Schema markup (LocalBusiness, Service, FAQ) & on-page SEO",
      "Accessibility (WCAG 2.2 AA) & semantic HTML",
      "Industry landing pages (Dentist, Lawyer, Home Services)",
    ],
    ctaHref: "/services/web-design",
  ctaLabel: "Learn More About Web Design",

  // ✅ Secondary → Web Design pricing
  auxHref: "/pricing#web-design",
  auxLabel: "See Web Design Pricing",
  },
  seo: {
    title: "Advanced SEO — Powered by Next.js",
    blurb:
      "We pair technical SEO with Next.js performance so your pages load fast, rank stronger, and convert more.",
    items: [
      "E-Commerce SEO: optimize collections & PDPs for revenue",
      "Local SEO: GBP, citations, reviews & location pages to win the Map Pack",
      "National SEO: research-driven content, fixes, and authority building",
      "Link building: white-hat outreach & digital PR for credible links",
      "SEO content: editorial plans, briefs & upgrades to existing pages",
      "GEO/AI search: schema & entities tuned for answer-ready content",
    ],
     ctaHref: "/services/seo",
  ctaLabel: "Learn More About SEO",

  // ✅ Secondary button → Pricing page
  auxHref: "/pricing#marketing",
  auxLabel: "See SEO Packages",
  },
  marketing: {
    title: "Local SEO & Digital Marketing That Wins Clients",
    blurb:
      "Own your market with Local SEO + targeted ads. We build funnels you can measure—from impression to booked job.",
    items: [
      "Google Business Profile (GBP): setup, posts, categories, reviews",
      "Local SEO: citations, location pages, internal linking",
      "Content strategy: keyword maps & intent-led page outlines",
      "Google & Meta ads: landing pages, conversion tracking, pixels",
      "CRO: heatmaps, A/B tests, forms & call tracking",
    ],
    ctaHref: "/services/marketing",
  ctaLabel: "Explore Marketing Services",

  // ✅ Secondary → pricing
  auxHref: "/pricing#marketing",
  auxLabel: "See Marketing Packages",
  },
  maintenance: {
    title: "Website Maintenance & Care Plans",
    blurb:
      "Proactive updates, monitoring, and monthly tune-ups—like having an in-house web team on call.",
    items: [
      "Unlimited minor updates (fair use) & content edits",
      "Uptime, error & performance monitoring (99.9% targets)",
      "Security patches, backups & malware scans",
      "Dependency updates (Next.js, Tailwind, plugins/CMS)",
      "Monthly reports: traffic, rankings, leads, fixes",
      "Quarterly SEO & Core Web Vitals tune-ups",
    ],
  ctaHref: "/services/maintenance",
  ctaLabel: "Explore Care Plans",

  // ✅ Secondary → pricing anchor
  auxHref: "/pricing#maintenance",
  auxLabel: "See Care Plan Pricing",
  },
  addons: {
    title: "Add-Ons to Grow Faster",
    blurb:
      "Bolt on capability—e-commerce, bookings, membership, dashboards, and automations that save hours.",
    items: [
      "Online booking (Housecall Pro, Calendly) & CRMs",
      "Members/gated content & client portals",
      "E-commerce (Stripe, Shopify headless) & subscriptions",
      "Dashboards/admin panels for content & events",
      "Automations (API Routes, webhooks, zaps) & AI assist",
    ],
    ctaHref: "/services/add-ons",
ctaLabel: "Get a Custom Quote",
auxHref: "/pricing#add-ons",
auxLabel: "See Add-On Rates",

  },
};

export default function ServicesSection() {
  const [tab, setTab] = useState<TabKey>("design");
  const baseId = useId();

  return (
    <section id="services" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-20">
      {/* Soft nebula background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/25 via-cyan-400/15 to-amber-300/10 blur-3xl" />
      </div>

      {/* Header with keyword-rich value prop */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          High-Performance <span className="text-cyan-300">Web Design</span>,{" "}
          <span className="text-cyan-300">SEO</span>,{" "}
          <span className="text-cyan-300">Marketing</span> &{" "}
          <span className="text-cyan-300">Maintenance</span>
        </h2>
        <p className="mt-3 text-slate-300">
          We build fast, SEO-ready sites and measurable funnels that generate calls, bookings, and paying clients in Las Vegas and beyond.
        </p>
      </div>

      {/* Tabs (a11y-correct) */}
      <div
        className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2"
        role="tablist"
        aria-label="Service categories"
      >
        {TABS.map((t) => {
          const active = t.key === tab;
          const tabId = `${baseId}-tab-${t.key}`;
          const panelId = `${baseId}-panel-${t.key}`;
          return (
            <button
              key={t.key}
              id={tabId}
              role="tab"
              aria-selected={active}
              aria-controls={panelId}
              tabIndex={active ? 0 : -1}
              onClick={() => setTab(t.key)}
              className={[
                "group relative rounded-2xl p-[2px] focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition",
                active ? "bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-300" : "border border-white/10",
              ].join(" ")}
            >
              <span
                className={[
                  "inline-flex items-center gap-2 rounded-[14px] px-4 py-2 text-sm font-semibold backdrop-blur",
                  active ? "bg-slate-950/80 text-white" : "bg-white/5 text-slate-300 group-hover:bg-white/10",
                ].join(" ")}
              >
                <span className="text-base">{t.emoji}</span> {t.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <div
        id={`${baseId}-panel-${tab}`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${tab}`}
        className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-5"
      >
        {/* Left: feature list card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:col-span-3">
          <h3 className="text-xl font-bold">{CONTENT[tab].title}</h3>
          <p className="mt-2 text-slate-300">{CONTENT[tab].blurb}</p>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {CONTENT[tab].items.map((it) => (
              <li key={it} className="flex items-start gap-2 text-sm text-slate-200">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                {it}
              </li>
            ))}
          </ul>

          {/* CTA row */}
          <div className="mt-6 flex flex-wrap gap-3">
            {/* Gradient-ring primary with hover glow */}
            <div className="group relative">
              <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-cyan-400/20 to-amber-300/20 blur opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Link
                href={CONTENT[tab].ctaHref}
                className="relative inline-flex items-center rounded-2xl bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-300 p-[2px]"
              >
                <span className="inline-flex items-center gap-2 rounded-[14px] bg-slate-950/80 px-5 py-2.5 font-semibold text-white backdrop-blur transition-colors duration-200 group-hover:bg-transparent">
                  {CONTENT[tab].ctaLabel} <span aria-hidden>↗</span>
                </span>
              </Link>
            </div>

            <Link
              href={CONTENT[tab].auxHref ?? "/services"}
              className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
            >
              {CONTENT[tab].auxLabel ?? "Learn More"}
            </Link>
          </div>
        </div>

        {/* Right: “Next.js superpowers” card */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur lg:col-span-2">
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
            ⚙️ Powered by Next.js
          </div>

          <div className="grid gap-3 text-sm text-slate-300">
            <FeatureChip title="SSR / SSG / ISR" desc="Per-page rendering for speed + SEO." />
            <FeatureChip title="Edge & CDN" desc="Serve globally with near-instant TTFB." />
            <FeatureChip title="next/image" desc="Auto-optimized images & responsive sizes." />
            <FeatureChip title="API Routes" desc="Server functions without extra servers." />
            <FeatureChip title="TypeScript" desc="Fewer bugs, safer refactors, faster launches." />
          </div>

          {/* Micro demo: animated “pulse” bar to suggest performance */}
          <div className="mt-5 rounded-xl border border-white/10 p-3">
            <div className="text-xs text-slate-400">Live performance pulse (simulated):</div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded bg-slate-800">
              <div className="h-full w-1/3 animate-[pulse_1.6s_ease-in-out_infinite] bg-emerald-400/90" />
            </div>
          </div>
        </div>
      </div>

      {/* Tech ribbon (marquee-ish, pure CSS) */}
      <div className="mx-auto mt-10 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 py-3 backdrop-blur">
        <div className="flex animate-[scroll_18s_linear_infinite] whitespace-nowrap text-xs text-slate-300 [--gap:2rem]">
          {[
            "Next.js App Router",
            "React Server Components",
            "ISR & Edge",
            "TypeScript",
            "Tailwind CSS",
            "Vercel",
            "Analytics & Pixels",
            "A/B Testing",
            "Core Web Vitals",
            "Accessibility",
          ]
            .concat([
              "Next.js App Router",
              "React Server Components",
              "ISR & Edge",
              "TypeScript",
              "Tailwind CSS",
              "Vercel",
              "Analytics & Pixels",
              "A/B Testing",
              "Core Web Vitals",
              "Accessibility",
            ])
            .map((t, i) => (
              <span key={i} className="mx-[var(--gap)] inline-flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                {t}
              </span>
            ))}
        </div>
      </div>

      {/* Keyframes (scoped via arbitrary Tailwind) */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: translateX(-10%); }
          50% { transform: translateX(110%); }
        }
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

function FeatureChip({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400/90" />
      <div>
        <div className="font-semibold text-slate-100">{title}</div>
        <div className="text-slate-300">{desc}</div>
      </div>
    </div>
  );
}
