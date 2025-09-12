export default function ServicesFAQ() {
  const faqs = [
    { q: "Do you build SEO-friendly websites?", a: "Yes. We use Next.js, semantic HTML, schema, and on-page SEO so your site can rank and convert." },
    { q: "How long does a project take?", a: "Starter sites 2–4 weeks; Business sites 4–8 weeks depending on content and integrations." },
    { q: "Do you run ads?", a: "Yes. We run Google & Meta campaigns and build landing pages with conversion tracking." },
    { q: "What industries do you serve?", a: "Local services, legal, home services, e-commerce, and events—plus other SMBs." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-3xl font-bold md:text-4xl">FAQs</h2>
      <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10">
        {faqs.map((f) => (
          <details key={f.q} className="group p-5 open:bg-white/5">
            <summary className="cursor-pointer list-none text-lg font-semibold">{f.q}</summary>
            <p className="mt-2 text-slate-300">{f.a}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
