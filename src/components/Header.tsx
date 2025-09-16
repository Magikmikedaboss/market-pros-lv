"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { track } from "@/lib/analytics";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/#about", label: "About", to: "about" },
    { href: "/#services", label: "Services", to: "services" },
    { href: "/#proof", label: "Work", to: "proof" },
    { href: "/pricing", label: "Pricing", to: "pricing-page" },
    { href: "/#contact", label: "Contact", to: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link
          href="/#home"
          className="flex items-center gap-2"
          onClick={() => track("nav_click", { to: "home" })}
          aria-label="Go to Webcraft Lab home"
          prefetch={false}
        >
          {/* ✅ Use the same app icon as the header logo */}
          <Image
            src="/icon.png"       // served automatically from src/app/icon.png
            alt="Webcraft LAB"
            width={32}
            height={32}
            priority
            className="rounded-lg ring-1 ring-white/15"
          />
          <div className="text-lg font-extrabold tracking-tight">
            Webcraft <span className="shimmer">LAB</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              prefetch={false}
              className="rounded-md px-1 py-1 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40"
              onClick={() => track("nav_click", { to: item.to })}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          prefetch={false}
          onClick={() => track("cta_click", { placement: "nav" })}
          className="group relative hidden rounded-xl bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-400 p-[2px] md:inline-block"
          aria-label="Book a free strategy call"
        >
          <span className="block rounded-[10px] bg-slate-950/80 px-4 py-2 font-semibold text-white backdrop-blur transition-colors group-hover:bg-transparent">
            Free Strategy Call
          </span>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  prefetch={false}
                  className="rounded-lg px-2 py-2 text-slate-200 transition hover:bg-white/10"
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
                prefetch={false}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-400 p-[2px]"
                onClick={() => {
                  setOpen(false);
                  track("cta_click", { placement: "nav_mobile" });
                }}
                aria-label="Book a free strategy call"
              >
                <span className="block w-full rounded-[10px] bg-slate-950/80 px-4 py-2 font-semibold text-white backdrop-blur transition-colors hover:bg-transparent">
                  Free Strategy Call
                </span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* shimmer to match your hero */}
      <style jsx>{`
        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.7) 0%,
            #00e0ff 35%,
            #ffffff 50%,
            #ff3ea5 65%,
            rgba(255, 255, 255, 0.7) 100%
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
    </header>
  );
}
