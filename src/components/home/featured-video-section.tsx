import Image from "next/image";
import type { HomePageContent } from "@/app/home-content";
import { MaterialIcon, SectionFrame } from "./primitives";

export function FeaturedVideoSection({
  featuredVideo,
}: {
  featuredVideo: HomePageContent["featuredVideo"];
}) {
  return (
    <section className="py-20 sm:py-24 md:py-32" id={featuredVideo.id}>
      <SectionFrame>
        <div className="overflow-hidden rounded-[1.8rem] bg-surface-low lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:rounded-[2rem]">
          <div className="group relative min-h-[18rem] cursor-pointer bg-primary sm:min-h-[22rem]">
            <Image
              fill
              alt={featuredVideo.image.alt}
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
              src={featuredVideo.image.src}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,33,20,0.32))]" />
            <div className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white text-primary shadow-[0_25px_45px_rgba(0,33,20,0.2)] sm:h-20 sm:w-20">
                <MaterialIcon className="text-[42px] sm:text-[48px]" name="play_arrow" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <p className="mb-5 font-label text-[0.68rem] font-bold uppercase tracking-[0.3em] text-secondary sm:mb-6">
              {featuredVideo.eyebrow}
            </p>
            <h2 className="max-w-xl font-headline text-[2.2rem] font-bold leading-tight tracking-[-0.05em] text-primary sm:text-4xl md:text-5xl">
              {featuredVideo.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:mt-8 sm:text-lg sm:leading-8">
              {featuredVideo.description}
            </p>
            <button
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#b11c1c] px-7 py-3 font-headline text-sm font-bold text-white shadow-[0_18px_36px_rgba(123,0,0,0.16)] hover:-translate-y-0.5 hover:bg-[#971616] sm:mt-10 sm:w-fit sm:px-8"
              type="button"
            >
              <MaterialIcon className="text-[22px]" name="play_circle" />
              {featuredVideo.ctaLabel}
            </button>
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
