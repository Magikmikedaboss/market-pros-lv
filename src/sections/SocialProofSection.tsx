import Image from "next/image";
import Link from "next/link";

export default function SocialProofSection() {
  const caseStudy = {
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
    { quote: "Leads doubled in six weeks. The site is fast and our phones ring.", name: "Dana C.", role: "Owner, Chelin Law" },
    { quote: "Map Pack jumped to top 3 after the rebuild.", name: "Mike S.", role: "Founder, PRO Handyman" },
    { quote: "Clean funnel and clear tracking—now ROAS makes sense.", name: "J. Rivera", role: "Events Director" },
  ];

  return (
    <section id="proof" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-25%] h-[740px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/25 via-cyan-400/15 to-amber-300/10 blur-3xl" />
      </div>

      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">Results our clients feel</h2>
        <p className="mt-2 text-slate-300">Case studies + real words from real customers.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur lg:col-span-3">
          <div className="relative h-48 w-full">
            <Image src={caseStudy.bg} alt="Case study visual" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-transparent" />
          </div>

          <div className="p-6 md:p-8">
            <div className="text-amber-300/90 text-sm">Case Study</div>
            <h3 className="mt-1 text-2xl font-bold">{caseStudy.client}</h3>
            <p className="mt-2 text-slate-300">Goal: {caseStudy.goal}</p>

            <ul className="mt-4 grid gap-2 text-slate-300 sm:grid-cols-2">
              {caseStudy.steps.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-xl border border-white/10">
              {caseStudy.metrics.map((m) => (
                <div key={m.label} className="bg-slate-900/60 p-5 text-center">
                  <div className="text-2xl font-extrabold">{m.value}</div>
                  <div className="text-xs text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>

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
                href="/#work"
                className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
              >
                More results
              </Link>
            </div>
          </div>
        </article>

        <aside className="grid gap-6 lg:col-span-2">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-slate-200">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-400">
                — {t.name}, {t.role}
              </footer>
            </blockquote>
          ))}
        </aside>
      </div>
    </section>
  );
}
