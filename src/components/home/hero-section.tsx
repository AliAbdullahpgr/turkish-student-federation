"use client";

import Image from "next/image";
import type { HomePageContent } from "@/app/home-content";
import { ActionLink, SectionFrame } from "./primitives";
import { Parallax } from "./animated";

export function HeroSection({
  hero,
}: {
  hero: HomePageContent["hero"];
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--primary),var(--primary-container))] pb-24 pt-14 text-white sm:pb-28 sm:pt-18 md:pb-36 md:pt-24 lg:min-h-216 lg:pt-28">
      <Parallax speed={0.15} className="absolute inset-0">
        <div className="hero-texture absolute inset-0" />
      </Parallax>
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(122,218,161,0.22),transparent_55%)] lg:block" />

      <SectionFrame className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-16">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="reveal-up reveal-delay-1 mb-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.68rem] font-label uppercase tracking-[0.28em] text-secondary-fixed-dim sm:mb-7">
              <span className="h-2 w-2 rounded-full bg-secondary-fixed-dim" />
              {hero.eyebrow}
            </div>

            <h1 className="reveal-up reveal-delay-2 max-w-3xl font-headline text-[2.75rem] font-extrabold leading-[0.96] tracking-[-0.07em] text-white sm:text-[3.5rem] md:text-6xl lg:text-7xl">
              {hero.headlineStart}
              <br />
              <span className="hero-accent-text text-secondary-fixed-dim">{hero.headlineAccent}</span>
              <br />
              {hero.headlineEnd}
            </h1>

            <p className="reveal-up reveal-delay-3 mt-5 max-w-xl text-base leading-7 text-white/78 sm:mt-7 sm:text-lg sm:leading-8">
              {hero.description}
            </p>

            <div className="reveal-up reveal-delay-4 mt-7 flex flex-col gap-4 sm:mt-9 sm:flex-row">
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

          {/* Image Collage */}
          <div className="reveal-up reveal-delay-3 relative mx-auto w-full max-w-120 lg:mx-0">
            <div className="grid grid-cols-2 gap-3">
              {/* Large main image */}
              <div className="col-span-2 editorial-shadow relative aspect-16/10 overflow-hidden rounded-2xl bg-[#05281b]">
                <Image
                  fill
                  priority
                  alt={hero.images[0].alt}
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 70vw, 100vw"
                  src={hero.images[0].src}
                />
                <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0.12),rgba(0,54,35,0.3))]" />
              </div>
              {/* Two smaller images */}
              <div className="editorial-shadow relative aspect-4/3 overflow-hidden rounded-2xl bg-[#05281b]">
                <Image
                  fill
                  alt={hero.images[1].alt}
                  className="object-cover"
                  sizes="(min-width: 1024px) 15vw, (min-width: 640px) 35vw, 50vw"
                  src={hero.images[1].src}
                />
                <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0.12),rgba(0,54,35,0.25))]" />
              </div>
              <div className="editorial-shadow relative aspect-4/3 overflow-hidden rounded-2xl bg-[#05281b]">
                <Image
                  fill
                  alt={hero.images[2].alt}
                  className="object-cover"
                  sizes="(min-width: 1024px) 15vw, (min-width: 640px) 35vw, 50vw"
                  src={hero.images[2].src}
                />
                <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0.12),rgba(0,54,35,0.25))]" />
              </div>
            </div>

            {/* Floating stat card */}
            <div className="paper-panel pulse-soft reveal-up reveal-delay-5 absolute -bottom-6 left-4 z-10 max-w-60 rounded-[1.4rem] px-5 py-4 text-primary sm:-bottom-8 sm:left-6 sm:max-w-[16rem] sm:px-6 sm:py-5">
              <p className="font-headline text-3xl font-extrabold tracking-[-0.05em] sm:text-4xl">
                {hero.statValue}
              </p>
              <p className="mt-2 font-label text-[0.68rem] uppercase tracking-[0.28em] text-muted">
                {hero.statLabel}
              </p>
            </div>
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
