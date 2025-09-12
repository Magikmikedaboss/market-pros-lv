export default function AboutSection() {
 // src/sections/AboutSection.tsx (replace only the values array)
const values = [
  {
    icon: "📱",
    title: "Mobile-First Optimization",
    desc: "Tap-friendly UI, Core Web Vitals tuned, image/CDN best-practices—built for phones first.",
  },
  {
    icon: "🤝",
    title: "5-Star Customer Service",
    desc: "Direct Slack/email access, proactive weekly updates, and <24h weekday response times.",
  },
  {
    icon: "⚡",
    title: "Fast Turnarounds",
    desc: "2–4 week starter sites and 4–8 week business builds with visible progress every few days.",
  },
];


  const stats = [
    { kpi: "90%+", label: "Core Web Vitals pass" },
    { kpi: "50–200%", label: "Typical lead lift" },
    { kpi: "100+", label: "Pages shipped" },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-20">
      {/* soft glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/20 via-cyan-400/10 to-amber-300/5 blur-3xl" />
      </div>

      {/* Header row */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-wider text-slate-400">About Us</p>
        <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
          We build websites that turn clicks into clients
        </h2>
        <p className="mt-4 text-slate-300">
          Market Pros LV is a web design, development, and SEO studio. We ship fast Next.js websites, win
          local search, and track what actually drives calls and revenue—no fluff.
        </p>
      </div>

      {/* Main split: mission + image */}
      <div className="mt-12 grid items-start gap-8 md:grid-cols-2">
        {/* Mission card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7">
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">🚀</span>
            <div>
              <h3 className="text-lg font-semibold">Our mission</h3>
              <p className="mt-2 text-slate-300">
                Make world-class web performance and marketing simple, measurable, and accessible to growing
                businesses—without enterprise complexity.
              </p>
            </div>
          </div>

          {/* Values grid */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="group h-full rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <div className="text-2xl">{v.icon}</div>
                <h4 className="mt-3 text-sm font-semibold">{v.title}</h4>
                <p className="mt-1 text-xs text-slate-300">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Stat strip */}
          <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-xl border border-white/10">
            {stats.map((s) => (
              <div key={s.kpi} className="bg-slate-900/60 p-5 text-center">
                <div className="text-xl font-extrabold md:text-2xl">{s.kpi}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block rounded-xl bg-indigo-500 px-5 py-2 font-semibold hover:bg-indigo-400"
            >
              Book a Free Strategy Call
            </a>
          </div>
        </div>

        {/* Visual card */}
        <figure className="relative overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/futuristic-web-design-developer-office.jpg" // place a real image in /public
            alt="Our team at work"
            className="h-full w-full object-cover"
          />
          <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
          {/* floating badge */}
          <div className="absolute bottom-4 right-4 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 text-xs text-slate-200 backdrop-blur">
            Next.js • Tailwind • GA4
          </div>
        </figure>
      </div>
    </section>
  );
}
