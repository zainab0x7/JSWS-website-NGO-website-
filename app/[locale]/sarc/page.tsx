"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  Brain, 
  HeartHandshake, 
  Smile, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Clock, 
  Calendar,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BidiLTR } from "@/components/ui/BidiLTR";
import { Link } from "@/i18n/routing";

import { PhysicalTherapySection } from "@/components/services/PhysicalTherapySection";

export default function SARCPage() {
  const rehabServices = [
    { title: "Autism Spectrum Disorder Care", icon: Brain, desc: "Specialized early intervention, sensory integration, and behavioral therapy for autistic children.", focus: "Behavioral & Developmental Growth" },
    { title: "Physical & Occupational Therapy", icon: Activity, desc: "Rehabilitation for post-stroke, motor disability, cerebral palsy, and mobility enhancement.", focus: "Mobility & Strength Restoration" },
    { title: "Speech & Language Therapy", icon: Smile, desc: "Diagnostic evaluation and speech exercises for articulation, stuttering, and developmental speech delays.", focus: "Communication Skills" },
    { title: "Psychological & Parent Counseling", icon: HeartHandshake, desc: "Mental health guidance, emotional support, and family counseling to empower parents.", focus: "Mental Well-being & Guidance" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-gray-50/70">
      {/* Hero Banner */}
      <section className="relative py-24 bg-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2670&auto=format&fit=crop"
            alt="Child therapy and rehab"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-bold border border-indigo-500/30">
              <Activity className="w-4 h-4 text-indigo-400" />
              <span>Specialized Rehabilitation & Autism Care</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Sultan Ahmed Rehabilitation Centre (SARC)
            </h1>

            <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Empowering individuals with special needs, autism, physical disabilities, and speech impairments through compassionate therapy and clinical care.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 h-13 text-base font-bold shadow-lg shadow-indigo-900/30">
                  <Calendar className="mr-2 w-4 h-4" />
                  Book Rehabilitation Session
                </Button>
              </Link>
              <Link href="/donate?cause=patient">
                <Button size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 hover:bg-white/20 text-white text-base font-semibold backdrop-blur-md">
                  Sponsor Therapy for a Child
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Therapy Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900">
              Therapeutic Services & Special Care
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Tailored therapy plans administered by certified physiotherapists, speech pathologists, and autism specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {rehabServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full rounded-3xl p-6 sm:p-8 border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-5">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-3">
                        {service.focus}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Subsidized & Free for Eligible Families</span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Physical Therapy (PT) Photos Section */}
      <PhysicalTherapySection />

      {/* SARC Mission & Contact */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl space-y-6">
          <Users className="w-12 h-12 text-indigo-300 mx-auto" />
          <h2 className="font-heading text-3xl font-bold">
            Helping Every Child Reach Their Potential
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base leading-relaxed">
            SARC provides specialized equipment, sensory play areas, and individualized clinical care so that every child and rehabilitation patient achieves independence and dignity.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 h-12">
                Contact SARC Team (+92 307 2021882)
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
