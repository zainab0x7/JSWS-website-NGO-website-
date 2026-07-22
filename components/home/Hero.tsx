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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.jpg" 
          alt="JSWS Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col flex-1 justify-center">
        
        <div className="max-w-4xl text-left rtl:text-right">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            {t('title_start')} 
            <span className="text-[var(--color-primary)] block sm:inline"> {t('title_highlight')}</span> 
            <br className="hidden sm:block"/>
            {t('title_end')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed"
          >
            {t('description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
          >
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 h-14 text-base shadow-lg shadow-red-500/20">
              <Link href="/donate">
                {t('donate_now')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-white/20 bg-white/10 text-white hover:bg-white hover:text-gray-900 px-8 h-14 text-base backdrop-blur-sm transition-colors group">
              <Link href="/doctors">
                {t('book_appointment')} <ArrowRight className="ml-2 w-5 h-5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-auto max-w-6xl"
        >
          {highlightCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col items-start gap-4 group hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-base font-semibold text-white leading-tight">{card.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
