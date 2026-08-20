"use client";

import { useTranslations } from "next-intl";
import { ShieldPlus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/premium/ScrollReveal";
import { PremiumBackground } from "@/components/premium/PremiumBackground";

export function FutureProject() {
  const t = useTranslations("HomeProjects.future");

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      <PremiumBackground variant="muted" showParticles={false} />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <ScrollReveal variant="scale">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6 text-center text-white shadow-2xl sm:p-10 md:p-16">
            <div className="premium-noise absolute inset-0 opacity-[0.04]" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-red-600/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]" />

            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center space-y-6">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 p-0.5 shadow-lg shadow-red-900/50">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gray-950">
                  <ShieldPlus className="h-8 w-8 text-red-400" />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-300 backdrop-blur-md sm:text-sm">
                <div className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
                <span>{t("subtitle") || "Future Expansion Project"}</span>
              </div>

              <h2 className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl">
                {t("title") || "Comprehensive Dialysis Center"}
              </h2>

              <p className="max-w-2xl text-base font-light leading-relaxed text-gray-300 sm:text-lg">
                {t("desc") ||
                  "Establishing a state-of-the-art dialysis facility to provide subsidized & free renal care to underserved kidney patients."}
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="pt-4"
              >
                <Link
                  href="/donate?cause=equipment"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-red-950 transition-all hover:from-red-500 hover:to-red-600 sm:px-8 sm:py-4 sm:text-base"
                >
                  <span>{t("support_btn")}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
