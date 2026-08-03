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
      readTime: "5 min read",
      category: "Prevention",
      slug: "understanding-preventive-healthcare",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Nutrition for Children's Growth",
      excerpt: "Essential nutrients every growing child needs for optimal physical and mental development.",
      date: "July 5, 2026",
      readTime: "4 min read",
      category: "Children",
      slug: "nutrition-for-childrens-growth",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2674&auto=format&fit=crop"
    },
    {
      title: "Managing Hypertension Effectively",
      excerpt: "Lifestyle changes and medical approaches to keep your blood pressure in check.",
      date: "June 28, 2026",
      readTime: "6 min read",
      category: "Heart Health",
      slug: "managing-hypertension-effectively",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2679&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/70 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" /> {t('badge') || "Health Education"}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              {t('title')}
            </h2>
          </div>
          <Button asChild variant="outline" className="hidden md:flex items-center gap-2 rounded-full border-gray-300 hover:bg-gray-100 font-semibold px-6">
            <Link href="/blog">
              <span>{t('view_all')}</span>
              <ArrowRight className="w-4 h-4" />
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
              <Card className="h-full overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group bg-white rounded-3xl flex flex-col justify-between hover:-translate-y-1.5">
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:opacity-80 transition-opacity duration-300 z-10" />
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-xs font-bold rounded-full text-[var(--color-primary)] shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pt-6">
                    <div className="flex items-center justify-between text-xs font-semibold text-gray-400 mb-2">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors leading-snug font-heading">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </CardDescription>
                  </CardContent>
                </div>

                <div className="p-6 pt-0 mt-4">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] group/link"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 md:hidden text-center">
          <Button asChild variant="outline" className="rounded-full w-full border-gray-300 font-semibold py-6">
            <Link href="/blog">{t('view_all')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
