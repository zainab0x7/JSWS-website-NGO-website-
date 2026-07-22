"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export function FutureProject() {
  const t = useTranslations("HomeProjects.future");

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background elements inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-20 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-20 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
              <Activity className="w-8 h-8 text-blue-400" />
            </div>
            
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-4 uppercase tracking-wider">
              {t("subtitle")}
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              {t("title")}
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t("desc")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
