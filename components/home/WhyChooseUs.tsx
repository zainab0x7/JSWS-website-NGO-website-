"use client";

import { motion } from"framer-motion";
import { CheckCircle2 } from"lucide-react";

const reasons = [
"Professional & Qualified Doctors",
"Affordable & Accessible Care",
"Patient-Centered Approach",
"State-of-the-art Laboratory",
"Comprehensive Community Programs",
"Transparent & Trustworthy",
];

export function WhyChooseUs() {
 return (
 <section className="py-24 bg-white relative overflow-hidden">
 <div className="container mx-auto px-4 md:px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="relative order-2 lg:order-1"
 >
 <div className="grid grid-cols-2 gap-4">
 <img
 src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2670&auto=format&fit=crop"
 alt="Medical facilities"
 className="rounded-3xl w-full h-64 object-cover shadow-lg"
 />
 <img
 src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2574&auto=format&fit=crop"
 alt="Healthcare professionals"
 className="rounded-3xl w-full h-80 object-cover shadow-lg translate-y-12"
 />
 </div>
 {/* Decorative element */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-50 rounded-full blur-3xl -z-10"/>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="order-1 lg:order-2 space-y-8"
 >
 <div>
 <h2 className="text-[var(--color-primary)] font-semibold tracking-wider uppercase text-sm mb-2">
 Why Choose Us
 </h2>
 <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-black)] leading-tight">
 Excellence in Healthcare & Welfare
 </h3>
 </div>
 
 <p className="text-lg text-gray-600 leading-relaxed">
 We stand apart through our unwavering commitment to providing high-quality, compassionate healthcare to those who need it most, without compromising on professional standards.
 </p>

 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
 {reasons.map((reason, index) => (
 <motion.li
 key={index}
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: index * 0.1 }}
 className="flex items-center gap-3"
 >
 <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] shrink-0"/>
 <span className="text-gray-800 font-medium">{reason}</span>
 </motion.li>
 ))}
 </ul>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
