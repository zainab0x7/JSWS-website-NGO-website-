"use client";

import { motion } from"framer-motion";
import { Button } from"@/components/ui/button";
import { Card } from"@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from"lucide-react";

export default function ContactPage() {
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
 <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-black)]">Get in Touch</h1>
 <p className="text-xl text-gray-600">
 We are here to help. Reach out to us for any medical queries, volunteer information, or donations.
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
 <h2 className="font-heading text-3xl font-bold mb-6 text-[var(--color-black)]">Contact Information</h2>
 <div className="space-y-6">
 <div className="flex items-start gap-4">
 <div className="bg-red-50 p-3 rounded-full">
 <MapPin className="w-6 h-6 text-[var(--color-primary)]"/>
 </div>
 <div>
 <h4 className="font-bold text-[var(--color-black)]">Our Location</h4>
 <p className="text-gray-600">P-66 - 15 A, Sector 31A<br/>Allah Wala Town, Korangi<br/>Karachi, 74900, Pakistan</p>
 </div>
 </div>
 
 <div className="flex items-start gap-4">
 <div className="bg-red-50 p-3 rounded-full">
 <Phone className="w-6 h-6 text-[var(--color-primary)]"/>
 </div>
 <div>
 <h4 className="font-bold text-[var(--color-black)]">Phone Numbers</h4>
 <p className="text-gray-600">+92 307 2021882</p>
 <p className="text-gray-600">+92 336 3398787</p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="bg-red-50 p-3 rounded-full">
 <Mail className="w-6 h-6 text-[var(--color-primary)]"/>
 </div>
 <div>
 <h4 className="font-bold text-[var(--color-black)]">Email Address</h4>
 <p className="text-gray-600">jswswelfare@gmail.com</p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="bg-red-50 p-3 rounded-full">
 <Clock className="w-6 h-6 text-[var(--color-primary)]"/>
 </div>
 <div>
 <h4 className="font-bold text-[var(--color-black)]">Working Hours</h4>
 <p className="text-gray-600">General OPD: 9:00 AM - 5:00 PM (Mon-Sat)</p>
 <p className="text-[var(--color-primary)] font-semibold">Emergency: 24/7 Available</p>
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
 <h3 className="font-heading text-2xl font-bold mb-6 text-[var(--color-black)]">Send us a Message</h3>
 <form className="space-y-4">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Name</label>
 <input type="text"className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"placeholder="Your Name"/>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Phone</label>
 <input type="text"className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"placeholder="Phone Number"/>
 </div>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Email</label>
 <input type="email"className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"placeholder="Email Address"/>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Message</label>
 <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] h-32 resize-none"placeholder="How can we help you?"></textarea>
 </div>
 <Button size="lg"className="w-full h-14 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-lg mt-4">
 Send Message
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
