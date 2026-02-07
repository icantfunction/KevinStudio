import Image from "next/image";
import Link from "next/link";
import { highlights } from "@/data/highlights";
import { galleryItems } from "@/data/gallery";
import { useCases } from "@/data/use-cases";
import { rates, rateNotes, addOns } from "@/data/rates";
import { amenities, floorplan } from "@/data/amenities";
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

const heroDetails = [
  { label: "Total Area", value: floorplan.totalSquareFeet },
  { label: "Studio", value: floorplan.studioSquareFeet },
  { label: "Ceilings", value: floorplan.ceilingHeight },
  { label: "Location", value: `Central ${siteConfig.city}` },
];

export default function Home() {
  const videoTestimonials = testimonials.filter((item) => item.videoUrl);

  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="section pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr,1fr]">
          <div className="space-y-8">
            <span className="eyebrow">Modern Studio + Event Venue</span>
            <h1 className="text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl">
              A bright, modern venue for events, productions, and pop-up experiences.
            </h1>
            <p className="max-w-xl text-lg text-neutral-600 md:text-xl">
              Designed as a clean, white canvas with production-ready amenities so your team can focus on the work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book" className="btn btn-primary">
                Schedule a Tour
              </Link>
              <Link href="/rates" className="btn btn-secondary">
                View Rates
              </Link>
            </div>
            <div className="divider mt-10"></div>
            <div className="mt-6 grid gap-4 text-xs uppercase tracking-[0.3em] text-neutral-500 sm:grid-cols-2">
              {heroDetails.map((detail) => (
                <div key={detail.label} className="flex items-center justify-between gap-4">
                  <span>{detail.label}</span>
                  <span className="font-semibold text-neutral-900">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-media aspect-[4/5] w-full shadow-2xl shadow-black/10">
            <Image
              src="/media/hero.svg"
              alt="Studio interior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section bg-[var(--accent-soft)]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="section-kicker">The Experience</span>
            <h2 className="section-title">Everything you need, ready when you arrive.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <div key={item.title} className="card p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
                  0{i + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="section-kicker">Visuals</span>
              <h2 className="section-title">See the space.</h2>
            </div>
            <Link
              href="/gallery"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 hover:text-black"
            >
              Full Gallery <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.slice(0, 6).map((item) => (
              <div key={item.id} className="card overflow-hidden">
                {item.type === "image" ? (
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt ?? item.title}
                      width={600}
                      height={800}
                      className="w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="relative">
                    <Image
                      src={item.poster ?? "/media/video-1.svg"}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                        PLAY
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-900">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="section-kicker">Possibilities</span>
            <h2 className="section-title">Designed for any vision.</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card p-10">
                <h3 className="text-3xl font-medium text-neutral-900 font-display">{useCase.title}</h3>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  {useCase.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {useCase.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm text-neutral-500">
                      <span className="h-1 w-6 bg-neutral-400"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link
                    href={useCase.href}
                    className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-neutral-600 hover:text-black"
                  >
                    Explore {useCase.cta} <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="section bg-[var(--accent-soft)]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <span className="section-kicker">Pricing</span>
            <h2 className="section-title">Transparent rates.</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
            <div className="grid gap-6 md:grid-cols-3">
              {rates.map((rate, i) => (
                <div key={rate.label} className={`card p-8 ${i === 1 ? "border-neutral-900" : ""}`}>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">
                    {rate.label}
                  </p>
                  <p className="mt-4 text-3xl font-medium font-display text-neutral-900">{rate.price}</p>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                    {rate.details}
                  </p>
                  <div className="mt-8">
                    <Link href="/book" className="text-xs font-bold uppercase tracking-wider underline decoration-neutral-300 underline-offset-4 hover:decoration-black transition">
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="card p-8 bg-white">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">
                  Add-ons
                </p>
                <div className="mt-6 space-y-4">
                  {addOns.slice(0, 3).map((addOn) => (
                    <div key={addOn.item} className="flex justify-between items-baseline border-b border-neutral-200 pb-2 last:border-0 last:pb-0">
                      <div>
                        <p className="text-sm font-semibold text-neutral-900">{addOn.item}</p>
                        <p className="text-[0.65rem] text-neutral-500">{addOn.notes}</p>
                      </div>
                      <p className="text-sm text-neutral-600 font-medium whitespace-nowrap ml-4">{addOn.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">
                  Notes
                </p>
                <ul className="mt-4 space-y-2 text-xs text-neutral-600">
                  {rateNotes.map((note) => (
                    <li key={note} className="flex gap-2">
                      <span>-</span> {note}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/rates"
                  className="mt-6 inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-neutral-400 hover:text-black transition"
                >
                  See full rate card -&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities & Floorplan */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <span className="section-kicker">Amenities</span>
            <h2 className="section-title">Comfort and utility.</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr]">
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {amenities.map((amenity) => (
                <div key={amenity.name}>
                  <h4 className="text-base font-bold text-neutral-900">{amenity.name}</h4>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{amenity.description}</p>
                </div>
              ))}
            </div>

            <div className="card p-8 bg-neutral-900 text-white border-neutral-800">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-bold">
                  Floorplan Specs
                </p>
                <span className="text-xl">GRID</span>
              </div>

              <div className="space-y-4 text-sm text-neutral-300">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Total Area</span>
                  <span className="font-mono text-white">{floorplan.totalSquareFeet}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Studio Space</span>
                  <span className="font-mono text-white">{floorplan.studioSquareFeet}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Ceilings</span>
                  <span className="font-mono text-white">{floorplan.ceilingHeight}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Standing Cap</span>
                  <span className="font-mono text-white">{floorplan.capacityStanding}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Seated Cap</span>
                  <span className="font-mono text-white">{floorplan.capacitySeated}</span>
                </div>
              </div>
              <p className="mt-6 text-xs text-neutral-500 leading-relaxed">
                {floorplan.layoutNotes}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="section-kicker">Community</span>
            <h2 className="section-title">Trusted by creators.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div key={testimonial.name} className={`card p-8 ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <div className="mb-6 text-neutral-400 text-sm">*****</div>
                <p className="text-lg font-display italic text-neutral-800">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-neutral-200"></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                      {testimonial.name}
                    </p>
                    <p className="text-[0.65rem] text-neutral-500 uppercase tracking-widest">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="card bg-black p-0 overflow-hidden relative group cursor-pointer md:col-span-2 lg:col-span-1 h-64 lg:h-auto">
              <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                <span className="text-neutral-600 font-display text-2xl opacity-20 group-hover:opacity-30 transition">Client Reels</span>
              </div>
              {videoTestimonials.length > 0 && (
                <iframe
                  title="Client Reel"
                  src={videoTestimonials[0].videoUrl}
                  className="w-full h-full absolute inset-0 opacity-60 group-hover:opacity-80 transition"
                />
              )}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-bold">Watch Stories</p>
                <p className="text-neutral-400 text-xs mt-1">See how others use the space</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 text-center bg-neutral-900 text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-display mb-8">Ready to create?</h2>
          <p className="text-lg text-neutral-300 mb-10 max-w-xl mx-auto">
            Our calendar fills up quickly. Secure your preferred date instantly online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/book"
              className="btn btn-secondary !text-base !px-8 !py-4 !border-white !text-white hover:!text-neutral-900 hover:!bg-white"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="btn btn-secondary !text-base !px-8 !py-4 !border-white !text-white hover:!text-neutral-900 hover:!bg-white"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
