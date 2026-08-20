"use client";

import { useTranslations } from "next-intl";
import { Heart, ShieldCheck, Stethoscope } from "lucide-react";
import { GlassCard } from "@/components/premium/GlassCard";
import { PremiumBackground } from "@/components/premium/PremiumBackground";
import { ScrollReveal } from "@/components/premium/ScrollReveal";

export function AboutSection() {
  const t = useTranslations("AboutSection");

  const features = [
    {
      icon: Stethoscope,
      title: t("features.professional_care"),
      desc: t("features.professional_care_desc"),
    },
    {
      icon: Heart,
      title: t("features.compassionate_approach"),
      desc: t("features.compassionate_approach_desc"),
    },
    {
      icon: ShieldCheck,
      title: t("features.transparency_trust"),
      desc: t("features.transparency_trust_desc"),
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <PremiumBackground variant="muted" showParticles={false} />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="slide-left" className="space-y-8">
            <div>
              <span className="mb-3 inline-block rounded-full border border-red-200/80 bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                {t("badge") || "About JSWS"}
              </span>
              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                {t("title")}
              </h2>
            </div>

            <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
              {t("description")}
            </p>

            <div className="space-y-4 pt-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <GlassCard key={index} tilt={false} className="p-4 sm:p-5">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 rounded-xl bg-red-50 p-3 text-[var(--color-primary)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-heading text-lg font-bold text-gray-900">
                          {feature.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" className="relative">
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2670&auto=format&fit=crop"
                alt="Our medical team"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/40 bg-white/90 p-5 text-gray-900 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)] text-xl font-bold text-white shadow-md">
                    {t("years_count")}
                  </div>
                  <div>
                    <h5 className="text-base font-bold leading-tight text-gray-900">
                      {t("years_title")}
                    </h5>
                    <p className="text-xs text-gray-600">
                      {t("years_desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 -z-10 h-64 w-64 rounded-full bg-red-100/80 blur-3xl" />
            <div className="absolute -right-10 -top-10 -z-10 h-64 w-64 rounded-full bg-blue-100/80 blur-3xl" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
