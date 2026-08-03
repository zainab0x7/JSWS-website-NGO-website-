"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Eye, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const galleryItems = [
    { id: 1, category: "gp", title: "General Physician Patient Consultation", desc: "General Physician examining and diagnosing patients at JSMDC clinic.", src: "/gp/gp1.jpeg" },
    { id: 2, category: "gp", title: "GP Examination & Vital Check", desc: "Routine health screening and vital checks by qualified GP.", src: "/gp/gp2.jpeg" },
    { id: 3, category: "gp", title: "General Physician OPD Room", desc: "Subsidized and free OPD consultation for deserving patients.", src: "/gp/gp3.jpeg" },
    { id: 4, category: "gp", title: "Patient Prescription & Health Guidance", desc: "Detailed doctor guidance and medicine prescription delivery.", src: "/gp/gp4.jpeg" },
    { id: 5, category: "gp", title: "General Physician Clinic Session", desc: "Compassionate primary healthcare at Jamila Sultan Welfare Society.", src: "/gp/gp5.jpeg" },
    { id: 6, category: "pt", title: "Physical Therapy Motor Exercises", desc: "Targeted mobility exercises for muscle strengthening and motor rehabilitation.", src: "/pt/pt1.jpeg" },
    { id: 7, category: "pt", title: "Autism & Pediatric Physical Rehab", desc: "Sensory integration and developmental physical therapy for children.", src: "/pt/pt2.jpeg" },
    { id: 8, category: "pt", title: "Post-Stroke Rehabilitation", desc: "Specialized gait training and physical rehabilitation for stroke recovery.", src: "/pt/pt3.jpeg" },
    { id: 9, category: "pt", title: "Occupational & Joint Therapy", desc: "Restoring joint flexibility, posture, and day-to-day functional movement.", src: "/pt/pt4.jpeg" },
    { id: 10, category: "pt", title: "Cerebral Palsy Physical Therapy", desc: "Compassionate therapy sessions to enhance child motor coordination.", src: "/pt/pt5.jpeg" },
    { id: 11, category: "pt", title: "Specialized Physical Rehab Clinic", desc: "Certified physiotherapists guiding patient exercises at SARC.", src: "/pt/pt6.jpeg" },
    { id: 12, category: "pt", title: "Therapeutic Equipment Session", desc: "Utilizing modern rehabilitation equipment for optimal recovery.", src: "/pt/pt7.jpeg" },
    { id: 13, category: "pt", title: "Neurological Physical Therapy", desc: "Neuromuscular re-education and posture control therapy.", src: "/pt/pt8.jpeg" },
    { id: 14, category: "pt", title: "Pediatric Sensory Integration", desc: "Interactive physical therapy for neurodiverse & autistic children.", src: "/pt/pt9.jpeg" },
    { id: 15, category: "pt", title: "Flexibility & Balance Training", desc: "Balance improvement exercises for elderly and trauma recovery patients.", src: "/pt/pt10.jpeg" },
    { id: 16, category: "pt", title: "Personalized Physical Rehabilitation Plan", desc: "One-on-one session with senior physiotherapist at SARC.", src: "/pt/pt11.jpeg" },
    { id: 17, category: "camps", title: "Free Medical Camp OPD", desc: "Consultation and medicine distribution for patients in Korangi.", src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop" },
    { id: 18, category: "jsmdc", title: "JSMDC Clinical OPD", desc: "Qualified doctors providing general medical care.", src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" },
    { id: 19, category: "sarc", title: "SARC Autism & Rehab Session", desc: "Therapeutic exercises and early intervention care.", src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop" },
    { id: 20, category: "distribution", title: "Free Medicines Distribution", desc: "Zakat funded prescribed medicines delivered to deserving families.", src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop" },
    { id: 21, category: "camps", title: "Eye & Dental Screening Camp", desc: "Free vision testing and basic dental procedures.", src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop" },
    { id: 22, category: "distribution", title: "Ration & Food Basket Drive", desc: "Monthly food pack distribution for needy families.", src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop" },
  ];

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-gray-50/70">
      {/* Hero Banner */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 text-red-300 text-xs sm:text-sm font-bold border border-red-500/30">
            <ImageIcon className="w-4 h-4 text-red-400" />
            <span>Welfare Activities & Impact</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">
            Photo & Event Gallery
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Glimpse into our General Physician OPD, Physical Therapy rehab sessions at SARC, free medical camps, and food drives.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: "all", label: "All Activities" },
              { id: "gp", label: "General Physician OPD" },
              { id: "pt", label: "Physical Therapy & Rehab (PT)" },
              { id: "camps", label: "Free Medical Camps" },
              { id: "jsmdc", label: "JSMDC Hospital" },
              { id: "sarc", label: "SARC Autism Rehab" },
              { id: "distribution", label: "Medicine & Food Drives" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === tab.id
                    ? "bg-[var(--color-primary)] text-white shadow-md shadow-red-500/20"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  onClick={() => setSelectedImage(item)}
                  className="group relative overflow-hidden rounded-3xl cursor-pointer border-none shadow-md hover:shadow-2xl transition-all duration-300 bg-gray-900"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity p-6 flex flex-col justify-end text-white">
                    <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                    <p className="text-xs text-gray-300 mt-1 line-clamp-2">{item.desc}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-red-400">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to Enlarge</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col w-full text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 bg-gray-950 flex items-center justify-between">
                <h3 className="font-heading font-bold text-base">{selectedImage.title}</h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-hidden p-4 bg-black flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl"
                />
              </div>
              <div className="p-4 bg-gray-950 text-xs sm:text-sm text-gray-300">
                {selectedImage.desc}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
