import Image from "next/image";
import type { HomePageContent } from "@/app/home-content";
import { ActionLink, SectionFrame } from "./primitives";

export function HeroSection({
  hero,
}: {
  hero: HomePageContent["hero"];
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--primary),var(--primary-container))] pb-16 pt-14 text-white sm:pb-20 sm:pt-16 md:pb-28 md:pt-24 lg:min-h-[54rem] lg:pt-28">
      <div className="hero-texture absolute inset-0" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(122,218,161,0.22),transparent_55%)] lg:block" />

      <SectionFrame className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.88fr)] lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.68rem] font-label uppercase tracking-[0.28em] text-secondary-fixed-dim sm:mb-8">
            <span className="h-2 w-2 rounded-full bg-secondary-fixed-dim" />
            {hero.eyebrow}
          </div>

          <h1 className="max-w-3xl font-headline text-[2.75rem] font-extrabold leading-[0.96] tracking-[-0.07em] text-white sm:text-[3.5rem] md:text-6xl lg:text-7xl">
            {hero.headlineStart}
            <br />
            <span className="text-[#8fc7ab]">{hero.headlineAccent}</span>{" "}
            {hero.headlineEnd}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/78 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
            {hero.actions.map((action) => (
              <ActionLink
                key={action.label}
                action={action}
                className={
                  action.variant === "primary"
                    ? "w-full bg-secondary text-white shadow-[0_18px_36px_rgba(0,33,20,0.18)] hover:-translate-y-0.5 hover:bg-[#0c7a4a] sm:w-auto"
                    : "w-full border border-white/16 bg-white/6 text-white hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
                }
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          <div className="editorial-shadow relative aspect-[11/10] overflow-hidden rounded-[1.8rem] bg-[#05281b] sm:rounded-[2rem]">
            <Image
              fill
              priority
              alt={hero.image.alt}
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 80vw, 100vw"
              src={hero.image.src}
            />
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0.22),rgba(0,54,35,0.4))]" />
          </div>

          <div className="paper-panel relative -mt-8 ml-4 w-[calc(100%-2rem)] max-w-[16rem] rounded-[1.4rem] px-5 py-4 text-primary sm:absolute sm:-bottom-8 sm:left-6 sm:ml-0 sm:mt-0 sm:w-auto sm:max-w-[17rem] sm:px-6 sm:py-5">
            <p className="font-headline text-3xl font-extrabold tracking-[-0.05em] sm:text-4xl">
              {hero.statValue}
            </p>
            <p className="mt-2 font-label text-[0.68rem] uppercase tracking-[0.28em] text-muted">
              {hero.statLabel}
            </p>
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
