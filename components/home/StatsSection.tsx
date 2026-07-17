"use client";

import { useEffect, useState } from"react";
import { motion, useAnimation, useInView } from"framer-motion";
import { useRef } from"react";
import { Users, Building, Activity, HeartHandshake } from"lucide-react";

interface CounterProps {
 end: number;
 suffix?: string;
 duration?: number;
}

function Counter({ end, suffix ="", duration = 2 }: CounterProps) {
 const [count, setCount] = useState(0);
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, amount: 0.5 });

 useEffect(() => {
 if (isInView) {
 let startTime: number | null = null;
 const animate = (timestamp: number) => {
 if (!startTime) startTime = timestamp;
 const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
 setCount(Math.floor(progress * end));
 if (progress < 1) {
 requestAnimationFrame(animate);
 }
 };
 requestAnimationFrame(animate);
 }
 }, [isInView, end, duration]);

 return (
 <span ref={ref}>
 {count.toLocaleString()}{suffix}
 </span>
 );
}

const stats = [
 {
 icon: Users,
 value: 500000,
 suffix:"+",
 label:"Patients Served",
 },
 {
 icon: Building,
 value: 1500,
 suffix:"+",
 label:"Medical Camps",
 },
 {
 icon: Activity,
 value: 200000,
 suffix:"+",
 label:"Diagnostic Tests",
 },
 {
 icon: HeartHandshake,
 value: 500,
 suffix:"+",
 label:"Active Volunteers",
 },
];

export function StatsSection() {
 return (
 <section className="py-20 bg-[var(--color-primary)] text-white relative overflow-hidden">
 {/* Abstract Background pattern */}
 <div className="absolute inset-0 opacity-10">
 <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"/>
 <div className="absolute top-1/2 right-10 w-64 h-64 bg-black rounded-full mix-blend-overlay filter blur-3xl"/>
 </div>

 <div className="container mx-auto px-4 md:px-6 relative z-10">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
 {stats.map((stat, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: index * 0.1 }}
 className="flex flex-col items-center"
 >
 <div className="bg-white/20 p-4 rounded-2xl mb-4 backdrop-blur-sm">
 <stat.icon className="w-8 h-8 text-white"/>
 </div>
 <h4 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
 <Counter end={stat.value} suffix={stat.suffix} />
 </h4>
 <p className="text-red-100 font-medium tracking-wide uppercase text-sm">
 {stat.label}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
