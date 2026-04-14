import type { HomePageContent } from "@/app/home-content";
import { MaterialIcon, SectionFrame } from "./primitives";

export function HomeFooter({
  brandName,
  footer,
}: {
  brandName: string;
  footer: HomePageContent["footer"];
}) {
  return (
    <footer className="bg-surface-low py-16 md:py-20">
      <SectionFrame>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div>
            <p className="font-headline text-2xl font-extrabold tracking-[-0.04em] text-primary">
              {brandName}
            </p>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted">
              {footer.description}
            </p>
            <div className="mt-8 flex items-center gap-4 text-primary sm:gap-5">
              {footer.socialIcons.map((icon) => (
                <a
                  key={icon}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/80 hover:-translate-y-0.5 hover:text-secondary"
                  href="#top"
                >
                  <MaterialIcon className="text-[20px]" name={icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {footer.groups.map((group) => (
              <div key={group.title}>
                <h2 className="font-headline text-lg font-bold text-primary">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-4">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a className="text-sm text-muted hover:text-primary" href="#top">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 text-xs text-outline md:flex-row md:items-center md:justify-between">
          <p>{footer.copyright}</p>
          <p>{footer.location}</p>
        </div>
      </SectionFrame>
    </footer>
  );
}
