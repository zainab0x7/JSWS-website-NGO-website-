"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Users, Building, Activity, HeartHandshake } from "lucide-react";
import { BidiLTR } from "@/components/ui/BidiLTR";

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
      {count.toLocaleString()}{suffix}
    </BidiLTR>
  );
}

const getStats = (t: (key: string) => string) => [
  {
    icon: Users,
    value: 500000,
    suffix: "+",
    label: t('patients'),
  },
  {
    icon: Building,
    value: 1500,
    suffix: "+",
    label: t('camps'),
  },
  {
    icon: Activity,
    value: 200000,
    suffix: "+",
    label: t('tests'),
  },
  {
    icon: HeartHandshake,
    value: 500,
    suffix: "+",
    label: t('volunteers'),
  },
];

export function StatsSection() {
  const t = useTranslations("StatsSection");
  const stats = getStats(t);

  return (
    <section className="py-24 relative overflow-hidden bg-white text-gray-900">
      {/* Soft ambient background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
              className="relative group"
            >
              <div className="flex flex-col items-center justify-center p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[var(--color-primary)] via-red-600 to-red-800 text-white border border-red-500/20 shadow-xl group-hover:shadow-2xl group-hover:shadow-red-600/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full relative">
                
                {/* Subtle card ambient highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500 pointer-events-none" />

                <div className="relative bg-white/15 p-4 rounded-2xl mb-6 backdrop-blur-md border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-md" strokeWidth={1.75} />
                </div>
                
                <h4 className="font-heading text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold mb-3 text-white drop-shadow-md tracking-tight text-center">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </h4>
                
                <div className="w-12 h-[2px] bg-white/40 mb-4" />
                
                <p className="text-white font-bold tracking-wider uppercase text-xs sm:text-sm text-center drop-shadow-sm">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
