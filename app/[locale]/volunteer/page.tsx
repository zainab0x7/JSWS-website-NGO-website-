"use client";

import { motion } from"framer-motion";
import { Button } from"@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Heart, GraduationCap, MapPin } from"lucide-react";

import { useTranslations } from "next-intl";

export default function VolunteerPage() {
  const t = useTranslations("VolunteerPage");
 return (
 <div className="flex flex-col min-h-screen pt-24 bg-[var(--color-gray-light)]">
 {/* Hero Section */}
 <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
 <div className="absolute inset-0 z-0">
 <img
 src="https://images.unsplash.com/photo-1593113563332-e1478161f307?q=80&w=2669&auto=format&fit=crop"
 alt="Volunteers helping community"
 className="w-full h-full object-cover opacity-30 mix-blend-overlay"
 />
 </div>
 <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 className="max-w-3xl mx-auto space-y-6"
 >
 <Users className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6"/>
 <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight">
 {t('hero_title')}
 </h1>
 <p className="text-xl text-gray-600">
 {t('hero_desc')}
 </p>
 </motion.div>
 </div>
 </section>

 {/* Volunteer Benefits */}
 <section className="py-20">
 <div className="container mx-auto px-4 md:px-6">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
 {[
 { icon: Heart, title: t('impact_title'), desc: t('impact_desc') },
 { icon: GraduationCap, title: t('learn_title'), desc: t('learn_desc') },
 { icon: MapPin, title: t('service_title'), desc: t('service_desc') }
 ].map((benefit, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: index * 0.1 }}
 >
 <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 text-center p-6 bg-white">
 <benefit.icon className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4"/>
 <h3 className="font-heading text-xl font-bold text-[var(--color-black)] mb-2">{benefit.title}</h3>
 <p className="text-gray-600">{benefit.desc}</p>
 </Card>
 </motion.div>
 ))}
 </div>

 {/* Application Form */}
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="max-w-3xl mx-auto"
 >
 <Card className="border-none shadow-2xl bg-white p-8 md:p-12 rounded-3xl">
 <div className="text-center mb-8">
 <h2 className="font-heading text-3xl font-bold text-[var(--color-black)] mb-2">{t('form_title')}</h2>
 <p className="text-gray-500">{t('form_desc')}</p>
 </div>

 <form className="space-y-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">{t('first_name')}</label>
 <input type="text"className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"placeholder={t('placeholders.first_name')}/>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">{t('last_name')}</label>
 <input type="text"className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"placeholder={t('placeholders.last_name')}/>
 </div>
 </div>

 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">{t('email')}</label>
 <input type="email"className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"placeholder={t('placeholders.email')}/>
 </div>

 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">{t('why')}</label>
 <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] h-32 resize-none"placeholder={t('placeholders.why')}></textarea>
 </div>

 <Button size="lg"className="w-full h-14 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-lg">
 {t('submit')}
 </Button>
 </form>
 </Card>
 </motion.div>
 </div>
 </section>
 </div>
 );
}
