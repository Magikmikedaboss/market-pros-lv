"use client";

import { useEffect, useRef, useState } from "react";

type Testimonial = { quote: string; name: string; role: string; rating: number };
type Props = { testimonials: ReadonlyArray<Testimonial> };

export default function TestimonialsRail({ testimonials }: Props) {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [railWidth, setRailWidth] = useState(0);

  // Cache the visible width only (contentRect.width), and re-run if container resizes.
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setRailWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scrollRail = (dir: "prev" | "next") => {
    const el = railRef.current;
    if (!el) return;
    const delta = (dir === "next" ? 1 : -1) * Math.max(railWidth * 0.9, 240);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="mb-3 flex items-center justify-end gap-2" aria-hidden={testimonials.length < 2}>
        <button
          type="button"
          onClick={() => scrollRail("prev")}
          className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollRail("next")}
          className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>

      {/* Rail (scrolls on mobile, static stack on lg+) */}
      <div
        ref={railRef}
        role="region"
        aria-label="Client testimonials"
        className="
          -mx-2 px-2           /* guard rails so the first/last card aren't cut off */
          flex snap-x snap-mandatory gap-3
          max-w-full overflow-x-auto overscroll-x-contain
          pb-2
          no-scrollbar         /* optional: hide OS scrollbars (see CSS below) */
          lg:mx-0 lg:px-0
          lg:grid lg:grid-cols-1 lg:gap-6 lg:overflow-visible lg:snap-none
        "
      >
        {testimonials.map((t) => (
          <figure
            key={`${t.name}-${t.role}`}
            className="
              min-w-[85%] sm:min-w-[70%] md:min-w-[55%]   /* readable cards on phones */
              snap-start rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur
              lg:min-w-0                                   /* ensure no overflow on lg+ */
            "
          >
            {/* Decorative quote & rating */}
            <div className="flex items-center justify-between">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-white/20" aria-hidden="true">
                <path d="M7.17 6C4.87 6 3 7.87 3 10.17c0 1.85 1.12 3.42 2.71 4.06L5 21h6v-8H7.2c-.67 0-1.2-.53-1.2-1.2V10c0-1.57 1.27-2.83 2.83-2.83H10V6H7.17zm9 0C13.87 6 12 7.87 12 10.17c0 1.85 1.12 3.42 2.71 4.06L14 21h6v-8h-3.8c-.67 0-1.2-.53-1.2-1.2V10c0-1.57 1.27-2.83 2.83-2.83H19V6h-2.83z" />
              </svg>
              <Stars count={t.rating} />
            </div>

            <blockquote className="mt-3 text-slate-200">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-slate-400">
              — {t.name}, {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ---------- small helpers ---------- */

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span role="img" aria-label={`${count} out of 5 stars`} className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg
          key={idx}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${idx < count ? "text-amber-300" : "text-white/20"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 2l2.39 4.85 5.36.78-3.88 3.78.92 5.35L10 14.9l-4.79 2.5.92-5.35L2.25 7.63l5.36-.78L10 2z" />
        </svg>
      ))}
    </span>
  );
}
