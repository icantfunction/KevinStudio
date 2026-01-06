import type { Metadata } from "next";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos and video previews of Worldwide Studio Space for content and events.",
};

export default function GalleryPage() {
  return (
    <main className="section">
      <div className="mx-auto max-w-6xl space-y-8">
        <div>
          <p className="section-kicker">Gallery</p>
          <h1 className="section-title">Photos + video previews</h1>
          <p className="mt-3 text-sm text-neutral-600">
            Replace these placeholders with your official photo and video assets.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div key={item.id} className="card overflow-hidden">
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt ?? item.title}
                  width={520}
                  height={420}
                  className="h-60 w-full object-cover"
                />
              ) : (
                <div className="relative">
                  <Image
                    src={item.poster ?? "/media/video-1.svg"}
                    alt={item.title}
                    width={520}
                    height={420}
                    className="h-60 w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-xs uppercase tracking-[0.3em] text-white">
                    Video clip coming soon
                  </div>
                </div>
              )}
              <div className="p-4">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {item.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
