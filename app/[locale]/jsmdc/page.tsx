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
import { useTranslations } from "next-intl";

export default function JSMDCPage() {
  const t = useTranslations("JSMDCPage");

  const departments = [
    { title: t("departments.items.opd.title"), icon: Stethoscope, desc: t("departments.items.opd.desc"), timing: t("departments.items.opd.timing") },
    { title: t("departments.items.dental.title"), icon: Activity, desc: t("departments.items.dental.desc"), timing: t("departments.items.dental.timing") },
    { title: t("departments.items.gynecology.title"), icon: Heart, desc: t("departments.items.gynecology.desc"), timing: t("departments.items.gynecology.timing") },
    { title: t("departments.items.pediatric.title"), icon: Hospital, desc: t("departments.items.pediatric.desc"), timing: t("departments.items.pediatric.timing") },
    { title: t("departments.items.pharmacy.title"), icon: Pill, desc: t("departments.items.pharmacy.desc"), timing: t("departments.items.pharmacy.timing") },
    { title: t("departments.items.diagnostic.title"), icon: ShieldCheck, desc: t("departments.items.diagnostic.desc"), timing: t("departments.items.diagnostic.timing") },
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
              <span>{t("hero.badge")}</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {t("hero.title")}
            </h1>

            <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t("hero.desc")}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-teal-600 hover:bg-teal-700 text-white px-8 h-13 text-base font-bold shadow-lg shadow-teal-900/30">
                  <Calendar className="mr-2 w-4 h-4" />
                  {t("hero.appointmentsBtn")}
                </Button>
              </Link>
              <Link href="/donate?cause=clinic">
                <Button size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 hover:bg-white/20 text-white text-base font-semibold backdrop-blur-md">
                  {t("hero.sponsorBtn")}
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
              {t("departments.title")}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {t("departments.subtitle")}
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
                {t("gallery.badge")}
              </span>
              <h3 className="font-heading text-2xl font-bold text-gray-900">
                {t("gallery.title")}
              </h3>
              <p className="text-xs sm:text-base text-gray-600">
                {t("gallery.desc")}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { src: "/gp/gp1.jpeg", label: t("gallery.images.1") },
                { src: "/gp/gp2.jpeg", label: t("gallery.images.2") },
                { src: "/gp/gp3.jpeg", label: t("gallery.images.3") },
                { src: "/gp/gp4.jpeg", label: t("gallery.images.4") },
                { src: "/gp/gp5.jpeg", label: t("gallery.images.5") },
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
                {t("gallery.images.6")}
              </div>
              <h2 className="font-heading text-3xl font-bold">
                {t("zakat.title")}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t("zakat.desc")}
              </p>
              <div className="space-y-2 text-sm text-teal-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>{t("zakat.points.1")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>{t("zakat.points.2")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>{t("zakat.points.3")}</span>
                </div>
              </div>
            </div>

            <Card className="p-6 rounded-3xl bg-white text-gray-900 space-y-4 shadow-xl">
              <h3 className="font-heading text-xl font-bold text-teal-950">{t("visit.title")}</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <span>{t("visit.address")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-700 shrink-0" />
                  <span>Helpline: <BidiLTR className="font-bold text-gray-900">+92 307 2021882</BidiLTR></span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-700 shrink-0" />
                  <span>{t("visit.timing")}</span>
                </div>
              </div>
              <div className="pt-2">
                <Link href="/donate?cause=patient">
                  <Button className="w-full h-11 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold">
                    {t("visit.sponsorBtn")}
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
