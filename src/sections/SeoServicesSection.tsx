import Image from "next/image";
import Link from "next/link";
import styles from "./SeoServicesSection.module.css";

export default function SeoServicesSection() {
  const items = [
    { icon: "🛒", title: "E-Commerce SEO",     desc: "Optimize collections & PDPs to grow organic traffic and revenue." },
    { icon: "📍", title: "Local SEO",          desc: "GBP, citations, reviews & location pages to win the Map Pack." },
    { icon: "🌎", title: "National SEO",       desc: "Research-driven content, technical fixes, and authority building." },
    { icon: "🔗", title: "Link Building",      desc: "White-hat outreach and digital PR for credible, relevant links." },
    { icon: "✍️", title: "SEO Content Writing",desc: "Editorial plans, briefs, and upgrades to existing pages." },
    { icon: "🤖", title: "GEO (AI Search)",    desc: "Schema/entity tuning & answer-ready content for generative results." },
  ];

  const metrics = [
    { label: "Avg. LCP (mobile)", value: "≤1.8s" },
    { label: "Core Web Vitals",   value: "90%+" },
    { label: "CTR lift",          value: "↑" },
  ];

  const tech = ["App Router", "ISR (revalidate)", "Edge caching", "next/image", "Server Actions", "TypeScript"];

  return (
    <section id="advanced-seo" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-20">
      {/* soft nebula */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-25%] h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/25 via-cyan-400/15 to-amber-300/10 blur-3xl" />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          Advanced SEO — <span className="text-cyan-300">Powered by Next.js</span>
        </h2>
        <p className="mt-3 text-slate-300">
          We pair technical SEO with Next.js performance—so your pages <strong>load fast</strong>, rank stronger, and convert more.
        </p>
      </div>

      {/* Services grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <article
            key={it.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
          >
            <div className="text-3xl">{it.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{it.desc}</p>
          </article>
        ))}
      </div>

      {/* Proof / Next.js panel */}
      <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/0">
        <div className="grid items-stretch gap-0 md:grid-cols-2">
          {/* Left: copy + metrics + CTAs */}
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-bold">Predictive SEO + Performance Engineering</h3>
            <p className="mt-2 text-slate-300">
              We prioritize the highest-impact fixes across technical, content, and authority—then deploy with Next.js features for
              <strong> speed</strong>, <strong>stability</strong>, and <strong>scale</strong>.
            </p>
            <ul className="mt-4 list-inside list-disc text-slate-300">
              <li>Revalidate content with ISR instead of full rebuilds</li>
              <li>Edge-cached pages for near-instant TTFB globally</li>
              <li><code className="rounded bg-black/30 px-1 py-0.5">next/image</code> for responsive, optimized media</li>
            </ul>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-xl border border-white/10">
              {metrics.map((m) => (
                <div key={m.label} className="bg-slate-900/60 p-4 text-center">
                  <div className="text-xl font-extrabold">{m.value}</div>
                  <div className="text-xs text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              {/* Primary: gradient ring + glow */}
              <div className="group relative">
                <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-cyan-400/20 to-amber-300/20 blur opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Link
                  href="/#contact" // works from any route
                  aria-label="Get an SEO game plan"
                  className="relative inline-flex items-center rounded-2xl bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-300 p-[2px]"
                >
                  <span className="inline-flex items-center gap-2 rounded-[14px] bg-slate-950/80 px-5 py-2.5 font-semibold text-white backdrop-blur transition-colors duration-200 group-hover:bg-transparent">
                    Get an SEO Game Plan <span aria-hidden>↗</span>
                  </span>
                </Link>
              </div>

              {/* Secondary: learn more → dedicated SEO page */}
              <Link
                href="/services/seo"
                aria-label="Learn more about our SEO services"
                className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
              >
                Learn More
              </Link>

              {/* Optional tertiary: pricing anchor */}
              <Link
                href="/pricing#marketing"
                aria-label="See SEO packages and pricing"
                className="inline-flex items-center rounded-2xl px-5 py-2.5 font-semibold text-white underline-offset-4 hover:underline"
              >
                See Packages
              </Link>
            </div>
          </div>

          {/* Right: visual — Next.js tech & LCP pulse */}
          <div className="relative min-h-[320px] overflow-hidden border-t border-white/10 md:border-l md:border-t-0">
            <Image
              src="/website-marketer-using-SEO-Dashboard.jpg"
              alt="SEO dashboard preview with Core Web Vitals and rankings"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/40 to-transparent" />

            {/* glass tech card */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur">
              <div className="mb-2 text-sm font-semibold text-slate-100">⚙️ Next.js Superpowers</div>
              <div className="flex flex-wrap gap-2 text-xs">
                {tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* LCP pulse bar */}
              <div className="mt-4">
                <div className="text-[11px] text-slate-400">Mobile LCP target (simulated):</div>
                <div className="mt-1 h-2 w-full overflow-hidden rounded bg-slate-800">
                  <div className={`h-full w-1/3 bg-emerald-400/90 ${styles.lcpPulse}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech ribbon (marquee using CSS module animation) */}
      <div className="mx-auto mt-10 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 py-3 backdrop-blur">
        <div className={`flex whitespace-nowrap text-xs text-slate-300 [--gap:2rem] ${styles.techScroll}`}>
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
            // duplicate for seamless loop
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
          ].map((t, i) => (
            <span key={i} className="mx-[var(--gap)] inline-flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
