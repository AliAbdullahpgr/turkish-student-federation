import Image from "next/image";
import type { HomePageContent } from "@/app/home-content";
import { SectionFrame } from "./primitives";

export function MissionSection({
  mission,
}: {
  mission: HomePageContent["mission"];
}) {
  return (
    <section className="py-20 sm:py-24 md:py-32">
      <SectionFrame className="grid gap-12 md:grid-cols-12 md:items-center md:gap-14">
        <div className="md:col-span-7">
          <p className="mb-5 font-label text-[0.68rem] uppercase tracking-[0.3em] text-secondary sm:mb-6">
            {mission.eyebrow}
          </p>
          <h2 className="max-w-3xl font-headline text-[2.2rem] font-bold leading-tight tracking-[-0.05em] text-primary sm:text-4xl md:text-5xl">
            Nurturing minds with <span className="text-outline">{mission.emphasisA}</span>,
            hearts with <span className="text-outline">{mission.emphasisB}</span>.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-7 text-muted sm:mt-8 sm:text-lg sm:leading-8">
            {mission.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="absolute inset-x-3 bottom-[-1rem] top-6 rounded-[1.8rem] bg-surface-low sm:inset-x-6 sm:bottom-[-1.25rem] sm:top-8 sm:rounded-[2rem]" />
          <div className="editorial-shadow relative aspect-[11/10] overflow-hidden rounded-[1.8rem] bg-surface-high sm:rounded-[2rem]">
            <Image
              fill
              alt={mission.image.alt}
              className="object-cover"
              sizes="(min-width: 768px) 42vw, 100vw"
              src={mission.image.src}
            />
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
