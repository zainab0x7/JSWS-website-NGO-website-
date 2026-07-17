"use client";

import { motion } from"framer-motion";
import { Heart, ShieldCheck, Stethoscope } from"lucide-react";

export function AboutSection() {
 return (
 <section className="py-24 bg-[var(--color-gray-light)]">
 <div className="container mx-auto px-4 md:px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="space-y-8"
 >
 <div>
 <h2 className="text-[var(--color-primary)] font-semibold tracking-wider uppercase text-sm mb-2">
 About JSWS
 </h2>
 <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-black)] leading-tight">
 Our Best Way Everyday
 </h3>
 </div>
 
 <p className="text-lg text-gray-600 leading-relaxed">
 To build a healthy, educated, and empowered society where everyone has equal access to quality healthcare and welfare services. We are driven by compassion and the belief that healthcare is a fundamental human right.
 </p>

 <div className="space-y-6 pt-4">
 <div className="flex items-start gap-4">
 <div className="bg-white p-3 rounded-xl shadow-sm">
 <Stethoscope className="w-6 h-6 text-[var(--color-primary)]"/>
 </div>
 <div>
 <h4 className="font-heading text-xl font-bold text-[var(--color-black)] mb-2">Professional Care</h4>
 <p className="text-gray-600">Our team consists of qualified and experienced healthcare professionals dedicated to excellence.</p>
 </div>
 </div>
 
 <div className="flex items-start gap-4">
 <div className="bg-white p-3 rounded-xl shadow-sm">
 <Heart className="w-6 h-6 text-[var(--color-primary)]"/>
 </div>
 <div>
 <h4 className="font-heading text-xl font-bold text-[var(--color-black)] mb-2">Compassionate Approach</h4>
 <p className="text-gray-600">We treat every patient with empathy, respect, and dignity, ensuring they feel supported.</p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="bg-white p-3 rounded-xl shadow-sm">
 <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]"/>
 </div>
 <div>
 <h4 className="font-heading text-xl font-bold text-[var(--color-black)] mb-2">Transparency & Trust</h4>
 <p className="text-gray-600">We maintain the highest standards of integrity and transparency in all our welfare activities.</p>
 </div>
 </div>
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="relative"
 >
 <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
 <img
 src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2670&auto=format&fit=crop"
 alt="Our medical team"
 className="w-full h-full object-cover"
 />
 </div>
 
 {/* Decorative element */}
 <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl -z-10"/>
 <div className="absolute -top-10 -right-10 w-64 h-64 bg-gray-200 rounded-full blur-3xl -z-10"/>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
