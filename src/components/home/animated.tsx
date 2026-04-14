"use client";

import {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useInView } from "./use-in-view";
import { cx } from "./primitives";

/* ── Reveal on scroll ──────────────────────────────────────────── */

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cx(
        "transition-all duration-700 ease-out",
        inView
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── Animated counter ──────────────────────────────────────────── */

function parseStatValue(value: string): { prefix: string; num: number; suffix: string } {
  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)/);
  if (!match) return { prefix: "", num: 0, suffix: value };
  return {
    prefix: match[1],
    num: parseFloat(match[2].replace(/,/g, "")),
    suffix: match[3],
  };
}

function formatNumber(n: number, hasCommas: boolean): string {
  const rounded = Math.round(n);
  if (hasCommas) return rounded.toLocaleString();
  return rounded.toString();
}

export function AnimatedCounter({
  value,
  className,
  duration = 2000,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const [ref, inView] = useInView<HTMLSpanElement>();
  const [display, setDisplay] = useState("0");
  const { prefix, num, suffix } = parseStatValue(value);
  const hasCommas = value.includes(",");

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();
    let raf: number;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * num;
      setDisplay(formatNumber(current, hasCommas));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, num, duration, hasCommas]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {inView ? display : "0"}
      {suffix}
    </span>
  );
}

/* ── Parallax layer ────────────────────────────────────────────── */

export function Parallax({
  children,
  speed = 0.3,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={className}
      style={{ transform: `translate3d(0, ${offset * speed}px, 0)` }}
    >
      {children}
    </div>
  );
}
