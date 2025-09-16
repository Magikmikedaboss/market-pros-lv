"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type MouseEvent } from "react";

type Feature = { title: string; desc: string; icon?: string };
type TabKey = "design" | "marketing" | "maintenance" | "addons";

const FEATURES: Record<TabKey, Feature[]> = {
  design: [{ title: "Custom UI", desc: "Design systems & components" }],
  marketing: [{ title: "Local SEO", desc: "GBP, citations, location pages" }],
  maintenance: [{ title: "Monitoring", desc: "Uptime, errors, performance" }],
  addons: [{ title: "E-commerce", desc: "Stripe/Shopify headless" }],
};

export default function AgencyLanding() {
  const [tab, setTab] = useState<TabKey>("design");

  function onTabClick(e: MouseEvent<HTMLButtonElement>, key: TabKey) {
    e.preventDefault();
    setTab(key);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      {/* ✅ Use next/image instead of <img> */}
      <div className="relative mb-8 h-56 w-full overflow-hidden rounded-2xl">
        <Image
          src="/futuristic-web-design-developer-office.jpg"
          alt="Studio"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {(["design", "marketing", "maintenance", "addons"] as const).map((key) => (
          <button
            key={key}
            type="button"
            onClick={(e) => onTabClick(e, key)}
            className={`rounded-xl px-4 py-2 ${tab === key ? "bg-indigo-500 text-white" : "bg-white/10 text-slate-200"}`}
          >
            {key}
          </button>
        ))}
      </div>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {FEATURES[tab].map((f) => (
          <li key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="font-semibold text-white">{f.title}</div>
            <div className="text-sm text-slate-300">{f.desc}</div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        <Link href="/services" className="rounded-xl bg-indigo-500 px-4 py-2 font-semibold text-white hover:bg-indigo-400">
          Explore Services
        </Link>
        <Link href="/#contact" className="rounded-xl border border-white/15 px-4 py-2 font-semibold text-white hover:bg-white/10">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
