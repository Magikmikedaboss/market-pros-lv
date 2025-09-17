import Image from "next/image";
import Link from "next/link";
import TestimonialsRail from "./TestimonialsRail.client";

/** ------- data ------- */
const CASE_STUDY_SPOTLIGHT = {
  tag: "Case Study",
  client: "Local Service Brand",
  goal: "Increase booked calls in 60 days",
  steps: ["Site rebuild (Next.js)", "Local SEO tune-up", "Call tracking & analytics"],
  metrics: [
    { label: "Calls", value: "+72%" },
    { label: "Organic traffic", value: "+38%" },
    { label: "LCP", value: "1.2s" },
  ],
  bg: "/website-marketer-using-SEO-Dashboard.jpg",
  href: "https://example.com",
} as const;

const CASE_STUDIES = [
  { title: "Chelin Law", href: "https://chelinlaw.example.com", img: "/chelin-law-dark.svg", ratio: "aspect-[16/10]" },
  { title: "Mike’s PRO Handyman", href: "https://mikesprohandyman.com", img: "/mikes-pro-handyman-dark.svg", ratio: "aspect-[16/10]" },
  { title: "Ravehouse Entertainment", href: "https://ravehouse.example.com", img: "/ravehouse-dark.svg", ratio: "aspect-[16/10]" },
] as const;

const TESTIMONIALS = [
  { quote: "Leads doubled in six weeks. The site is fast and our phones ring.", name: "Dana C.", role: "Owner, Chelin Law", rating: 5 },
  { quote: "Map Pack jumped to top 3 after the rebuild.", name: "Mike S.", role: "Founder, PRO Handyman", rating: 5 },
  { quote: "Clean funnel and clear tracking—now ROAS makes sense.", name: "J. Rivera", role: "Events Director", rating: 5 },
] as const;

/** ------- component ------- */
export default function SocialProofSection() {
  return (
    <section
      id="proof"
      className="relative w-full overflow-hidden scroll-mt-24 py-16 sm:py-20"
      aria-labelledby="proof-heading"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
        <div
          className="
            absolute left-1/2 top-[-25%]
            h-[520px] sm:h-[640px]
            w-[min(1100px,100vw)]
            -translate-x-1/2 rounded-[60px]
            bg-gradient-to-tr from-indigo-600/25 via-cyan-400/15 to-amber-300/10
            blur-3xl
          "
        />
      </div>

      {/* Container */}
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-indigo-200">
            Proven results <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
          </p>
          <h2
            id="proof-heading"
            className="mt-3 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl md:text-4xl"
          >
            Case studies, logos, and love from clients
          </h2>
          <p className="mt-2 text-slate-300">Real projects, measurable gains, and happy partners.</p>
        </header>

        {/* Content grid: 1 col mobile, 2 cols md+ */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
          {/* Spotlight card */}
          <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <Link
              href={CASE_STUDY_SPOTLIGHT.href}
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
              className="group block"
              aria-label={`Open case study: ${CASE_STUDY_SPOTLIGHT.client}`}
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-auto md:h-[280px] lg:h-[340px]">
                <Image
                  src={CASE_STUDY_SPOTLIGHT.bg}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                  className="object-cover"
                  decoding="async"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/35 to-transparent md:bg-gradient-to-r md:from-slate-950/70 md:via-slate-950/30 md:to-transparent" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-amber-200 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  {CASE_STUDY_SPOTLIGHT.tag}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold sm:text-2xl">{CASE_STUDY_SPOTLIGHT.client}</h3>
                <p className="mt-2 text-slate-300">
                  <span className="font-semibold text-white">Goal:</span> {CASE_STUDY_SPOTLIGHT.goal}
                </p>

                <ul className="mt-4 grid gap-2 text-slate-300 sm:grid-cols-2">
                  {CASE_STUDY_SPOTLIGHT.steps.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {CASE_STUDY_SPOTLIGHT.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-center sm:p-4">
                      <div className="text-lg font-extrabold text-white sm:text-xl">{m.value}</div>
                      <div className="text-[11px] text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-indigo-200 underline-offset-4 group-hover:underline">
                  View live site <span aria-hidden>↗</span>
                </div>
              </div>
            </Link>
          </article>

          {/* Testimonials rail (scrolls inside itself on mobile) */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
            <TestimonialsRail testimonials={[...TESTIMONIALS]} />
          </div>
        </div>

        {/* Case studies grid */}
        <div className="mt-12 sm:mt-14">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-base font-semibold text-white/90 sm:text-lg">Recent case studies</h3>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
            >
              Start your project
            </Link>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((c) => (
              <li key={c.title} className="group">
                <Link
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="block overflow-hidden rounded-xl border border-white/10 bg-white/5"
                  aria-label={`Open ${c.title} website`}
                >
                  <div className={`relative ${c.ratio}`}>
                    <Image
                      src={c.img}
                      alt={`${c.title} website`}
                      fill
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition will-change-transform group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 text-sm text-slate-200">
                    <span className="font-medium">{c.title}</span>
                    <span className="opacity-70">Visit ↗</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
