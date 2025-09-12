export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-20">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold">Book a free strategy call</h2>
        <p className="mt-2 text-slate-300">Pick a time that works — we’ll review goals and map your next 90 days.</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
        <iframe
          title="Strategy Call — Calendly"
          src="https://calendly.com/your-org/strategy-call?hide_event_type_details=1&hide_landing_page_details=1"
          className="h-[720px] w-full"
        />
      </div>
      <p className="mt-3 text-center text-sm text-slate-400">
        Prefer email? <a className="underline" href="mailto:hello@your-domain.com">hello@your-domain.com</a>
      </p>
    </section>
  );
}
