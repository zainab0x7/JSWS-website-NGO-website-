"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  HeartHandshake, 
  HandCoins, 
  Heart, 
  Stethoscope, 
  Pill, 
  Hospital, 
  Activity,
  Building2,
  CreditCard,
  Sparkles
} from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { BankTransferCard } from "@/components/donate/BankTransferCard";
import { OnlinePaymentFutureCard } from "@/components/donate/OnlinePaymentFutureCard";
import { DonationReassurance } from "@/components/donate/DonationReassurance";
import { DonateModal } from "@/components/donate/DonateModal";
import { BidiLTR } from "@/components/ui/BidiLTR";

const donationAmounts = [1000, 5000, 10000, 20000];

export default function DonatePage() {
  const t = useTranslations("DonatePage");
  const td = useTranslations("Donations");

  const [selectedAmount, setSelectedAmount] = useState<number>(5000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const [activeTab, setActiveTab] = useState<"bank" | "online">("bank");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const categories = [
    { id: "zakat", icon: HandCoins, label: td("categories.zakat") || "Zakat", desc: td("descriptions.zakat") || "Fulfill your religious obligation for deserving patients." },
    { id: "sadqah", icon: Heart, label: td("categories.sadqah") || "Sadqah", desc: td("descriptions.sadqah") || "Ease suffering and gain spiritual reward." },
    { id: "general", icon: HeartHandshake, label: td("categories.general") || "General Healthcare", desc: td("descriptions.general") || "Support overall hospital operations and care." },
    { id: "patient", icon: Activity, label: td("categories.patient") || "Sponsor Patient", desc: td("descriptions.patient") || "Cover medical expenses for needy patients." },
    { id: "clinic", icon: Hospital, label: td("categories.clinic") || "Sponsor Clinic", desc: td("descriptions.clinic") || "Fund clinic supplies and daily treatments." },
    { id: "medicines", icon: Pill, label: td("categories.medicines") || "Sponsor Medicines", desc: td("descriptions.medicines") || "Provide free life-saving medicines." },
    { id: "equipment", icon: Stethoscope, label: td("categories.equipment") || "Sponsor Equipment", desc: td("descriptions.equipment") || "Help acquire critical medical equipment." },
  ];

  const currentCategoryLabel = categories.find((c) => c.id === selectedCategory)?.label;
  const currentAmountDisplay = customAmount ? Number(customAmount) : selectedAmount;

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-gray-50/60">
      {/* Hero / Emotional Banner */}
      <section className="relative py-24 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop"
            alt="Helping hands"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 text-red-300 text-xs sm:text-sm font-semibold border border-red-500/30 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t("security_badge") || "Secure Donation • Official JSWS Bank Account"}</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              {t("hero_title") || "Your Contribution Saves Lives"}
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              {t("hero_desc") || "Every donation helps us provide essential healthcare services, free medicines, and welfare support to deserving families."}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 h-14 text-lg font-bold shadow-lg shadow-red-600/30"
              >
                <HeartHandshake className="mr-2 w-5 h-5" />
                Donate Now (Quick Modal)
              </Button>
              <a
                href="#donation-options"
                className="inline-flex items-center justify-center px-8 h-14 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white text-base font-semibold backdrop-blur-md transition-colors"
              >
                View Bank Transfer Details
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reassurance & Security Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <DonationReassurance />
        </div>
      </section>

      {/* Donation Causes / Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-3">
              Select a Cause
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Choose where you want your contribution to make a direct impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Card
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "h-full cursor-pointer transition-all duration-300 hover:shadow-xl border-2 rounded-3xl bg-white overflow-hidden flex flex-col justify-between p-6",
                      isSelected
                        ? "border-[var(--color-primary)] ring-2 ring-red-500/20 bg-red-50/20"
                        : "border-gray-100 hover:border-red-200"
                    )}
                  >
                    <div>
                      <div
                        className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors",
                          isSelected
                            ? "bg-[var(--color-primary)] text-white shadow-md shadow-red-500/20"
                            : "bg-red-50 text-[var(--color-primary)]"
                        )}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {cat.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                        {cat.desc}
                      </p>
                    </div>

                    <Button
                      variant={isSelected ? "default" : "outline"}
                      className={cn(
                        "w-full rounded-2xl h-11 font-semibold text-sm",
                        isSelected
                          ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white shadow-md"
                          : "border-gray-200 hover:bg-gray-50 text-gray-700"
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory(cat.id);
                        document.getElementById("donation-options")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {isSelected ? "Selected Cause" : td("donate") || "Select Cause"}
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Donation Options Hub */}
      <section id="donation-options" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-10">
          {/* Amount Selector Header Card */}
          <Card className="border-none shadow-xl bg-gradient-to-br from-white to-gray-50 p-6 sm:p-10 rounded-3xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-[var(--color-primary)] text-xs sm:text-sm font-bold mb-3">
                Selected Cause: {currentCategoryLabel}
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {t("select_title") || "Select Donation Amount"}
              </h2>
              <p className="text-gray-500 text-sm">
                {t("select_desc") || "Your generosity powers our medical & welfare initiatives."}
              </p>
            </div>

            {/* Amount Presets */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {donationAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount("");
                  }}
                  className={cn(
                    "h-16 text-base sm:text-lg font-bold rounded-2xl border-2 transition-all flex items-center justify-center shadow-sm",
                    selectedAmount === amt && !customAmount
                      ? "bg-[var(--color-primary)] text-white border-transparent shadow-lg shadow-red-500/20"
                      : "bg-white border-gray-200 text-gray-800 hover:border-[var(--color-primary)]"
                  )}
                >
                  <BidiLTR>Rs. {amt.toLocaleString()}</BidiLTR>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 ltr:left-0 rtl:right-0 ltr:pl-5 rtl:pr-5 flex items-center pointer-events-none text-gray-500 font-bold text-lg">
                <BidiLTR>Rs.</BidiLTR>
              </div>
              <input
                type="number"
                dir="ltr"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(0);
                }}
                placeholder={t("custom_amount") || "Enter custom amount"}
                className="w-full ltr:pl-14 ltr:pr-4 rtl:pr-14 rtl:pl-4 py-4 rounded-2xl border-2 border-gray-200 bg-white text-lg font-semibold focus:outline-none focus:border-[var(--color-primary)] transition-colors force-ltr bidi-ltr [direction:ltr]"
              />
            </div>

            {/* Method Switcher Tabs */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 p-1.5 rounded-2xl bg-gray-100 gap-2">
                <button
                  onClick={() => setActiveTab("bank")}
                  className={cn(
                    "py-4 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all",
                    activeTab === "bank"
                      ? "bg-white text-gray-900 shadow-md border border-gray-200/50"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  <Building2 className="w-5 h-5 text-red-600" />
                  <span>{t("option_bank_transfer") || "Direct Bank Transfer"}</span>
                </button>

                <button
                  onClick={() => setActiveTab("online")}
                  className={cn(
                    "py-4 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all",
                    activeTab === "online"
                      ? "bg-white text-gray-900 shadow-md border border-gray-200/50"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  <CreditCard className="w-5 h-5 text-amber-500" />
                  <span>{t("option_online_payment") || "Pay Online (Coming Soon)"}</span>
                </button>
              </div>

              {/* Render Active Component Option */}
              {activeTab === "bank" ? (
                <BankTransferCard
                  selectedAmount={currentAmountDisplay}
                  selectedCategoryLabel={currentCategoryLabel}
                />
              ) : (
                <OnlinePaymentFutureCard
                  selectedAmount={currentAmountDisplay}
                />
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Full Quick Donate Modal */}
      <DonateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCategory={selectedCategory}
      />
    </div>
  );
}
