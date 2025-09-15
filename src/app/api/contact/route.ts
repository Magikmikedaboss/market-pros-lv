import { NextResponse } from "next/server";

const WEBHOOK = process.env.LEAD_WEBHOOK_URL || "";
const WEBHOOK_SECRET = process.env.LEAD_WEBHOOK_SECRET || "";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));
    const { name, email, message, phone, website, source, page } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // Forward to Google Sheets
    let sheetStatus = 0, sheetText = "";
    if (WEBHOOK) {
      const r = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, phone, website, message, source, page,
          secret: WEBHOOK_SECRET,
        }),
        cache: "no-store",
      });
      sheetStatus = r.status;
      sheetText = await r.text();
      console.log("[Sheets webhook]", sheetStatus, sheetText);
    } else {
      console.warn("[CONTACT] LEAD_WEBHOOK_URL not set");
    }

    return NextResponse.json({ ok: true, sheetStatus, sheetText });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
