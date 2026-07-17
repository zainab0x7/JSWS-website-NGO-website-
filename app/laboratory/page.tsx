"use client";

import { motion } from"framer-motion";
import { Button } from"@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from"@/components/ui/card";
import { ArrowRight, Download, Beaker, FileText, CheckCircle2 } from"lucide-react";
import Link from"next/link";

const labTests = [
"Complete Blood Count (CBC)",
"Liver Function Test (LFT)",
"Kidney Function Test (KFT)",
"Lipid Profile",
"Thyroid Profile",
"Blood Sugar (Fasting/Random)",
"HbA1c",
"Vitamin D & B12",
"Hormonal Assays",
"Infectious Disease Screening"
];

export default function LaboratoryPage() {
 return (
 <div className="flex flex-col min-h-screen pt-24 bg-white">
 {/* Hero Section */}
 <section className="relative py-20 overflow-hidden bg-[var(--color-gray-light)]">
 <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8 }}
 className="w-full md:w-1/2 space-y-6"
 >
 <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-black)] leading-tight">
 State-of-the-Art <span className="text-[var(--color-primary)]">Diagnostic Laboratory</span>
 </h1>
 <p className="text-lg text-gray-600">
 Sultan Advanced Reference Center (SARC) provides accurate, reliable, and timely diagnostic services using the latest medical equipment and certified pathologists.
 </p>
 <div className="flex flex-wrap gap-4 pt-4">
 <Button asChild size="lg"className="rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white">
 <Link href="#download-report">Download Report <Download className="ml-2 w-4 h-4"/></Link>
 </Button>
 <Button asChild size="lg"variant="outline"className="rounded-full border-gray-300">
 <Link href="#tests">View All Tests</Link>
 </Button>
 </div>
 </motion.div>
 <motion.div
 initial={{ opacity: 0, x: 30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="w-full md:w-1/2"
 >
 <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
 <img
 src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2670&auto=format&fit=crop"
 alt="Modern laboratory equipment"
 className="w-full h-full object-cover"
 />
 </div>
 </motion.div>
 </div>
 </section>

 {/* Online Report Section */}
 <section id="download-report"className="py-20 relative">
 <div className="container mx-auto px-4 md:px-6">
 <div className="bg-red-50 rounded-3xl p-8 md:p-12 shadow-inner max-w-4xl mx-auto border border-red-100 text-center">
 <FileText className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-6"/>
 <h2 className="font-heading text-3xl font-bold mb-4 text-[var(--color-black)]">Online Report Download</h2>
 <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
 Access your medical reports securely from the comfort of your home. Enter your MR number and password provided on your receipt.
 </p>
 <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
 <input 
 type="text"
 placeholder="MR Number"
 className="px-4 py-3 rounded-full border border-gray-300 bg-white w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
 />
 <input 
 type="password"
 placeholder="Password"
 className="px-4 py-3 rounded-full border border-gray-300 bg-white w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
 />
 <Button size="lg"className="rounded-full bg-white text-white">
 Access
 </Button>
 </div>
 </div>
 </div>
 </section>

 {/* Services List */}
 <section id="tests"className="py-20 bg-[var(--color-gray-light)]">
 <div className="container mx-auto px-4 md:px-6">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <Beaker className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-4"/>
 <h2 className="font-heading text-4xl font-bold text-[var(--color-black)] mb-6">
 Available Tests & Profiles
 </h2>
 <p className="text-gray-600">
 We offer a comprehensive menu of routine and specialized tests at highly subsidized rates.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {labTests.map((test, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.3, delay: index * 0.05 }}
 className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow"
 >
 <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0"/>
 <span className="font-medium text-gray-800">{test}</span>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 </div>
 );
}
