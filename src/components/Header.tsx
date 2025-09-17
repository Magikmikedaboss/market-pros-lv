import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu.client"; // tiny client island

const nav = [
  { href: "/#about", label: "About",   track: { event: "nav_click", to: "about" } },
  { href: "/#services", label: "Services", track: { event: "nav_click", to: "services" } },
  { href: "/#proof", label: "Work",     track: { event: "nav_click", to: "proof" } },
  { href: "/pricing", label: "Pricing", track: { event: "nav_click", to: "pricing-page" } },
  { href: "/#contact", label: "Contact", track: { event: "nav_click", to: "contact" } },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur" role="banner">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/#home" prefetch={false} className="flex items-center gap-2"
              aria-label="Go to Webcraft Lab home"
              data-track='{"event":"nav_click","to":"home"}'>
          <Image src="/golden-eagle.svg" alt="" aria-hidden width={24} height={24} sizes="24px"
                 className="h-6 w-6 shrink-0 select-none" />
          <div className="text-lg font-extrabold tracking-tight">
            Webcraft <span className="shimmer">LAB</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex" aria-label="Primary">
          {nav.map((i) => (
            <Link key={i.label} href={i.href} prefetch={false}
                  className="rounded-md px-1 py-1 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40"
                  data-track={JSON.stringify(i.track)}>
              {i.label}
            </Link>
          ))}
          <Link href="/#contact" prefetch={false}
                className="group relative rounded-xl bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-400 p-[2px]"
                aria-label="Book a free strategy call"
                data-track='{"event":"cta_click","placement":"nav"}'>
            <span className="block rounded-[10px] bg-slate-950/80 px-4 py-2 font-semibold text-white backdrop-blur transition-colors group-hover:bg-transparent">
              Free Strategy Call
            </span>
          </Link>
        </nav>

        {/* Mobile menu (client island) */}
        <MobileMenu navItems={nav} />
      </div>
    </header>
  );
}
