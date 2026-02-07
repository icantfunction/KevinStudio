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
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[var(--background)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] transition hover:opacity-70">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-8 text-[0.65rem] uppercase tracking-[0.35em] font-medium text-neutral-600 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-black">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className="btn btn-primary !px-5 !py-2 !text-[0.6rem]"
          >
            Book Now
          </Link>
        </div>
      </div>
      <nav className="flex gap-6 overflow-x-auto px-6 py-3 text-[0.6rem] uppercase tracking-[0.35em] text-neutral-500 md:hidden scrollbar-hide">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap transition hover:text-black">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
