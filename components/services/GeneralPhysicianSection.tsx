"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, CheckCircle2, Eye, Calendar, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/routing";

const gpImages = [
  { src: "/gp/gp1.jpeg", alt: "General Physician OPD Consultation 1", title: "Patient Consultation & Diagnostics" },
  { src: "/gp/gp2.jpeg", alt: "General Physician OPD Consultation 2", title: "General Physician Examination" },
  { src: "/gp/gp3.jpeg", alt: "General Physician OPD Consultation 3", title: "Clinical Assessment & Care" },
  { src: "/gp/gp4.jpeg", alt: "General Physician OPD Consultation 4", title: "Prescription & Patient Guidance" },
  { src: "/gp/gp5.jpeg", alt: "General Physician OPD Consultation 5", title: "Subsidized Healthcare Support" },
];

export function GeneralPhysicianSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="general" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-[var(--color-primary)] text-xs sm:text-sm font-bold border border-red-200">
              <Stethoscope className="w-4 h-4 text-red-600" />
              <span>General OPD & Primary Care</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              General Physician Clinic
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our experienced General Physicians provide comprehensive medical consultations, routine checkups, acute illness treatment, and chronic disease management at Jamila Sultan Welfare Society.
            </p>
          </div>

          <div className="shrink-0">
            <Link href="/doctors">
              <Button size="lg" className="rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold shadow-lg shadow-red-500/20">
                <Calendar className="w-4 h-4 mr-2" />
                View OPD Timings & Book
              </Button>
            </Link>
          </div>
        </div>

        {/* GP Highlights & Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-red-50 text-[var(--color-primary)] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-heading text-lg font-bold text-gray-900">Expert Medical Assessment</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Thorough physical examinations and accurate diagnoses by qualified MBBS General Physicians.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-red-50 text-[var(--color-primary)] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-heading text-lg font-bold text-gray-900">Free & Subsidized Care</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              OPD consultations and prescribed medicines are provided free of charge to deserving Zakat & Sadqah beneficiaries.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-red-50 text-[var(--color-primary)] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-heading text-lg font-bold text-gray-900">Continuous Health Monitoring</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Regular follow-ups for hypertension, diabetes, respiratory issues, and preventive family health.
            </p>
          </div>
        </div>

        {/* Real GP Photos Gallery Grid */}
        <div className="space-y-4">
          <h3 className="font-heading text-xl font-bold text-gray-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            General Physician Clinic in Action (Live Gallery)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {gpImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Card
                  onClick={() => setActiveIdx(idx)}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 h-64"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity p-4 flex flex-col justify-end text-white">
                    <p className="text-xs font-bold leading-snug line-clamp-2">{img.title}</p>
                    <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-red-300">
                      <Eye className="w-3 h-3" />
                      <span>Enlarge Photo</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col w-full text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 bg-gray-950 flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-red-500" />
                  <h3 className="font-heading font-bold text-sm sm:text-base">
                    {gpImages[activeIdx].title} ({activeIdx + 1} of {gpImages.length})
                  </h3>
                </div>
                <button
                  onClick={() => setActiveIdx(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image View with Next/Prev Controls */}
              <div className="relative overflow-hidden p-4 bg-black flex items-center justify-center min-h-[50vh]">
                <img
                  src={gpImages[activeIdx].src}
                  alt={gpImages[activeIdx].alt}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-md"
                />

                {/* Prev Button */}
                <button
                  onClick={() => setActiveIdx((prev) => (prev === 0 ? gpImages.length - 1 : (prev! - 1)))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Next Button */}
                <button
                  onClick={() => setActiveIdx((prev) => (prev === gpImages.length - 1 ? 0 : (prev! + 1)))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-gray-950 text-xs text-gray-400 flex items-center justify-between">
                <span>Jamila Sultan Welfare Society - General Physician OPD</span>
                <span className="font-mono">{gpImages[activeIdx].src}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
