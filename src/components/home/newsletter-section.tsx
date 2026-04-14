import type { HomePageContent } from "@/app/home-content";
import { SectionFrame } from "./primitives";

export function NewsletterSection({
  newsletter,
}: {
  newsletter: HomePageContent["newsletter"];
}) {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(135deg,var(--primary),var(--primary-container))] py-20 text-white sm:py-24 md:py-32"
      id={newsletter.id}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,218,161,0.15),transparent_50%)]" />

      <SectionFrame className="relative z-10 max-w-4xl text-center">
        <h2 className="reveal-up font-headline text-[2.2rem] font-extrabold tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
          {newsletter.title}
        </h2>
        <p className="reveal-up reveal-delay-1 mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
          {newsletter.description}
        </p>

        <div className="reveal-up reveal-delay-2 mt-10 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm sm:mt-12 sm:flex-row sm:items-center sm:rounded-full sm:px-5">
          <input
            aria-label="Email address"
            className="min-w-0 flex-1 rounded-full bg-white/10 px-6 py-4 text-base text-white outline-none ring-0 placeholder:text-white/50 focus:bg-white/14"
            placeholder={newsletter.placeholder}
            type="email"
          />
          <button
            className="button-sheen hover-lift inline-flex w-full items-center justify-center rounded-full bg-secondary-fixed-dim px-8 py-4 font-headline text-sm font-bold text-primary shadow-[0_18px_36px_rgba(0,33,20,0.2)] hover:bg-[#8ee8b3] sm:w-auto"
            type="button"
          >
            {newsletter.ctaLabel}
          </button>
        </div>

        <p className="mt-6 font-label text-[0.64rem] uppercase tracking-[0.28em] text-white/50">
          {newsletter.disclaimer}
        </p>
      </SectionFrame>
    </section>
  );
}
