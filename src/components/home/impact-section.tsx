import type { HomePageContent } from "@/app/home-content";
import { SectionFrame } from "./primitives";

export function ImpactSection({
  impact,
}: {
  impact: HomePageContent["impact"];
}) {
  return (
    <section
      className="bg-[linear-gradient(135deg,var(--primary),#002c1d)] py-16 text-white sm:py-20 md:py-24"
      id={impact.id}
    >
      <SectionFrame>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 text-center md:grid-cols-3 lg:grid-cols-6">
          {impact.items.map((item) => (
            <div key={item.label} className="space-y-3 sm:space-y-4">
              <p className="font-headline text-4xl font-extrabold tracking-[-0.05em] text-secondary-fixed-dim sm:text-5xl">
                {item.value}
              </p>
              <p className="font-label text-[0.64rem] uppercase tracking-[0.28em] text-white/64">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}
