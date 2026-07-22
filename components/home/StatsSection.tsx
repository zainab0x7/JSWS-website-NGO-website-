"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Users, Building, Activity, HeartHandshake } from "lucide-react";

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
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const getStats = (t: any) => [
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
    <section className="py-24 relative overflow-hidden bg-[var(--color-primary)] text-white">
      {/* Deep premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.4),transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
              className="relative group"
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="flex flex-col items-center justify-center p-8 lg:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative z-10 hover:-translate-y-2 transition-transform duration-500 overflow-hidden h-full">
                
                {/* Background flare behind icon */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500" />
                
                <div className="relative bg-gradient-to-br from-white/20 to-white/5 p-4 rounded-2xl mb-8 backdrop-blur-md border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-md" strokeWidth={1.5} />
                </div>
                
                <h4 className="font-heading text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-sm tracking-tight text-center">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </h4>
                
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent mb-5" />
                
                <p className="text-white/90 font-medium tracking-[0.15em] uppercase text-xs sm:text-sm text-center">
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
