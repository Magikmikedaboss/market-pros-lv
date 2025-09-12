"use client";

declare global {
  interface Window { gtag?: (...args: any[]) => void }
}

export default function AgencyLanding() {
  const track = (event: string, params: Record<string, any> = {}) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", event, params);
    }
  };

  const services = [
    { title: "Web Design & Dev", desc: "Next.js, Tailwind, blazing-fast sites with SEO built in.", icon: "💻" },
    { title: "Local SEO", desc: "Map Pack wins, on-page, citations, and reviews strategy.", icon: "📍" },
    { title: "Brand & Identity", desc: "Logos, style guides, and conversion-first messaging.", icon: "🎨" },
    { title: "Ads & Funnels", desc: "Google & Meta campaigns with landing pages that convert.", icon: "🚀" }
  ];

  const projects = [
    { title: "Chelin Law", tag: "Legal", img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop" },
    { title: "Mike's PRO Handyman", tag: "Home Services", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop" },
    { title: "Ravehouse Entertainment", tag: "Events", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop" },
  ];

  const pricing = [
    { name: "Starter", price: "$1,500", blurb: "Launch-ready one-pager", items: ["Modern landing page", "Mobile-first", "Contact form", "Basic SEO"], cta: "Get Starter" },
    { name: "Business", price: "$3,500", blurb: "Small site that sells", items: ["Up to 6 pages", "Blog setup", "Local SEO setup", "Analytics + pixels"], highlight: true, cta: "Choose Business" },
    { name: "Growth", price: "Custom", blurb: "Scale with ads & funnels", items: ["Strategy + wireframes", "CMS/CRM integration", "Ad campaigns", "A/B testing"], cta: "Book a Call" },
  ];

  const testimonials = [
    { quote: "Leads doubled in six weeks. The site is fast and our phones ring.", name: "Dana C.", role: "Owner, Chelin Law" },
    { quote: "They rebuilt our homepage and Map Pack rankings jumped to top 3.", name: "Mike S.", role: "Founder, Mike's PRO Handyman" },
    { quote: "Clean funnel, clear tracking, ROAS finally makes sense.", name: "J. Rivera", role: "Events Director" },
  ];

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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2" onClick={() => track('nav_click', {to: 'home'})}>
            <span className="inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-400" />
            <div className="font-bold tracking-tight">Market Pros LV</div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-slate-300">
            <a href="#services" className="hover:text-white" onClick={() => track('nav_click', {to: 'services'})}>Services</a>
            <a href="#work" className="hover:text-white" onClick={() => track('nav_click', {to: 'work'})}>Work</a>
            <a href="#pricing" className="hover:text-white" onClick={() => track('nav_click', {to: 'pricing'})}>Pricing</a>
            <a href="#contact" className="hover:text-white" onClick={() => track('nav_click', {to: 'contact'})}>Contact</a>
          </nav>
          <a href="#contact" onClick={() => track('cta_click', {placement:'nav'})} className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold hover:bg-indigo-400">Free Strategy Call</a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/30 via-cyan-400/20 to-amber-300/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 text-center">
          <p className="mx-auto w-fit rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wider text-slate-300">
            Web Development • SEO • Funnels
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">Build. Rank. Convert.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">We craft high-performance websites and local marketing systems that turn clicks into clients.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" onClick={() => track('cta_click', {placement:'hero_primary'})} className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold hover:bg-indigo-400">Book Free Call</a>
            <a href="#work" onClick={() => track('cta_click', {placement:'hero_secondary'})} className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/10">See Our Work</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">What we do</h2>
          <p className="mt-2 text-slate-300">Full-stack growth for local and online businesses.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/0 p-8">
          <h3 className="text-2xl font-bold">Proven process</h3>
          <ol className="mt-4 grid gap-6 md:grid-cols-4">
            {[
              {t:"Discover", d:"Goals, audience, offers"},
              {t:"Design", d:"Wireframes, UI, copy"},
              {t:"Build", d:"Next.js, CMS, analytics"},
              {t:"Grow", d:"SEO, ads, testing"}
            ].map((step,i)=> (
              <li key={i} className="rounded-xl border border-white/10 p-4">
                <div className="text-sm text-slate-400">Step {i+1}</div>
                <div className="text-lg font-semibold">{step.t}</div>
                <p className="text-sm text-slate-300">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Recent work</h2>
            <p className="mt-2 text-slate-300">A few projects we can talk about.</p>
          </div>
          <a href="#contact" onClick={() => track('cta_click', {placement:'work_header'})} className="hidden rounded-xl border border-white/15 px-4 py-2 font-semibold hover:bg-white/10 md:inline-block">Start your project</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <figure key={p.title} className="group overflow-hidden rounded-2xl border border-white/10">
              <img src={p.img} alt={p.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"/>
              <figcaption className="flex items-center justify-between p-4">
                <div>
                  <div className="text-sm text-amber-300/90">{p.tag}</div>
                  <div className="font-semibold">{p.title}</div>
                </div>
                <span className="text-slate-400">↗</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
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

      {/* MINI CASE STUDY */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-amber-300/90 text-sm">Case Study</div>
              <h3 className="mt-1 text-2xl font-bold">{caseStudy.client}</h3>
              <p className="mt-2 text-slate-300">Goal: {caseStudy.goal}</p>
              <ul className="mt-4 list-inside list-disc text-slate-300">
                {caseStudy.steps.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10">
              {caseStudy.metrics.map(m => (
                <div key={m.label} className="bg-slate-900/60 p-6 text-center">
                  <div className="text-3xl font-extrabold">{m.value}</div>
                  <div className="text-sm text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 text-right">
            <a href="#contact" onClick={() => track('cta_click', {placement:'case_study'})} className="inline-block rounded-xl bg-indigo-500 px-5 py-2 font-semibold hover:bg-indigo-400">Book a similar plan</a>
          </div>
        </div>
      </section>

      {/* PRICING */}
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
                  <li key={it} className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"/>{it}</li>
                ))}
              </ul>
              <a href="#contact" onClick={() => track('cta_click', {placement:'pricing_'+p.name.toLowerCase()})} className={`mt-6 inline-block rounded-xl px-4 py-2 font-semibold ${p.highlight ? "bg-indigo-500 hover:bg-indigo-400" : "border border-white/15 hover:bg-white/10"}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / CALENDLY EMBED */}
      <section id="contact" className="mx-auto max-w-5xl px-4 py-20">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold">Book a free strategy call</h2>
          <p className="mt-2 text-slate-300">Pick a time that works — we’ll review goals and map your next 90 days.</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
          {/* Replace the Calendly URL with your own */}
          <iframe
            title="Strategy Call — Calendly"
            src="https://calendly.com/your-org/strategy-call?hide_event_type_details=1&hide_landing_page_details=1"
            className="h-[720px] w-full"
            onLoad={() => track('calendly_loaded')}
          />
        </div>
        <p className="mt-3 text-center text-sm text-slate-400">No Calendly? <a className="underline" href="#" onClick={() => track('cta_click', {placement:'contact_alt'})}>Use the contact form</a>.</p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-slate-400">© {new Date().getFullYear()} Market Pros LV. All rights reserved.</div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white" onClick={() => track('cta_click', {placement:'footer_contact'})}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
