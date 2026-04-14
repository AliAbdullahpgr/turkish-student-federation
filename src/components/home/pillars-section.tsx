import type { HomePageContent } from "@/app/home-content";
import { MaterialIcon, SectionFrame } from "./primitives";

export function PillarsSection({
  pillars,
}: {
  pillars: HomePageContent["pillars"];
}) {
  return (
    <section className="bg-surface-low py-20 sm:py-24 md:py-32">
      <SectionFrame>
        <div className="mb-12 sm:mb-16">
          <h2 className="font-headline text-[2.2rem] font-extrabold tracking-[-0.05em] text-primary sm:text-4xl md:text-[2.8rem]">
            {pillars.title}
          </h2>
          <div className="mt-4 h-1.5 w-20 rounded-full bg-secondary sm:mt-5" />
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.items.map((item) => (
            <article
              key={item.title}
              className="paper-panel group rounded-[1.4rem] p-6 sm:rounded-[1.6rem] sm:p-8 md:p-10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(1,79,53,0.08)] text-primary-container group-hover:bg-primary-container group-hover:text-white sm:mb-8 sm:h-14 sm:w-14">
                <MaterialIcon className="text-[28px] sm:text-[32px]" name={item.icon} />
              </div>
              <h3 className="mb-3 font-headline text-xl font-bold tracking-[-0.03em] text-primary sm:mb-4 sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-muted sm:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}
