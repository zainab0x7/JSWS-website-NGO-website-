"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { 
  ShieldCheck, 
  TrendingUp, 
  HandCoins, 
  Award, 
  Building2, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

export function DonationReassurance() {
  const t = useTranslations("DonatePage");

  const impactPillars = [
    {
      title: "100% Direct Allocation",
      desc: "Healthcare, emergency medicines & rehabilitation for deserving families",
      icon: HandCoins,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Complete Transparency",
      desc: "Regular financial audits and verifiable patient welfare tracking",
      icon: TrendingUp,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Registered NGO",
      desc: "Officially registered welfare organization under Pakistan non-profit laws",
      icon: Award,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Official Bank Partner",
      desc: "Direct deposits strictly into Jamila Sultan Welfare Society BankIslami account",
      icon: Building2,
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <div className="space-y-8 my-8">
      {/* Primary Reassurance Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-red-50 via-white to-red-50/50 p-6 sm:p-8 rounded-3xl border-2 border-red-100/80 shadow-md text-center sm:text-left relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/20">
              <ShieldCheck className="w-9 h-9" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                {t("security_badge") || "Secure Donation • Official JSWS Bank Account"}
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                100% Donation Commitment Policy
              </h3>
            </div>
          </div>

          <div className="px-4 py-3 rounded-2xl bg-white border border-red-200 shadow-sm text-xs font-semibold text-gray-700 flex items-center gap-2 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Zero Administrative Cuts</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed max-w-4xl">
          {t("reassurance_text") || "100% of donations are used to support healthcare, medicines, education, and welfare initiatives for deserving patients and families."}
        </p>
      </motion.div>

      {/* Impact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {impactPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${pillar.color}">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base mb-1">{pillar.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
