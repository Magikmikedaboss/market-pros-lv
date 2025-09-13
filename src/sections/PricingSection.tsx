"use client";
import React, { useMemo, useState } from "react";

/**
 * PricingSection — full feature component (TS + Tailwind)
 * - Monthly / Yearly toggle (auto-discount)
 * - 4 tiers with highlight state
 * - Feature lists, comparison notes, FAQ, CTAs
 *
 * Usage:
 *   <PricingSection
 *     brand="Market Pros LV"
 *     contactHref="#contact"
 *     currencySymbol="$"
 *     yearlyDiscountPct={20}
 *     onCtaClick={(plan, billing) => console.log({ plan, billing })}
 *   />
 */

export type PlanId = "starter" | "pro" | "premium" | "enterprise";

export type PricingSectionProps = {
  brand?: string;
  currencySymbol?: string; // default: $
  contactHref?: string; // where CTAs should point
  onCtaClick?: (plan: PlanId, billing: "monthly" | "yearly") => void;
  yearlyDiscountPct?: number; // 0-100 (applied to monthly base)
  className?: string;
};

const featuresCatalog = {
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

type FeatureKey = keyof typeof featuresCatalog;

const TIERS: Array<{
  id: PlanId;
  name: string;
  tagline: string;
  highlight?: boolean;
  monthly: number; // base monthly reference for pricing math
  ctaLabel: string;
  features: FeatureKey[];
}> = [
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

function classNames(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function PricingSection({
  brand = "Your Agency",
  currencySymbol = "$",
  contactHref = "#contact",
  onCtaClick,
  yearlyDiscountPct = 15,
  className,
}: PricingSectionProps) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const computed = useMemo(() => {
    const discount = Math.max(0, Math.min(100, yearlyDiscountPct));
    return TIERS.map((t) => {
      const monthlyPrice = t.monthly;
      const yearlyPrice = Math.round(monthlyPrice * 12 * (1 - discount / 100));
      const displayPrice = billing === "monthly" ? monthlyPrice : yearlyPrice;
      const suffix = billing === "monthly" ? "/mo" : "/yr";
      const subtext =
        billing === "monthly"
          ? `${currencySymbol}${monthlyPrice} billed monthly`
          : `${currencySymbol}${yearlyPrice} billed annually (${discount}% off)`;
      return { ...t, displayPrice, suffix, subtext };
    });
  }, [billing, yearlyDiscountPct, currencySymbol]);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className={classNames(
        "relative py-16 sm:py-20 lg:py-24",
        "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
            Built for speed • Mobile-first • SEO-ready
          </p>
          <h2 id="pricing-title" className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Simple pricing for {brand}
          </h2>
          <p className="mt-3 text-slate-300">
            Pick a plan to launch now and grow over time. Switch plans anytime.
          </p>

          {/* Billing Toggle */}
          <div
            className="mt-6 inline-flex rounded-full bg-slate-800/70 p-1 ring-1 ring-inset ring-slate-700/60"
            role="tablist"
            aria-label="Billing period"
          >
            {(["monthly", "yearly"] as const).map((k) => (
              <button
                key={k}
                role="tab"
                aria-selected={billing === k}
                aria-pressed={billing === k}
                onClick={() => setBilling(k)}
                className={classNames(
                  "px-4 py-1.5 text-sm font-semibold rounded-full transition",
                  billing === k ? "bg-white text-slate-900 shadow" : "text-slate-300 hover:text-white"
                )}
              >
                {k === "monthly" ? (
                  "Monthly"
                ) : (
                  <span className="inline-flex items-center gap-1">
                    Yearly{" "}
                    <span className="rounded bg-emerald-400/10 px-2 py-0.5 text-xs font-bold text-emerald-300">
                      Save {yearlyDiscountPct}%
                    </span>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {computed.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                "relative flex flex-col rounded-2xl border p-6 shadow-sm transition",
                tier.highlight
                  ? "border-emerald-500/30 bg-slate-900/70 ring-1 ring-inset ring-emerald-500/40 shadow-emerald-500/10"
                  : "border-slate-700/60 bg-slate-900/50 hover:border-slate-500/60"
              )}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-emerald-950 shadow">
                  Most Popular
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                <p className="mt-1 text-sm text-slate-300">{tier.tagline}</p>
              </div>

              <div className="mb-5">
                <div className="flex items-end gap-1 text-white">
                  <span className="text-3xl font-extrabold">
                    {currencySymbol}
                    {tier.displayPrice.toLocaleString()}
                  </span>
                  <span className="pb-1 text-sm text-slate-300">{tier.suffix}</span>
                </div>
                <p className="mt-1 text-xs text-slate-400">{tier.subtext}</p>
              </div>

              <ul className="mb-6 grid gap-2 text-sm text-slate-200">
                {tier.features.map((f) => (
                  <li key={f} className="inline-flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.333a1 1 0 0 1-1.437 0L3.29 9.99A1 1 0 1 1 4.71 8.57l3.02 3.02 6.53-6.6a1 1 0 0 1 1.444.3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{featuresCatalog[f]}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                {tier.id !== "enterprise" ? (
                  <a
                    href={contactHref}
                    onClick={() => onCtaClick?.(tier.id, billing)}
                    className={classNames(
                      "inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2",
                      tier.highlight
                        ? "bg-emerald-500 text-emerald-950 hover:bg-emerald-400 focus:ring-emerald-400 focus:ring-offset-slate-900"
                        : "bg-white text-slate-900 hover:bg-slate-200 focus:ring-slate-300 focus:ring-offset-slate-900"
                    )}
                  >
                    {tier.ctaLabel}
                  </a>
                ) : (
                  <a
                    href={contactHref}
                    onClick={() => onCtaClick?.(tier.id, billing)}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-400/20 px-4 py-2 font-semibold text-indigo-200 ring-1 ring-inset ring-indigo-400/40 transition hover:bg-indigo-400/30 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    {tier.ctaLabel}
                  </a>
                )}
                <p className="mt-2 text-center text-xs text-slate-400">No long-term contracts. Cancel anytime.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison / Notes */}
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6">
          <h4 className="text-base font-semibold text-white">What’s included by plan?</h4>
          <div className="mt-4 grid gap-4 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-slate-100">Starter</p>
              <p className="text-slate-300">Credible 3–5 page site, mobile, SEO basics, analytics.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">Professional</p>
              <p className="text-slate-300">Brand system, local SEO, copy help, automations.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">Premium</p>
              <p className="text-slate-300">Adds blogging, accessibility, managed hosting & support.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">Enterprise</p>
              <p className="text-slate-300">E-commerce/booking, custom apps, and scale support.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-12 max-w-5xl">
          <h4 className="text-base font-semibold text-white">FAQ</h4>
          <dl className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-5">
              <dt className="font-semibold text-white">Can I start on Starter and upgrade later?</dt>
              <dd className="mt-2 text-sm text-slate-300">Yes—plans are month-to-month. We’ll prorate upgrades.</dd>
            </div>
            <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-5">
              <dt className="font-semibold text-white">Do you offer custom quotes?</dt>
              <dd className="mt-2 text-sm text-slate-300">
                Absolutely. If you need out-of-scope features, we’ll price a fixed-fee add-on.
              </dd>
            </div>
            <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-5">
              <dt className="font-semibold text-white">What’s included in maintenance?</dt>
              <dd className="mt-2 text-sm text-slate-300">
                Backups, updates, security, uptime, and small content edits depending on plan.
              </dd>
            </div>
            <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-5">
              <dt className="font-semibold text-white">Do you work with lawyers & dentists?</dt>
              <dd className="mt-2 text-sm text-slate-300">
                Yes—packages fit local service businesses. Add booking, HIPAA-aware forms, or intake flows.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
