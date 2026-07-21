"use client";

import { motion } from"framer-motion";
import { Button } from"@/components/ui/button";
import { Card, CardContent } from"@/components/ui/card";
import { HeartHandshake, ShieldCheck, TrendingUp, HandCoins } from"lucide-react";
import { useState } from"react";
import { useTranslations } from "next-intl";

const donationAmounts = [1000, 5000, 10000, 20000];

export default function DonatePage() {
  const t = useTranslations("DonatePage");
 const [selectedAmount, setSelectedAmount] = useState<number>(5000);
 const [customAmount, setCustomAmount] = useState<string>("");

 return (
 <div className="flex flex-col min-h-screen pt-24 bg-white">
 {/* Hero / Emotional Section */}
 <section className="relative py-24 overflow-hidden">
 <div className="absolute inset-0 z-0">
 <img
 src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop"
 alt="Helping hands"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-black/60"/>
 </div>
 <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 className="max-w-3xl mx-auto space-y-6"
 >
 <HeartHandshake className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6"/>
 <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight">
 {t('hero_title')}
 </h1>
 <p className="text-xl text-gray-600">
 {t('hero_desc')}
 </p>
 </motion.div>
 </div>
 </section>

 <section className="py-20 relative -mt-16 z-20">
 <div className="container mx-auto px-4 md:px-6 max-w-4xl">
 <motion.div
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 >
 <Card className="border-none shadow-2xl bg-white p-8 md:p-12 rounded-3xl">
 <div className="text-center mb-8">
 <h2 className="font-heading text-3xl font-bold text-[var(--color-black)] mb-2">{t('select_title')}</h2>
 <p className="text-gray-500">{t('select_desc')}</p>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
 {donationAmounts.map((amount) => (
 <Button
 key={amount}
 variant={selectedAmount === amount ?"default":"outline"}
 className={`h-16 text-lg rounded-2xl border-2 ${
 selectedAmount === amount 
 ?"bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] border-transparent"
 :"border-gray-200 hover:border-[var(--color-primary)] :border-[var(--color-primary)] text-[var(--color-black)]"
 }`}
 onClick={() => {
 setSelectedAmount(amount);
 setCustomAmount("");
 }}
 >
 Rs. {amount.toLocaleString()}
 </Button>
 ))}
 </div>

 <div className="mb-8">
 <div className="relative">
 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
 <span className="text-gray-500 font-medium">Rs.</span>
 </div>
 <input
 type="number"
 value={customAmount}
 onChange={(e) => {
 setCustomAmount(e.target.value);
 setSelectedAmount(0);
 }}
 placeholder={t('custom_amount')}
 className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 bg-transparent text-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <Button size="lg"className="h-14 rounded-2xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-lg w-full">
 {t('donate_card')}
 </Button>
 <Button size="lg"variant="outline"className="h-14 rounded-2xl border-gray-300 w-full text-lg">
 {t('bank_transfer')}
 </Button>
 </div>

 <div className="mt-8 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-8 text-center">
 <div className="flex flex-col items-center gap-2">
 <ShieldCheck className="w-8 h-8 text-green-500"/>
 <span className="text-sm font-medium text-gray-600">{t('secure')}</span>
 </div>
 <div className="flex flex-col items-center gap-2">
 <HandCoins className="w-8 h-8 text-[var(--color-primary)]"/>
 <span className="text-sm font-medium text-gray-600">{t('tax')}</span>
 </div>
 <div className="flex flex-col items-center gap-2">
 <TrendingUp className="w-8 h-8 text-blue-500"/>
 <span className="text-sm font-medium text-gray-600">{t('transparent')}</span>
 </div>
 </div>
 </Card>
 </motion.div>
 </div>
 </section>
 </div>
 );
}
