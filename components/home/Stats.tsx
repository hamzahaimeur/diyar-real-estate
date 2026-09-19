"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";

const stats = [
  { label: "Properties Listed", value: 2400, suffix: "+" },
  { label: "Happy Clients", value: 1800, suffix: "+" },
  { label: "Cities Covered", value: 12, suffix: "" },
  { label: "Years of Experience", value: 15, suffix: "+" },
];

function easeInOut(progress: number) {
  return progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;
}

function useCountUp(target: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(target * easeInOut(progress)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return count;
}

function StatItem({
  label,
  value,
  suffix,
  start,
}: {
  label: string;
  value: number;
  suffix: string;
  start: boolean;
}) {
  const count = useCountUp(value, start);

  return (
      <div className="text-center">
      <span className="inline-flex rounded-full border border-gold-300/30 bg-gold-300/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-200">
        Demo data
      </span>
      <p className="mt-3 font-display text-4xl font-semibold text-gold-300 sm:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-forest-100">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-forest-800 py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,154,72,0.18),transparent_45%)]" />
      <FadeIn className="container-page relative grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} start={start} />
        ))}
      </FadeIn>
    </section>
  );
}
