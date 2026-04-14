"use client";

import { SectionFrame } from "./primitives";
import { Reveal } from "./animated";

const partners = [
  "Istanbul University",
  "Ankara University",
  "Bogazici University",
  "METU",
  "Hacettepe University",
  "Sabanci University",
  "Koc University",
  "Bilkent University",
  "Galatasaray University",
  "Marmara University",
];

export function PartnersSection() {
  return (
    <section className="border-y border-[rgba(0,54,35,0.06)] py-14 sm:py-16">
      <SectionFrame>
        <Reveal className="mb-8 text-center">
          <p className="font-label text-[0.68rem] uppercase tracking-[0.3em] text-outline">
            Trusted by students across 130+ campuses
          </p>
        </Reveal>

        {/* Marquee wrapper */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

          <div className="marquee-track flex items-center gap-12">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-14 shrink-0 items-center rounded-xl border border-[rgba(0,54,35,0.08)] bg-white/70 px-6 sm:h-16 sm:px-8"
              >
                <span className="whitespace-nowrap font-headline text-sm font-bold tracking-tight text-primary/60 sm:text-base">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
