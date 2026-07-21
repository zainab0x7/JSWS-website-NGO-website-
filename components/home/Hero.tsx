"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Heart, Users, Activity } from "lucide-react";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-[var(--color-primary)] font-medium mb-4 md:mb-6 text-xs sm:text-sm"
        >
          <Activity className="w-3 h-3 sm:w-4 sm:h-4" />
          {t('badge')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[var(--color-black)] max-w-5xl leading-tight tracking-tight mb-6 md:mb-8"
        >
          {t('title_start')} <span className="text-[var(--color-primary)]">{t('title_highlight')}</span>{t('title_end')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mb-8 md:mb-12 leading-relaxed px-2"
        >
          {t('description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base">
            <Link href="/doctors">
              {t('appointment_button')} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-gray-300 text-gray-800 hover:bg-gray-100 :bg-white/10 px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base">
            <Link href="/donate">{t('donate_button')}</Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="w-full sm:w-auto rounded-full text-gray-700 hover:bg-gray-100 :bg-white/10 px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base">
            <Link href="/volunteer">{t('volunteer_button')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
