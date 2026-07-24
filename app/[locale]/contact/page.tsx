"use client";

import { motion } from"framer-motion";
import { Button } from"@/components/ui/button";
import { Card } from"@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from"lucide-react";
import { useTranslations } from "next-intl";
import { BidiLTR } from "@/components/ui/BidiLTR";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
 return (
 <div className="flex flex-col min-h-screen pt-24 bg-white">
 {/* Hero Section */}
 <section className="py-20 bg-[var(--color-gray-light)]">
 <div className="container mx-auto px-4 md:px-6 text-center">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 className="max-w-3xl mx-auto space-y-4"
 >
 <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-black)]">{t('hero_title')}</h1>
 <p className="text-xl text-gray-600">
 {t('hero_desc')}
 </p>
 </motion.div>
 </div>
 </section>

 {/* Main Content */}
 <section className="py-20">
 <div className="container mx-auto px-4 md:px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
 
 {/* Contact Information */}
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="space-y-8"
 >
 <div>
 <h2 className="font-heading text-3xl font-bold mb-6 text-[var(--color-black)]">{t('info_title')}</h2>
 <div className="space-y-6">
 <div className="flex items-start gap-4">
 <div className="bg-red-50 p-3 rounded-full">
 <MapPin className="w-6 h-6 text-[var(--color-primary)]"/>
 </div>
 <div>
 <h4 className="font-bold text-[var(--color-black)]">{t('location')}</h4>
 <p className="text-gray-600">{t('address_text')}</p>
 </div>
 </div>
 
 <div className="flex items-start gap-4">
 <div className="bg-red-50 p-3 rounded-full">
 <Phone className="w-6 h-6 text-[var(--color-primary)]"/>
 </div>
 <div>
 <h4 className="font-bold text-[var(--color-black)]">{t('phones')}</h4>
 <p className="text-gray-600"><BidiLTR>+92 307 2021882</BidiLTR></p>
 <p className="text-gray-600"><BidiLTR>+92 336 3398787</BidiLTR></p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="bg-red-50 p-3 rounded-full">
 <Mail className="w-6 h-6 text-[var(--color-primary)]"/>
 </div>
 <div>
 <h4 className="font-bold text-[var(--color-black)]">{t('email')}</h4>
 <p className="text-gray-600"><BidiLTR>jswswelfare@gmail.com</BidiLTR></p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="bg-red-50 p-3 rounded-full">
 <Clock className="w-6 h-6 text-[var(--color-primary)]"/>
 </div>
 <div>
 <h4 className="font-bold text-[var(--color-black)]">{t('hours')}</h4>
 <p className="text-gray-600">{t('hours_opd')}</p>
 <p className="text-[var(--color-primary)] font-semibold">{t('hours_emergency')}</p>
 </div>
 </div>
 </div>
 </div>
 </motion.div>

 {/* Contact Form */}
 <motion.div
 initial={{ opacity: 0, x: 30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.4 }}
 >
 <Card className="border-none shadow-xl bg-white p-8 rounded-3xl">
 <h3 className="font-heading text-2xl font-bold mb-6 text-[var(--color-black)]">{t('form_title')}</h3>
 <form className="space-y-4">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">{t('name')}</label>
 <input type="text"className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"placeholder={t('placeholders.name')}/>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">{t('phone')}</label>
 <input type="text"className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"placeholder={t('placeholders.phone')}/>
 </div>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">{t('email_label')}</label>
 <input type="email"className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"placeholder={t('placeholders.email')}/>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">{t('message')}</label>
 <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] h-32 resize-none"placeholder={t('placeholders.message')}></textarea>
 </div>
 <Button size="lg"className="w-full h-14 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-lg mt-4">
 {t('send')}
 </Button>
 </form>
 </Card>
 </motion.div>
 </div>
 </div>
 </section>

 {/* Map Placeholder */}
 <section className="h-96 w-full bg-gray-200 flex items-center justify-center">
 <div className="text-center text-gray-500 flex flex-col items-center">
 <MapPin className="w-12 h-12 mb-4"/>
 <p>Interactive Map Integration Here</p>
 </div>
 </section>
 </div>
 );
}
