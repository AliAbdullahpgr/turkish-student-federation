"use client";

import type { HomePageContent } from "@/app/home-content";
import { MaterialIcon, SectionFrame } from "./primitives";
import { AnimatedCounter, Reveal } from "./animated";

export function ImpactSection({
  impact,
}: {
  impact: HomePageContent["impact"];
}) {
  return (
    <section
      className="bg-[linear-gradient(135deg,var(--primary),#002c1d)] py-20 text-white sm:py-24 md:py-32"
      id={impact.id}
    >
      <SectionFrame>
        {/* Section Title */}
        <Reveal className="mb-14 text-center sm:mb-16">
          <p className="mb-4 font-label text-[0.68rem] uppercase tracking-[0.3em] text-secondary-fixed-dim">
            {impact.eyebrow}
          </p>
          <h2 className="font-headline text-[2.2rem] font-extrabold tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
            {impact.titleStart}{" "}
            <span className="italic text-secondary-fixed-dim">{impact.titleAccent}</span>
          </h2>
        </Reveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {impact.items.map((item, index) => (
            <Reveal
              key={item.label}
              className="flex flex-col items-center space-y-4 text-center"
              delay={index * 100}
            >
              {/* Circular Icon */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/20 bg-white/8 sm:h-24 sm:w-24">
                <MaterialIcon className="h-8 w-8 text-white sm:h-10 sm:w-10" name={item.icon} />
              </div>
              <AnimatedCounter
                className="font-headline text-3xl font-extrabold tracking-[-0.05em] text-secondary-fixed-dim sm:text-4xl"
                value={item.value}
              />
              <p className="font-label text-[0.64rem] uppercase tracking-[0.28em] text-white/64">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}
