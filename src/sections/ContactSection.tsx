"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

type ApiResp = { ok: true } | { ok: false; error: string };

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorText, setErrorText] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorText("");
    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          message: fd.get("message"),
          phone: fd.get("phone"),
          company: fd.get("company"),
          service: fd.get("service"),
          budget: fd.get("budget"),
          source: fd.get("source"),
          extra_field: fd.get("extra_field"), // honeypot
        }),
      });
      const json = (await res.json()) as ApiResp;
      if (res.ok && json.ok) {
        setStatus("ok");
        track("contact_submit", { source: "contact_section" });
        e.currentTarget.reset();
      } else {
        setStatus("error");
        setErrorText(!res.ok && "error" in json ? json.error : "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorText("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="relative z-0 mx-auto max-w-3xl px-4 py-16">
      <header className="text-center">
        <p className="mx-auto w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-slate-300">
          Get in touch
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-white">Book a Free Strategy Call</h2>
        <p className="mt-2 text-slate-300">Tell us about your project and we’ll reply quickly.</p>
      </header>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm text-slate-300">Name *</label>
            <input
              id="name" name="name" required
              className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400/30"
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-slate-300">Email *</label>
            <input
              id="email" name="email" type="email" required
              className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400/30"
              placeholder="jane@company.com"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm text-slate-300">Phone</label>
            <input
              id="phone" name="phone"
              className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400/30"
              placeholder="(702) 555-0133"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm text-slate-300">Company</label>
            <input
              id="company" name="company"
              className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400/30"
              placeholder="Market Pros LV"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-slate-300">How can we help? *</label>
          <textarea
            id="message" name="message" rows={5} required minLength={10}
            className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400/30"
            placeholder="Tell us about your site, SEO, ads, timeline, and goals…"
          />
        </div>

        {/* Honeypot for bots (must stay empty) */}
        <input type="text" name="extra_field" tabIndex={-1} autoComplete="off" className="hidden" />

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400 disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          {status === "ok" && <span className="text-sm text-emerald-300">Thanks! We’ll reply shortly.</span>}
          {status === "error" && (
            <span className="text-sm text-amber-300">{errorText || "Something went wrong—try again."}</span>
          )}
        </div>
      </form>
    </section>
  );
}
