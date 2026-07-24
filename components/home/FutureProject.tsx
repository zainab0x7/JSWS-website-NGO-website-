"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Activity, ShieldPlus, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export function FutureProject() {
  const t = useTranslations("HomeProjects.future");

  return (
    <section className="py-20 bg-gray-50/60 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden border border-gray-800"
        >
          {/* Radiant background glowing spheres */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-600/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative z-10 flex flex-col items-center max-w-3xl mx-auto space-y-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 p-0.5 shadow-lg shadow-red-900/50">
              <div className="w-full h-full bg-gray-950 rounded-2xl flex items-center justify-center">
                <ShieldPlus className="w-8 h-8 text-red-400" />
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span>{t("subtitle") || "Future Expansion Project"}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {t("title") || "Comprehensive Dialysis Center"}
            </h2>
            
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-light">
              {t("desc") || "Establishing a state-of-the-art dialysis facility to provide subsidized & free renal care to underserved kidney patients."}
            </p>

            <div className="pt-4">
              <Link
                href="/donate?cause=equipment"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-base shadow-xl shadow-red-950 transition-all hover:scale-105"
              >
                <span>Support Expansion Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
