import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Camera,
  Check,
  Clock3,
  GraduationCap,
  HeartHandshake,
  Layers3,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  Newspaper,
  Shield,
  ShoppingBag,
  Sparkles,
  UserRound,
} from "lucide-react";
import type {
  ActionItem,
  CourseItem,
  Department,
  EventItem,
  LegalSection,
  PostItem,
  ProductItem,
  StatItem,
  TeamMember,
} from "@/lib/site-content";
import { cx, SectionFrame } from "./primitives";

const iconMap = {
  "book-open-text": BookOpenText,
  camera: Camera,
  "graduation-cap": GraduationCap,
  "heart-handshake": HeartHandshake,
  layers: Layers3,
  megaphone: Megaphone,
  "monitor-smartphone": MonitorSmartphone,
  newspaper: Newspaper,
  shield: Shield,
  shopping: ShoppingBag,
  sparkles: Sparkles,
  user: UserRound,
} as const;

function CardIcon({ name }: { name: string }) {
  const Icon = iconMap[name as keyof typeof iconMap] ?? Sparkles;
  return <Icon className="h-5 w-5" strokeWidth={1.9} />;
}

function ActionButton({ action }: { action: ActionItem }) {
  return (
    <Link
      className={cx(
        "button-sheen inline-flex items-center justify-center rounded-full px-6 py-3 font-label text-xs font-semibold uppercase tracking-[0.18em]",
        action.variant === "secondary"
          ? "border border-white/14 bg-white/6 text-white hover:bg-white/12"
          : "bg-secondary text-white shadow-[0_18px_36px_rgba(0,33,20,0.18)] hover:bg-[#0c7a4a]",
      )}
      href={action.href}
    >
      {action.label}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  actions,
  stats,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  actions?: ActionItem[];
  stats?: StatItem[];
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--primary),var(--primary-container))] pb-16 pt-14 text-white sm:pb-20 sm:pt-16 md:pb-24 md:pt-20">
      <div className="hero-texture absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,218,161,0.18),transparent_28%)]" />

      <SectionFrame className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.68rem] font-label uppercase tracking-[0.28em] text-secondary-fixed-dim">
            <span className="h-2 w-2 rounded-full bg-secondary-fixed-dim" />
            {eyebrow}
          </div>
          <h1 className="font-headline text-[2.75rem] font-extrabold leading-[0.95] tracking-[-0.07em] sm:text-[3.4rem] md:text-[4.4rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {description}
          </p>

          {actions ? (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {actions.map((action) => (
                <ActionButton key={action.href} action={action} />
              ))}
            </div>
          ) : null}

          {stats ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/12 bg-white/8 px-4 py-4 backdrop-blur-xl"
                >
                  <p className="font-headline text-2xl font-extrabold tracking-[-0.04em] text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-white/72">{item.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          <div className="editorial-shadow relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-[rgba(255,255,255,0.08)]">
            <Image
              fill
              priority
              alt={title}
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
              src={image}
            />
            <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(0,0,0,0.18),rgba(0,54,35,0.42))]" />
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cx("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="font-label text-[0.68rem] uppercase tracking-[0.28em] text-outline">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-headline text-[2.2rem] font-extrabold tracking-[-0.05em] text-primary sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );
}

export function StatGrid({ items }: { items: StatItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <article
          key={item.label}
          className={`spotlight-card reveal-up rounded-[1.6rem] bg-white/92 px-5 py-6 shadow-[0_20px_40px_rgba(0,33,20,0.06)] reveal-delay-${(index % 5) + 1}`}
        >
          <p className="font-headline text-3xl font-extrabold tracking-[-0.05em] text-primary">
            {item.value}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">{item.label}</p>
          {item.detail ? <p className="mt-3 text-xs uppercase tracking-[0.18em] text-outline">{item.detail}</p> : null}
        </article>
      ))}
    </div>
  );
}

export function SpotlightLinks({
  items,
}: {
  items: Array<{ title: string; summary: string; href: string; icon: string }>;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item, index) => (
        <Link
          key={item.href}
          className={`spotlight-card reveal-up rounded-[1.8rem] bg-white/92 p-6 shadow-[0_20px_40px_rgba(0,33,20,0.06)] transition-transform hover:-translate-y-1 reveal-delay-${(index % 5) + 1}`}
          href={item.href}
        >
          <div className="inline-flex rounded-full bg-primary/8 p-3 text-primary">
            <CardIcon name={item.icon} />
          </div>
          <h3 className="mt-5 font-headline text-xl font-bold tracking-[-0.03em] text-primary">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
          <span className="mt-6 inline-flex items-center gap-2 font-label text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Explore <ArrowRight size={14} />
          </span>
        </Link>
      ))}
    </div>
  );
}

