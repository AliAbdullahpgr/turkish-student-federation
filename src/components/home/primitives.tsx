import type { ReactNode } from "react";
import type { LucideProps } from "lucide-react";
import {
  Award,
  Building2,
  BookOpenText,
  CalendarRange,
  ChevronDown,
  CirclePlay,
  Film,
  Globe,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Mail,
  Menu,
  Phone,
  Play,
  Scale,
  ShieldCheck,
  Users,
  Volleyball,
  X,
} from "lucide-react";
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

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  alternate_email: Mail,
  auto_stories: BookOpenText,
  balance: Scale,
  call: Phone,
  chevron_down: ChevronDown,
  close: X,
  groups: Users,
  menu: Menu,
  movie: Film,
  play_arrow: Play,
  play_circle: CirclePlay,
  public: Globe,
  sports_soccer: Volleyball,
  verified: ShieldCheck,
  volunteer_activism: HeartHandshake,
  school: GraduationCap,
  award: Award,
  building: Building2,
  calendar: CalendarRange,
  hand_coins: HandCoins,
  youtube: CirclePlay,
};

export function MaterialIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name];

  if (!Icon) {
    return null;
  }

  return <Icon aria-hidden="true" className={className} strokeWidth={1.9} />;
}

export function ActionLink({
  action,
  className,
}: {
  action: HeroAction;
  className: string;
}) {
  const sharedClassName = cx(
    "button-sheen hover-lift inline-flex items-center justify-center rounded-full px-6 py-3.5 font-headline text-sm font-bold tracking-tight md:px-8 md:text-base",
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
