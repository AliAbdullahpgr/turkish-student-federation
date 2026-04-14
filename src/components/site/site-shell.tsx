"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { footerGroups, siteMeta, siteNav } from "@/lib/site-content";
import { cx, SectionFrame } from "./primitives";

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      className={cx(
        "nav-underline rounded-full px-1 py-1 font-label text-sm tracking-[0.16em] uppercase transition-colors",
        active ? "text-primary" : "text-muted hover:text-primary",
      )}
      href={href}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,54,35,0.08)] bg-[rgba(252,249,248,0.86)] backdrop-blur-xl">
      <SectionFrame>
        <div className="flex items-center justify-between gap-4 py-4">
          <Link className="font-headline text-xl font-extrabold tracking-[-0.05em] text-primary sm:text-2xl" href="/">
            {siteMeta.shortName}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {siteNav.map((item) => (
              <NavLink
                key={item.href}
                active={pathname === item.href}
                href={item.href}
                label={item.label}
              />
            ))}
          </nav>

          <div className="hidden md:flex md:items-center md:gap-3">
            <Link
              className="rounded-full border border-[rgba(0,54,35,0.14)] px-4 py-2 font-label text-xs font-semibold uppercase tracking-[0.16em] text-primary hover:bg-white"
              href="/verify-membership"
            >
              Verify
            </Link>
            <Link
              className="button-sheen rounded-full bg-primary px-5 py-2.5 font-label text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_16px_32px_rgba(0,33,20,0.14)] hover:bg-primary-container"
              href="/join"
            >
              Join Now
            </Link>
          </div>

          <button
            aria-controls="mobile-nav"
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-primary shadow-[0_12px_24px_rgba(0,33,20,0.08)] md:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </SectionFrame>

      <div
        className={cx(
          "overflow-hidden border-t border-[rgba(0,54,35,0.08)] bg-surface-low transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
        id="mobile-nav"
      >
        <SectionFrame className="py-4">
          <nav aria-label="Mobile primary" className="flex flex-col gap-2">
            {siteNav.map((item) => (
              <NavLink
                key={item.href}
                active={pathname === item.href}
                href={item.href}
                label={item.label}
                onClick={() => setOpen(false)}
              />
            ))}
            <Link
              className="mt-2 rounded-full border border-[rgba(0,54,35,0.14)] px-4 py-3 text-center font-label text-xs font-semibold uppercase tracking-[0.16em] text-primary"
              href="/verify-membership"
              onClick={() => setOpen(false)}
            >
              Verify Membership
            </Link>
            <Link
              className="button-sheen rounded-full bg-primary px-4 py-3 text-center font-label text-xs font-semibold uppercase tracking-[0.16em] text-white"
              href="/join"
              onClick={() => setOpen(false)}
            >
              Join Now
            </Link>
          </nav>
        </SectionFrame>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(0,54,35,0.08)] bg-surface-low py-16 md:py-20">
      <SectionFrame>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="max-w-xl">
            <p className="font-headline text-3xl font-extrabold tracking-[-0.06em] text-primary">
              {siteMeta.name}
            </p>
            <p className="mt-5 text-sm leading-7 text-muted">
              Student-led organizing across identity, leadership, service, publications, and campus
              life. This phase is a frontend rebuild only, with backend integrations deferred.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-muted sm:grid-cols-3">
              <div className="rounded-[1.2rem] bg-white/80 px-4 py-4">
                <p className="font-label text-[0.68rem] uppercase tracking-[0.22em] text-outline">Email</p>
                <p className="mt-2 text-primary">{siteMeta.contactEmail}</p>
              </div>
              <div className="rounded-[1.2rem] bg-white/80 px-4 py-4">
                <p className="font-label text-[0.68rem] uppercase tracking-[0.22em] text-outline">Phone</p>
                <p className="mt-2 text-primary">{siteMeta.contactPhone}</p>
              </div>
              <div className="rounded-[1.2rem] bg-white/80 px-4 py-4">
                <p className="font-label text-[0.68rem] uppercase tracking-[0.22em] text-outline">Base</p>
                <p className="mt-2 text-primary">{siteMeta.address}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="font-headline text-lg font-bold text-primary">{group.title}</h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link className="text-sm text-muted hover:text-primary" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[rgba(0,54,35,0.08)] pt-6 text-xs text-outline md:flex-row md:items-center md:justify-between">
          <p>© 2026 Muslim Students League Pakistan. Frontend rebuild preview.</p>
          <p>Designed for migration from the current live public site.</p>
        </div>
      </SectionFrame>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
