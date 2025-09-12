"use client";
import { track } from "@/lib/analytics";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/30 via-cyan-400/20 to-amber-300/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        {/* Kicker: tiny wording tweak */}
        <p className="mx-auto w-fit rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wider text-slate-300">
          Web Design & Development • SEO • Marketing
        </p>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
          Build. Rank. Convert.
        </h1>

        {/* Subhead: slightly longer, clearer summary */}
        <p className="mx-auto mt-4 max-w-3xl text-slate-300">
          We’re a web design & marketing company that delivers high-performance, mobile-first Next.js websites
          and search/ads that turn clicks into clients—fast turnarounds and friendly, 5-star support.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            onClick={() => track("cta_click", { placement: "hero_primary" })}
            className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold hover:bg-indigo-400"
          >
            Book Free Call
          </a>
          <a
            href="#services"
            onClick={() => track("cta_click", { placement: "hero_secondary" })}
            className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/10"
          >
            See What We Do
          </a>
        </div>
      </div>
    </section>
  );
}
