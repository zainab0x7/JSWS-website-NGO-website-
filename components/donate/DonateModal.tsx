"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, HeartHandshake, Building2, CreditCard, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { BankTransferCard } from "./BankTransferCard";
import { OnlinePaymentFutureCard } from "./OnlinePaymentFutureCard";
import { DonationReassurance } from "./DonationReassurance";
import { cn } from "@/lib/utils";
import { BidiLTR } from "@/components/ui/BidiLTR";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

const donationAmounts = [1000, 5000, 10000, 20000];

export function DonateModal({ isOpen, onClose, defaultCategory = "general" }: DonateModalProps) {
  const t = useTranslations("DonatePage");
  const td = useTranslations("Donations");

  const [activeTab, setActiveTab] = useState<"bank" | "online">("bank");
  const [selectedAmount, setSelectedAmount] = useState<number>(5000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [prevDefaultCategory, setPrevDefaultCategory] = useState(defaultCategory);

  if (defaultCategory !== prevDefaultCategory) {
    setPrevDefaultCategory(defaultCategory);
    setSelectedCategory(defaultCategory);
  }

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const categories = [
    { id: "general", label: td("categories.general") || "General Healthcare" },
    { id: "zakat", label: td("categories.zakat") || "Zakat" },
    { id: "sadqah", label: td("categories.sadqah") || "Sadqah" },
    { id: "patient", label: td("categories.patient") || "Sponsor Patient" },
    { id: "medicines", label: td("categories.medicines") || "Medicines" },
    { id: "clinic", label: td("categories.clinic") || "Clinic" },
    { id: "equipment", label: td("categories.equipment") || "Equipment" },
  ];

  const currentAmountDisplay = customAmount ? Number(customAmount) : selectedAmount;
  const currentCategoryLabel = categories.find((c) => c.id === selectedCategory)?.label;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-gray-900/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-4xl bg-gray-50 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col z-10 border border-gray-100"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-20 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 text-[var(--color-primary)] flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 leading-tight">
                    {t("modal_title") || "Support Jamila Sultan Welfare Society"}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {t("security_badge") || "Secure Donation • Official JSWS Bank Account"}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
              {/* Category Filter Pills */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Select Cause / Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={cn(
                        "px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 border",
                        selectedCategory === cat.id
                          ? "bg-[var(--color-primary)] text-white border-transparent shadow-md"
                          : "bg-white text-gray-700 border-gray-200 hover:border-red-300"
                      )}
                    >
                      {selectedCategory === cat.id && <Check className="w-3.5 h-3.5" />}
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Donation Amount (PKR)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                  {donationAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount("");
                      }}
                      className={cn(
                        "py-3 px-4 rounded-xl text-sm font-bold border-2 transition-all text-center",
                        selectedAmount === amt && !customAmount
                          ? "bg-red-50 text-[var(--color-primary)] border-[var(--color-primary)] shadow-sm"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                      )}
                    >
                      <BidiLTR>Rs. {amt.toLocaleString()}</BidiLTR>
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute inset-y-0 ltr:left-0 rtl:right-0 ltr:pl-4 rtl:pr-4 flex items-center text-sm font-semibold text-gray-500">
                    <BidiLTR>Rs.</BidiLTR>
                  </span>
                  <input
                    type="number"
                    dir="ltr"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(0);
                    }}
                    placeholder={t("custom_amount") || "Enter custom amount"}
                    className="w-full ltr:pl-12 ltr:pr-4 rtl:pr-12 rtl:pl-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-sm focus:outline-none focus:border-[var(--color-primary)] font-medium transition-colors force-ltr bidi-ltr [direction:ltr]"
                  />
                </div>
              </div>

              {/* Payment Option Method Tabs */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 p-1.5 rounded-2xl bg-gray-200/80 gap-1.5">
                  <button
                    onClick={() => setActiveTab("bank")}
                    className={cn(
                      "py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all",
                      activeTab === "bank"
                        ? "bg-white text-gray-900 shadow-md"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    <Building2 className="w-4 h-4 text-red-600" />
                    <span>{t("option_bank_transfer") || "Bank Transfer (Official)"}</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("online")}
                    className={cn(
                      "py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all",
                      activeTab === "online"
                        ? "bg-white text-gray-900 shadow-md"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    <CreditCard className="w-4 h-4 text-amber-500" />
                    <span>{t("option_online_payment") || "Pay Online (Coming Soon)"}</span>
                  </button>
                </div>

                {/* Tab Content */}
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

              {/* Reassurance Banner inside Modal */}
              <DonationReassurance />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
