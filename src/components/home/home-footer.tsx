import type { HomePageContent } from "@/app/home-content";
import { MaterialIcon, SectionFrame } from "./primitives";

export function HomeFooter({
  brandName,
  shortName,
  footer,
}: {
  brandName: string;
  shortName: string;
  footer: HomePageContent["footer"];
}) {
  return (
    <footer className="bg-[#0b1f14] py-16 text-white md:py-20">
      <SectionFrame>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="reveal-up">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-secondary-fixed-dim/30 bg-white/10">
                <span className="font-headline text-sm font-extrabold text-secondary-fixed-dim">
                  {shortName}
                </span>
              </div>
              <p className="font-headline text-xl font-extrabold tracking-[-0.04em] text-white">
                {brandName}
              </p>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              {footer.description}
            </p>
            <div className="mt-8 flex items-center gap-4 sm:gap-5">
              {footer.socialIcons.map((icon) => (
                <a
                  key={icon}
                  className="hover-lift inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/70 hover:bg-white/14 hover:text-white"
                  href="#top"
                >
                  <MaterialIcon className="text-[20px]" name={icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {footer.groups.map((group, index) => (
              <div key={group.title} className={`reveal-up reveal-delay-${index + 1}`}>
                <h2 className="font-headline text-lg font-bold text-white">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-4">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a className="text-sm text-white/50 transition-colors hover:text-white" href="#top">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col gap-3 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>{footer.copyright}</p>
          <p>{footer.location}</p>
        </div>
      </SectionFrame>
    </footer>
  );
}
