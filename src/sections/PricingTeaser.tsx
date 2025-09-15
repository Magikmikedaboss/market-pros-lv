import Link from "next/link";
// optional: pull $ from your config
// import { PRICING_SETTINGS } from "@/lib/pricing";

export default function PricingTeaser() {
  // const { currencySymbol } = PRICING_SETTINGS; // "$"
  const PLANS = [
    {
      name: "Starter",
      price: "$1,500", // `${currencySymbol}1,500`
      blurb: "Launch-ready one-pager to look legit and capture leads.",
      highlight: false,
      features: ["Modern landing page", "Mobile-first", "Contact form"],
      cta: "Get Starter",
    },
    {
      name: "Business",
      price: "$3,500",
      blurb: "Up to 6 pages with SEO and tracking — our most popular.",
      highlight: true,
      features: ["Up to 6 pages", "Local SEO setup", "Analytics + pixels"],
      cta: "Choose Business",
    },
    {
      name: "Growth (Custom)",
      price: "Custom",
      blurb: "Funnels, CMS/CRM, ads or e-commerce — scoped to goals.",
      highlight: false,
      features: ["Strategy + wireframes", "CMS/CRM integration", "A/B testing"],
      cta: "Book a call",
    },
  ];

  return (
    <section
      id="pricing-teaser"
      aria-labelledby="pricing-teaser-title"
      className="mx-auto max-w-7xl px-4 py-16"
    >
      <div className="mb-8 text-center">
        <h2 id="pricing-teaser-title" className="text-3xl font-extrabold md:text-4xl">
          Simple pricing
        </h2>
        <p className="mt-2 text-slate-300">Pick a plan that matches your momentum.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl border p-6 ${
              p.highlight ? "border-indigo-400 bg-indigo-400/10" : "border-white/10 bg-white/5"
            }`}
          >
            <div className="flex items-start justify-between">
              <h3 className="text-sm font-semibold text-slate-200">{p.name}</h3>
              {p.highlight && (
                <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs text-indigo-200">
                  Popular
                </span>
              )}
            </div>

            <div className="mt-1 text-3xl font-extrabold text-white">{p.price}</div>
            <p className="mt-2 text-sm text-slate-300">{p.blurb}</p>

            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="/pricing"
                className={`inline-flex items-center rounded-xl px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950 ${
                  p.highlight
                    ? "bg-indigo-500 text-slate-950 hover:bg-indigo-400"
                    : "border border-white/15 text-white hover:bg-white/10"
                }`}
              >
                {p.cta}
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-slate-300 underline decoration-slate-500 underline-offset-4 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Talk to us
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/pricing"
          className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          View full pricing →
        </Link>
      </div>
    </section>
  );
}
