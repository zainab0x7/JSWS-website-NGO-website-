"use client";

import { useTranslations } from "next-intl";
import { Activity, Beaker, Baby, Stethoscope, Syringe, HeartPulse } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/premium/GlassCard";
import { SectionHeader } from "@/components/premium/SectionHeader";
import { PremiumBackground } from "@/components/premium/PremiumBackground";
import { ScrollReveal } from "@/components/premium/ScrollReveal";
export function ServicesSection() {
  const t = useTranslations("ServicesSection");

  const services = [
    {
      title: t("services.general.title"),
      description: t("services.general.description"),
      icon: Stethoscope,
      link: "/services#general",
    },
    {
      title: t("services.camps.title"),
      description: t("services.camps.description"),
      icon: Activity,
      link: "/services#camps",
    },
    {
      title: t("services.laboratory.title"),
      description: t("services.laboratory.description"),
      icon: Beaker,
      link: "/laboratory",
    },
    {
      title: t("services.womens_health.title"),
      description: t("services.womens_health.description"),
      icon: HeartPulse,
      link: "/services#womens-health",
    },
    {
      title: t("services.childrens_health.title"),
      description: t("services.childrens_health.description"),
      icon: Baby,
      link: "/services#childrens-health",
    },
    {
      title: t("services.vaccination.title"),
      description: t("services.vaccination.description"),
      icon: Syringe,
      link: "/services#vaccination",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <PremiumBackground variant="light" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
        />

        <ScrollReveal className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {services.map((service, index) => (
            <GlassCard key={index} className="group h-full p-6 sm:p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 transition-colors duration-300 group-hover:bg-[var(--color-primary)]">
                <service.icon className="h-7 w-7 text-[var(--color-primary)] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h4 className="mb-3 font-heading text-xl font-bold text-gray-900 transition-colors group-hover:text-[var(--color-primary)]">
                {service.title}
              </h4>
              <p className="mb-6 text-base leading-relaxed text-gray-600">
                {service.description}
              </p>
              <Link
                href={service.link as "/"}
                className="inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
              >
                {t("learn_more")}{" "}
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </GlassCard>
          ))}
        </ScrollReveal>

        <ScrollReveal className="mt-16 text-center" variant="scale">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[var(--color-primary)] px-8 font-bold text-white shadow-lg shadow-red-500/20 hover:bg-[var(--color-primary-dark)]"
          >
            <Link href="/services">{t("view_all")}</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
