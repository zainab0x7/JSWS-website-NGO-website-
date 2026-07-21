"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HealthAwareness() {
  const t = useTranslations("HealthAwareness");

  const articles = [
    {
      title: "Understanding Preventive Healthcare",
      excerpt: "Why regular checkups are essential for long-term health and early disease detection.",
      date: "July 12, 2026",
      category: "Prevention",
      slug: "understanding-preventive-healthcare",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Nutrition for Children's Growth",
      excerpt: "Essential nutrients every growing child needs for optimal physical and mental development.",
      date: "July 5, 2026",
      category: "Children",
      slug: "nutrition-for-childrens-growth",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2674&auto=format&fit=crop"
    },
    {
      title: "Managing Hypertension Effectively",
      excerpt: "Lifestyle changes and medical approaches to keep your blood pressure in check.",
      date: "June 28, 2026",
      category: "Heart Health",
      slug: "managing-hypertension-effectively",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2679&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-gray-light)] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[var(--color-primary)] font-semibold tracking-wider uppercase text-sm mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> {t('badge')}
            </h2>
            <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-black)] leading-tight">
              {t('title')}
            </h3>
          </div>
          <Button asChild variant="outline" className="hidden md:flex items-center gap-2 rounded-full border-gray-300">
            <Link href="/blog">
              {t('view_all')} <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-white rounded-2xl">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-[var(--color-primary)]">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pt-6">
                  <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                  <CardTitle className="text-xl font-bold text-[var(--color-black)] group-hover:text-[var(--color-primary)] transition-colors">
                    <Link href={`/blog/${article.slug}`} className="after:absolute after:inset-0">
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base line-clamp-2">
                    {article.excerpt}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 md:hidden text-center">
          <Button asChild variant="outline" className="rounded-full w-full border-gray-300">
            <Link href="/blog">{t('view_all')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
