"use client";

import { track } from "@/lib/analytics";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2" onClick={() => track("nav_click", { to: "home" })}>
          <span className="inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-400" />
          <div className="font-bold tracking-tight">Market Pros LV</div>
        </a>
        <nav className="hidden items-center gap-6 text-slate-300 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          onClick={() => track("cta_click", { placement: "nav" })}
          className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold hover:bg-indigo-400"
        >
          Free Strategy Call
        </a>
      </div>
    </div>
  );
}