export function NarrativeSplit({
  eyebrow,
  title,
  paragraphs,
  bullets,
  image,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  bullets: string[];
  image: string;
}) {
  return (
    <section className="py-20 sm:py-24 md:py-28">
      <SectionFrame className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="relative">
          <div className="editorial-shadow relative aspect-[5/4] overflow-hidden rounded-[2rem]">
            <Image fill alt={title} className="object-cover" sizes="(min-width: 1024px) 42vw, 100vw" src={image} />
          </div>
          <div className="glass-panel absolute -bottom-6 left-6 rounded-[1.3rem] px-4 py-3 text-primary">
            <p className="font-label text-[0.68rem] uppercase tracking-[0.22em] text-outline">Frontend rebuild</p>
            <p className="mt-1 font-headline text-lg font-bold tracking-[-0.03em]">Static for now, structured for CMS later</p>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} />
          <div className="mt-6 space-y-5 text-base leading-8 text-muted">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <div key={bullet} className="rounded-[1.3rem] bg-white/92 px-4 py-4 shadow-[0_20px_40px_rgba(0,33,20,0.06)]">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/8 text-primary">
                  <Check size={16} />
                </div>
                <p className="mt-3 text-sm leading-6 text-primary">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}

export function DepartmentGrid({ items }: { items: Department[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <Link
          key={item.slug}
          className={`spotlight-card reveal-up rounded-[1.7rem] bg-white/92 p-6 shadow-[0_20px_40px_rgba(0,33,20,0.06)] reveal-delay-${(index % 5) + 1}`}
          href={`/${item.slug}`}
        >
          <div className="inline-flex rounded-full bg-primary/8 p-3 text-primary">
            <CardIcon name={item.icon} />
          </div>
          <p className="mt-4 font-label text-[0.68rem] uppercase tracking-[0.24em] text-outline">{item.lead}</p>
          <h3 className="mt-3 font-headline text-xl font-bold tracking-[-0.04em] text-primary">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.focus.map((focus) => (
              <span key={focus} className="rounded-full bg-surface-low px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-primary">
                {focus}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}

export function TeamGrid({ items }: { items: TeamMember[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <Link
          key={item.slug}
          className={`spotlight-card reveal-up rounded-[1.8rem] bg-white/92 p-6 shadow-[0_20px_40px_rgba(0,33,20,0.06)] reveal-delay-${(index % 5) + 1}`}
          href={`/${item.slug}`}
        >
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[linear-gradient(135deg,var(--primary),var(--primary-container))] font-headline text-2xl font-extrabold tracking-[-0.05em] text-white">
            {item.initials}
          </div>
          <p className="mt-5 font-label text-[0.68rem] uppercase tracking-[0.22em] text-outline">{item.region}</p>
          <h3 className="mt-2 font-headline text-2xl font-bold tracking-[-0.04em] text-primary">{item.name}</h3>
          <p className="mt-1 text-sm text-secondary">{item.role}</p>
          <p className="mt-4 text-sm leading-7 text-muted">{item.summary}</p>
        </Link>
      ))}
    </div>
  );
}

export function StoryGrid({ items }: { items: PostItem[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.slug}
          className={`group reveal-up overflow-hidden rounded-[1.8rem] bg-white/92 shadow-[0_20px_40px_rgba(0,33,20,0.06)] reveal-delay-${(index % 5) + 1}`}
        >
          <Link className="block" href={`/${item.slug}`}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image fill alt={item.title} className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw" src={item.image} />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3 text-[0.68rem] font-label uppercase tracking-[0.2em] text-outline">
                <span>{item.category}</span>
                <span>{item.language}</span>
              </div>
              <h3 className="mt-4 font-headline text-xl font-bold tracking-[-0.03em] text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.18em] text-outline">
                <span className="inline-flex items-center gap-2"><CalendarDays size={14} /> {item.date}</span>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

export function EventGrid({ items }: { items: EventItem[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((item, index) => (
        <article
          key={item.slug}
          className={`reveal-up rounded-[1.8rem] bg-white/92 p-6 shadow-[0_20px_40px_rgba(0,33,20,0.06)] reveal-delay-${(index % 5) + 1}`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-primary/8 px-3 py-1 font-label text-[0.68rem] uppercase tracking-[0.18em] text-primary">
              {item.status}
            </span>
            <span className="font-label text-[0.68rem] uppercase tracking-[0.18em] text-outline">{item.audience}</span>
          </div>
          <h3 className="mt-5 font-headline text-2xl font-bold tracking-[-0.04em] text-primary">{item.title}</h3>
          <p className="mt-4 text-sm leading-7 text-muted">{item.summary}</p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-primary sm:flex-row sm:items-center sm:gap-6">
            <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> {item.date}</span>
            <span className="inline-flex items-center gap-2"><MapPin size={16} /> {item.location}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProductGrid({ items, hrefPrefix = "/product" }: { items: ProductItem[]; hrefPrefix?: string }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item, index) => (
        <Link
          key={item.slug}
          className={`group reveal-up overflow-hidden rounded-[1.8rem] bg-white/92 shadow-[0_20px_40px_rgba(0,33,20,0.06)] reveal-delay-${(index % 5) + 1}`}
          href={`${hrefPrefix}/${item.slug}`}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-surface-low">
            <Image fill alt={item.title} className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 768px) 44vw, 100vw" src={item.image} />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-primary/8 px-3 py-1 font-label text-[0.68rem] uppercase tracking-[0.18em] text-primary">
                {item.badge}
              </span>
              <span className="font-headline text-lg font-bold text-primary">{item.price}</span>
            </div>
            <h3 className="mt-4 font-headline text-2xl font-bold tracking-[-0.04em] text-primary">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function CourseCard({ course }: { course: CourseItem }) {
  return (
    <Link
      className="group overflow-hidden rounded-[1.8rem] bg-white/92 shadow-[0_20px_40px_rgba(0,33,20,0.06)]"
      href={`/courses/${course.slug}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image fill alt={course.title} className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 768px) 44vw, 100vw" src={course.image} />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-3 text-[0.68rem] font-label uppercase tracking-[0.18em] text-outline">
          <span className="inline-flex items-center gap-2"><Clock3 size={14} /> {course.duration}</span>
          <span>{course.format}</span>
        </div>
        <h3 className="mt-4 font-headline text-2xl font-bold tracking-[-0.04em] text-primary">{course.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{course.summary}</p>
      </div>
    </Link>
  );
}

export function QuotePanel({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <div className="rounded-[2rem] bg-[linear-gradient(135deg,var(--primary),var(--primary-container))] px-6 py-8 text-white shadow-[0_28px_60px_rgba(0,33,20,0.18)] md:px-8">
      <p className="font-headline text-2xl font-bold leading-tight tracking-[-0.04em] sm:text-3xl">“{quote}”</p>
      <p className="mt-5 font-label text-[0.72rem] uppercase tracking-[0.22em] text-secondary-fixed-dim">{attribution}</p>
    </div>
  );
}

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="py-20 sm:py-24 md:py-28">
      <SectionFrame>
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,var(--primary),var(--primary-container))] p-8 text-white shadow-[0_32px_70px_rgba(0,33,20,0.18)] sm:p-10 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-label text-[0.68rem] uppercase tracking-[0.28em] text-secondary-fixed-dim">
                Frontend-only phase
              </p>
              <h2 className="mt-4 font-headline text-[2.1rem] font-extrabold tracking-[-0.05em] sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="button-sheen rounded-full bg-secondary px-6 py-3 font-label text-xs font-semibold uppercase tracking-[0.18em] text-white" href={primaryHref}>
                {primaryLabel}
              </Link>
              {secondaryHref && secondaryLabel ? (
                <Link className="rounded-full border border-white/14 px-6 py-3 font-label text-xs font-semibold uppercase tracking-[0.18em] text-white" href={secondaryHref}>
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}

export function UtilityPanel({
  title,
  description,
  fields,
  asideTitle,
  asidePoints,
  submitLabel,
}: {
  title: string;
  description: string;
  fields: Array<{ label: string; placeholder: string }>;
  asideTitle: string;
  asidePoints: string[];
  submitLabel: string;
}) {
  return (
    <SectionFrame className="py-20 sm:py-24 md:py-28">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="rounded-[1.8rem] bg-surface-low px-6 py-7">
          <p className="font-label text-[0.68rem] uppercase tracking-[0.22em] text-outline">Frontend-only interface</p>
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-[-0.04em] text-primary">{asideTitle}</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
            {asidePoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </div>

        <form className="rounded-[1.8rem] bg-white/92 p-6 shadow-[0_20px_40px_rgba(0,33,20,0.06)]">
          <p className="font-label text-[0.68rem] uppercase tracking-[0.22em] text-outline">{title}</p>
          <h3 className="mt-3 font-headline text-3xl font-bold tracking-[-0.04em] text-primary">{description}</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {fields.map((field, index) => (
              <label key={field.label} className={cx("flex flex-col gap-2", index === fields.length - 1 && fields.length % 2 === 1 && "sm:col-span-2")}>
                <span className="font-label text-[0.7rem] uppercase tracking-[0.18em] text-outline">{field.label}</span>
                <input
                  className="focus-glow rounded-[1.2rem] border border-[rgba(0,54,35,0.08)] bg-surface-low px-4 py-3 text-sm text-primary outline-none"
                  placeholder={field.placeholder}
                  type="text"
                />
              </label>
            ))}
          </div>
          <button
            className="button-sheen mt-6 rounded-full bg-primary px-6 py-3 font-label text-xs font-semibold uppercase tracking-[0.18em] text-white"
            type="button"
          >
            {submitLabel}
          </button>
        </form>
      </div>
    </SectionFrame>
  );
}

export function LegalGrid({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {sections.map((section, index) => (
        <article
          key={section.title}
          className={`reveal-up rounded-[1.8rem] bg-white/92 p-6 shadow-[0_20px_40px_rgba(0,33,20,0.06)] reveal-delay-${(index % 5) + 1}`}
        >
          <h3 className="font-headline text-2xl font-bold tracking-[-0.04em] text-primary">{section.title}</h3>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
            {section.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-secondary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
