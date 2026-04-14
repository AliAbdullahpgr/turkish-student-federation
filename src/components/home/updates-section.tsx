import Image from "next/image";
import type { HomePageContent, StoryItem } from "@/app/home-content";
import { SectionFrame } from "./primitives";

function StoryCard({ story }: { story: StoryItem }) {
  return (
    <article className="group">
      {story.image ? (
        <div className="editorial-shadow relative mb-5 aspect-[4/3] overflow-hidden rounded-[1.45rem] bg-surface-high sm:mb-6 sm:rounded-[1.65rem]">
          <Image
            fill
            alt={story.image.alt}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
            src={story.image.src}
          />
        </div>
      ) : (
        <div className="editorial-shadow relative mb-5 aspect-[4/3] overflow-hidden rounded-[1.45rem] bg-[linear-gradient(135deg,var(--primary),var(--primary-container))] sm:mb-6 sm:rounded-[1.65rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(122,218,161,0.24),transparent_36%)]" />
          <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
            <p className="max-w-[18rem] text-center font-headline text-xl font-bold leading-tight text-white sm:text-2xl">
              {story.promoText}
            </p>
          </div>
        </div>
      )}

      <p className="mb-3 font-label text-[0.64rem] uppercase tracking-[0.28em] text-outline">
        {story.category}
      </p>
      <h3 className="mb-4 font-headline text-xl font-bold tracking-[-0.03em] text-primary transition-colors group-hover:text-secondary sm:text-2xl">
        {story.title}
      </h3>
      <p className="mb-6 text-sm leading-7 text-muted">{story.excerpt}</p>
      <div className="flex items-center gap-3 text-[0.68rem] font-label uppercase tracking-[0.22em] text-outline">
        <span>{story.date}</span>
        <span aria-hidden="true">{"\u2022"}</span>
        <span>{story.readTime}</span>
      </div>
    </article>
  );
}

export function UpdatesSection({
  updates,
  newsletterId,
}: {
  updates: HomePageContent["updates"];
  newsletterId: string;
}) {
  return (
    <section className="py-20 sm:py-24 md:py-32" id={updates.id}>
      <SectionFrame>
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-headline text-[2.2rem] font-extrabold tracking-[-0.05em] text-primary sm:text-4xl md:text-[2.8rem]">
              {updates.title}
            </h2>
            <p className="mt-2 text-base text-muted">{updates.description}</p>
          </div>
          <a
            className="w-fit border-b-2 border-primary pb-1 font-headline text-sm font-bold tracking-wide text-primary hover:border-secondary hover:text-secondary"
            href={`#${newsletterId}`}
          >
            {updates.ctaLabel}
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {updates.items.map((story) => (
            <StoryCard key={story.title} story={story} />
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}
