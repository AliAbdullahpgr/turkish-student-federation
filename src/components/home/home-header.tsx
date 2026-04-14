"use client";

import { useState } from "react";
import type { HomeNavItem, HomePageContent } from "@/app/home-content";
import { MaterialIcon, SectionFrame, cx } from "./primitives";

const dropdownItems: Record<string, { label: string; href: string }[]> = {
  "About Us": [
    { label: "Our Mission", href: "#leadership" },
    { label: "Leadership", href: "#leadership" },
    { label: "History", href: "#leadership" },
  ],
  "Get Involved": [
    { label: "Join a Program", href: "#curriculum" },
    { label: "Volunteer", href: "#why-join" },
    { label: "Donate", href: "#join" },
  ],
  "Literature": [
    { label: "Publications", href: "#resources" },
    { label: "Student Stories", href: "#resources" },
    { label: "Reports", href: "#resources" },
  ],
};

function NavDropdown({ item }: { item: HomeNavItem }) {
  const [open, setOpen] = useState(false);
  const items = dropdownItems[item.label];

  if (!item.hasDropdown || !items) {
    return (
      <a
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 font-label text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
        href={item.href}
      >
        {item.label}
      </a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 font-label text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
        type="button"
      >
        {item.label}
        <MaterialIcon
          className={cx("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
          name="chevron_down"
        />
      </button>

      <div
        className={cx(
          "absolute left-0 top-full z-50 min-w-48 overflow-hidden rounded-xl border border-white/10 bg-[#0d5535] shadow-[0_16px_40px_rgba(0,20,12,0.5)] backdrop-blur-xl transition-all duration-200",
          open ? "translate-y-1 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        <div className="py-2">
          {items.map((sub) => (
            <a
              key={sub.label}
              className="block px-4 py-2.5 font-label text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              href={sub.href}
            >
              {sub.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HomeHeader({
  brand,
  navigation,
  announcement,
}: {
  brand: HomePageContent["brand"];
  navigation: HomeNavItem[];
  announcement: HomePageContent["announcement"];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-primary text-white">
        <SectionFrame>
          <div className="flex items-center justify-center gap-4 py-2 text-center">
            <p className="font-label text-xs tracking-wide sm:text-sm">
              {announcement.text}
            </p>
            <a
              className="inline-flex items-center justify-center rounded bg-[#c9a84c] px-3 py-1 font-label text-[0.65rem] font-bold uppercase tracking-wider text-primary shadow-sm hover:bg-[#d4b85c] sm:px-4"
              href="#join"
            >
              {announcement.ctaLabel}
            </a>
          </div>
        </SectionFrame>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-white/10 bg-[#0a4a2e] backdrop-blur-xl">
        <SectionFrame>
          <div className="flex items-center justify-between gap-4 py-3">
            {/* Logo / Brand */}
            <a
              className="flex items-center gap-3"
              href="#top"
              onClick={closeMenu}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-secondary-fixed-dim/40 bg-white/10 sm:h-11 sm:w-11">
                <span className="font-headline text-sm font-extrabold text-secondary-fixed-dim sm:text-base">
                  {brand.shortName}
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
              {navigation.map((item) => (
                <NavDropdown key={item.label} item={item} />
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a
                className="button-sheen inline-flex items-center justify-center rounded-full bg-secondary px-5 py-2.5 font-label text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,33,20,0.3)] hover:bg-[#008050]"
                href="#join"
              >
                {brand.ctaLabel}
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              aria-controls="mobile-nav"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              type="button"
            >
              <MaterialIcon name={isMenuOpen ? "close" : "menu"} />
            </button>
          </div>
        </SectionFrame>

        {/* Mobile Nav */}
        <div
          className={cx(
            "overflow-hidden border-t border-white/10 transition-[max-height,opacity,transform] duration-300 lg:hidden",
            isMenuOpen ? "max-h-120 translate-y-0 opacity-100" : "max-h-0 -translate-y-2 opacity-0",
          )}
          id="mobile-nav"
        >
          <SectionFrame className="py-4">
            <nav aria-label="Mobile primary" className="flex flex-col gap-1">
              {navigation.map((item) => {
                const subs = item.hasDropdown ? dropdownItems[item.label] : null;
                return (
                  <div key={item.label}>
                    <a
                      className="flex items-center justify-between rounded-xl px-4 py-3 font-label text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
                      href={item.href}
                      onClick={closeMenu}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <MaterialIcon className="h-4 w-4 opacity-50" name="chevron_down" />
                      )}
                    </a>
                    {subs && (
                      <div className="ml-4 border-l border-white/10 pl-4">
                        {subs.map((sub) => (
                          <a
                            key={sub.label}
                            className="block rounded-lg px-3 py-2 font-label text-sm text-white/60 hover:bg-white/10 hover:text-white"
                            href={sub.href}
                            onClick={closeMenu}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <a
                className="button-sheen mt-3 inline-flex items-center justify-center rounded-full bg-secondary px-5 py-3 font-label text-sm font-semibold text-white"
                href="#join"
                onClick={closeMenu}
              >
                {brand.ctaLabel}
              </a>
            </nav>
          </SectionFrame>
        </div>
      </div>
    </header>
  );
}
