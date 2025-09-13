// src/sections/AboutSection.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  // Put this image file in /public and update the filename if yours differs
  const bg = "/futuristic-web-design-developer-office.jpg";

  const values = [
    { icon: "📱", title: "Mobile-First Optimization", desc: "Tap-friendly UI, tuned Core Web Vitals, smart image/CDN." },
    { icon: "🤝", title: "5-Star Customer Service", desc: "Direct access, proactive updates, <24h weekday response." },
    { icon: "⚡", title: "Fast Turnarounds", desc: "2–4 week starters, 4–8 week business builds, visible progress." },
  ];

  const stats = [
    { kpi: "90%+", label: "Core Web Vitals pass" },
    { kpi: "2–4 wks", label: "Starter launches" },
    { kpi: "<24h", label: "Weekday response" },
  ];

  const nextPillars = [
    "Next.js App Router",
    "SSR/SSG/ISR",
    "Edge & CDN",
    "next/image",
    "API Routes",
    "TypeScript",
  ];

  return (
    <section id="about" className="relative mx-auto max-w-[100rem] scroll-mt-24 px-0 py-0">
      {/* Background image */}
      <div className="relative h-[680px] md:h-[740px] lg:h-[820px] w-full overflow-hidden">
        <Image
          src={bg}
          alt="Modern web design & development studio"
          fill
          priority
          className="object-cover"
        />
        {/* Legibility overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_0%,rgba(2,6,23,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/50 to-transparent" />

        {/* Content overlay */}
        <div className="absolute inset-0">
          <div
            className="
              mx-auto flex h-full max-w-7xl flex-col justify-end gap-6 px-4
              pb-24 md:pb-28 lg:pb-36
              md:flex-row md:items-end md:gap-8
            "
          >
            {/* Left: Headline + subhead + CTAs */}
            <div className="max-w-2xl">
              <p className="w-fit rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-wider text-slate-300 backdrop-blur">
                About Market Pros LV
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Creative websites, engineered on Next.js
              </h2>
              <p className="mt-3 max-w-xl text-slate-200/90 md:text-lg">
                We’re a web design & marketing studio building high-performance, mobile-first Next.js sites
                with SEO and analytics baked in—so you can see clicks become clients.
              </p>

              {/* CTAs */}
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                {/* Gradient-ring primary with hover glow */}
                <div className="relative group">
                  {/* glow */}
                  <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-cyan-400/20 to-amber-300/20 blur opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Link
                    href="/services"
                    className="relative inline-flex items-center rounded-2xl bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-300 p-[2px] focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                  >
                    <span className="inline-flex items-center gap-2 rounded-[14px] bg-slate-950/80 px-5 py-2.5 font-semibold text-white backdrop-blur transition-colors duration-200 group-hover:bg-transparent">
                      Explore Services <span aria-hidden>↗</span>
                    </span>
                  </Link>
                </div>

                {/* Secondary solid/glass */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                >
                  Book a Free Strategy Call
                </a>
              </div>
            </div>

            {/* Right: Glass stats card */}
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur md:p-5">
              <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-white/10">
                {stats.map((s) => (
                  <div key={s.kpi} className="bg-slate-950/40 p-4 text-center">
                    <div className="text-xl font-extrabold text-white md:text-2xl">{s.kpi}</div>
                    <div className="text-[11px] text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs inside the card (side-by-side on desktop, stack on mobile) */}
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                {/* Futuristic gradient-ring button with glow */}
                <div className="relative group flex-1">
                  <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-cyan-400/20 to-amber-300/20 blur opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Link
                    href="/services"
                    className="relative block rounded-2xl bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-300 p-[2px] text-center focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                  >
                    <span className="block rounded-[14px] bg-slate-950/80 px-5 py-2 font-semibold text-white backdrop-blur transition-colors duration-200 group-hover:bg-transparent">
                      Explore Services
                    </span>
                  </Link>
                </div>

                <a
                  href="#contact"
                  className="flex-1 rounded-2xl bg-indigo-500 px-5 py-2 text-center font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                >
                  Free Strategy Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars row */}
      <div
        className="
          mx-auto max-w-7xl px-4
          -mt-6 md:-mt-4 lg:mt-6
          pb-10
        "
      >
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
            >
              <div className="text-2xl">{v.icon}</div>
              <h3 className="mt-2 text-base font-semibold text-white">{v.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* “Powered by Next.js” strip */}
      <div className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-slate-200">
              ⚙️ Powered by Next.js
            </span>
            {nextPillars.map((p) => (
              <span key={p} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-slate-300">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
