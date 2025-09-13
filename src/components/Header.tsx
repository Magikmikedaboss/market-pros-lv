"use client";

import { useState } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/#about", label: "About", to: "about" },
    { href: "/#services", label: "Services", to: "services" },
    { href: "/#work", label: "Work", to: "work" },
    { href: "/pricing", label: "Pricing", to: "pricing-page" }, // ← go to full page
    { href: "/#contact", label: "Contact", to: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/#home" className="flex items-center gap-2" onClick={() => track("nav_click", { to: "home" })}>
          <span className="inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-400" />
          <div className="font-bold tracking-tight">Market Pros LV</div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-white"
              onClick={() => track("nav_click", { to: item.to })}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          onClick={() => track("cta_click", { placement: "nav" })}
          className="hidden rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold hover:bg-indigo-400 md:inline-block"
        >
          Free Strategy Call
        </Link>

        {/* Mobile hamburger */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {/* Icon */}
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-2 py-2 text-slate-200 hover:bg-white/10"
                  onClick={() => {
                    setOpen(false);
                    track("nav_click", { to: item.to, device: "mobile" });
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-indigo-500 px-4 py-2 font-semibold text-white hover:bg-indigo-400"
                onClick={() => {
                  setOpen(false);
                  track("cta_click", { placement: "nav_mobile" });
                }}
              >
                Free Strategy Call
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
