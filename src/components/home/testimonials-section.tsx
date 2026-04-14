"use client";

import { useEffect, useState } from "react";
import { SectionFrame } from "./primitives";
import { Reveal } from "./animated";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "The federation gave me a community when I had none. Within weeks I had friends, direction, and a sense of purpose I hadn't felt since leaving home.",
    name: "Elif K.",
    role: "3rd Year, Political Science",
  },
  {
    quote: "The mentorship program changed my trajectory. My mentor helped me land an internship and showed me what real leadership looks like.",
    name: "Mert A.",
    role: "Graduate Student, Engineering",
  },
  {
    quote: "I joined for the events but stayed for the people. This federation is the closest thing to family I've found on campus.",
    name: "Zeynep D.",
    role: "2nd Year, Business Administration",
  },
  {
    quote: "Being part of the advocacy team taught me more about leadership than any course. The impact we created together was real and visible.",
    name: "Burak T.",
    role: "4th Year, Law",
  },
  {
    quote: "From organizing community drives to speaking at the annual summit, every opportunity here helped me grow beyond what I imagined.",
    name: "Ayse M.",
    role: "Alumni, Class of 2023",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 sm:py-24 md:py-32">
      <SectionFrame className="max-w-4xl text-center">
        <Reveal>
          <p className="mb-3 font-label text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
            Student Voices
          </p>
          <h2 className="font-headline text-[2.2rem] font-extrabold tracking-[-0.05em] text-primary sm:text-4xl md:text-5xl">
            What Our{" "}
            <span className="italic text-secondary">Members</span> Say
          </h2>
        </Reveal>

        <div
          className="relative mt-12 min-h-[16rem] sm:mt-16 sm:min-h-[14rem]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                i === active
                  ? "translate-y-0 opacity-100"
                  : i < active
                    ? "-translate-y-6 opacity-0"
                    : "translate-y-6 opacity-0"
              }`}
            >
              <blockquote className="max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="font-headline text-base font-bold text-primary">{t.name}</p>
                <p className="mt-1 font-label text-xs tracking-wide text-outline">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 bg-secondary"
                  : "w-2.5 bg-outline-variant hover:bg-outline"
              }`}
              onClick={() => setActive(i)}
              type="button"
            />
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}
