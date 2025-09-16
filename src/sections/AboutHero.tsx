"use client";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function AboutHero() {
  const BRAND = "Webcraft Lab";
  const BRAND_SHOUT = "Webcraft LAB"; // for headline styling
  const SERVICE_AREA = "Las Vegas, NV";
  const bg = "/futuristic-web-design-developer-office.jpg"; // keep in /public

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND,
    areaServed: SERVICE_AREA,
    url: "https://your-domain.com", // TODO
    description:
      "Webcraft Lab builds high-performance Next.js websites with local SEO and measurable marketing for small businesses in Las Vegas.",
  };

  return (
    <section id="about" className="relative mx-auto max-w-[100rem] scroll-mt-24 px-0 py-0">
      {/* Hero */}
      <div className="relative h-[560px] w-full overflow-hidden md:h-[620px] lg:h-[700px]">
        <Image
          src={bg}
          alt="Modern web design & development studio"
          fill
          priority
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

            {/* Headline uses brand and shimmer on LAB */}
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
              <span className="font-extrabold">{BRAND_SHOUT.split(" ")[0]} </span>
              <span className="font-extrabold shimmer">
                {BRAND_SHOUT.split(" ")[1]}
              </span>{" "}
              — Las Vegas Web Design & Marketing
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-200/90 md:text-lg">
              <span className="font-semibold text-white">{BRAND}</span> ships fast, mobile-first Next.js websites with
              local SEO and analytics built in—so{" "}
              <span className="font-semibold text-white">clicks turn into clients</span>. Clean structure, strong
              fundamentals, and measurable funnels.
            </p>

            {/* CTAs — gradient ring primary + glass secondary */}
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              {/* Primary with gradient ring + glow */}
              <div className="group relative">
                <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-500/30 via-cyan-400/25 to-amber-300/20 blur opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Link
                  href="/#contact" /* works from any route */
                  className="relative inline-flex items-center rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-400 to-teal-300 p-[2px]"
                  aria-label="Book a free strategy call"
                >
                  <span className="inline-flex items-center gap-2 rounded-[14px] bg-slate-950/80 px-6 py-3 font-semibold text-white backdrop-blur transition-colors duration-200 group-hover:bg-transparent">
                    Book a Free Strategy Call <span aria-hidden>↗</span>
                  </span>
                </Link>
              </div>

              {/* Secondary glass button */}
              <Link
                href="/#services" /* change to "#services" if this is rendered on the home route */
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                aria-label="Explore our services"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <Script id="about-org-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgJsonLd)}
      </Script>

      {/* Shimmer effect (matches your hero) */}
      <style jsx>{`
        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.85) 0%,
            #00e0ff 35%,
            #ffffff 50%,
            #22c55e 65%,
            rgba(255, 255, 255, 0.85) 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shine 2.5s linear infinite;
        }
        @keyframes shine {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
}
