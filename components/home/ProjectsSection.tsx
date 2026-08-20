"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { GlassCard } from "@/components/premium/GlassCard";
import { SectionHeader } from "@/components/premium/SectionHeader";
import { PremiumBackground } from "@/components/premium/PremiumBackground";
import { ScrollReveal } from "@/components/premium/ScrollReveal";
import Image from "next/image";

export function ProjectsSection() {
  const t = useTranslations("HomeProjects");

  const projects = [
    {
      id: "jsmdc",
      logo: "/jsmdc-logo.png",
      title: t("jsmdc.title"),
      services: t.raw("jsmdc.services") as string[],
      href: "/jsmdc",
      color: "from-blue-600 to-indigo-600",
      lightColor: "bg-blue-50 border-blue-100",
      badge: t("badges.jsmdc"),
    },
    {
      id: "sarc",
      logo: "/sarc-logo.png",
      title: t("sarc.title"),
      services: t.raw("sarc.services") as string[],
      href: "/sarc",
      color: "from-emerald-600 to-teal-600",
      lightColor: "bg-emerald-50 border-emerald-100",
      badge: t("badges.sarc"),
    },
    {
      id: "amtf",
      logo: "/AMTF_logo.png",
      title: t("amtf.title"),
      services: t.raw("amtf.services") as string[],
      href: "/laboratory",
      color: "from-cyan-600 to-sky-600",
      lightColor: "bg-cyan-50 border-cyan-100",
      badge: t("badges.amtf"),
    },
    {
      id: "fp",
      logo: "/jsws-logo.png",
      title: t("fp.title"),
      services: t.raw("fp.services") as string[],
      href: "/services",
      color: "from-rose-600 to-pink-600",
      lightColor: "bg-rose-50 border-rose-100",
      badge: t("badges.fp"),
    },
    {
      id: "masp",
      logo: "/masp.png",
      title: t("masp.title"),
      services: t.raw("masp.services") as string[],
      href: "/scholarships",
      color: "from-amber-500 to-amber-600",
      lightColor: "bg-amber-50 border-amber-100",
      badge: t("badges.masp"),
    },
    {
      id: "awareness",
      logo: "/cap.png",
      title: t("awareness.title"),
      services: t.raw("awareness.services") as string[],
      href: "/awareness",
      color: "from-purple-600 to-pink-600",
      lightColor: "bg-purple-50 border-purple-100",
      badge: t("badges.awareness"),
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      <PremiumBackground variant="muted" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <SectionHeader
          badge={t("badge")}
          title={t("section_title")}
          description={t("section_description")}
        />

        <ScrollReveal className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10" stagger={0.12}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${index === projects.length - 1 && projects.length % 2 !== 0 ? "md:col-span-2 md:max-w-[calc(50%-1.25rem)] md:mx-auto" : ""}`}
            >
            <GlassCard key={project.id} className={`group flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10 ${project.lightColor.split(" ")[0]}`}>
              <div>
                <div className="mb-6 flex items-center justify-between gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border p-3 shadow-sm sm:h-28 sm:w-28 bg-white ${project.lightColor.split(" ")[1] ?? "border-gray-200"}`}
                  >
                    <Image
                      src={project.logo}
                      alt={`${project.title} Logo`}
                      width={0}
                      height={0}
                      sizes="112px"
                      className="h-full w-full object-contain"
                    />
                  </motion.div>
                  <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gray-700">
                    {project.badge}
                  </span>
                </div>

                <h3 className="mb-5 font-heading text-xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-[var(--color-primary)] sm:text-2xl lg:text-3xl">
                  {project.title}
                </h3>

                <ul className="mb-6 space-y-3 sm:mb-8 sm:space-y-3.5">
                  {project.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700 sm:text-base">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={project.href as "/"}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r py-3.5 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg sm:py-4 sm:text-base ${project.color}`}
              >
                <span>{t("explore_btn")}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </GlassCard>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
