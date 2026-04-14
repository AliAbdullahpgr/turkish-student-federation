import type { ReactNode } from "react";
import type { HeroAction } from "@/app/home-content";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function SectionFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-8", className)}>
      {children}
    </div>
  );
}

export function MaterialIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={cx("material-symbols-outlined", className)}>
      {name}
    </span>
  );
}

export function ActionLink({
  action,
  className,
}: {
  action: HeroAction;
  className: string;
}) {
  const sharedClassName = cx(
    "inline-flex items-center justify-center rounded-full px-6 py-3.5 font-headline text-sm font-bold tracking-tight md:px-8 md:text-base",
    className,
  );

  if (action.href) {
    return (
      <a className={sharedClassName} href={action.href}>
        {action.label}
      </a>
    );
  }

  return (
    <button className={sharedClassName} type="button">
      {action.label}
    </button>
  );
}
