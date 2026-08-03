"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Sparkles, Eye, X, ChevronLeft, ChevronRight, HeartHandshake, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const ptImages = [
  { src: "/pt/pt1.jpeg", title: "Physical Therapy Motor Exercises", desc: "Targeted mobility exercises for muscle strengthening and motor rehabilitation." },
  { src: "/pt/pt2.jpeg", title: "Autism & Pediatric Physical Rehab", desc: "Sensory integration and developmental physical therapy for children." },
  { src: "/pt/pt3.jpeg", title: "Post-Stroke Rehabilitation", desc: "Specialized gait training and physical rehabilitation for stroke recovery." },
  { src: "/pt/pt4.jpeg", title: "Occupational & Joint Therapy", desc: "Restoring joint flexibility, posture, and day-to-day functional movement." },
  { src: "/pt/pt5.jpeg", title: "Cerebral Palsy Physical Therapy", desc: "Compassionate therapy sessions to enhance child motor coordination." },
  { src: "/pt/pt6.jpeg", title: "Specialized Physical Rehab Clinic", desc: "Certified physiotherapists guiding patient exercises at SARC." },
  { src: "/pt/pt7.jpeg", title: "Therapeutic Equipment Session", desc: "Utilizing modern rehabilitation equipment for optimal recovery." },
  { src: "/pt/pt8.jpeg", title: "Neurological Physical Therapy", desc: "Neuromuscular re-education and posture control therapy." },
  { src: "/pt/pt9.jpeg", title: "Pediatric Sensory Integration", desc: "Interactive physical therapy for neurodiverse & autistic children." },
  { src: "/pt/pt10.jpeg", title: "Flexibility & Balance Training", desc: "Balance improvement exercises for elderly and trauma recovery patients." },
  { src: "/pt/pt11.jpeg", title: "Personalized Physical Rehabilitation Plan", desc: "One-on-one session with senior physiotherapist at SARC." },
];

export function PhysicalTherapySection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50/50 via-white to-gray-50 border-y border-indigo-100/60 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-900 text-xs sm:text-sm font-bold border border-indigo-200">
            <Activity className="w-4 h-4 text-indigo-700" />
            <span>Physical Therapy & Rehabilitation (PT)</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Physical Therapy Clinic in Action
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Live photos from our Sultan Ahmed Rehabilitation Centre (SARC) physical therapy department, serving children with special needs, autism, post-stroke, and motor disabilities.
          </p>
        </div>

        {/* PT Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {ptImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (idx % 4) * 0.08 }}
            >
              <Card
                onClick={() => setActiveIdx(idx)}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 h-64"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity p-4 flex flex-col justify-end text-white">
                  <p className="text-xs font-bold leading-snug line-clamp-2">{img.title}</p>
                  <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-indigo-300">
                    <Eye className="w-3 h-3" />
                    <span>View Session Photo</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
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
              {/* Header */}
              <div className="p-4 bg-gray-950 flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-indigo-400" />
                  <h3 className="font-heading font-bold text-sm sm:text-base">
                    {ptImages[activeIdx].title} ({activeIdx + 1} of {ptImages.length})
                  </h3>
                </div>
                <button
                  onClick={() => setActiveIdx(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image with Navigation */}
              <div className="relative overflow-hidden p-4 bg-black flex items-center justify-center min-h-[50vh]">
                <img
                  src={ptImages[activeIdx].src}
                  alt={ptImages[activeIdx].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-md"
                />

                <button
                  onClick={() => setActiveIdx((prev) => (prev === 0 ? ptImages.length - 1 : prev! - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() => setActiveIdx((prev) => (prev === ptImages.length - 1 ? 0 : prev! + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Footer Description */}
              <div className="p-4 bg-gray-950 text-xs text-gray-300 flex items-center justify-between">
                <p>{ptImages[activeIdx].desc}</p>
                <span className="text-indigo-400 font-semibold shrink-0 ml-4">SARC Rehabilitation</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
