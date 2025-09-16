import Image from "next/image";
import Link from "next/link";

export default function SocialProofSection() {
  // Optional: swap for real logos in /public
  const logos = [
    { src: "/logo-chelinlaw.svg", alt: "Chelin Law" },
    { src: "/logo-pro-handyman.svg", alt: "PRO Handyman" },
    { src: "/logo-eventsco.svg", alt: "Events Co" },
    { src: "/logo-summit-dental.svg", alt: "Summit Dental" },
    { src: "/logo-lv-retail.svg", alt: "LV Retail" },
  ];

  const caseStudy = {
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
  };

  const testimonials = [
    { quote: "Leads doubled in six weeks. The site is fast and our phones ring.", name: "Dana C.", role: "Owner, Chelin Law", rating: 5 },
    { quote: "Map Pack jumped to top 3 after the rebuild.", name: "Mike S.", role: "Founder, PRO Handyman", rating: 5 },
    { quote: "Clean funnel and clear tracking—now ROAS makes sense.", name: "J. Rivera", role: "Events Director", rating: 5 },
  ];

  return (
    <section id="proof" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-20" aria-labelledby="proof-heading">
      {/* Soft background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-25%] h-[740px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/25 via-cyan-400/15 to-amber-300/10 blur-3xl" />
      </div>

      {/* Header */}
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 id="proof-heading" className="bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
          Results our clients feel
        </h2>
        <p className="mt-2 text-slate-300">Case studies, metrics, and real words from real customers.</p>
      </div>

      {/* Logos strip (optional) */}
      {logos.length > 0 && (
        <div className="mx-auto mb-10 max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-3 backdrop-blur">
            <div className="grid grid-cols-2 items-center justify-items-center gap-6 px-2 sm:grid-cols-3 md:grid-cols-5">
              {logos.map((l) => (
                <div key={l.alt} className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
                  <Image
                    src={l.src}
                    alt={l.alt}
                    width={140}
                    height={36}
                    loading="lazy"
                    className="h-9 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        {/* Case study spotlight (now side-by-side on md+) */}
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur lg:col-span-3">
          <div className="grid items-stretch md:grid-cols-2">
            {/* Visual */}
            <div className="relative h-52 w-full md:h-auto">
              <Image
                src={caseStudy.bg}
                alt="Case study visual"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent md:bg-gradient-to-r md:from-slate-950/70 md:via-slate-950/30 md:to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-semibold text-amber-200 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                {caseStudy.tag}
              </span>
            </div>

            {/* Copy */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold">{caseStudy.client}</h3>
              <p className="mt-2 text-slate-300">
                <span className="font-semibold text-white">Goal:</span> {caseStudy.goal}
              </p>

              <ul className="mt-4 grid gap-2 text-slate-300 sm:grid-cols-2">
                {caseStudy.steps.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {s}
                  </li>
                ))}
              </ul>

              {/* Metric tiles */}
              <div className="mt-6 grid grid-cols-3 gap-2">
                {caseStudy.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-center">
                    <div className="text-xl font-extrabold text-white md:text-2xl">{m.value}</div>
                    <div className="text-[11px] text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="group relative">
                  <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-cyan-400/20 to-amber-300/20 blur opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Link
                    href="/#contact"
                    className="relative inline-flex items-center rounded-2xl bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-300 p-[2px]"
                  >
                    <span className="inline-flex items-center gap-2 rounded-[14px] bg-slate-950/80 px-5 py-2.5 font-semibold text-white backdrop-blur transition-colors duration-200 group-hover:bg-transparent">
                      Book a similar plan <span aria-hidden>↗</span>
                    </span>
                  </Link>
                </div>

                <Link
  href="/#proof"   // ✅ was "/#work"
  className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
>
  More results
</Link>

              </div>
            </div>
          </div>
        </article>

        {/* Testimonials rail (snap on mobile → grid on desktop) */}
        <aside className="lg:col-span-2">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-1 lg:gap-6 lg:overflow-visible">
            {testimonials.map((t) => (
              <figure
                key={`${t.name}-${t.role}`}
                className="min-w-[85%] snap-start rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur sm:min-w-[70%] md:min-w-[55%] lg:min-w-0"
              >
                {/* Decorative quote & rating */}
                <div className="flex items-center justify-between">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-white/20" aria-hidden>
                    <path d="M7.17 6C4.87 6 3 7.87 3 10.17c0 1.85 1.12 3.42 2.71 4.06L5 21h6v-8H7.2c-.67 0-1.2-.53-1.2-1.2V10c0-1.57 1.27-2.83 2.83-2.83H10V6H7.17zm9 0C13.87 6 12 7.87 12 10.17c0 1.85 1.12 3.42 2.71 4.06L14 21h6v-8h-3.8c-.67 0-1.2-.53-1.2-1.2V10c0-1.57 1.27-2.83 2.83-2.83H19V6h-2.83z" />
                  </svg>
                  <Stars count={t.rating} />
                </div>

                <blockquote className="mt-3 text-slate-200">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-slate-400">— {t.name}, {t.role}</figcaption>
              </figure>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ---------- small helpers ---------- */

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg
          key={idx}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${idx < count ? "text-amber-300" : "text-white/20"}`}
          fill="currentColor"
          aria-hidden
        >
          <path d="M10 2l2.39 4.85 5.36.78-3.88 3.78.92 5.35L10 14.9l-4.79 2.5.92-5.35L2.25 7.63l5.36-.78L10 2z" />
        </svg>
      ))}
    </div>
  );
}
