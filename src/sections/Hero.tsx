"use client";
import Link from "next/link";
import { track } from "@/lib/analytics";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/30 via-cyan-400/20 to-amber-300/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:py-28 lg:py-32">
        {/* Eyebrow */}
        <p className="mx-auto w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-slate-300">
          Web Design &amp; Development • SEO • Marketing
        </p>

        {/* Brand */}
        <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl" aria-label="Webcraft Lab">
          Webcraft <span className="font-extrabold shimmer">LAB</span>
        </h1>

        {/* Catchphrase */}
        <p className="mt-2 text-lg font-semibold text-white md:text-2xl">Build. Rank. Convert.</p>

        {/* Subhead */}
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 md:text-lg">
          <span className="font-semibold text-white">Webcraft Lab</span> builds high-performance Next.js websites with local SEO
          and conversion tracking—so you can see <span className="font-semibold text-white">clicks turn into clients</span>. Fast
          turnarounds and friendly, 5-star support.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          {/* Primary: filled gradient */}
          <Link
            href="#contact"
            onClick={() => track("cta_click", { placement: "hero_primary" })}
            className="group relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-300 p-[2px] focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            aria-label="Book a free strategy call with Webcraft Lab"
          >
            <span className="inline-flex items-center gap-2 rounded-[14px] bg-slate-950/80 px-6 py-3 font-semibold text-white backdrop-blur transition-colors duration-200 group-hover:bg-transparent">
              Book Free Call <span aria-hidden>↗</span>
            </span>
          </Link>

          {/* Secondary: gradient ring + glow → ABOUT section */}
          <div className="relative group">
            <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500/30 via-cyan-400/20 to-amber-300/20 blur opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Link
              href="#about"
              onClick={() => track("cta_click", { placement: "hero_secondary" })}
              className="relative inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              aria-label="See what we do"
            >
              See What We Do
            </Link>
          </div>

          {/* Tertiary: soft glass button → WHY US page */}
          <Link
            href="/why-choose-us"
            onClick={() => track("cta_click", { placement: "hero_tertiary" })}
            className="inline-flex items-center justify-center rounded-2xl bg-white/8 px-6 py-3 font-semibold text-white ring-1 ring-inset ring-white/15 transition hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            aria-label="Learn why clients choose Webcraft Lab"
          >
            Why Choose Us
          </Link>
        </div>

        {/* Trust line */}
        <p className="mx-auto mt-5 max-w-xl text-xs text-slate-400">
          90%+ Core Web Vitals pass • 2–4 week starters • &lt;24h weekday response
        </p>
      </div>

      {/* Shimmer effect */}
      <style jsx>{`
        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.7) 0%,
            #00e0ff 35%,
            #ffffff 50%,
            #ff3ea5 65%,
            rgba(255, 255, 255, 0.7) 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shine 2.5s linear infinite;
        }
        @keyframes shine {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
}
