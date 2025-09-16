// app/services/add-ons/page.tsx
import QuoteForm, { ActionState } from "@/components/QuoteForm";

async function submitQuote(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  "use server";

  // Honeypot
  if ((formData.get("extra_field") as string)?.trim()) {
    return { ok: true }; // silently ignore bots
  }

  const name = (formData.get("name") as string | null)?.trim() || "";
  const email = (formData.get("email") as string | null)?.trim() || "";
  const phone = (formData.get("phone") as string | null)?.trim() || "";
  const company = (formData.get("company") as string | null)?.trim() || "";
  const website = (formData.get("website") as string | null)?.trim() || "";
  const message = (formData.get("message") as string | null)?.trim() || "";
  const budget = (formData.get("budget") as string | null)?.trim() || "";
  const timeline = (formData.get("timeline") as string | null)?.trim() || "";
  const services = formData.getAll("services").map(String);

  if (!name || !email) {
    return { ok: false, error: "Name and email are required." };
  }

  // TODO: send to email/CRM (Resend, Slack, Airtable, etc.)
  console.log("QUOTE:", {
    name, email, phone, company, website, services, budget, timeline, message,
  });

  return { ok: true, note: "Thanks! We’ll reach out shortly." };
}

export default function AddOnsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-extrabold">Add-Ons to Grow Faster</h1>
      <p className="mt-2 text-slate-300">
        Bolt on capability—e-commerce, bookings, membership, dashboards, and automations that save hours.
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <QuoteForm action={submitQuote} />
      </div>
    </main>
  );
}
