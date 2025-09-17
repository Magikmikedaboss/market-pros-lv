"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Item = { href: string; label: string; track: Record<string, unknown> };

export default function MobileMenu({ navItems }: { navItems: Item[] }) {
  const [open, setOpen] = useState(false);

  // Lock page scroll when menu is open
  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = open ? "hidden" : prev || "";
    return () => { document.documentElement.style.overflow = prev || ""; };
  }, [open]);

  return (
    <>
      <button
        className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/10 md:hidden"
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((s) => !s)}
        data-track='{"event":"menu_toggle","placement":"nav_mobile"}'
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
          )}
        </svg>
      </button>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {navItems.map((i) => (
                <Link key={i.label} href={i.href} prefetch={false}
                      className="rounded-lg px-2 py-2 text-slate-200 transition hover:bg-white/10"
                      data-track={JSON.stringify({ ...i.track, device: "mobile" })}
                      onClick={() => setOpen(false)}>
                  {i.label}
                </Link>
              ))}
              <Link href="/#contact" prefetch={false}
                    className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-400 p-[2px]"
                    data-track='{"event":"cta_click","placement":"nav_mobile"}'
                    onClick={() => setOpen(false)}>
                <span className="block w-full rounded-[10px] bg-slate-950/80 px-4 py-2 font-semibold text-white backdrop-blur transition-colors hover:bg-transparent">
                  Free Strategy Call
                </span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
