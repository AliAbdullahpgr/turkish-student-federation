import type { HomePageContent } from "@/app/home-content";
import { SectionFrame } from "./primitives";

export function NewsletterSection({
  newsletter,
}: {
  newsletter: HomePageContent["newsletter"];
}) {
  return (
    <section className="py-20 sm:py-24 md:py-32" id={newsletter.id}>
      <SectionFrame className="max-w-4xl text-center">
        <h2 className="font-headline text-[2.2rem] font-extrabold tracking-[-0.05em] text-primary sm:text-4xl md:text-5xl">
          {newsletter.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {newsletter.description}
        </p>

        <div className="glass-panel mt-10 flex flex-col gap-4 rounded-[2rem] px-4 py-4 sm:mt-12 sm:flex-row sm:items-center sm:rounded-full sm:px-5">
          <input
            aria-label="Email address"
            className="min-w-0 flex-1 rounded-full bg-surface-high px-6 py-4 text-base text-primary outline-none ring-0"
            placeholder={newsletter.placeholder}
            type="email"
          />
          <button
            className="inline-flex w-full items-center justify-center rounded-full bg-secondary px-8 py-4 font-headline text-sm font-bold text-white shadow-[0_18px_36px_rgba(0,33,20,0.14)] hover:-translate-y-0.5 hover:bg-primary sm:w-auto"
            type="button"
          >
            {newsletter.ctaLabel}
          </button>
        </div>

        <p className="mt-6 font-label text-[0.64rem] uppercase tracking-[0.28em] text-outline">
          {newsletter.disclaimer}
        </p>
      </SectionFrame>
    </section>
  );
}
