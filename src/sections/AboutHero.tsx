import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
// ✅ static import from src/assets gives width/height + blur placeholder
import heroImg from "@/assets/hero/futuristic-web-design-developer-office.jpg";

export default function AboutHero() {
  const BRAND = "Webcraft Lab";
  const BRAND_SHOUT = "Webcraft LAB";
  const SERVICE_AREA = "Las Vegas, NV";

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND,
    areaServed: SERVICE_AREA,
    url: "https://your-domain.com", // TODO: set your live domain
    description:
      "Webcraft Lab builds high-performance Next.js websites with local SEO and measurable marketing for small businesses in Las Vegas.",
  };

  return (
    <section id="about" className="relative w-full overflow-hidden scroll-mt-24">
      {/* Hero container */}
      <div className="relative h-[560px] w-full md:h-[620px] lg:h-[700px]">
        <Image
          src={heroImg}
          alt="Modern web design & development studio"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          placeholder="blur"             /* ✅ tiny base64 blur, no extra request */
          className="object-cover"
        />
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/55 to-transparent" />

        {/* Centered content */}
        <div className="absolute inset-0 grid place-items-center px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mx-auto w-fit rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] uppercase tracking-wider text-slate-300 backdrop-blur">
              About {BRAND}
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
              <span className="font-extrabold">{BRAND_SHOUT.split(" ")[0]} </span>
              <span className="font-extrabold shimmer">{BRAND_SHOUT.split(" ")[1]}</span>{" "}
              — Las Vegas Web Design &amp; Marketing
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-200/90 md:text-lg">
              <span className="font-semibold text-white">{BRAND}</span> ships fast, mobile-first Next.js websites with
              local SEO and analytics built in—so <span className="font-semibold text-white">clicks turn into clients</span>.
              Clean structure, strong fundamentals, and measurable funnels.
            </p>

            {/* CTAs (tracked by your global click tracker if present) */}
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <div className="group relative">
                <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-500/30 via-cyan-400/25 to-amber-300/20 blur opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Link
                  href="/#contact"
                  className="relative inline-flex items-center rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-400 to-teal-300 p-[2px]"
                  aria-label="Book a free strategy call"
                  data-track='{"event":"cta_click","placement":"about_primary"}'
                >
                  <span className="inline-flex items-center gap-2 rounded-[14px] bg-slate-950/80 px-6 py-3 font-semibold text-white backdrop-blur transition-colors duration-200 group-hover:bg-transparent">
                    Book a Free Strategy Call <span aria-hidden>↗</span>
                  </span>
                </Link>
              </div>

              <Link
                href="/#services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                aria-label="Explore our services"
                data-track='{"event":"cta_click","placement":"about_secondary"}'
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SEO JSON-LD */}
      <Script id="about-org-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgJsonLd)}
      </Script>
    </section>
  );
}
