import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Website Maintenance & Care Plans — Market Pros LV",
  description:
    "Proactive updates, monitoring, backups, security, and monthly tune-ups. Keep your Next.js site fast, secure, and converting.",
  alternates: { canonical: "https://your-domain.com/services/maintenance" }, // ← update domain
  openGraph: {
    title: "Website Maintenance & Care Plans — Market Pros LV",
    description:
      "Unlimited minor updates, monitoring, backups, security patches, reports, and Core Web Vitals/SEO tune-ups.",
    url: "https://your-domain.com/services/maintenance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Maintenance & Care Plans — Market Pros LV",
    description:
      "Keep your site fast, secure, and converting with proactive updates and monthly reports.",
  },
};

export default function MaintenancePage() {
  const BRAND = "Market Pros LV";
  const SERVICE_AREA = "Las Vegas, NV";

  const highlights = [
    "Unlimited minor updates (fair use) & content edits",
    "Uptime, error & performance monitoring (99.9% targets)",
    "Security patches, backups & malware scans",
    "Dependency updates (Next.js, Tailwind, CMS/plugins)",
    "Monthly report: traffic, rankings, leads, fixes",
    "Quarterly Core Web Vitals & SEO tune-ups",
  ];

  const addOns = [
    "Landing page sprints",
    "Blog/content packages",
    "A/B testing & heatmaps",
    "Local SEO campaigns",
    "Ad landing pages + tracking",
    "CRM/automation hooks",
  ];

  const slas = [
    { kpi: "<24h", label: "Weekday response" },
    { kpi: "99.9%", label: "Uptime target" },
    { kpi: "≤1.8s", label: "Mobile LCP target (key pages)" },
  ];

  const process = [
    { step: "1. Audit & onboard", text: "Access, backup, baseline CWV/SEO, monitoring & alerts." },
    { step: "2. Patch & update", text: "Dependencies, security, CMS/plugins, deprecations." },
    { step: "3. Optimize", text: "Perf/SEO tune-ups, image/caching, schema, internal links." },
    { step: "4. Report & plan", text: "Monthly summary, issues fixed, next best actions." },
  ];

  const faqs = [
    {
      q: "What counts as a minor update?",
      a: "Text/image swaps, small layout/content edits, adding a section, minor bug fixes, or simple CMS updates that fit within your plan’s fair-use limits.",
    },
    {
      q: "Do you support non-Next.js sites?",
      a: "Yes—most modern Jamstack frameworks and headless CMS setups are fine. We’ll confirm during onboarding.",
    },
    {
      q: "Can you handle urgent issues?",
      a: "Yes. We prioritize uptime/security incidents immediately and communicate status until resolved.",
    },
    {
      q: "Can we pause or upgrade?",
      a: "You can switch tiers or add sprint work anytime. We’ll align scope and timelines on the monthly call.",
    },
  ];

  // JSON-LD: Service + FAQ + Breadcrumbs
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Website Maintenance & Care Plans",
        provider: { "@type": "LocalBusiness", name: BRAND, areaServed: SERVICE_AREA },
        areaServed: SERVICE_AREA,
        serviceType: [
          "Website Maintenance",
          "Website Support",
          "Security & Backups",
          "Core Web Vitals Optimization",
          "SEO Maintenance",
        ],
        url: "https://your-domain.com/services/maintenance",
        description:
          "Proactive updates, monitoring, backups, security patches, and monthly performance/SEO tune-ups for Next.js sites.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://your-domain.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://your-domain.com/services" },
          { "@type": "ListItem", position: 3, name: "Maintenance", item: "https://your-domain.com/services/maintenance" },
        ],
      },
    ],
  };

  return (
    <main className="relative">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-16 md:pb-14 md:pt-20">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mx-auto w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-slate-300">
            Website Maintenance & Care Plans
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Keep your site fast, secure, and converting
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 md:text-lg">
            Proactive updates, monitoring, and monthly tune-ups—like having an in-house web team on call.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/#contact"
              className="rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            >
              Choose a Care Plan
            </Link>
            <Link
              href="/pricing#maintenance"
              className="rounded-2xl border border-white/20 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            >
              See Maintenance Pricing
            </Link>
          </div>
          <p className="mx-auto mt-5 max-w-xl text-xs text-slate-400">
            Unlimited minor updates • 99.9% uptime target • Monthly reporting
          </p>
        </header>
      </section>

      {/* Highlights / what’s included */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">What’s included</h2>
          <ul className="mt-4 grid gap-2 text-slate-300 sm:grid-cols-2">
            {highlights.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#contact" className="rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400">
              Get Started
            </Link>
            <Link href="/services/seo" className="rounded-2xl px-5 py-2.5 font-semibold text-white underline-offset-4 hover:underline">
              Add SEO Maintenance
            </Link>
          </div>
        </div>
      </section>

      {/* SLAs / targets + add-ons */}
      <section className="mx-auto mt-10 max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          {/* SLAs */}
          <article>
            <h2 className="text-2xl font-semibold">Performance & support targets</h2>
            <p className="mt-2 text-slate-300">
              We monitor uptime, errors, and Core Web Vitals—fixing issues quickly and keeping your stack current so pages stay fast and stable.
            </p>

            <div className="mt-4 grid grid-cols-3 overflow-hidden rounded-xl border border-white/10">
              {slas.map((s) => (
                <div key={s.label} className="bg-slate-950/40 p-4 text-center">
                  <div className="text-xl font-extrabold text-white">{s.kpi}</div>
                  <div className="text-[11px] text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </article>

          {/* Add-ons */}
          <aside className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
            <h3 className="text-sm font-semibold text-slate-200">Popular add-ons</h3>
            <ul className="mt-3 grid gap-2 text-sm text-slate-300">
              {addOns.map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Link
                href="/pricing#add-ons"
                className="inline-flex items-center rounded-2xl border border-white/15 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
              >
                See Add-On Rates
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto mt-10 max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">How our care plans work</h2>
          <ol className="mt-3 grid list-decimal gap-2 pl-5 md:grid-cols-2">
            {process.map((p) => (
              <li key={p.step} className="text-slate-300">
                <strong>{p.step}</strong> {p.text}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto mb-16 mt-10 max-w-7xl px-4">
        <h2 className="text-2xl font-semibold">Maintenance FAQs</h2>
        <div className="mt-4 grid gap-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded-xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer list-none text-white">
                <span className="flex items-center justify-between gap-3">
                  <span className="font-semibold">{q}</span>
                  <span aria-hidden className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-slate-300 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-2 text-sm text-slate-300">{a}</p>
            </details>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400"
          >
            Choose a Care Plan
          </Link>
          <Link
            href="/pricing#maintenance"
            className="rounded-2xl border border-white/20 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
          >
            See Maintenance Pricing
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <Script id="maintenance-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
    </main>
  );
}
