"use client";
import React, { useMemo, useState, useCallback, useDeferredValue, memo } from "react";
import Link from "next/link";
import {
  PRICING_SETTINGS,
  TIERS,
  PLAN_DETAILS,
  STANDALONE_SERVICES,
  featuresCatalog,
  type PlanId,
  type Tier,
  computeDisplayPrice,
} from "@/lib/pricing";

function cn(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [withHosting, setWithHosting] = useState(false);
  const [selected, setSelected] = useState<PlanId>("pro");

  const { brand, currencySymbol, yearlyDiscountPctDefault } = PRICING_SETTINGS;

  // Compute *once per toggle change*
  const computed = useMemo(() => {
    return TIERS.map((t) => {
      const displayPrice = computeDisplayPrice(
        t.monthly,
        withHosting,
        t.hostingAddOn,
        billing,
        yearlyDiscountPctDefault
      );
      const suffix = t.id === "enterprise" ? "" : billing === "monthly" ? "/mo" : "/yr";
      const subtext =
        t.id === "enterprise"
          ? "Custom engagement"
          : billing === "monthly"
          ? `${currencySymbol}${t.monthly + (withHosting ? t.hostingAddOn : 0)} billed monthly${withHosting ? " (hosting included)" : ""}`
          : `${currencySymbol}${displayPrice} billed annually (${yearlyDiscountPctDefault}% off${withHosting ? ", hosting included" : ""})`;
      return { ...t, displayPrice, suffix, subtext };
    });
  }, [billing, withHosting, yearlyDiscountPctDefault, currencySymbol]);

  // Defer the heavy details pane updates just a tick for smoother interactions
  const deferredSelected = useDeferredValue(selected);
  const selTier = useMemo(
    () => computed.find((t) => t.id === deferredSelected) ?? computed[0],
    [computed, deferredSelected]
  );

  // Stable handlers so Cards don’t re-render due to new function identities
  const handleBillingMonthly = useCallback(() => setBilling("monthly"), []);
  const handleBillingYearly = useCallback(() => setBilling("yearly"), []);
  const toggleHosting = useCallback(() => setWithHosting((v) => !v), []);
  const onSelect = useCallback((id: PlanId) => setSelected(id), []);

  return (
    <section
      id="pricing"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-20 lg:py-24"
    >
      {/* soft glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/20 via-cyan-400/15 to-amber-300/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden />
            Built for speed • Mobile-first • SEO-ready
          </p>
          <h2 className="mt-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Simple pricing for {brand}
          </h2>
          <p className="mt-3 text-slate-300">Pick a plan to launch now and grow over time.</p>

          {/* Toggles */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Billing segmented control */}
            <div className="inline-flex rounded-full bg-slate-800/70 p-1 ring-1 ring-inset ring-slate-700/60" role="group" aria-label="Billing period">
              <button
                type="button"
                aria-pressed={billing === "monthly"}
                onClick={handleBillingMonthly}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-semibold transition",
                  billing === "monthly" ? "bg-white text-slate-900 shadow" : "text-slate-300 hover:text-white"
                )}
              >
                Monthly
              </button>
              <button
                type="button"
                aria-pressed={billing === "yearly"}
                onClick={handleBillingYearly}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-semibold transition",
                  billing === "yearly" ? "bg-white text-slate-900 shadow" : "text-slate-300 hover:text-white"
                )}
              >
                <span className="inline-flex items-center gap-1">
                  Yearly
                  <span className="rounded bg-emerald-400/10 px-2 py-0.5 text-xs font-bold text-emerald-300">
                    Save {yearlyDiscountPctDefault}%
                  </span>
                </span>
              </button>
            </div>

            {/* Hosting toggle */}
            <div className="inline-flex items-center gap-3">
              <span className="text-sm text-slate-300">Include hosting?</span>
              <button
                type="button"
                onClick={toggleHosting}
                className={cn(
                  "rounded-full px-3 py-1 text-sm font-semibold ring-1 ring-inset transition",
                  withHosting ? "bg-emerald-500 text-emerald-950 ring-emerald-400" : "bg-slate-800/70 text-slate-200 ring-slate-700/60"
                )}
                aria-pressed={withHosting}
              >
                {withHosting ? "On" : "Off"}
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {computed.map((tier) => (
            <Card
              key={tier.id}
              tier={tier}
              currencySymbol={currencySymbol}
              isSelected={tier.id === selected}
              onSelect={onSelect}
            />
          ))}
        </div>

        {/* Dynamic details panel */}
        <DetailsPanel tier={selTier} currencySymbol={currencySymbol} />

        {/* Stand-alone services */}
        <div className="mx-auto mt-10 max-w-5xl">
          <h4 className="text-base font-semibold text-white">Stand-alone services</h4>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STANDALONE_SERVICES.map((s) => (
              <div key={s.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-300">{s.name}</div>
                <div className="text-lg font-bold text-white">
                  from {currencySymbol}
                  {s.fromMonthly.toLocaleString()}
                  /mo
                </div>
                <p className="mt-1 text-sm text-slate-300">{s.blurb}</p>
                <Link href="/#contact" className="mt-3 inline-block rounded-lg border border-white/15 px-3 py-1.5 text-sm font-semibold hover:bg-white/10">
                  Ask about {s.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Card (memoized) ---------- */

const Card = memo(function Card({
  tier,
  currencySymbol,
  isSelected,
  onSelect,
}: {
  tier: Tier & { displayPrice: number; suffix: string; subtext: string };
  currencySymbol: string;
  isSelected: boolean;
  onSelect: (id: PlanId) => void;
}) {
  const priceLabel = tier.id === "enterprise" ? "Custom" : `${currencySymbol}${tier.displayPrice.toLocaleString()}`;
  const handleClick = useCallback(() => onSelect(tier.id), [onSelect, tier.id]);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isSelected}
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-6 text-left shadow-sm transition focus:outline-none",
        tier.highlight
          ? "border-cyan-400/40 bg-slate-900/70 ring-1 ring-inset ring-cyan-400/40 shadow-[0_0_35px_-10px_rgba(34,211,238,.35)]"
          : "border-slate-700/60 bg-slate-900/50 hover:border-slate-500/60",
        isSelected && "ring-2 ring-indigo-400"
      )}
    >
      {tier.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-300 px-3 py-1 text-xs font-bold text-slate-950 shadow">
          Most Popular
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-lg font-bold text-white">{tier.name}</h3>
        <p className="mt-1 text-sm text-slate-300">{tier.tagline}</p>
      </div>

      <div className="mb-5">
        <div className="flex items-end gap-1 text-white">
          <span className="text-3xl font-extrabold">{priceLabel}</span>
          {tier.id !== "enterprise" && <span className="pb-1 text-sm text-slate-300">{tier.suffix}</span>}
        </div>
        <p className="mt-1 text-xs text-slate-400">{tier.subtext}</p>
        {tier.id !== "enterprise" && (
          <p className="mt-1 text-xs text-slate-400">One-time setup: {currencySymbol}{tier.setup.toLocaleString()}</p>
        )}
      </div>

      <ul className="mb-6 grid gap-2 text-sm text-slate-200">
        {tier.features.map((f) => (
          <li key={f} className="inline-flex items-start gap-2">
            <svg className="mt-0.5 h-4 w-4 flex-none text-emerald-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
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
        <Link
          href="/#contact"
          className={cn(
            "inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold transition",
            tier.id === "enterprise"
              ? "bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/15"
              : tier.highlight
              ? "bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-300 text-slate-950 hover:opacity-95"
              : "bg-white text-slate-900 hover:bg-slate-200"
          )}
        >
          {tier.ctaLabel}
        </Link>
        <p className="mt-2 text-center text-xs text-slate-400">Click a card to see details below</p>
      </div>
    </button>
  );
});

/* ---------- Details Panel (memoized) ---------- */

const Pill = memo(function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200">
      {children}
    </span>
  );
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h5 className="text-sm font-semibold text-slate-200">{title}</h5>
      <div className="mt-2 text-sm text-slate-300">{children}</div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-slate-300">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

const DetailsPanel = memo(function DetailsPanel({
  tier,
  currencySymbol,
}: {
  tier: Tier & { displayPrice: number; suffix: string; subtext: string };
  currencySymbol: string;
}) {
  const d = PLAN_DETAILS[tier.id];
  const pillsMap: Record<PlanId, string[]> = {
    starter: ["Launch", "One-pager", "Fast"],
    pro: ["Local SEO", "Brand", "Tracking"],
    premium: ["Content", "Managed", "Growth"],
    enterprise: ["Custom", "Scale", "Integrations"],
  };

  return (
    <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6 md:p-8">
      <div className="mb-4 flex flex-wrap gap-2">
        {pillsMap[tier.id].map((p) => (
          <Pill key={p}>{p}</Pill>
        ))}
      </div>

      {/* Pricing summary */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-slate-400">Setup</div>
          <div className="text-lg font-bold text-white">
            {tier.id === "enterprise" ? "Custom after discovery" : `${currencySymbol}${tier.setup.toLocaleString()} one-time`}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-slate-400">Care (no hosting)</div>
          <div className="text-lg font-bold text-white">
            {tier.id === "enterprise" ? "Custom" : `${currencySymbol}${tier.monthly}/mo`}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-slate-400">Add hosting</div>
          <div className="text-lg font-bold text-white">
            {tier.id === "enterprise" ? "Custom" : `+${currencySymbol}${tier.hostingAddOn}/mo`}
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Section title="Overview">
            <p>{d.overview}</p>
          </Section>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Section title="Deliverables">
              <Bullets items={d.deliverables} />
            </Section>
            <Section title="SEO">
              <Bullets items={d.seo} />
            </Section>
          </div>
        </div>

        <div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Section title="Performance">
              <Bullets items={d.performance} />
            </Section>
            <Section title="Maintenance">
              <Bullets items={d.maintenance} />
            </Section>
          </div>

          <div className="mt-6 grid gap-6">
            <Section title="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {d.tech.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </Section>

            {d.addOns && (
              <Section title="Popular Add-Ons">
                <Bullets items={d.addOns} />
              </Section>
            )}

            {d.notes && (
              <Section title="Notes">
                <Bullets items={d.notes} />
              </Section>
            )}

            <div className="pt-2 text-sm text-slate-400">
              <strong>Estimated timeline:</strong> {d.timeline}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
