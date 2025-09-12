export default function CaseStudySection() {
  const caseStudy = {
    client: "Local Service Brand",
    goal: "Increase booked calls in 60 days",
    steps: ["Site rebuild (Next.js)", "Local SEO tune-up", "Call tracking & analytics"],
    metrics: [
      { label: "Calls", value: "+72%" },
      { label: "Organic traffic", value: "+38%" },
      { label: "LCP", value: "1.2s" },
    ],
  };
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-amber-300/90 text-sm">Case Study</div>
            <h3 className="mt-1 text-2xl font-bold">{caseStudy.client}</h3>
            <p className="mt-2 text-slate-300">Goal: {caseStudy.goal}</p>
            <ul className="mt-4 list-inside list-disc text-slate-300">
              {caseStudy.steps.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10">
            {caseStudy.metrics.map((m) => (
              <div key={m.label} className="bg-slate-900/60 p-6 text-center">
                <div className="text-3xl font-extrabold">{m.value}</div>
                <div className="text-sm text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
