// src/components/TrackClicks.client.tsx
"use client";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

export default function TrackClicks() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      try {
        const payload = JSON.parse(el.getAttribute("data-track") || "{}");
        if (payload?.event) track(payload.event, payload);
      } catch {}
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
  return null;
}
