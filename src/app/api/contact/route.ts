// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs"; // keep Node runtime for email/DB SDKs

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string; // required
  service?: string;
  budget?: string;
  source?: string;
  extra_field?: string; // honeypot
};

type ApiResp = { ok: true } | { ok: false; error: string };

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest): Promise<NextResponse<ApiResp>> {
  let body: Partial<ContactPayload>;
  try {
    body = (await req.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const honeypot = (body.extra_field ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
  }
  if (honeypot) {
    // silently accept bot submissions
    return NextResponse.json({ ok: true });
  }

  const payload: ContactPayload = {
    name,
    email,
    phone: body.phone?.trim(),
    company: body.company?.trim(),
    message,
    service: body.service?.trim(),
    budget: body.budget?.trim(),
    source: body.source?.trim(),
  };

  if (process.env.NODE_ENV !== "production") {
    console.debug("Contact submission (dev):", payload);
  }

  // TODO: send to email/Slack/CRM or persist

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
