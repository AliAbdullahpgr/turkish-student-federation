import type { HomePageContent } from "@/app/home-content";
import { MaterialIcon, SectionFrame } from "./primitives";

export function CredibilitySection({
  credibility,
}: {
  credibility: HomePageContent["credibility"];
}) {
  return (
    <section className="relative z-20 -mt-6 pb-12 sm:-mt-8 sm:pb-16 md:-mt-12 md:pb-20">
      <SectionFrame>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {credibility.items.map((item, index) => (
            <article
              key={item.label}
              className={`paper-panel spotlight-card gradient-border-card hover-lift reveal-up rounded-2xl border border-[rgba(0,54,35,0.06)] px-5 py-5 reveal-delay-${index + 1}`}
            >
              <p className="font-headline text-3xl font-extrabold tracking-[-0.05em] text-primary">
                {item.value}
              </p>
              <p className="mt-1.5 font-label text-[0.68rem] uppercase tracking-[0.28em] text-secondary">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p>
            </article>
          ))}

          <aside className="spotlight-card hover-lift reveal-up reveal-delay-4 overflow-hidden rounded-2xl bg-[linear-gradient(145deg,var(--primary),var(--primary-container))] px-5 py-5 text-white">
            <div className="mb-4 flex items-center gap-2.5 text-secondary-fixed-dim">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <MaterialIcon className="h-4 w-4" name="building" />
              </span>
              <span className="font-label text-[0.64rem] uppercase tracking-[0.28em]">
                {credibility.eyebrow}
              </span>
            </div>
            <p className="text-sm leading-6 text-white/80">
              {credibility.quote}
            </p>
            <div className="mt-4 flex items-center gap-2 text-secondary-fixed-dim">
              <MaterialIcon className="h-3.5 w-3.5" name="calendar" />
              <span className="font-label text-[0.6rem] uppercase tracking-[0.28em]">
                {credibility.quoteAttribution}
              </span>
            </div>
          </aside>
        </div>
      </SectionFrame>
    </section>
  );
}
