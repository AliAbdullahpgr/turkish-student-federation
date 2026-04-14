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
        <div className="reveal-up overflow-hidden rounded-[1.8rem] bg-[linear-gradient(135deg,#0a3d28,var(--primary-container),#0a3d28)] shadow-[0_32px_70px_rgba(0,33,20,0.18)] lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:rounded-[2rem]">
          {/* Video Thumbnail */}
          <div className="group relative min-h-[18rem] cursor-pointer sm:min-h-[22rem]">
            <Image
              fill
              alt={featuredVideo.image.alt}
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
              src={featuredVideo.image.src}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(0,33,20,0.5))]" />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-[0_25px_45px_rgba(0,33,20,0.3)] transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                <MaterialIcon className="ml-1 text-[36px] sm:text-[42px]" name="play_arrow" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-14 lg:py-16">
            {/* Release badge */}
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#b11c1c] px-4 py-1.5 sm:mb-6">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              <span className="font-label text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white">
                {featuredVideo.eyebrow}
              </span>
            </div>

            <h2 className="max-w-xl font-headline text-[2rem] font-bold leading-tight tracking-[-0.05em] text-white sm:text-3xl md:text-4xl">
              {featuredVideo.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:mt-6 sm:text-lg sm:leading-8">
              {featuredVideo.description}
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {featuredVideo.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 font-label text-xs font-medium text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              className="button-sheen hover-lift mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-white/20 bg-white/10 px-7 py-3.5 font-headline text-sm font-bold text-white shadow-lg backdrop-blur-sm hover:bg-white/16 sm:mt-10 sm:w-fit sm:px-8"
              href="#"
            >
              <MaterialIcon className="text-[20px]" name="youtube" />
              {featuredVideo.ctaLabel} &rarr;
            </a>
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
