import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function StickyBookButton() {
  return (
    <div className="sticky-book">
      <Link
        href={siteConfig.bookingUrl}
        className="flex w-full items-center justify-center rounded-sm bg-black px-6 py-4 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-white shadow-lg shadow-black/20 transition hover:bg-neutral-800"
      >
        Check Availability
      </Link>
    </div>
  );
}
