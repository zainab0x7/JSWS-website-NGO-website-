"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { 
  CreditCard, 
  Smartphone, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Zap, 
  Clock,
  Globe,
  Wallet,
} from "lucide-react";

interface OnlinePaymentFutureCardProps {
  selectedAmount?: number | string;
}

export function OnlinePaymentFutureCard({ selectedAmount }: OnlinePaymentFutureCardProps) {
  const t = useTranslations("DonatePage");
  console.log(selectedAmount);

  const futurePaymentOptions = [
    {
      id: "card",
      title: "Debit / Credit Cards",
      desc: "Visa, Mastercard, PayPak & UnionPay cards",
      icon: CreditCard,
      badge: "Visa / Mastercard / PayPak",
      brands: ["Visa", "Mastercard", "PayPak"]
    },
    {
      id: "raast",
      title: "Raast Instant Payment",
      desc: "State Bank of Pakistan instant digital gateway",
      icon: Zap,
      badge: "SBP Instant Raast",
      brands: ["Raast ID", "QR Raast"]
    },
    {
      id: "wallets",
      title: "Mobile Wallets",
      desc: "EasyPaisa, JazzCash, NayaPay & SadaPay",
      icon: Wallet,
      badge: "EasyPaisa / JazzCash",
      brands: ["EasyPaisa", "JazzCash", "SadaPay", "NayaPay"]
    },
    {
      id: "gpay",
      title: "Google Pay",
      desc: "Fast digital payment via Android & Chrome",
      icon: Smartphone,
      badge: "Google Wallet",
      brands: ["GPay"]
    },
    {
      id: "applepay",
      title: "Apple Pay",
      desc: "Touch ID / Face ID quick checkout on iOS",
      icon: Lock,
      badge: "Apple Pay",
      brands: ["Apple Pay"]
    },
    {
      id: "gateways",
      title: "Payment Gateways",
      desc: "PayFast, Safepay, PayPro direct gateway checkout",
      icon: Globe,
      badge: "PayFast / Safepay / PayPro",
      brands: ["PayFast", "Safepay", "PayPro"]
    }
  ];

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-red-950 p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute right-4 bottom-0 opacity-10 pointer-events-none">
          <CreditCard className="w-48 h-48" />
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold backdrop-blur-sm mb-3 border border-red-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            {t("online_coming_soon_title") || "Pay Online (Coming Soon)"}
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
            Digital Payment Gateway Ready
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mt-1 max-w-xl">
            {t("online_coming_soon_desc") || "Payment gateway integrations (PayFast, Safepay, PayPro, Raast Direct) are currently being set up to allow seamless instant online donations."}
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Gateway Architecture Notice */}
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-red-600 shrink-0" />
            <span>Architecture ready for PayFast, Safepay, PayPro & Raast drivers.</span>
          </div>
          <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-gray-200 font-semibold text-gray-700 text-[11px]">
            Future Expansion Ready
          </span>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {futurePaymentOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.id}
                className="relative group p-5 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/60 hover:bg-gray-50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 group-hover:text-red-600 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-gray-200/80 text-gray-600 text-[10px] font-bold uppercase tracking-wider">
                      Coming Soon
                    </span>
                  </div>

                  <h4 className="font-bold text-gray-900 text-base mb-1">
                    {opt.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {opt.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-gray-400">
                    {opt.badge}
                  </span>
                  <Lock className="w-3.5 h-3.5 text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Callout */}
        <div className="p-4 rounded-2xl bg-red-50/40 border border-red-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">
                Prefer immediate donation?
              </p>
              <p className="text-xs text-gray-600">
                Direct Bank Transfer to BankIslami is 100% active and processed immediately with zero gateway fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
