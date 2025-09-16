"use client";

import { useFormState, useFormStatus } from "react-dom";

export type ActionState = { ok: boolean; error?: string };
export type QuoteAction = (state: ActionState, formData: FormData) => Promise<ActionState>;

export default function QuoteForm({ action }: { action: QuoteAction }) {
  const [state, formAction] = useFormState(action, { ok: false });

  return (
    <form action={formAction} className="grid gap-4 md:grid-cols-2">
      {/* Contact */}
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

      <div className="md:col-span-2">
        <label htmlFor="website" className="block text-sm text-slate-300">Website</label>
        <input
          id="website" name="website"
          className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400/30"
          placeholder="https://example.com"
        />
      </div>

      {/* Services (checkboxes) */}
      <fieldset className="md:col-span-2">
        <legend className="text-sm text-slate-300">What do you need? (select all that apply)</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { key: "booking", label: "Online booking / CRM" },
            { key: "membership", label: "Membership / client portal" },
            { key: "ecommerce", label: "E-commerce / subscriptions" },
            { key: "dashboard", label: "Dashboard / admin panel" },
            { key: "automation", label: "Automations / AI assist" },
            { key: "redesign", label: "Website redesign / migration" },
          ].map((s) => (
            <label key={s.key} className="inline-flex items-center gap-2 text-sm text-slate-200">
              <input type="checkbox" name="services" value={s.key} className="h-4 w-4 rounded border-white/15 bg-white/5" /> {s.label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Budget / timeline */}
      <div>
        <label htmlFor="budget" className="block text-sm text-slate-300">Estimated budget</label>
        <select
          id="budget" name="budget"
          className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-cyan-400/30"
        >
          <option value="">Select…</option>
          <option value="under-3k">Under $3k</option>
          <option value="3k-8k">$3k–$8k</option>
          <option value="8k-15k">$8k–$15k</option>
          <option value="15k-plus">$15k+</option>
        </select>
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm text-slate-300">Timeline</label>
        <select
          id="timeline" name="timeline"
          className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-cyan-400/30"
        >
          <option value="">Select…</option>
          <option value="asap">ASAP</option>
          <option value="2-4-weeks">2–4 weeks</option>
          <option value="1-2-months">1–2 months</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <label htmlFor="message" className="block text-sm text-slate-300">Project goals / must-haves</label>
        <textarea
          id="message" name="message" rows={5}
          className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400/30"
          placeholder="Tell us about the features, integrations, and deadlines…"
        />
      </div>

      {/* Honeypot for spam */}
      <input type="text" name="extra_field" tabIndex={-1} autoComplete="off" className="hidden" />

      {/* Actions */}
      <div className="md:col-span-2 flex flex-wrap items-center gap-3">
        <SubmitButton />
        {state?.ok === true && (
          <span className="text-sm text-emerald-300">Thanks! We’ll review and reply shortly.</span>
        )}
        {state?.ok === false && state?.error && (
          <span className="text-sm text-amber-300">{state.error}</span>
        )}
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center rounded-2xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Request Custom Quote"}
    </button>
  );
}
