export default function SeoServicesSection() {
  const items = [
    {
      icon: "🛒",
      title: "E-Commerce SEO",
      desc:
        "Optimize collections and product pages to grow organic traffic, improve rankings, and lift add-to-cart and revenue.",
    },
    {
      icon: "📍",
      title: "Local SEO",
      desc:
        "Customized local strategy: on-page fixes, citations, Google Business Profile, and review flow to win the Map Pack.",
    },
    {
      icon: "🌎",
      title: "National SEO",
      desc:
        "Compete across the country with research-driven content, technical fixes, and authority building at scale.",
    },
    {
      icon: "🔗",
      title: "Link Building",
      desc:
        "White-hat outreach and digital PR to earn credible links that signal trust and relevance to search engines.",
    },
    {
      icon: "✍️",
      title: "SEO Content Writing",
      desc:
        "Editorial plans, briefs, and on-brand copy that targets opportunities and upgrades existing pages for quick wins.",
    },
    {
      icon: "🤖",
      title: "Generative Engine Optimization (GEO)",
      desc:
        "Prepare your site for AI/Generative results with structured data, entity optimization, and answer-ready content.",
    },
  ];

  const metrics = [
    { label: "Avg. LCP", value: "≤1.8s" },
    { label: "Core Web Vitals", value: "90%+" },
    { label: "Click-to-Lead", value: "↑" },
  ];

  return (
    <section id="advanced-seo" className="mx-auto max-w-7xl px-4 py-20">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          Advanced SEO Services <span className="text-indigo-400">Proven to Grow Your Business</span>
        </h2>
        <p className="mt-3 text-slate-300">
          Our advanced SEO programs align with your goals and your market—no guesswork, just measurable growth.
        </p>
      </div>

      {/* Service cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <div className="text-3xl">{it.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{it.desc}</p>
          </div>
        ))}
      </div>

      {/* Technology / proof block */}
      <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/0">
        <div className="grid items-stretch gap-0 md:grid-cols-2">
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-bold">Remove the Guesswork with Our Predictive SEO Engine</h3>
            <p className="mt-2 text-slate-300">
              Our approach uses predictive crawling and competitive analysis to anticipate ranking shifts and prioritize the
              highest-impact updates across technical, content, and authority.
            </p>
            <ul className="mt-4 list-inside list-disc text-slate-300">
              <li>Forecast opportunities and protect winning pages</li>
              <li>Spot entity gaps and schema opportunities</li>
              <li>Continuously test and iterate for compounding gains</li>
            </ul>

            {/* Simple metrics */}
            <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-xl border border-white/10">
              {metrics.map((m) => (
                <div key={m.label} className="bg-slate-900/60 p-4 text-center">
                  <div className="text-xl font-extrabold">{m.value}</div>
                  <div className="text-xs text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-indigo-500 px-5 py-2 font-semibold hover:bg-indigo-400"
              >
                Get an SEO Game Plan
              </a>
              <a
                href="#work"
                className="rounded-xl border border-white/15 px-5 py-2 font-semibold hover:bg-white/10"
              >
                See Case Studies
              </a>
            </div>
          </div>

          {/* Image / visual side (replace with your screenshot) */}
          <div className="relative min-h-[280px] bg-slate-900/40">
            <img
              src="https://images.unsplash.com/photo-1551281044-8d8e5f1fbe39?q=80&w=1600&auto=format&fit=crop"
              alt="SEO dashboard preview"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
          </div>
        </div>
      </div>

      {/* Small note / CTA */}
      <p className="mt-6 text-center text-sm text-slate-400">
        Want the tech deep-dive?{" "}
        <a href="#contact" className="underline decoration-slate-500 underline-offset-4 hover:text-white">
          Learn more about our approach
        </a>
        .
      </p>
    </section>
  );
}
