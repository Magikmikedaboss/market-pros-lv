export default function PricingSection() {
  const pricing = [
    { name: "Starter", price: "$1,500", blurb: "Launch-ready one-pager", items: ["Modern landing page", "Mobile-first", "Contact form", "Basic SEO"], cta: "Get Starter" },
    { name: "Business", price: "$3,500", blurb: "Small site that sells", items: ["Up to 6 pages", "Blog setup", "Local SEO setup", "Analytics + pixels"], highlight: true, cta: "Choose Business" },
    { name: "Growth", price: "Custom", blurb: "Scale with ads & funnels", items: ["Strategy + wireframes", "CMS/CRM integration", "Ad campaigns", "A/B testing"], cta: "Book a Call" },
  ];
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Simple pricing</h2>
        <p className="mt-2 text-slate-300">Pick a plan that matches your momentum.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {pricing.map((p) => (
          <div key={p.name} className={`rounded-2xl border p-6 ${p.highlight ? "border-indigo-400 bg-indigo-400/10" : "border-white/10 bg-white/5"}`}>
            <div className="text-sm text-slate-300">{p.name}</div>
            <div className="mt-1 text-3xl font-extrabold">{p.price}</div>
            <p className="mt-2 text-sm text-slate-300">{p.blurb}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {p.items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />{it}
                </li>
              ))}
            </ul>
            <a href="#contact" className={`mt-6 inline-block rounded-xl px-4 py-2 font-semibold ${p.highlight ? "bg-indigo-500 hover:bg-indigo-400" : "border border-white/15 hover:bg-white/10"}`}>
              {p.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
