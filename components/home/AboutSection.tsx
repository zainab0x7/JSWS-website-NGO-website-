"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Stethoscope } from "lucide-react";

export function AboutSection() {
  const t = useTranslations("AboutSection");

  return (
    <section className="py-24 bg-gray-50/60 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider mb-3">
                {t('badge') || "About JSWS"}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                {t('title')}
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
              {t('description')}
            </p>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-red-50 p-3 rounded-xl text-[var(--color-primary)] shrink-0">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-900 mb-1">{t('features.professional_care')}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{t('features.professional_care_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-red-50 p-3 rounded-xl text-[var(--color-primary)] shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-900 mb-1">{t('features.compassionate_approach')}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{t('features.compassionate_approach_desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-red-50 p-3 rounded-xl text-[var(--color-primary)] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-900 mb-1">{t('features.transparency_trust')}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{t('features.transparency_trust_desc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2670&auto=format&fit=crop"
                alt="Our medical team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Floating Trust Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-xl text-gray-900">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                    15+
                  </div>
                  <div>
                    <h5 className="font-bold text-base text-gray-900 leading-tight">Years of Community Service</h5>
                    <p className="text-xs text-gray-600">Empowering families with quality healthcare & welfare</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background glows */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-100/80 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100/80 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
