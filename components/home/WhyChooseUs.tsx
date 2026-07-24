"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";

export function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  const reasons = [
    t('reasons.1'),
    t('reasons.2'),
    t('reasons.3'),
    t('reasons.4'),
    t('reasons.5'),
    t('reasons.6'),
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2670&auto=format&fit=crop"
                alt="Medical facilities"
                className="rounded-3xl w-full h-64 sm:h-72 object-cover shadow-xl border-2 border-gray-100"
              />
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2574&auto=format&fit=crop"
                alt="Healthcare professionals"
                className="rounded-3xl w-full h-80 sm:h-96 object-cover shadow-xl translate-y-8 sm:translate-y-10 border-2 border-gray-100"
              />
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-red-50/70 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider mb-3">
                {t('badge') || "Why Choose JSWS"}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                {t('title')}
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
              {t('description')}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-red-200 transition-colors shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-semibold text-sm leading-snug">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
