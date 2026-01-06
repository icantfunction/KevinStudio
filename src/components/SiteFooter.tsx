import Link from "next/link";
import { siteConfig } from "@/data/site";

const footerLinks = [
  { href: "/content", label: "For Creators" },
  { href: "/events", label: "For Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/rates", label: "Rates" },
  { href: "/book", label: "Book" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[2fr,1fr,1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Worldwide Studio Space
          </p>
          <p className="mt-3 text-lg font-semibold">
            A studio + event venue built for creators and small gatherings.
          </p>
          <p className="mt-4 text-sm text-neutral-600">
            {siteConfig.addressLine}
          </p>
          <div className="mt-4 text-sm text-neutral-600">
            <p>{siteConfig.phone}</p>
            <p>
              <a href={`mailto:${siteConfig.contactEmail}`}>
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-black">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Social
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            <li>
              <a href={siteConfig.instagramUrl}>Instagram</a>
            </li>
            <li>
              <a href="/contact">Contact form</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
