import Link from "next/link";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/rates", label: "Rates" },
  { href: "/amenities", label: "Amenities" },
  { href: "/policies", label: "Policies" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em]">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.25em] text-neutral-600 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-black">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className="rounded-full border border-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition hover:bg-black hover:text-white"
          >
            Book Now
          </Link>
        </div>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-black/5 px-6 py-3 text-[0.65rem] uppercase tracking-[0.25em] text-neutral-500 md:hidden">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
