"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Users, Building, Activity, HeartHandshake } from "lucide-react";
import { BidiLTR } from "@/components/ui/BidiLTR";
import { PremiumBackground } from "@/components/premium/PremiumBackground";
import { ScrollReveal } from "@/components/premium/ScrollReveal";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <BidiLTR ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </BidiLTR>
  );
}

const getStats = (t: (key: string) => string) => [
  { icon: Users, value: 500000, suffix: "+", label: t("patients") },
  { icon: Building, value: 1500, suffix: "+", label: t("camps") },
  { icon: Activity, value: 200000, suffix: "+", label: t("tests") },
  { icon: HeartHandshake, value: 500, suffix: "+", label: t("volunteers") },
];

export function StatsSection() {
  const t = useTranslations("StatsSection");
  const stats = getStats(t);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 text-gray-900">
      <PremiumBackground variant="light" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <ScrollReveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8" stagger={0.1}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-red-500/20 bg-gradient-to-br from-[var(--color-primary)] via-red-600 to-red-800 p-6 sm:p-8 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 lg:p-10"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

              <div className="relative mb-4 sm:mb-6 inline-flex rounded-xl sm:rounded-2xl border border-white/20 bg-white/15 p-3 sm:p-4">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" strokeWidth={1.75} />
              </div>

              <h4 className="mb-2 sm:mb-3 font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h4>

              <div className="mb-4 h-[2px] w-12 bg-white/40" />

              <p className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
