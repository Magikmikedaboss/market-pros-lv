import Link from "next/link";

/**
 * Clean, scannable editorial layout:
 * - Short lede + eyebrow
 * - Inline stat chips (no boxes)
 * - Checkmark bullets with compact line length
 * - Pull quote for emphasis
 * - Slim facts rail (definition list)
 * - Vertical timeline for process
 */
export default function AboutEditorial() {
  const SERVICE_AREA = "Las Vegas, NV";

  const stats = [
    { kpi: "90%+", label: "Core Web Vitals pass" },
    { kpi: "2–4 wks", label: "Starter launches" },
    { kpi: "<24h", label: "Weekday response" },
  ];

  return (
    <section id="about-body" className="mx-auto max-w-7xl px-4 py-14 md:py-18">
      {/* Header / lede */}
      <header className="mx-auto max-w-3xl">
        <p className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-slate-300">
          Why work with us
        </p>
        <h3 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-4xl">
          Built on fundamentals that rank—and convert
        </h3>
        <p className="mt-3 text-slate-300 md:text-lg">
          Most sites look fine but underperform: slow LCP, thin content, weak internal links, no tracking.
          We fix the base, plan the content, and wire measurement—so you can see clicks turn into clients.
        </p>

        {/* inline stat chips */}
        <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-300">
          {stats.map((s) => (
            <li key={s.kpi} className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold text-white md:text-2xl">{s.kpi}</span>
              <span className="text-[12px] uppercase tracking-wide text-slate-400">{s.label}</span>
            </li>
          ))}
        </ul>
      </header>

      {/* Body layout: content + slim facts rail */}
      <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-12">
        {/* Content column */}
        <article className="max-w-3xl">
          {/* Section: What you get */}
          <h4 className="text-xl font-semibold text-white">What you get</h4>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <CheckItem
              title="Local SEO foundations"
              desc="Clean URL architecture, schema (LocalBusiness, Service, FAQ), XML sitemaps, GBP support."
            />
            <CheckItem
              title="Performance first"
              desc="Core Web Vitals tuned (LCP, CLS, TTFB), responsive images, ISR/caching for speed."
            />
            <CheckItem
              title="Conversion clarity"
              desc="Strong above-the-fold value, simple forms, call tracking & pixels wired to GA4."
            />
            <CheckItem
              title="Maintainable system"
              desc="Reusable components + tidy content model so pages ship faster and stay consistent."
            />
          </div>

          {/* Pull quote */}
          <blockquote className="mt-8 border-l-4 border-l-emerald-400/70 pl-4 text-lg italic text-slate-200">
            “Great design plus fast performance beats a pretty site every time—because it books the job.”
          </blockquote>

          {/* Industries */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-white">Industries we serve</h4>
            <p className="mt-2 max-w-prose text-slate-300">
              Home services, dental/medical, legal, fitness/wellness, creators, and local retail—any business that needs
              <em> local discovery → clear offer → booked appointment.</em>
            </p>
          </div>

          {/* Process timeline */}
          <div className="mt-10">
            <h4 className="mb-3 text-xl font-semibold text-white">Our simple process</h4>
            <ol className="relative space-y-5">
              <TimelineItem num={1} title="Strategy Call">
                Goals, offers, audience, keywords → align scope and milestones.
              </TimelineItem>
              <TimelineItem num={2} title="Design System">
                Visual language, components, layouts, and a clear content plan.
              </TimelineItem>
              <TimelineItem num={3} title="Build & Optimize">
                Performance, SEO, accessibility, analytics, QA—wired end-to-end.
              </TimelineItem>
              <TimelineItem num={4} title="Launch & Grow">
                Deploy, measure, iterate—add landing pages, ads, and content.
              </TimelineItem>
            </ol>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-xl border border-white/15 px-5 py-2.5 font-semibold text-white transition hover:bg-white/5"
            >
              See Services
            </Link>
            <Link
              href="/pricing#web-design"
              className="rounded-xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400"
            >
              View Pricing
            </Link>
            <Link
              href="#contact"
              className="rounded-xl px-5 py-2.5 font-semibold text-white underline-offset-4 hover:underline"
            >
              Start Your Project
            </Link>
          </div>
        </article>

        {/* Facts rail (clean, no boxes) */}
        <aside className="lg:sticky lg:top-24">
          <div className="border-l border-white/10 pl-6">
            <dl className="space-y-4 text-slate-300">
              <RailRow term="Stack">
                Next.js, React Server Components, ISR, Tailwind CSS, API Routes, TypeScript, Vercel
              </RailRow>
              <RailRow term="Service area">{SERVICE_AREA} + remote clients across the U.S.</RailRow>
              <RailRow term="Engagements">
                Fixed-price starters, growth sites, SEO/maintenance retainers, add-ons (e-commerce, booking, membership)
              </RailRow>
            </dl>
            {/* tiny tip */}
            <p className="mt-4 text-xs text-slate-400">
              * Actual performance depends on hosting, content, and third-party scripts.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ---------- Small UI helpers (inline, no extra deps) ---------- */

function CheckItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20">
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-emerald-400">
          <path d="M7.628 13.243 3.9 9.515l1.414-1.414 2.314 2.314 6.06-6.06 1.415 1.414-7.475 7.474z" />
        </svg>
      </span>
      <div className="text-slate-300">
        <div className="font-medium text-white">{title}</div>
        <div className="mt-0.5 text-sm leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

function TimelineItem({
  num,
  title,
  children,
}: {
  num: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="grid grid-cols-[auto_1fr] items-start gap-3">
      <div className="relative">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
          {num}
        </span>
      </div>
      <div>
        <div className="font-semibold text-white">{title}</div>
        <p className="mt-1 text-sm leading-relaxed text-slate-300">{children}</p>
      </div>
    </li>
  );
}

function RailRow({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[7.5rem_1fr] gap-3">
      <dt className="text-slate-400">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
}
