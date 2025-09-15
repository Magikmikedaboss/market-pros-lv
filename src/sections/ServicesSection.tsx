// src/sections/ServicesSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

type TabKey = "design" | "marketing" | "maintenance" | "addons";

const TABS: { key: TabKey; label: string; emoji: string }[] = [
  { key: "design",      label: "Web Design",  emoji: "💻" },
  { key: "marketing",   label: "Marketing",   emoji: "🚀" },
  { key: "maintenance", label: "Maintenance", emoji: "🧰" },
  { key: "addons",      label: "Add-ons",     emoji: "➕" },
];

const CONTENT: Record<TabKey, { title: string; blurb: string; items: string[]; ctaHref: string; ctaLabel: string }> = {
  design: {
    title: "Premium Web Design & Development",
    blurb:
      "Mobile-first Next.js + Tailwind builds that look premium, load fast, and guide visitors to call, book, or buy.",
    items: [
      "Custom UI, design systems, & components",
      "Page speed tuning (LCP, CLS, TTFB targets)",
      "SSR/SSG/ISR for SEO & scale",
      "Headless CMS (Sanity/Contentful/WordPress headless)",
      "Accessibility & best-practice semantics",
      "Ligthing-fast delivery on all starter sites",
    ],
    ctaHref: "/#contact",
    ctaLabel: "Start a Website Project",
  },
  marketing: {
    title: "Marketing That Turns Clicks Into Clients",
    blurb:
      "Local SEO, content, and paid funnels—tracked end-to-end so you can see what’s working, not just guess.",
    items: [
      "Local SEO (GBP, citations, reviews, location pages)",
      "Content & on-page SEO (intent-led structure)",
      "Google & Meta ads with landing pages",
      "Analytics, pixels, & call tracking wired in",
      "CRO: A/B tests, heatmaps, funnels",
    ],
    ctaHref: "/services",
    ctaLabel: "Explore Marketing Services",
  },
  maintenance: {
    title: "Maintenance & Care Plans",
    blurb:
      "Fast edits, proactive monitoring, and monthly checkups—like having an in-house team on call.",
    items: [
      "Unlimited minor updates (fair use)",
      "Uptime & error monitoring",
      "Plugin/CMS & dependency updates",
      "Security patches & backups",
      "Quarterly performance & SEO tune-ups",
    ],
    ctaHref: "/#contact",
    ctaLabel: "Choose a Care Plan",
  },
  addons: {
    title: "Add-Ons for Extra Firepower",
    blurb:
      "Bolt on what you need—e-commerce, membership, booking, dashboards, automations, and more.",
    items: [
      "eCommerce (Stripe/Shopify headless)",
      "Members & gated content",
      "Booking & scheduling integrations",
      "Dashboards & admin portals",
      "Automations (webhooks, API Routes, zaps)",
    ],
    ctaHref: "/#contact",
    ctaLabel: "Get a Custom Quote",
  },
};

export default function ServicesSection() {
  const [tab, setTab] = useState<TabKey>("design");

  return (
    <section id="services" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-20">
      {/* Soft nebula background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/25 via-cyan-400/15 to-amber-300/10 blur-3xl" />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          Powerful Services, Engineered on <span className="text-cyan-300">Next.js</span>
        </h2>
        <p className="mt-3 text-slate-300">
          High-performance web design, marketing that converts, and reliable maintenance—crafted to move your business forward.
        </p>
      </div>

      {/* Tabs */}
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2">
        {TABS.map((t) => {
          const active = t.key === tab;
          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={[
                "group relative rounded-2xl p-[2px] focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition",
                active ? "bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-300" : "border border-white/10",
              ].join(" ")}
              aria-pressed={active}
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
      <div className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-5">
        {/* Left: feature list card */}
        <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
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
            <div className="relative group">
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
              href="/services"
              className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right: “Next.js superpowers” card */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur">
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
            ⚙️ Powered by Next.js
          </div>

          <div className="grid gap-3 text-sm text-slate-300">
            <FeatureChip title="SSR / SSG / ISR" desc="Choose per-page rendering for speed + SEO." />
            <FeatureChip title="Edge & CDN" desc="Serve globally with near-instant TTFB." />
            <FeatureChip title="next/image" desc="Auto-optimized images & responsive sizes." />
            <FeatureChip title="API Routes" desc="Secure server functions without extra servers." />
            <FeatureChip title="TypeScript" desc="Fewer bugs, safer refactors, happier launches." />
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
