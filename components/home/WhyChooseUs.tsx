"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/premium/GlassCard";
import { PremiumBackground } from "@/components/premium/PremiumBackground";
import { ScrollReveal } from "@/components/premium/ScrollReveal";

export function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  const reasons = [
    t("reasons.1"),
    t("reasons.2"),
    t("reasons.3"),
    t("reasons.4"),
    t("reasons.5"),
    t("reasons.6"),
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <PremiumBackground variant="light" showParticles={false} />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="slide-left" className="relative order-2 pb-6 lg:order-1">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2670&auto=format&fit=crop"
                alt="Medical facilities"
                className="h-64 w-full rounded-3xl border-2 border-gray-100 object-cover shadow-xl sm:h-72"
              />
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2574&auto=format&fit=crop"
                alt="Healthcare professionals"
                className="mt-8 h-64 w-full rounded-3xl border-2 border-gray-100 object-cover shadow-xl sm:mt-10 sm:h-80"
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -z-10 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50/70 blur-3xl" />
          </ScrollReveal>

          <ScrollReveal variant="slide-right" className="order-1 space-y-8 lg:order-2">
            <div>
              <span className="mb-3 inline-block rounded-full border border-red-200/80 bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                {t("badge") || "Why Choose JSWS"}
              </span>
              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                {t("title")}
              </h2>
            </div>

            <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
              {t("description")}
            </p>

            <ul className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <GlassCard key={index} tilt={false} className="p-4">
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span className="text-sm font-semibold leading-snug text-gray-800">{reason}</span>
                  </div>
                </GlassCard>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
