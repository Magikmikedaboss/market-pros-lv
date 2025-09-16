import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "SEO Services in Las Vegas — Market Pros LV",
  description:
    "Advanced SEO for Las Vegas businesses. Technical fixes, Local SEO, content ops, and links—engineered on Next.js for speed, rankings, and conversions.",
  alternates: { canonical: "https://your-domain.com/services/seo" }, // ← update domain
  openGraph: {
    title: "SEO Services in Las Vegas — Market Pros LV",
    description:
      "We pair technical SEO with Next.js performance to win rankings that convert. Local SEO, content, links, and analytics you can measure.",
    url: "https://your-domain.com/services/seo",
    type: "website",
  },
};

export default function SEOPage() {
  const BRAND = "Market Pros LV";
  const SERVICE_AREA = "Las Vegas, NV";

  const comparePoints = [
    {
      you: "Next.js technical SEO baked in (SSR/SSG/ISR, clean URLs, schema, sitemaps, Core Web Vitals)",
      them: "Generic builders; slow TTFB; missing schema; bloated scripts",
    },
    {
      you: "Local SEO playbook: GBP, citations, reviews, and location pages that actually rank",
      them: "Set-it-and-forget-it listings; thin ‘city page’ templates",
    },
    {
      you: "Editorial system: keyword maps → briefs → drafts → on-page QA → internal links",
      them: "Random blog posts without intent mapping or interlinking",
    },
    {
      you: "White-hat link outreach & digital PR for relevant authority",
      them: "Low-quality directories, spammy guest posts",
    },
    {
      you: "Analytics wired end-to-end (GA4, pixels, call tracking, lead QA)",
      them: "‘Traffic up’ reports with no lead attribution",
    },
    {
      you: "Clear deliverables and visible progress; fast comms (<24h weekdays)",
      them: "Vague monthly reports; slow responses",
    },
  ];

  const services = [
    { title: "Local SEO", desc: "Win the Map Pack with GBP optimization, citations, reviews, and location pages." },
    { title: "Technical SEO", desc: "Crawlability, indexation, CWV (LCP/CLS/TTFB), schema, redirects, canonical hygiene." },
    { title: "Content & On-Page", desc: "Keyword maps, briefs, drafts, upgrades, and on-page QA aligned to intent." },
    { title: "E-commerce SEO", desc: "Collection/PDP optimization, filters/facets, internal search, and product schema." },
    { title: "Link Building / Digital PR", desc: "White-hat outreach for credible links that move the needle." },
    { title: "Reporting & Insights", desc: "GA4 + call tracking; page/keyword wins; next best actions every month." },
  ];

  const faqs = [
    {
      q: "How fast can we see results?",
      a: "Local SEO changes can move in 4–8 weeks; competitive organic terms typically take 3–6 months. We prioritize quick wins first (GBP, on-page, internal links).",
    },
    {
      q: "Do you do content writing?",
      a: "Yes. We create an editorial plan, write or upgrade pages/posts, and ensure on-page SEO and internal links are correct.",
    },
    {
      q: "What does a typical monthly engagement include?",
      a: "A technical backlog, content plan, Local SEO ops, link outreach, and monthly reporting with lead attribution and next-step priorities.",
    },
    {
      q: "Do you manage Google Business Profile (GBP)?",
      a: "We handle categories, services, posts, Q&A, and review strategy—plus local landing pages to reinforce relevance.",
    },
  ];

  // ----- JSON-LD: Service + FAQ + Breadcrumbs -----
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "SEO Services",
        "provider": { "@type": "LocalBusiness", "name": BRAND },
        "areaServed": SERVICE_AREA,
        "serviceType": [
          "Local SEO",
          "Technical SEO",
          "Content Optimization",
          "E-commerce SEO",
          "Link Building",
          "SEO Reporting"
        ],
        "url": "https://your-domain.com/services/seo",
        "description":
          "Advanced SEO for Las Vegas businesses: technical fixes, Local SEO, content operations, links, and analytics engineered on Next.js."
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(({ q, a }) => ({
          "@type": "Question",
          "name": q,
          "acceptedAnswer": { "@type": "Answer", "text": a }
        })),
        "url": "https://your-domain.com/services/seo"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://your-domain.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://your-domain.com/services" },
          { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://your-domain.com/services/seo" }
        ]
      }
    ]
  };

  return (
    <main className="relative">
      {/* Top banner / hero (editorial, no heavy card chrome) */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mx-auto w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-slate-300">
            SEO Services in {SERVICE_AREA}
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            SEO engineered for speed, rankings, and conversions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 md:text-lg">
            We combine <strong>technical SEO</strong>, <strong>Local SEO</strong>, content operations, and white-hat
            links—powered by Next.js performance—so you win keyword clusters that bring you <em>booked clients</em>, not just traffic.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/#contact"
              className="rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            >
              Get an SEO Game Plan
            </Link>
            <Link
              href="/pricing#marketing"
              className="rounded-2xl border border-white/20 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            >
              See Packages
            </Link>
          </div>

          {/* trust line */}
          <p className="mx-auto mt-5 max-w-xl text-xs text-slate-400">
            Core Web Vitals 90%+ pass • Measurable funnels • &lt;24h weekday response
          </p>
        </header>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-7xl px-4 pb-6 md:pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <article className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-white">What’s in our SEO program</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.title} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-emerald-400">
                      <path d="M7.628 13.243 3.9 9.515l1.414-1.414 2.314 2.314 6.06-6.06 1.415 1.414-7.475 7.474z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-medium text-white">{s.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-xl font-semibold text-white">How we execute (month 0 → ongoing)</h3>
            <ol className="mt-3 space-y-3 pl-5">
              <li>
                <strong>Audit & plan:</strong> crawl/indexation, CWV, content gaps, local signals, link profile, and baseline KPIs.
              </li>
              <li>
                <strong>Fix & foundations:</strong> technical backlog (priority-ranked), GBP optimization, citation cleanup, schema.
              </li>
              <li>
                <strong>Content ops:</strong> keyword maps → briefs → drafts → on-page QA → internal links → publish.
              </li>
              <li>
                <strong>Authority:</strong> white-hat outreach and digital PR for relevant links; remove toxic links if needed.
              </li>
              <li>
                <strong>Measure & iterate:</strong> GA4 + call tracking; monthly wins, losses, and next best actions.
              </li>
            </ol>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="rounded-xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400"
              >
                Request Audit
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-white/15 px-5 py-2.5 font-semibold text-white transition hover:bg-white/5"
              >
                See All Services
              </Link>
            </div>
          </article>

          {/* Right rail: “Why we win vs other agencies” */}
          <aside className="lg:sticky lg:top-24">
            <div className="border-l border-white/10 pl-6">
              <h2 className="text-2xl font-semibold text-white">Why we beat typical SEO shops</h2>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
                {comparePoints.map((row, i) => (
                  <li key={i}>
                    <div className="font-semibold text-white">We do:</div>
                    <p className="">{row.you}</p>
                    <div className="mt-1 text-slate-400">Others:</div>
                    <p className="">{row.them}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-slate-300">
                We’re not chasing vanity metrics. We engineer pages that <em>load fast</em>, earn relevance, and turn searches into
                <strong> booked calls</strong>.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Results teaser (optional: replace with real stats later) */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Results you can measure</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            <li>+30–80% more calls from Local SEO in first 90 days (typical when GBP & location pages are under-optimized)</li>
            <li>Faster LCP → higher conversion rate on key service pages</li>
            <li>Lead attribution by page & keyword with GA4 + call tracking</li>
          </ul>
          <div className="mt-6">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400"
            >
              Talk Through a Case Study
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl font-semibold text-white">SEO FAQs</h2>
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
            Get Your SEO Plan
          </Link>
          <Link
            href="/pricing#marketing"
            className="rounded-2xl border border-white/20 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <Script id="seo-service-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
    </main>
  );
}
