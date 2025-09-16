import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Local SEO & Digital Marketing — Market Pros LV",
  description:
    "Own your market with Local SEO, Google Business Profile, and high-ROI Google & Meta ads. Funnels you can measure—from impression to booked job.",
  alternates: { canonical: "https://your-domain.com/services/marketing" }, // ← update your domain
  openGraph: {
    title: "Local SEO & Digital Marketing — Market Pros LV",
    description:
      "GBP, citations, location pages, content strategy, Google & Meta ads, and CRO. Built for measurable leads.",
    url: "https://your-domain.com/services/marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO & Digital Marketing — Market Pros LV",
    description:
      "Own your market with Local SEO + targeted ads. Funnels you can measure—from impression to booked job.",
  },
};

export default function MarketingPage() {
  const BRAND = "Market Pros LV";
  const SERVICE_AREA = "Las Vegas, NV";

  const pillars = [
    {
      title: "Google Business Profile (GBP)",
      desc: "Setup & optimization: categories, services, posts, Q&A, and review strategy with templates.",
    },
    {
      title: "Local SEO Foundations",
      desc: "Citations, location/service pages, internal links, and LocalBusiness/Service schema.",
    },
    {
      title: "Content Strategy",
      desc: "Keyword maps, intent-led outlines, on-page SEO (titles, headers, schema), and smart interlinking.",
    },
    {
      title: "Google & Meta Ads",
      desc: "High-intent campaigns + matching landing pages, conversion tracking, and pixel setup.",
    },
    {
      title: "CRO & Analytics",
      desc: "Heatmaps, A/B tests, form optimization, call tracking, and GA4 reporting tied to leads.",
    },
  ];

  const process = [
    { step: "1. Discover & Plan", text: "Goals, ICP, offers, competitors, and baseline metrics. Build the plan & KPIs." },
    { step: "2. Local Fundamentals", text: "GBP optimization, citations, location pages, schema, and internal linking." },
    { step: "3. Funnels & Ads", text: "Launch Google/Meta campaigns with matched landing pages & conversion tracking." },
    { step: "4. Measure & Improve", text: "Monthly insights: page/keyword wins, lead quality, next best actions." },
  ];

  const deliverables = [
    "GBP setup/optimization (categories, services, posts, Q&A, photos)",
    "Citations + NAP consistency across core directories",
    "Location & service pages with internal linking",
    "Editorial calendar: keyword maps → briefs → drafts → on-page QA",
    "Google & Meta ads: campaigns, audiences, budgets, negative lists",
    "Conversion tracking: GA4 events, pixels, UTMs, call tracking",
    "CRO: heatmaps, form optimization, A/B testing plan",
    "Reporting: leads by page/keyword/channel, next-step roadmap",
  ];

  const faqs = [
    {
      q: "How fast can local results improve?",
      a: "With strong fundamentals, Map Pack/GBP visibility can move in 4–8 weeks. Broader organic gains typically build over 2–3+ months.",
    },
    {
      q: "Do you write content?",
      a: "Yes. We create an editorial plan, write or upgrade pages/posts, and wire on-page SEO with proper internal linking.",
    },
    {
      q: "Can you manage our ads end-to-end?",
      a: "Yes. We build campaigns, landing pages, conversion tracking, and provide budget pacing + ROI insights.",
    },
    {
      q: "How do you report results?",
      a: "Monthly reports connect traffic to real leads (calls/forms), highlight wins & gaps, and propose the next best actions.",
    },
  ];

  // JSON-LD: Service + FAQ + Breadcrumbs
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Local SEO & Digital Marketing",
        provider: { "@type": "LocalBusiness", name: BRAND, areaServed: SERVICE_AREA },
        areaServed: SERVICE_AREA,
        serviceType: ["Local SEO", "Google Business Profile", "Content Strategy", "PPC Advertising", "CRO"],
        url: "https://your-domain.com/services/marketing",
        description:
          "Own your market with Local SEO, GBP optimization, Google & Meta ads, content strategy, CRO, and analytics tied to leads.",
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
          { "@type": "ListItem", position: 3, name: "Marketing", item: "https://your-domain.com/services/marketing" },
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
            Local SEO & Digital Marketing That Wins Clients
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Own your market with Local SEO + targeted ads
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 md:text-lg">
            We build funnels you can measure—from impression to booked job. GBP optimization, citations, content, and
            Google & Meta ads paired with conversion tracking and CRO.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/#contact"
              className="rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            >
              Explore Marketing Services
            </Link>
            <Link
              href="/pricing#marketing"
              className="rounded-2xl border border-white/20 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            >
              See Marketing Packages
            </Link>
          </div>
          <p className="mx-auto mt-5 max-w-xl text-xs text-slate-400">
            Lead attribution • Map Pack visibility • GA4 + call tracking
          </p>
        </header>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">What we do</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <div>
                  <div className="font-semibold text-white">{p.title}</div>
                  <p className="text-sm text-slate-300">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400"
            >
              Get a Marketing Plan
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

      {/* Process */}
      <section className="mx-auto mt-10 max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Our process</h2>
          <ol className="mt-3 grid list-decimal gap-2 pl-5 md:grid-cols-2">
            {process.map((p) => (
              <li key={p.step} className="text-slate-300">
                <strong>{p.step}</strong> {p.text}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto mt-10 max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/0 p-6">
          <h2 className="text-2xl font-semibold">Deliverables you can measure</h2>
          <ul className="mt-4 grid gap-2 text-slate-300 sm:grid-cols-2">
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
            <Link href="/pricing#marketing" className="rounded-2xl border border-white/15 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10">
              See Packages
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto mb-16 mt-10 max-w-7xl px-4">
        <h2 className="text-2xl font-semibold">Marketing FAQs</h2>
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
            Explore Marketing Services
          </Link>
          <Link
            href="/pricing#marketing"
            className="rounded-2xl border border-white/20 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
          >
            See Marketing Packages
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <Script id="marketing-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
    </main>
  );
}
