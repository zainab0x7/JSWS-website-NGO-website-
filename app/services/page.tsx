"use client";

import { motion } from"framer-motion";
import { ServicesSection } from"@/components/home/ServicesSection";
import { CheckCircle2, ArrowRight } from"lucide-react";
import { Button } from"@/components/ui/button";
import Link from"next/link";

export default function ServicesPage() {
 return (
 <div className="flex flex-col min-h-screen pt-24 bg-white">
 {/* Hero Section */}
 <section className="relative py-20 bg-white text-white overflow-hidden">
 <div className="absolute inset-0 opacity-20 mix-blend-overlay">
 <img
 src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop"
 alt="Medical team"
 className="w-full h-full object-cover"
 />
 </div>
 <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 className="max-w-3xl mx-auto space-y-6"
 >
 <h1 className="font-heading text-5xl md:text-6xl font-bold">Comprehensive Healthcare</h1>
 <p className="text-xl text-gray-600">
 Delivering high-quality, specialized medical services with compassion and professional excellence.
 </p>
 </motion.div>
 </div>
 </section>

 {/* Main Services Grid (Reused from Home but without the"View All"button) */}
 <div className="pb-12 bg-white">
 <ServicesSection />
 </div>

 {/* Specialty Highlights */}
 <section className="py-24 bg-[var(--color-gray-light)]">
 <div className="container mx-auto px-4 md:px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 >
 <h2 className="font-heading text-4xl font-bold text-[var(--color-black)] mb-6">
 Specialized Care Programs
 </h2>
 <p className="text-gray-600 mb-8 text-lg leading-relaxed">
 Our specialized programs are designed to address the specific health challenges of our community, offering targeted interventions and continuous support.
 </p>
 <ul className="space-y-4">
 {[
"Maternal & Child Health Initiative",
"Free Diabetes & Hypertension Clinics",
"Hepatitis Screening & Vaccination Drive",
"Nutritional Support for Undernourished Children",
"Mobile Medical Camps for Remote Areas"
 ].map((item, index) => (
 <motion.li 
 key={index}
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: index * 0.1 }}
 className="flex items-start gap-3"
 >
 <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5"/>
 <span className="text-gray-800 font-medium text-lg">{item}</span>
 </motion.li>
 ))}
 </ul>
 <div className="mt-10">
 <Button asChild size="lg"className="rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white">
 <Link href="/doctors">Consult a Specialist <ArrowRight className="ml-2 w-5 h-5"/></Link>
 </Button>
 </div>
 </motion.div>
 
 <motion.div
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="grid grid-cols-2 gap-4"
 >
 <img
 src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop"
 alt="Medical professional"
 className="w-full h-64 object-cover rounded-3xl"
 />
 <img
 src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2670&auto=format&fit=crop"
 alt="Laboratory testing"
 className="w-full h-80 object-cover rounded-3xl translate-y-8"
 />
 </motion.div>
 </div>
 </div>
 </section>
 </div>
 );
}
