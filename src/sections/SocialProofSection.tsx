import Image from "next/image";
import Link from "next/link";
import TestimonialsRail from "./TestimonialsRail.client";

/* ------- data ------- */
const LOGOS = [
  { src: "/chelin-law-dark.svg", alt: "Chelin Law" },
  { src: "/mikes-pro-handyman-dark.svg", alt: "PRO Handyman" },
  { src: "/ravehouse-dark.svg", alt: "Events Co" },
  { src: "/summit-dental-dark.svg", alt: "Summit Dental" },
  { src: "/webcraft-lab-dark.svg", alt: "LV Retail" },
] as const;

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
  href: "https://example.com", // ⬅️ replace with live site
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

/* ------- component ------- */
export default function SocialProofSection() {
  return (
    <section
      id="proof"
      className="section relative mx-auto max-w-7xl scroll-mt-24 px-4 py-20"
      aria-labelledby="proof-heading"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-25%] h-[720px] w-[1100px] -translate-x-1/2 rounded-[60px] bg-gradient-to-tr from-indigo-600/25 via-cyan-400/15 to-amber-300/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="mx-auto mb-12 max-w-3xl text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-indigo-200">
          Proven results
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
        </p>
        <h2
          id="proof-heading"
          className="mt-3 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl"
        >
          Case studies, logos, and love from clients
        </h2>
        <p className="mt-2 text-slate-300">
          Real projects, measurable gains, and happy partners.
        </p>
      </header>

      {/* Consolidated primary grid */}
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        {/* Spotlight (hero case study) */}
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur lg:col-span-3">
          <Link
            href={CASE_STUDY_SPOTLIGHT.href}
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
            className="group grid items-stretch md:grid-cols-2"
            aria-label={`Open case study: ${CASE_STUDY_SPOTLIGHT.client}`}
          >
            <div className="relative w-full aspect-[16/11] md:aspect-auto md:h-full">
              <Image
                src={CASE_STUDY_SPOTLIGHT.bg}
                alt={`${CASE_STUDY_SPOTLIGHT.client} website preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={false}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent md:bg-gradient-to-r md:from-slate-950/70 md:via-slate-950/30 md:to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-semibold text-amber-200 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                {CASE_STUDY_SPOTLIGHT.tag}
              </span>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold">{CASE_STUDY_SPOTLIGHT.client}</h3>
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

              <div className="mt-6 grid grid-cols-3 gap-2">
                {CASE_STUDY_SPOTLIGHT.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-center">
                    <div className="text-xl font-extrabold text-white md:text-2xl">{m.value}</div>
                    <div className="text-[11px] text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-indigo-200 underline-offset-4 group-hover:underline">
                View live site <span aria-hidden>↗</span>
              </div>
            </div>
          </Link>
        </article>

        {/* Right column stacks: logo marquee + testimonials */}
        <div className="space-y-6 lg:col-span-2">
          {/* Logo marquee (compact & visual) */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur">
            <div className="marquee flex items-center gap-10 px-6 py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              {[...LOGOS, ...LOGOS].map((l, i) => (
                <div key={`${l.alt}-${i}`} className="shrink-0 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
                  <Image
                    src={l.src}
                    alt={l.alt}
                    width={140}
                    height={36}
                    loading="lazy"
                    decoding="async"
                    sizes="140px"
                    className="h-9 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials (client child handles scroll buttons) */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
            <TestimonialsRail testimonials={[...TESTIMONIALS]} />
          </div>
        </div>
      </div>

      {/* Case studies grid */}
      <div className="mt-14">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white/90">Recent case studies</h3>
          <Link
            href="/#contact"
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white transition hover:bg-white/10"
          >
            Start your project
          </Link>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}
