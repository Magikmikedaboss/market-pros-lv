import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Las Vegas Web Design & Development — Market Pros LV",
  description:
    "Conversion-focused Next.js websites built fast. Premium UI, Core Web Vitals, SEO architecture, and accessibility. Launch quickly with future-proof tech.",
  alternates: { canonical: "https://your-domain.com/services/web-design" }, // ← update domain
  openGraph: {
    title: "Las Vegas Web Design & Development — Market Pros LV",
    description:
      "Lightning-fast Next.js sites built for conversions. Custom UI, SEO-ready structure, schema, and WCAG-compliant accessibility.",
    url: "https://your-domain.com/services/web-design",
    type: "website",
  },
};

export default function WebDesignPage() {
  const BRAND = "Market Pros LV";
  const SERVICE_AREA = "Las Vegas, NV";

  const features = [
    "Custom UI systems & reusable components",
    "Lightning-fast performance (Core Web Vitals: LCP/CLS/TTFB)",
    "SEO-ready architecture (SSR/SSG/ISR, clean URLs, sitemaps)",
    "Schema markup (LocalBusiness, Service, FAQ) & on-page SEO",
    "Accessibility (WCAG 2.2 AA) & semantic HTML",
    "Industry landing pages (Dentist, Lawyer, Home Services)",
  ];

  const deliverables = [
    "Design system (tokens, components, page templates)",
    "Responsive layouts & mobile-first flows",
    "Copy assist + on-page SEO (titles, headings, schema)",
    "Contact/booking forms with spam protection",
    "Analytics & pixels (GA4, conversions, call tracking ready)",
    "Performance budget + CWV report at handoff",
  ];

  const fastDelivery = [
    { kpi: "2–4 wks", label: "Starter sites" },
    { kpi: "4–8 wks", label: "Business sites" },
    { kpi: "≤1.8s", label: "Target mobile LCP" },
  ];

  const process = [
    { step: "1. Strategy", text: "Goals, offers, audience, sitemap, and success metrics." },
    { step: "2. Design System", text: "Visual language, UI kit, reusable sections, content plan." },
    { step: "3. Build & Optimize", text: "Next.js App Router, accessibility, SEO, analytics, QA." },
    { step: "4. Launch & Iterate", text: "Deploy on Vercel, measure, ship landing pages & tests." },
  ];

  const faqs = [
    {
      q: "How fast can you launch?",
      a: "Starters launch in 2–4 weeks; most business sites in 4–8 weeks. We plan content up front and develop with reusable blocks to move quickly.",
    },
    {
      q: "Do you handle copy and images?",
      a: "Yes—light copywriting, content structure, and stock curation are included. We’ll also wire headings, meta, and schema for on-page SEO.",
    },
    {
      q: "What about ongoing updates?",
      a: "Choose a Care Plan for updates, monitoring, backups, and monthly performance/SEO tune-ups. You can also request ad-hoc work.",
    },
    {
      q: "Will the site be fast on mobile?",
      a: "We build against a performance budget and target passing Core Web Vitals (especially mobile LCP and CLS) on key templates.",
    },
  ];

  // JSON-LD: Service + Breadcrumbs (optional)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Web Design & Development",
        provider: { "@type": "LocalBusiness", name: BRAND, areaServed: SERVICE_AREA },
        areaServed: SERVICE_AREA,
        serviceType: ["Web Design", "Web Development", "Next.js Websites", "Landing Pages", "Website Redesign"],
        url: "https://your-domain.com/services/web-design",
        description:
          "Conversion-focused Next.js websites with premium UI, Core Web Vitals performance, SEO architecture, and accessibility.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://your-domain.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://your-domain.com/services" },
          { "@type": "ListItem", position: 3, name: "Web Design", item: "https://your-domain.com/services/web-design" },
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
            Las Vegas Web Design & Development
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Lightning-fast websites built for the future
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 md:text-lg">
            Conversion-focused Next.js + Tailwind sites that look premium, load fast, and turn visitors into leads.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/#contact"
              className="rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            >
              Start Your Website
            </Link>
            <Link
              href="/pricing#web-design"
              className="rounded-2xl border border-white/20 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            >
              See Web Design Pricing
            </Link>
          </div>
          <p className="mx-auto mt-5 max-w-xl text-xs text-slate-400">Core Web Vitals pass 90%+ • Mobile-first • Next.js App Router</p>
        </header>
      </section>

      {/* Feature bullets */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">What’s included</h2>
          <ul className="mt-4 grid gap-2 text-slate-300 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400"
            >
              Get a Proposal
            </Link>
            <Link
              href="/services/seo"
              className="rounded-2xl px-5 py-2.5 font-semibold text-white underline-offset-4 hover:underline"
            >
              Pair with SEO
            </Link>
          </div>
        </div>
      </section>

      {/* Fast delivery & performance */}
      <section className="mx-auto mt-10 max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <article>
            <h2 className="text-2xl font-semibold">Fast delivery, future-proof stack</h2>
            <p className="mt-2 text-slate-300">
              We build with Next.js App Router, React Server Components, and Tailwind—deploying on Vercel for global edge speed.
              Your site ships with clean URLs, schema, sitemaps, and analytics so you can measure what matters from day one.
            </p>
            <ul className="mt-4 grid gap-2 text-slate-300">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span className="text-sm">{d}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#contact" className="rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400">
                Book a Free Strategy Call
              </Link>
              <Link href="/services" className="rounded-2xl border border-white/15 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10">
                See All Services
              </Link>
            </div>
          </article>

          <aside className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
            <h3 className="text-sm font-semibold text-slate-200">Delivery targets</h3>
            <div className="mt-3 grid grid-cols-3 overflow-hidden rounded-xl border border-white/10">
              {fastDelivery.map((s) => (
                <div key={s.label} className="bg-slate-950/40 p-4 text-center">
                  <div className="text-xl font-extrabold text-white">{s.kpi}</div>
                  <div className="text-[11px] text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              <p><strong>Tech:</strong> Next.js, App Router, ISR, Edge, next/image, TypeScript, Tailwind, Vercel.</p>
              <p className="mt-2"><strong>Focus:</strong> Speed, accessibility, SEO, and conversion clarity.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto mt-10 max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Our build process</h2>
          <ol className="mt-3 grid list-decimal gap-2 pl-5 md:grid-cols-2">
            {process.map((p) => (
              <li key={p.step} className="text-slate-300">
                <strong>{p.step}:</strong> {p.text}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industry landing pages teaser */}
      <section className="mx-auto mt-10 max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/0 p-6">
          <h2 className="text-2xl font-semibold">Industry landing pages</h2>
          <p className="mt-2 text-slate-300">
            We build high-intent landing pages for dentists, lawyers, and home services—structured for search and designed to convert.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/#contact" className="rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400">
              Plan Your Pages
            </Link>
            <Link href="/services/seo" className="rounded-2xl border border-white/15 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10">
              Add Local SEO
            </Link>
          </div>
        </div>
      </section>

      {/* Visual (optional image) */}
      <section className="mx-auto mt-10 max-w-7xl px-4">
        <div className="relative h-[300px] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/futuristic-web-design-developer-office.jpg"
            alt="Modern web design & development studio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-transparent" />
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto mb-16 mt-10 max-w-7xl px-4">
        <h2 className="text-2xl font-semibold">Web Design FAQs</h2>
        <div className="mt-4 grid gap-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded-xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer list-none text-white">
                <span className="flex items-center justify-between gap-3">
                  <span className="font-semibold">{q}</span>
                  <span aria-hidden className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-slate-300 transition group-open:rotate-45">+</span>
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
            Start Your Website
          </Link>
          <Link
            href="/pricing#web-design"
            className="rounded-2xl border border-white/20 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <Script id="web-design-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
    </main>
  );
}
