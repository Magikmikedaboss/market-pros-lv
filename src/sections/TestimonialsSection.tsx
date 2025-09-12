export default function TestimonialsSection() {
  const testimonials = [
    { quote: "Leads doubled in six weeks. The site is fast and our phones ring.", name: "Dana C.", role: "Owner, Chelin Law" },
    { quote: "Map Pack jumped to top 3 after the rebuild.", name: "Mike S.", role: "Founder, PRO Handyman" },
    { quote: "Clean funnel and clear tracking—now ROAS makes sense.", name: "J. Rivera", role: "Events Director" },
  ];
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-bold">Clients say</h3>
        <p className="mt-2 text-slate-300">Proof beats promises.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-slate-200">“{t.quote}”</p>
            <footer className="mt-4 text-sm text-slate-400">— {t.name}, {t.role}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
