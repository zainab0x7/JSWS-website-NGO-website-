"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Hospital, 
  Activity, 
  Pill, 
  Heart, 
  ShieldCheck, 
  Clock, 
  Phone, 
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BidiLTR } from "@/components/ui/BidiLTR";
import { Link } from "@/i18n/routing";

export default function JSMDCPage() {
  const departments = [
    { title: "General Outpatient (OPD)", icon: Stethoscope, desc: "Daily medical consultations by senior physicians for acute and chronic conditions.", timing: "Mon - Sat: 9:00 AM - 9:00 PM" },
    { title: "Dental Care Clinic", icon: Activity, desc: "Dental cleanings, extractions, fillings, root canals, and oral hygiene education.", timing: "Mon - Sat: 10:00 AM - 6:00 PM" },
    { title: "Gynecology & Maternal Care", icon: Heart, desc: "Prenatal care, postnatal checkups, routine screening, and women's health counseling.", timing: "Mon - Fri: 10:00 AM - 4:00 PM" },
    { title: "Pediatric Health Care", icon: Hospital, desc: "Specialized medical attention for children, infant checkups, and nutritional guidance.", timing: "Mon - Sat: 9:00 AM - 5:00 PM" },
    { title: "Free Medicine Pharmacy", icon: Pill, desc: "Full dispensing of prescribed medications completely free for deserving patients.", timing: "Mon - Sat: 9:00 AM - 9:00 PM" },
    { title: "Diagnostic Ultrasound & X-Ray", icon: ShieldCheck, desc: "Subsidized diagnostic imaging and fast turnaround report delivery.", timing: "Mon - Sat: 10:00 AM - 5:00 PM" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-gray-50/70">
      {/* Hero Banner */}
      <section className="relative py-24 bg-teal-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="JSMDC Medical Center"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs sm:text-sm font-bold border border-teal-500/30">
              <Hospital className="w-4 h-4 text-teal-400" />
              <span>Primary Healthcare Facility of JSWS</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Jamila Sultan Medical & Dental Centre (JSMDC)
            </h1>

            <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Providing free and highly subsidized OPD consultations, dental procedures, maternal care, and life-saving medicines to deserving families in Korangi, Karachi.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-teal-600 hover:bg-teal-700 text-white px-8 h-13 text-base font-bold shadow-lg shadow-teal-900/30">
                  <Calendar className="mr-2 w-4 h-4" />
                  OPD Appointments & Helpline
                </Button>
              </Link>
              <Link href="/donate?cause=clinic">
                <Button size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 hover:bg-white/20 text-white text-base font-semibold backdrop-blur-md">
                  Sponsor Clinic Operations
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities & OPD Departments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900">
              Clinical Departments & OPD Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Equipped with modern medical equipment and compassionate doctors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={dept.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Card className="h-full rounded-3xl p-6 border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                        {dept.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                        {dept.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-teal-800 bg-teal-50/60 px-3 py-2 rounded-xl">
                      <Clock className="w-4 h-4 shrink-0 text-teal-600" />
                      <span>{dept.timing}</span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* General Physician OPD Photo Showcase */}
          <div className="mt-16 pt-12 border-t border-gray-100 space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
                JSMDC OPD Facilities
              </span>
              <h3 className="font-heading text-2xl font-bold text-gray-900">
                General Physician Clinic in Action
              </h3>
              <p className="text-xs sm:text-base text-gray-600">
                Real photos from our General Physician consultation OPD rooms at JSMDC.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { src: "/gp/gp1.jpeg", label: "GP Consultation Room 1" },
                { src: "/gp/gp2.jpeg", label: "Patient Examination & Care" },
                { src: "/gp/gp3.jpeg", label: "General Physician OPD" },
                { src: "/gp/gp4.jpeg", label: "Prescription & Guidance" },
                { src: "/gp/gp5.jpeg", label: "Subsidized Clinic" },
              ].map((img, index) => (
                <div key={index} className="group relative rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-900 h-48">
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80 p-3 flex items-end">
                    <p className="text-xs font-bold text-white leading-tight">{img.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Medicine & Zakat Impact */}
      <section className="py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-teal-800 text-teal-300 text-xs font-bold">
                100% Free Medicines
              </div>
              <h2 className="font-heading text-3xl font-bold">
                No Deserving Patient Left Untreated
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                At JSMDC, financial constraint should never prevent anyone from getting quality care. Deserving patients receive consultation, diagnosis, and full course of prescription medicines free of charge through Zakat & Sadqah funds.
              </p>
              <div className="space-y-2 text-sm text-teal-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Free OPD Consultations for Zakat Eligible</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Subsidized Lab & Diagnostic Tests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Quality Assured Brand & Generic Medicines</span>
                </div>
              </div>
            </div>

            <Card className="p-6 rounded-3xl bg-white text-gray-900 space-y-4 shadow-xl">
              <h3 className="font-heading text-xl font-bold text-teal-950">Visit JSMDC Clinic</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <span>P-66 - 15 A, Sector 31A, Allah Wala Town, Korangi, Karachi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-700 shrink-0" />
                  <span>Helpline: <BidiLTR className="font-bold text-gray-900">+92 307 2021882</BidiLTR></span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-700 shrink-0" />
                  <span>Mon - Sat: 9:00 AM to 9:00 PM</span>
                </div>
              </div>
              <div className="pt-2">
                <Link href="/donate?cause=patient">
                  <Button className="w-full h-11 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold">
                    Sponsor a Needy Patient Today
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
