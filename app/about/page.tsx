"use client";

import { motion } from"framer-motion";
import { Heart, Target, Lightbulb, Users, Clock, Trophy } from"lucide-react";

export default function AboutPage() {
 return (
 <div className="flex flex-col min-h-screen pt-24 bg-white">
 {/* Hero Section */}
 <section className="relative py-20 bg-[var(--color-primary)] text-white overflow-hidden">
 <div className="absolute inset-0 opacity-10 mix-blend-overlay">
 <img
 src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop"
 alt="Hospital building"
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
 <h1 className="font-heading text-5xl md:text-6xl font-bold">Our Story & Mission</h1>
 <p className="text-xl text-red-100">
 Dedicated to serving humanity through accessible, high-quality healthcare and community welfare programs since our inception.
 </p>
 </motion.div>
 </div>
 </section>

 {/* Mission & Vision */}
 <section className="py-24 bg-[var(--color-gray-light)]">
 <div className="container mx-auto px-4 md:px-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-[var(--color-primary)]"
 >
 <Target className="w-12 h-12 text-[var(--color-primary)] mb-6"/>
 <h2 className="font-heading text-3xl font-bold mb-4 text-[var(--color-black)]">Our Mission</h2>
 <p className="text-gray-600 text-lg leading-relaxed">
 To provide accessible, affordable, and compassionate healthcare services while promoting preventive healthcare, public awareness, education, and community welfare for underserved communities across the nation.
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.2 }}
 className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-[var(--color-black)]"
 >
 <Lightbulb className="w-12 h-12 text-[var(--color-black)] mb-6"/>
 <h2 className="font-heading text-3xl font-bold mb-4 text-[var(--color-black)]">Our Vision</h2>
 <p className="text-gray-600 text-lg leading-relaxed">
 To build a healthy, educated, and empowered society where everyone has equal access to quality healthcare and welfare services, eliminating disparities in medical treatment.
 </p>
 </motion.div>
 </div>
 </div>
 </section>

 {/* Core Values */}
 <section className="py-24 bg-white">
 <div className="container mx-auto px-4 md:px-6">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <h2 className="font-heading text-4xl font-bold text-[var(--color-black)] mb-6">Our Core Values</h2>
 <p className="text-gray-600 text-lg">
 The principles that guide our everyday operations and interactions with patients and communities.
 </p>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
 {[
 { icon: Heart, title:"Compassion"},
 { icon: Users, title:"Humanity"},
 { icon: Trophy, title:"Excellence"},
 { icon: Clock, title:"Transparency"}
 ].map((value, index) => (
 <motion.div
 key={value.title}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: index * 0.1 }}
 className="flex flex-col items-center text-center p-6 bg-red-50 rounded-2xl"
 >
 <value.icon className="w-10 h-10 text-[var(--color-primary)] mb-4"/>
 <h3 className="font-heading text-xl font-bold text-[var(--color-black)]">{value.title}</h3>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 </div>
 );
}
