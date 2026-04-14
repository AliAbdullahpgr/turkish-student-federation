import type { HomePageContent } from "@/app/home-content";
import { MaterialIcon, SectionFrame } from "./primitives";

export function WhyJoinSection({
  whyJoin,
}: {
  whyJoin: HomePageContent["whyJoin"];
}) {
  return (
    <section className="py-20 sm:py-24 md:py-28" id={whyJoin.id}>
      <SectionFrame>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {whyJoin.items.map((item, index) => (
            <article
              key={item.title}
              className={`paper-panel spotlight-card hover-lift reveal-up rounded-2xl border border-[rgba(0,54,35,0.05)] px-6 py-6 sm:px-7 reveal-delay-${index + 1}`}
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(1,79,53,0.08)] text-primary-container">
                  <MaterialIcon className="h-6 w-6" name={item.icon} />
                </span>
                <div>
                  <h3 className="font-headline text-xl font-bold tracking-[-0.03em] text-primary sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}
