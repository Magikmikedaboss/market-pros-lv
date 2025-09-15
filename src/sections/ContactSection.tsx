"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [pagePath, setPagePath] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") setPagePath(window.location.pathname);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = formRef.current;
    if (!form) return;

    const fd = new FormData(form);

    // Honeypot
    if (String(fd.get("company"))?.trim()) {
      setStatus("error");
      setError("Something went wrong. Please email us directly.");
      return;
    }

    const body = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      website: String(fd.get("website") || ""),
      message: String(fd.get("message") || ""),
      source: "website_contact",
      page: pagePath,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Request failed");

      setStatus("sent");
      formRef.current?.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong. Please email us directly.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-3xl px-4 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Send us a message</h2>
        <p className="mt-2 text-slate-300">
          Tell us what you’re working on—we’ll respond within 1 business day.
        </p>
      </div>

      {/* Contact form only (Calendly removed) */}
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6"
      >
        {/* Honeypot (hidden) */}
        <label className="sr-only">
          Company
          <input name="company" autoComplete="off" tabIndex={-1} className="hidden" />
        </label>

        <div className="mt-1 grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1 text-sm">
            <span className="text-slate-300">Name</span>
            <input
              name="name"
              required
              className="rounded-lg bg-slate-900/60 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-indigo-400"
              placeholder="Jane Smith"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="text-slate-300">Email</span>
            <input
              name="email"
              type="email"
              required
              className="rounded-lg bg-slate-900/60 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-indigo-400"
              placeholder="you@email.com"
            />
          </label>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1 text-sm">
            <span className="text-slate-300">Phone (optional)</span>
            <input
              name="phone"
              inputMode="tel"
              className="rounded-lg bg-slate-900/60 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-indigo-400"
              placeholder="(702) 555-0123"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="text-slate-300">Website (optional)</span>
            <input
              name="website"
              type="url"
              className="rounded-lg bg-slate-900/60 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-indigo-400"
              placeholder="https://example.com"
            />
          </label>
        </div>

        <label className="mt-4 grid gap-1 text-sm">
          <span className="text-slate-300">Message</span>
          <textarea
            name="message"
            rows={6}
            required
            className="rounded-lg bg-slate-900/60 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-indigo-400"
            placeholder="What are you trying to achieve in the next 90 days?"
          />
        </label>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-xl bg-indigo-500 px-5 py-2 font-semibold text-white transition hover:bg-indigo-400 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && (
            <span className="text-sm text-emerald-400">Thanks! We’ll be in touch.</span>
          )}
          {status === "error" && <span className="text-sm text-red-400">{error}</span>}
        </div>

        <p className="mt-3 text-sm text-slate-400">
          Or email us:{" "}
          <a className="underline" href="mailto:hello@your-domain.com">
            hello@your-domain.com
          </a>
        </p>
      </form>
    </section>
  );
}
