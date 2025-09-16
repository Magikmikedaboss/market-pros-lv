import Link from "next/link";
import type { ReactNode } from "react";
import {
  PRICING_SETTINGS,
  TIERS,
  featuresCatalog,
  type Tier,
} from "@/lib/pricing";

type Props = {
  limit?: number;
  href?: string;
  title?: string;
  subtitle?: string;
  hashByTier?: boolean;
};

function priceLabel(t: Tier, currency = "$") {
  return t.id === "enterprise" ? "Custom" : `from ${currency}${t.monthly}/mo`;
}

const tierIcon: Record<Tier["id"], ReactNode> = {
  starter: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M12 2l3 7h7l-5.5 4.1L18.9 21 12 16.9 5.1 21l2.4-7.9L2 9h7l3-7z" />
    </svg>
  ),
  pro: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm1 4v5l4 2-.75 1.86L11 13V7h2z" />
    </svg>
  ),
  premium: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.5 6.5L12 12l-3.5-3.5L7 10l5 5 5-5-1.5-1.5z" />
    </svg>
  ),
  enterprise: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M4 4h16v16H4zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z" />
    </svg>
  ),
};

export default function PricingTeaser({
  limit = 4,
  href = "/pricing",
  title = `Packages for ${PRICING_SETTINGS.brand}`,
  subtitle = "Launch fast. Scale with SEO, content, and CRO.",
  hashByTier = true,
}: Props) {
  const tiers = TIERS.slice(0, limit);

  return (
    <section
      aria-labelledby="pricing-teaser-heading"
      className="relative overflow-hidden py-18 sm:py-24"
    >
      {/* Clean, low-noise background with subtle vignette */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(34,211,238,0.08),transparent),linear-gradient(to_bottom,#0b1020,#0a0c10)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header (space-y prevents text clipping; relaxed leading) */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-cyan-200">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            Transparent & flexible
          </span>

          <div className="mt-5 space-y-3 sm:space-y-4">
            <h2
              id="pricing-teaser-heading"
              className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-3xl font-extrabold tracking-tight text-transparent leading-[1.15] sm:text-4xl"
            >
              {title}
            </h2>
            <p className="text-base text-slate-300 sm:text-lg leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-12 grid max-w-6xl justify-items-stretch gap-6 sm:grid-cols-2 lg:max-w-7xl lg:grid-cols-4">
          {tiers.map((t) => {
            const isHot = Boolean(t.highlight);
            const to = hashByTier ? `${href}#${t.id}` : href;

            return (
              <Link
                key={t.id}
                href={to}
                prefetch={false}
                aria-label={`See details for ${t.name}`}
                className={[
                  "group relative w-full rounded-2xl border p-6 transition",
                  "bg-white/5 backdrop-blur-sm",
                  isHot
                    ? "border-cyan-400/40 ring-1 ring-inset ring-cyan-400/40 shadow-[0_0_40px_-14px_rgba(34,211,238,.35)]"
                    : "border-white/10 hover:border-white/20",
                  "hover:-translate-y-0.5 hover:shadow-lg",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                ].join(" ")}
              >
                {isHot && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-2 py-0.5 text-xs font-bold text-cyan-950 shadow">
                    Most Popular
                  </span>
                )}

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={[
                        "grid h-10 w-10 place-items-center rounded-xl",
                        isHot
                          ? "bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-300/40"
                          : "bg-white/5 text-slate-200 ring-1 ring-white/10",
                      ].join(" ")}
                    >
                      {tierIcon[t.id]}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-slate-300">
                        {t.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-slate-400">Pricing</div>
                    <div className="text-base font-semibold text-white">
                      {priceLabel(t, PRICING_SETTINGS.currencySymbol)}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {t.features.slice(0, 3).map((k) => (
                    <span
                      key={k}
                      title={featuresCatalog[k] ?? k}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200 group-hover:border-white/20"
                    >
                      {featuresCatalog[k] ?? k}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Compare features ↓</span>
                  <span
                    className={[
                      "inline-flex items-center rounded-xl px-3 py-1.5 text-sm font-semibold transition",
                      isHot
                        ? "bg-cyan-400 text-cyan-950 group-hover:bg-cyan-300"
                        : "bg-white/10 text-white group-hover:bg-white/15",
                    ].join(" ")}
                  >
                    View pricing
                    <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M12.293 4.293a1 1 0 011.414 0L18 8.586a2 2 0 010 2.828l-4.293 4.293a1 1 0 01-1.414-1.414L14.586 12H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>

                {/* hover glow */}
                <div
                  aria-hidden
                  className={[
                    "pointer-events-none absolute inset-x-0 bottom-0 h-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    isHot
                      ? "bg-gradient-to-t from-cyan-400/20 to-transparent"
                      : "bg-gradient-to-t from-white/5 to-transparent",
                  ].join(" ")}
                />
              </Link>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <Link
            href={href}
            prefetch={false}
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
          >
            Compare all plans
          </Link>
        </div>
      </div>
    </section>
  );
}
