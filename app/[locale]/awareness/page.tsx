"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Megaphone, 
  Heart, 
  ShieldAlert, 
  Users, 
  Calendar, 
  CheckCircle2,
  Droplet,
  Stethoscope
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/routing";

export default function AwarenessPage() {
  const drives = [
    { title: "Free Community Medical Camps", icon: Stethoscope, desc: "Mobile diagnostic and treatment camps in rural and slum communities providing general screening, BP/Sugar tests, and free medicines.", tag: "Monthly Outreach" },
    { title: "Voluntary Blood Donation Drives", icon: Droplet, desc: "Organized blood donation drives supporting thalassemia patients, surgical emergencies, and local blood banks.", tag: "Lifesaving Drive" },
    { title: "Hygiene & Disease Prevention Workshops", icon: ShieldAlert, desc: "Educational workshops on dengue/malaria prevention, clean drinking water practices, and maternal sanitation.", tag: "Health Education" },
    { title: "Diabetes & Hypertension Screening", icon: Heart, desc: "Early detection campaigns for silent killer diseases with free dietary counseling and follow-up OPD care.", tag: "Screening Campaign" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-gray-50/70">
      {/* Hero Banner */}
      <section className="relative py-24 bg-rose-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop"
            alt="Health awareness camp"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-950 via-rose-950/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-300 text-xs sm:text-sm font-bold border border-rose-500/30">
              <Megaphone className="w-4 h-4 text-rose-400" />
              <span>Preventive Healthcare & Public Awareness</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Community Health & Awareness Drives
            </h1>

            <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Bringing free medical care, preventive health education, and blood donation campaigns directly into underserved neighborhoods.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link href="/volunteer">
                <Button size="lg" className="rounded-full bg-rose-600 hover:bg-rose-700 text-white px-8 h-13 text-base font-bold shadow-lg shadow-rose-900/30">
                  <Users className="mr-2 w-4 h-4" />
                  Join as Medical Volunteer
                </Button>
              </Link>
              <Link href="/donate?cause=general">
                <Button size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 hover:bg-white/20 text-white text-base font-semibold backdrop-blur-md">
                  Sponsor a Medical Camp
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Drives Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900">
              Our Active Awareness Programs
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Empowering communities with knowledge, early screening, and healthcare access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {drives.map((drive, idx) => {
              const Icon = drive.icon;
              return (
                <motion.div
                  key={drive.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full rounded-3xl p-6 sm:p-8 border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full inline-block mb-3">
                        {drive.tag}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                        {drive.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {drive.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Free Entry & Medical Distribution</span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
