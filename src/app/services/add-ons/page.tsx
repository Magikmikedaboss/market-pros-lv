import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import QuoteForm, { type ActionState, type QuoteAction } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Add-Ons & Custom Services — Market Pros LV",
  description:
    "Bolt on e-commerce, booking, membership, dashboards, automations, or a site redesign. Get a custom quote tailored to your goals.",
  alternates: { canonical: "https://your-domain.com/services/add-ons" }, // ← update domain
  openGraph: {
    title: "Add-Ons & Custom Services — Market Pros LV",
    description:
      "Online booking, membership portals, e-commerce, dashboards, and automations that save hours. Request a custom quote.",
    url: "https://your-domain.com/services/add-ons",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Add-Ons & Custom Services — Market Pros LV",
    description:
      "Extend your site with revenue-focused features. Send your scope and get a custom quote.",
  },
};

export default function AddOnsPage() {
  const BRAND = "Market Pros LV";
  const SERVICE_AREA = "Las Vegas, NV";

  const bullets = [
    "Online booking (Housecall Pro, Calendly) & CRMs",
    "Members/gated content & client portals",
    "E-commerce (Stripe, Shopify headless) & subscriptions",
    "Dashboards/admin panels for content & events",
    "Automations (API Routes, webhooks, zaps) & AI assist",
    "Website redesigns & migrations",
  ];

  // ---------- Server Action ----------
  const submitQuote: QuoteAction = async (_state: ActionState, formData: FormData) => {
    "use server";

    const payload = {
      name: (formData.get("name") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      phone: (formData.get("phone") || "").toString().trim(),
      company: (formData.get("company") || "").toString().trim(),
      website: (formData.get("website") || "").toString().trim(),
      services: formData.getAll("services").map(String),
      budget: (formData.get("budget") || "").toString(),
      timeline: (formData.get("timeline") || "").toString(),
      message: (formData.get("message") || "").toString().trim(),
      honeypot: (formData.get("extra_field") || "").toString(), // spam trap
    };

    if (!payload.name || !payload.email || payload.honeypot) {
      return { ok: false, error: "Please complete the required fields." };
    }

    // TODO: Send somewhere. Examples:
    // --- Resend email (recommended) ---
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY!);
    // await resend.emails.send({
    //   from: "Add-On Quote <quotes@your-domain.com>",
    //   to: ["you@your-domain.com"],
    //   subject: "New Add-On Quote",
    //   text: JSON.stringify(payload, null, 2),
    // });

    // --- Slack Webhook ---
    // await fetch(process.env.SLACK_WEBHOOK_URL!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ text: `New Add-On Quote:\n${JSON.stringify(payload, null, 2)}` }),
    // });

    console.log("Add-On Quote:", payload); // remove in production
    return { ok: true };
  };
  // ---------- /Server Action ----------

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Website Add-Ons & Custom Development",
        provider: { "@type": "LocalBusiness", name: BRAND, areaServed: SERVICE_AREA },
        areaServed: SERVICE_AREA,
        serviceType: [
          "E-commerce Development",
          "Booking Integrations",
          "Membership & Client Portals",
          "Dashboards & Admin Panels",
          "Automations & AI",
          "Website Redesign",
        ],
        url: "https://your-domain.com/services/add-ons",
        description:
          "Bolt on revenue-focused features: e-commerce, booking, membership, dashboards, automations, and redesigns.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://your-domain.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://your-domain.com/services" },
          { "@type": "ListItem", position: 3, name: "Add-Ons", item: "https://your-domain.com/services/add-ons" },
        ],
      },
    ],
  };

  return (
    <main className="relative">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-16 md:pb-14 md:pt-20">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mx-auto w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-slate-300">
            Add-Ons to Grow Faster
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Custom features that drive revenue & efficiency
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 md:text-lg">
            Bolt on capability—e-commerce, bookings, membership, dashboards, and automations that save hours. Send your scope for a custom quote.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/pricing#add-ons"
              className="rounded-2xl border border-white/20 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            >
              See Add-On Rates
            </Link>
            <Link
              href="/#contact"
              className="rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            >
              Talk to a Specialist
            </Link>
          </div>
          <p className="mx-auto mt-5 max-w-xl text-xs text-slate-400">Next.js • API Routes • Stripe/Shopify • Calendly/CRMs • Zaps & AI</p>
        </header>
      </section>

      {/* What we can add */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Popular add-ons</h2>
          <ul className="mt-4 grid gap-2 text-slate-300 sm:grid-cols-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pricing#add-ons"
              className="rounded-2xl border border-white/15 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
            >
              See Rates
            </Link>
            <Link
              href="#quote"
              className="rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400"
            >
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Quote Form */}
      <section id="quote" className="mx-auto mt-10 max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/0 p-6">
          <h2 className="text-2xl font-semibold">Tell us what you need</h2>
          <p className="mt-2 text-slate-300">
            Share your goals and must-have features. We’ll review and send a scoped plan with options.
          </p>

          <div className="mt-6">
            <QuoteForm action={submitQuote} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto mb-16 mt-10 max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Not sure where to start?</h3>
          <p className="mt-1 text-slate-300">
            Book a quick call—we’ll validate the impact, outline the build, and recommend the most cost-effective path.
          </p>
        <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/#contact" className="rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400">
              Book a Free Strategy Call
            </Link>
            <Link href="/services" className="rounded-2xl border border-white/15 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <Script id="addons-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
    </main>
  );
}
