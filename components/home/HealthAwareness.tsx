"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/premium/GlassCard";
import { PremiumBackground } from "@/components/premium/PremiumBackground";
import { ScrollReveal } from "@/components/premium/ScrollReveal";

export function HealthAwareness() {
  const t = useTranslations("HealthAwareness");

  const articleImages = [
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2674&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2679&auto=format&fit=crop",
  ];
  const slugs = [
    "understanding-preventive-healthcare",
    "nutrition-for-childrens-growth",
    "managing-hypertension-effectively",
  ];

  const articles = [1, 2, 3].map((i) => ({
    title: t(`articles.${i}.title`),
    excerpt: t(`articles.${i}.excerpt`),
    date: t(`articles.${i}.date`),
    readTime: t(`articles.${i}.read_time`),
    category: t(`articles.${i}.category`),
    slug: slugs[i - 1],
    image: articleImages[i - 1],
  }));

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      <PremiumBackground variant="muted" showParticles={false} />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <ScrollReveal className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
              <BookOpen className="h-3.5 w-3.5" /> {t("badge") || "Health Education"}
            </span>
            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              {t("title")}
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            data-cursor="pointer"
            className="hidden items-center gap-2 rounded-full border-gray-300 px-6 font-semibold hover:bg-gray-100 md:flex"
          >
            <Link href="/awareness">
              <span>{t("view_all")}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
          {articles.map((article) => (
            <GlassCard key={article.slug} tilt={false} className="flex h-full flex-col justify-between">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute left-4 top-4 z-20">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[var(--color-primary)] shadow-sm backdrop-blur-md">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="px-6 pt-6">
                  <div className="mb-2 flex items-center justify-between text-xs font-semibold text-gray-400">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-[var(--color-primary)]">
                    <Link href="/awareness">
                      {article.title}
                    </Link>
                  </h3>
                </div>
                <p className="line-clamp-2 px-6 pb-2 text-sm leading-relaxed text-gray-600">
                  {article.excerpt}
                </p>
              </div>

              <div className="p-6 pt-2">
                <Link
                  href="/awareness"
                  className="group/link inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
                >
                  <motion.span className="inline-block" whileHover={{ x: 4 }}>
                    {t("read_article")}
                  </motion.span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </ScrollReveal>

        <div className="mt-10 text-center md:hidden">
          <Button
            asChild
            variant="outline"
            className="w-full rounded-full border-gray-300 py-6 font-semibold"
          >
            <Link href="/awareness">{t("view_all")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
