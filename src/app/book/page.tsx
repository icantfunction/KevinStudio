import type { Metadata } from "next";
import Link from "next/link";
import { bookingSteps, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Check availability and book Worldwide Studio Space through HoneyBook.",
};

export default function BookPage() {
  return (
    <main className="section">
      <div className="mx-auto max-w-6xl space-y-10">
        <div>
          <p className="section-kicker">Book</p>
          <h1 className="section-title">Check availability + reserve</h1>
          <p className="mt-3 text-sm text-neutral-600">
            Use HoneyBook to select your date, request add-ons, and secure the
            booking quickly.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr,0.7fr]">
          <div className="card overflow-hidden">
            <div className="border-b border-black/10 bg-neutral-50 px-6 py-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
              Booking widget
            </div>
            <div className="p-6">
              <iframe
                title="Worldwide Studio Space booking"
                src={siteConfig.bookingUrl}
                className="h-[520px] w-full rounded-xl border border-black/10"
              />
              <p className="mt-4 text-xs text-neutral-500">
                If the embed does not load,{' '}
                <Link href={siteConfig.bookingUrl} className="underline">
                  open the booking link
                </Link>{' '}
                in a new tab.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                What happens next
              </p>
              <div className="mt-4 space-y-4 text-sm text-neutral-600">
                {bookingSteps.map((step) => (
                  <div key={step.title}>
                    <p className="font-semibold text-black">{step.title}</p>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Need help?
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Email us at{' '}
                <a className="underline" href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>{' '}
                or call {siteConfig.phone}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
