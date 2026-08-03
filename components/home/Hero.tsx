"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ArrowRight, Pill, HeartPulse, Eye, Stethoscope, HeartHandshake, ShieldCheck } from "lucide-react";
import { DonateModal } from "@/components/donate/DonateModal";

export function Hero() {
  const t = useTranslations("Hero");
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const highlightCards = [
    { icon: Pill, text: t('cards.medicines') },
    { icon: HeartPulse, text: t('cards.healthcare') },
    { icon: Eye, text: t('cards.eye') },
    { icon: Stethoscope, text: t('cards.dental') }
  ];

  return (
    <>
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-28 pb-16 bg-gray-950 text-white">
        {/* Background Image with Layered Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.jpg" 
            alt="JSWS Hero" 
            className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-10000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(181,18,27,0.25),transparent_60%)] pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col flex-1 justify-center">
          <div className="max-w-4xl text-left rtl:text-right pt-6">
            
            {/* Security Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-500/15 text-red-200 text-xs sm:text-sm font-semibold mb-6 border border-red-500/30 backdrop-blur-xl shadow-lg shadow-red-950/50"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official & Transparent JSWS Welfare Account</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5"
            >
              {t('title_start')}{" "}
              <span className="bg-gradient-to-r from-red-400 via-rose-300 to-amber-200 bg-clip-text text-transparent block sm:inline drop-shadow-sm">
                {t('title_highlight')}
              </span>
              <br className="hidden sm:block"/>
              {t('title_end')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed font-normal"
            >
              {t('description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-16"
            >
              <Button 
                onClick={() => setIsDonateModalOpen(true)}
                size="lg" 
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-8 h-14 text-base sm:text-lg font-bold shadow-xl shadow-red-600/40 flex items-center justify-center gap-2.5 transition-all hover:scale-105 active:scale-95"
              >
                <HeartHandshake className="w-5 h-5 text-red-200" />
                <span>{t('donate_now') || "Donate Now"}</span>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-white/30 bg-white/10 text-white hover:bg-white hover:text-gray-950 px-8 h-14 text-base font-semibold backdrop-blur-md transition-all duration-300 group shadow-lg">
                <Link href="/doctors">
                  <span>{t('book_appointment')}</span>
                  <ArrowRight className="ml-2 w-5 h-5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Glassmorphic Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-auto max-w-6xl"
          >
            {highlightCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/15 p-5 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col items-start gap-3.5 group hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-red-900/50">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">{card.text}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Donate Modal Triggered by Hero */}
      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        defaultCategory="general"
      />
    </>
  );
}
