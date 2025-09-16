"use client";

import Script from "next/script";

const faqs = [
  {
    q: "How much does a small business website cost?",
    a: "Most Las Vegas small-business sites range from $1,500–$6,000 depending on pages, copywriting, and integrations (booking, CRM, e-commerce). We’ll give you a fixed quote after a short discovery call.",
  },
  {
    q: "How long does it take to launch a website?",
    a: "Starter sites launch in 2–3 weeks if content is ready. Larger builds with custom design systems or integrations typically take 4–8 weeks.",
  },
  {
    q: "Do you handle SEO and Google Business Profile?",
    a: "Yes. We set up on-page SEO (titles, schema, sitemaps), optimize Core Web Vitals, and manage your Google Business Profile—posts, services, categories, and review strategy.",
  },
  {
    q: "What’s included in your maintenance plans?",
    a: "Unlimited minor updates (fair use), uptime and error monitoring, security patches, backups, dependency updates, and monthly reports with performance and SEO tune-ups.",
  },
  {
    q: "Can you connect booking, payments, or a client portal?",
    a: "Absolutely. We integrate Housecall Pro, Calendly, Stripe or Shopify headless, and build member areas or admin dashboards when needed.",
  },
];

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a,
      },
    })),
  };
}

export default function ServicesFAQ() {
  return (
    <section
      id="faq"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-16"
      aria-labelledby="faq-title"
    >
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/15 via-cyan-400/10 to-amber-300/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h2 id="faq-title" className="text-3xl font-extrabold md:text-4xl">
          FAQs about Web Design, SEO & Maintenance
        </h2>
        <p className="mt-3 text-slate-300">
          Straight answers to common questions from businesses in Las Vegas and beyond.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl gap-4">
        {faqs.map(({ q, a }, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <summary className="cursor-pointer list-none">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-left text-lg font-semibold text-white">{q}</h3>
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-sm text-slate-300 transition group-open:rotate-45"
                >
                  +
                </span>
              </div>
            </summary>
            <div className="mt-3 text-slate-300">{a}</div>
          </details>
        ))}
      </div>

      {/* FAQPage JSON-LD for rich results */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />
    </section>
  );
}
