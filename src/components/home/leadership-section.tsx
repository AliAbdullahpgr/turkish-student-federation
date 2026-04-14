import Image from "next/image";
import type { HomePageContent } from "@/app/home-content";
import { SectionFrame } from "./primitives";

export function LeadershipSection({
  leadership,
}: {
  leadership: HomePageContent["leadership"];
}) {
  const { leader } = leadership;

  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(145deg,#0b1f14,var(--primary),#0b1f14)] py-20 text-white sm:py-24 md:py-32"
      id={leadership.id}
    >
      {/* Background crowd image overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          fill
          alt=""
          className="object-cover"
          sizes="100vw"
          src={leader.image.src}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,31,20,0.92),rgba(0,54,35,0.88))]" />

      <SectionFrame className="relative z-10">
        {/* Section Title */}
        <div className="mb-12 sm:mb-16">
          <p className="mb-3 font-label text-[0.68rem] uppercase tracking-[0.3em] text-secondary-fixed-dim">
            {leadership.eyebrow}
          </p>
          <h2 className="font-headline text-[2.2rem] font-extrabold tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
            {leadership.titleStart}{" "}
            <span className="text-secondary-fixed-dim">{leadership.titleAccent}</span>
          </h2>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          {/* Bio Card */}
          <div className="reveal-up reveal-delay-1">
            <div className="rounded-2xl border border-secondary/30 bg-white/5 px-6 py-7 backdrop-blur-sm sm:px-8 sm:py-9">
              <h3 className="font-headline text-2xl font-extrabold tracking-[-0.04em] text-white sm:text-3xl">
                {leader.name}
              </h3>
              <p className="mt-2 font-label text-sm font-medium text-secondary-fixed-dim">
                {leader.title}
              </p>
              <p className="mt-6 text-base leading-8 text-white/75 sm:text-lg sm:leading-8">
                {leader.description}
              </p>
            </div>
          </div>

          {/* Circular Portrait */}
          <div className="reveal-up reveal-delay-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-secondary/40 shadow-[0_25px_50px_rgba(0,0,0,0.4)] sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <Image
                  fill
                  alt={leader.image.alt}
                  className="object-cover"
                  sizes="(min-width: 1024px) 24rem, (min-width: 640px) 20rem, 16rem"
                  src={leader.image.src}
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-secondary-fixed-dim/20" />
            </div>
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
