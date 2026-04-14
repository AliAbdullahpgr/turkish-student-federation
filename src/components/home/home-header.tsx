"use client";

import { useState } from "react";
import type { HomeNavItem, HomePageContent } from "@/app/home-content";
import { MaterialIcon, SectionFrame, cx } from "./primitives";

export function HomeHeader({
  brand,
  navigation,
}: {
  brand: HomePageContent["brand"];
  navigation: HomeNavItem[];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[rgba(252,249,248,0.86)] backdrop-blur-xl">
      <SectionFrame>
        <div className="flex items-center justify-between gap-4 py-4">
          <a
            className="font-headline text-xl font-extrabold tracking-[-0.04em] text-primary sm:text-2xl"
            href="#top"
            onClick={closeMenu}
          >
            {brand.name}
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                className="font-label text-sm font-medium tracking-wide text-muted hover:text-primary"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 font-label text-sm font-semibold text-white shadow-[0_16px_32px_rgba(0,33,20,0.14)] hover:-translate-y-0.5 hover:bg-primary-container"
              type="button"
            >
              {brand.ctaLabel}
            </button>
          </div>

          <button
            aria-controls="mobile-nav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-primary shadow-[0_12px_24px_rgba(0,33,20,0.08)] md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <MaterialIcon name={isMenuOpen ? "close" : "menu"} />
          </button>
        </div>
      </SectionFrame>

      <div
        className={cx(
          "overflow-hidden border-t border-[rgba(0,54,35,0.08)] bg-surface-low transition-[max-height,opacity] duration-200 md:hidden",
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
        id="mobile-nav"
      >
        <SectionFrame className="py-4">
          <nav aria-label="Mobile primary" className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.label}
                className="rounded-2xl px-4 py-3 font-label text-sm font-medium tracking-wide text-primary hover:bg-white/80"
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <button
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 font-label text-sm font-semibold text-white"
              onClick={closeMenu}
              type="button"
            >
              {brand.ctaLabel}
            </button>
          </nav>
        </SectionFrame>
      </div>
    </header>
  );
}
