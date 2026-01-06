import Image from "next/image";
import Link from "next/link";
import { highlights } from "@/data/highlights";
import { galleryItems } from "@/data/gallery";
import { useCases } from "@/data/use-cases";
import { rates, rateNotes, addOns } from "@/data/rates";
import { amenities, floorplan } from "@/data/amenities";
import { policies } from "@/data/policies";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  email: siteConfig.contactEmail,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressLine,
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.state,
    addressCountry: "US",
  },
  serviceArea: siteConfig.region,
  description: siteConfig.description,
  makesOffer: rates.map((rate) => ({
    "@type": "Offer",
    name: rate.label,
    price: rate.price,
    priceCurrency: "USD",
  })),
};

export default function Home() {
  const videoTestimonials = testimonials.filter((item) => item.videoUrl);
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="section-kicker">Worldwide Studio Space</p>
            <h1 className="section-title text-4xl md:text-5xl">
              A Studio + Event Space Designed for Content &amp; Celebrations
            </h1>
            <p className="text-lg text-neutral-600">
              Bright, flexible, and production-ready. Book the studio for shoots
              or host intimate events with modular layouts, reliable amenities,
              and fast support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book"
                className="rounded-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-neutral-800"
              >
                Check Availability / Book Now
              </Link>
              <Link
                href="/gallery"
                className="rounded-full border border-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition hover:bg-black hover:text-white"
              >
                See the Space
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-neutral-600">
              <span>Natural light + blackout options</span>
              <span>2,400 sq ft</span>
              <span>Central {siteConfig.city}</span>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src="/media/hero.svg"
              alt="Worldwide Studio Space hero"
              width={640}
              height={520}
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-6xl space-y-10">
          <div>
            <p className="section-kicker">Space highlights</p>
            <h2 className="section-title">Everything you need, ready on-site.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="card p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-xl">
                  {item.icon === "sun" && "☀"}
                  {item.icon === "layout" && "▦"}
                  {item.icon === "camera" && "◉"}
                  {item.icon === "truck" && "⇢"}
                  {item.icon === "wave" && "≋"}
                  {item.icon === "spark" && "✦"}
                  {item.icon === "staff" && "◎"}
                  {item.icon === "fork" && "✶"}
                  {item.icon === "snow" && "❄"}
                  {item.icon === "wifi" && "◍"}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="section-kicker">Gallery</p>
              <h2 className="section-title">See the space in action.</h2>
            </div>
            <Link
              href="/gallery"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600 hover:text-black"
            >
              View full gallery
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.slice(0, 6).map((item) => (
              <div key={item.id} className="card overflow-hidden">
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt ?? item.title}
                    width={520}
                    height={420}
                    className="h-56 w-full object-cover"
                  />
                ) : (
                  <div className="relative">
                    <Image
                      src={item.poster ?? "/media/video-1.svg"}
                      alt={item.title}
                      width={520}
                      height={420}
                      className="h-56 w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-xs uppercase tracking-[0.3em] text-white">
                      Video clip coming soon
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <p className="text-sm font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" id="use-cases">
        <div className="mx-auto max-w-6xl space-y-10">
          <div>
            <p className="section-kicker">Use cases</p>
            <h2 className="section-title">
              Choose the booking type that matches your vision.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card p-8">
                <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                <p className="mt-3 text-sm text-neutral-600">
                  {useCase.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                  {useCase.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
                <Link
                  href={useCase.href}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-black"
                >
                  {useCase.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl space-y-10">
          <div>
            <p className="section-kicker">Rates</p>
            <h2 className="section-title">Transparent pricing, easy booking.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
            <div className="grid gap-6 md:grid-cols-3">
              {rates.map((rate) => (
                <div key={rate.label} className="card p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    {rate.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold">{rate.price}</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    {rate.details}
                  </p>
                </div>
              ))}
            </div>
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Booking notes
              </p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                {rateNotes.map((note) => (
                  <li key={note}>• {note}</li>
                ))}
              </ul>
              <Link
                href="/rates"
                className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.3em]"
              >
                View full rates →
              </Link>
            </div>
          </div>
          <div className="card p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Popular add-ons
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {addOns.slice(0, 3).map((addOn) => (
                <div key={addOn.item}>
                  <p className="text-sm font-semibold">{addOn.item}</p>
                  <p className="text-sm text-neutral-600">{addOn.price}</p>
                  <p className="text-xs text-neutral-500">{addOn.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-6xl space-y-10">
          <div>
            <p className="section-kicker">Amenities + Floorplan</p>
            <h2 className="section-title">Plan your setup confidently.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.4fr,0.6fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {amenities.map((amenity) => (
                <div key={amenity.name} className="card p-5">
                  <p className="text-sm font-semibold">{amenity.name}</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Floorplan
              </p>
              <div className="mt-4 space-y-2 text-sm text-neutral-600">
                <p>{floorplan.totalSquareFeet} total</p>
                <p>{floorplan.studioSquareFeet} open studio</p>
                <p>{floorplan.ceilingHeight} ceilings</p>
                <p>{floorplan.capacityStanding} standing</p>
                <p>{floorplan.capacitySeated} seated</p>
              </div>
              <p className="mt-4 text-xs text-neutral-500">
                {floorplan.layoutNotes}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl space-y-10">
          <div>
            <p className="section-kicker">Policies</p>
            <h2 className="section-title">Clear rules for smooth bookings.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {policies.map((policy) => (
              <div key={policy.title} className="card p-6">
                <h3 className="text-lg font-semibold">{policy.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {policy.details}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/policies"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600 hover:text-black"
          >
            Read full policies →
          </Link>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-6xl space-y-10">
          <div>
            <p className="section-kicker">Testimonials</p>
            <h2 className="section-title">Creators and hosts love the flow.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.5fr,0.5fr]">
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="card p-6">
                  <p className="text-sm text-neutral-600">“{testimonial.quote}”</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
                    {testimonial.name} · {testimonial.role}
                  </p>
                </div>
              ))}
            </div>
            <div className="card flex flex-col gap-4 p-6 text-center">
              <p className="text-sm font-semibold">Video testimonials</p>
              {videoTestimonials.length > 0 ? (
                videoTestimonials.map((testimonial) => (
                  <iframe
                    key={testimonial.name}
                    title={`${testimonial.name} testimonial`}
                    src={testimonial.videoUrl}
                    className="h-40 w-full rounded-xl border border-black/10"
                  />
                ))
              ) : (
                <p className="text-sm text-neutral-600">
                  Coming soon. We will feature client video highlights here.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl">
          <div className="card gradient-border p-10 text-center">
            <p className="section-kicker">Ready to book</p>
            <h2 className="section-title">
              Secure your date in minutes with HoneyBook.
            </h2>
            <p className="mt-4 text-sm text-neutral-600">
              Last-minute or planning ahead, we will confirm quickly and keep
              things simple.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/book"
                className="rounded-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-neutral-800"
              >
                Book your date
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition hover:bg-black hover:text-white"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
