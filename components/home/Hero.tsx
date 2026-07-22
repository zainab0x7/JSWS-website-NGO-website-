"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ArrowRight, Pill, HeartPulse, Eye, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  const t = useTranslations("Hero");

  const highlightCards = [
    { icon: Pill, text: t('cards.medicines') },
    { icon: HeartPulse, text: t('cards.healthcare') },
    { icon: Eye, text: t('cards.eye') },
    { icon: Stethoscope, text: t('cards.dental') }
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-gray-50 pt-32 pb-16">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[var(--color-primary)] opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500 opacity-5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center flex-1 justify-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 max-w-4xl leading-tight tracking-tight mb-6"
        >
          {t('title_start')} 
          <span className="text-[var(--color-primary)] block sm:inline">{t('title_highlight')}</span> 
          <br className="hidden sm:block"/>
          {t('title_end')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed"
        >
          {t('description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 h-14 text-base shadow-lg shadow-red-500/20">
            <Link href="/donate">
              {t('donate_now')}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-gray-200 bg-white text-gray-800 hover:bg-gray-50 px-8 h-14 text-base shadow-sm group">
            <Link href="/doctors">
              {t('book_appointment')} <ArrowRight className="ml-2 w-5 h-5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-auto"
        >
          {highlightCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center gap-3 group">
                <div className="w-12 h-12 rounded-full bg-red-50 text-[var(--color-primary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-gray-800">{card.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
