"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useId } from "react";

export type ActionState = {
  ok: boolean;
  error?: string;
  note?: string;
};

type Props = {
  action: (_prev: ActionState, formData: FormData) => Promise<ActionState>;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500 disabled:opacity-50"
    >
      {pending ? "Sending…" : "Request Quote"}
    </button>
  );
}

export default function QuoteForm({ action }: Props) {
  const [state, formAction] = useFormState(action, { ok: false });
  const id = useId();

  return (
    <form action={formAction} className="grid gap-4">
      {/* Honeypot (keep hidden) */}
      <div className="hidden">
        <label htmlFor={`${id}-extra`} className="block text-sm">Leave blank</label>
        <input id={`${id}-extra`} name="extra_field" type="text" autoComplete="off" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="block text-sm text-slate-300">Name *</label>
          <input id={`${id}-name`} name="name" required
            className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder:text-slate-400"
            placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="block text-sm text-slate-300">Email *</label>
          <input id={`${id}-email`} name="email" type="email" required
            className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder:text-slate-400"
            placeholder="jane@company.com" />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="block text-sm text-slate-300">Phone</label>
          <input id={`${id}-phone`} name="phone"
            className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder:text-slate-400"
            placeholder="(555) 123-4567" />
        </div>
        <div>
          <label htmlFor={`${id}-company`} className="block text-sm text-slate-300">Company</label>
          <input id={`${id}-company`} name="company"
            className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder:text-slate-400"
            placeholder="Acme Co." />
        </div>
        <div className="md:col-span-2">
          <label htmlFor={`${id}-website`} className="block text-sm text-slate-300">Website</label>
          <input id={`${id}-website`} name="website" type="url"
            className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder:text-slate-400"
            placeholder="https://example.com" />
        </div>
      </div>

      <fieldset className="grid gap-2">
        <legend className="text-sm font-medium text-slate-200">Services</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            "E-commerce",
            "Bookings/Calendars",
            "Membership/Portal",
            "Admin Dashboard",
            "Automations/Integrations",
            "SEO/Growth"
          ].map((label) => (
            <label key={label} className="inline-flex items-center gap-2">
              <input type="checkbox" name="services" value={label} className="h-4 w-4" />
              <span className="text-slate-300">{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor={`${id}-budget`} className="block text-sm text-slate-300">Budget</label>
          <select id={`${id}-budget`} name="budget"
            className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white">
            <option value="">Select…</option>
            <option>Under $2k</option>
            <option>$2k–$5k</option>
            <option>$5k–$10k</option>
            <option>$10k+</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-timeline`} className="block text-sm text-slate-300">Timeline</label>
          <select id={`${id}-timeline`} name="timeline"
            className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white">
            <option value="">Select…</option>
            <option>ASAP</option>
            <option>2–4 weeks</option>
            <option>1–2 months</option>
            <option>Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className="block text-sm text-slate-300">Project details</label>
        <textarea id={`${id}-message`} name="message" rows={5}
          className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder:text-slate-400"
          placeholder="Tell us about your project…" />
      </div>

      {/* Status messages */}
      {state.error && (
        <p className="text-sm text-red-400">{state.error}</p>
      )}
      {state.ok && state.note && (
        <p className="text-sm text-emerald-400">{state.note}</p>
      )}

      <SubmitButton />
    </form>
  );
}
