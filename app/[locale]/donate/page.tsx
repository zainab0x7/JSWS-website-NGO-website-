"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeartHandshake, ShieldCheck, TrendingUp, HandCoins, Heart, Stethoscope, Pill, Hospital, Activity } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const donationAmounts = [1000, 5000, 10000, 20000];

export default function DonatePage() {
  const t = useTranslations("DonatePage");
  const td = useTranslations("Donations");
  const [selectedAmount, setSelectedAmount] = useState<number>(5000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("general");

  const categories = [
    { id: 'zakat', icon: HandCoins, label: td('categories.zakat'), desc: td('descriptions.zakat') },
    { id: 'sadqah', icon: Heart, label: td('categories.sadqah'), desc: td('descriptions.sadqah') },
    { id: 'general', icon: HeartHandshake, label: td('categories.general'), desc: td('descriptions.general') },
    { id: 'patient', icon: Activity, label: td('categories.patient'), desc: td('descriptions.patient') },
    { id: 'clinic', icon: Hospital, label: td('categories.clinic'), desc: td('descriptions.clinic') },
    { id: 'medicines', icon: Pill, label: td('categories.medicines'), desc: td('descriptions.medicines') },
    { id: 'equipment', icon: Stethoscope, label: td('categories.equipment'), desc: td('descriptions.equipment') },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-gray-50">
      {/* Hero / Emotional Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop"
            alt="Helping hands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <HeartHandshake className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" />
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('hero_title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              {t('hero_desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Categories */}
      <section className="py-16 bg-white relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4 text-gray-900">Choose a Cause</h2>
            <p className="text-gray-500">Select where you want your contribution to go.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card 
                    className={cn(
                      "h-full cursor-pointer transition-all duration-300 hover:shadow-lg border-2 rounded-2xl",
                      isSelected ? "border-[var(--color-primary)] bg-red-50/50" : "border-gray-100 hover:border-red-200"
                    )}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    <CardContent className="p-6 flex flex-col h-full text-center items-center">
                      <div className={cn(
                        "w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors",
                        isSelected ? "bg-[var(--color-primary)] text-white" : "bg-red-50 text-[var(--color-primary)]"
                      )}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">{cat.label}</h3>
                      <p className="text-sm text-gray-500 flex-grow mb-6">{cat.desc}</p>
                      <Button 
                        variant={isSelected ? "default" : "outline"}
                        className={cn(
                          "w-full rounded-xl",
                          isSelected && "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)]"
                        )}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCategory(cat.id);
                          // Scroll to donation form
                          document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        {td('donate')}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="donation-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-none shadow-xl bg-white p-8 md:p-12 rounded-3xl">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-[var(--color-primary)] text-sm font-medium mb-4">
                  Contributing to: {categories.find(c => c.id === selectedCategory)?.label}
                </div>
                <h2 className="font-heading text-3xl font-bold text-gray-900 mb-2">{t('select_title')}</h2>
                <p className="text-gray-500">{t('select_desc')}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {donationAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    className={cn(
                      "h-16 text-lg rounded-2xl border-2 transition-all",
                      selectedAmount === amount 
                        ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] border-transparent shadow-md"
                        : "border-gray-200 hover:border-[var(--color-primary)] text-gray-700"
                    )}
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
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
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
                    className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-gray-200 bg-gray-50 text-lg focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button size="lg" className="h-14 rounded-2xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-lg w-full shadow-lg shadow-red-500/20">
                  {t('donate_card')}
                </Button>
                <Button size="lg" variant="outline" className="h-14 rounded-2xl border-gray-300 w-full text-lg hover:bg-gray-50">
                  {t('bank_transfer')}
                </Button>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-green-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{t('secure')}</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                    <HandCoins className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{t('tax')}</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                  </div>
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
