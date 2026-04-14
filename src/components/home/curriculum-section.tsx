import Image from "next/image";
import type { HomePageContent } from "@/app/home-content";
import { MaterialIcon, SectionFrame } from "./primitives";

export function CurriculumSection({
  curriculum,
}: {
  curriculum: HomePageContent["curriculum"];
}) {
  return (
    <section className="bg-surface-low py-20 sm:py-24 md:py-32" id={curriculum.id}>
      <SectionFrame>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
          <div className="reveal-up reveal-delay-1">
            <h2 className="font-headline text-[2.2rem] font-extrabold tracking-[-0.05em] text-primary sm:text-4xl md:text-[2.8rem]">
              {curriculum.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Built with guidance from{" "}
              <span className="font-semibold text-primary">{curriculum.instructor}</span>.{" "}
              {curriculum.description}
            </p>

            <div className="mt-8 space-y-4">
              {curriculum.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 text-primary">
                  <MaterialIcon className="text-secondary" name="verified" />
                  <span className="text-sm font-semibold sm:text-base">{highlight}</span>
                </div>
              ))}
            </div>

            <button
              className="button-sheen hover-lift mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 font-headline text-sm font-bold text-white shadow-[0_18px_36px_rgba(0,33,20,0.15)] hover:bg-primary-container sm:mt-10 sm:w-auto"
              type="button"
            >
              {curriculum.ctaLabel}
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {curriculum.items.map((item, index) => (
              <article
                key={item.title}
                className={`paper-panel spotlight-card hover-lift reveal-up overflow-hidden rounded-2xl p-3 reveal-delay-${index + 2}`}
              >
                <div className="relative mb-5 aspect-4/3 overflow-hidden rounded-xl bg-surface-high">
                  <Image
                    fill
                    alt={item.image.alt}
                    className="object-cover"
                    sizes="(min-width: 1280px) 22vw, (min-width: 768px) 42vw, 100vw"
                    src={item.image.src}
                  />
                </div>
                <div className="px-3 pb-4">
                  <h3 className="font-headline text-xl font-bold tracking-[-0.03em] text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
