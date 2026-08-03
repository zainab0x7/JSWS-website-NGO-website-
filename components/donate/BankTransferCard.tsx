"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { 
  Building2, 
  Copy, 
  Check, 
  Download, 
  QrCode, 
  Receipt, 
  ShieldCheck, 
  ExternalLink,
  MessageCircle,
  Mail,
  FileCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BidiLTR } from "@/components/ui/BidiLTR";

interface BankTransferCardProps {
  selectedAmount?: number | string;
  selectedCategoryLabel?: string;
}

export function BankTransferCard({ selectedAmount, selectedCategoryLabel }: BankTransferCardProps) {
  const t = useTranslations("DonatePage");
  
  const [copiedIBAN, setCopiedIBAN] = useState(false);
  const [copiedAccountName, setCopiedAccountName] = useState(false);
  const [showQR, setShowQR] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);

  const bankDetails = {
    accountName: "JAMILA SULTAN WELFARE SOCIETY",
    bankName: "BankIslami Pakistan Ltd.",
    iban: "PK62BKIP0103600357930001",
    swift: "BKIPPKKA",
  };

  const handleCopyIBAN = () => {
    navigator.clipboard.writeText(bankDetails.iban);
    setCopiedIBAN(true);
    setTimeout(() => setCopiedIBAN(false), 2500);
  };

  const handleCopyAccountName = () => {
    navigator.clipboard.writeText(bankDetails.accountName);
    setCopiedAccountName(true);
    setTimeout(() => setCopiedAccountName(false), 2500);
  };

  const handleDownloadQR = () => {
    const link = document.createElement("a");
    link.href = "/bankislami-qr.svg";
    link.download = "JSWS_BankIslami_Official_QR.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadDetails = () => {
    setIsDownloading(true);
    const content = `================================================
JAMILA SULTAN WELFARE SOCIETY (JSWS)
OFFICIAL BANK TRANSFER DETAILS
================================================

Account Name : ${bankDetails.accountName}
Bank Name    : ${bankDetails.bankName}
IBAN         : ${bankDetails.iban}
SWIFT Code   : ${bankDetails.swift}

Category     : ${selectedCategoryLabel || "General Healthcare & Welfare"}
${selectedAmount ? `Intended Amount: Rs. ${selectedAmount}` : ''}

------------------------------------------------
Note: After making your donation, you may optionally
share your payment receipt via WhatsApp (+92-300-0000000)
or email (info@jsws.org.pk) so we can acknowledge your
generous contribution.

Thank you for supporting Jamila Sultan Welfare Society.
Website: https://jsws.org.pk
================================================`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `JSWS_Bank_Details_${bankDetails.iban.slice(-4)}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setTimeout(() => setIsDownloading(false), 1200);
  };

  const whatsappMessage = encodeURIComponent(
    `Assalam-o-Alaikum, I have made a donation to Jamila Sultan Welfare Society.\n\nAccount: ${bankDetails.accountName}\nIBAN: ${bankDetails.iban}\nCategory: ${selectedCategoryLabel || "General Donation"}\n${selectedAmount ? `Amount: Rs. ${selectedAmount}\n` : ''}Please find my attached receipt.`
  );

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-gray-900 p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
          <Building2 className="w-56 h-56" />
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-sm mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {t("security_badge") || "Official JSWS Bank Account"}
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              {t("bank_title") || "Direct Bank Transfer"}
            </h3>
            <p className="text-red-100 text-sm sm:text-base mt-1">
              {t("bank_subtitle") || "Official BankIslami Pakistan Ltd. Account"}
            </p>
          </div>
          
          <button
            onClick={() => setShowQR(!showQR)}
            className="self-start sm:self-center flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-4 py-2.5 rounded-2xl text-sm font-semibold backdrop-blur-md border border-white/20 transition-all shadow-sm"
          >
            <QrCode className="w-4 h-4 text-red-200" />
            {showQR ? "Hide QR Code" : "Scan Mobile QR"}
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* QR Code View */}
        <AnimatePresence>
          {showQR && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden bg-red-50/60 rounded-2xl p-6 border border-red-100 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="w-48 sm:w-56 h-auto bg-white p-3 rounded-2xl shadow-md border border-gray-200 shrink-0 text-center space-y-2">
                <img
                  src="/bankislami-qr.svg"
                  alt="BankIslami Official QR Code"
                  className="w-full h-auto rounded-xl shadow-inner"
                />
                <button
                  onClick={handleDownloadQR}
                  className="w-full py-1.5 px-3 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  Save QR Image
                </button>
              </div>
              <div className="space-y-3 text-center md:text-left">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-800 font-bold text-xs rounded-full">
                  Instant Raast & 1LINK QR Payment
                </span>
                <h4 className="font-bold text-gray-900 text-lg sm:text-xl">Scan & Pay via Any Banking App</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Open your mobile banking app (<span className="font-semibold text-gray-800">BankIslami, EasyPaisa, JazzCash, HBL, UBL, Meezan, SadaPay, NayaPay</span>, etc.) and scan this QR code to transfer directly to the official JSWS account.
                </p>
                <div className="text-xs font-semibold text-gray-600 bg-white px-3.5 py-2 rounded-xl border border-gray-200 inline-block shadow-sm">
                  Official IBAN: <BidiLTR className="font-mono font-bold text-red-700">{bankDetails.iban}</BidiLTR>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bank Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Account Name */}
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {t("account_name_label") || "Account Name"}
              </span>
              <p className="mt-1">
                <BidiLTR className="font-bold text-gray-900 text-base sm:text-lg select-all font-mono">
                  {bankDetails.accountName}
                </BidiLTR>
              </p>
            </div>
            <button
              onClick={handleCopyAccountName}
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-2 rounded-xl transition-colors self-start"
            >
              {copiedAccountName ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">{t("account_copied") || "Copied!"}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t("copy_account_name") || "Copy Account Name"}</span>
                </>
              )}
            </button>
          </div>

          {/* Bank Name */}
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              {t("bank_name_label") || "Bank Name"}
            </span>
            <p className="font-bold text-gray-900 text-base sm:text-lg mt-1">
              {bankDetails.bankName}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Official Licensed Islamic Banking Partner
            </p>
          </div>

          {/* IBAN */}
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors flex flex-col justify-between md:col-span-2">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {t("iban_label") || "IBAN Number"}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  VERIFIED IBAN
                </span>
              </div>
              <p className="mt-1">
                <BidiLTR className="font-mono font-bold text-red-600 text-lg sm:text-xl md:text-2xl tracking-wider select-all break-all">
                  {bankDetails.iban}
                </BidiLTR>
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyIBAN}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
              >
                {copiedIBAN ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>{t("iban_copied") || "IBAN Copied!"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{t("copy_iban") || "Copy IBAN"}</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadDetails}
                disabled={isDownloading}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-100 border border-gray-300 px-4 py-2.5 rounded-xl transition-all shadow-sm"
              >
                {isDownloading ? (
                  <>
                    <FileCheck className="w-4 h-4 text-emerald-600 animate-bounce" />
                    <span>Preparing Download...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-gray-500" />
                    <span>{t("download_details") || "Download Bank Details"}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* SWIFT Code */}
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors md:col-span-2 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {t("swift_label") || "SWIFT Code"} (For Overseas Donations)
              </span>
              <p className="mt-0.5">
                <BidiLTR className="font-mono font-bold text-gray-900 text-base sm:text-lg">
                  {bankDetails.swift}
                </BidiLTR>
              </p>
            </div>
            <span className="text-xs text-gray-400 font-mono">International Transfer</span>
          </div>
        </div>

        {/* Receipt Sharing Note Section */}
        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-amber-900 space-y-3">
          <div className="flex items-start gap-3">
            <Receipt className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h5 className="font-bold text-sm text-amber-950">Optionally Share Your Receipt</h5>
              <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                {t("receipt_note") || "After making your donation, you may optionally share your payment receipt so we can acknowledge your generous contribution."}
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/923000000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{t("share_receipt_whatsapp") || "Share Receipt on WhatsApp"}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href={`mailto:info@jsws.org.pk?subject=Donation%20Receipt%20-${encodeURIComponent(selectedCategoryLabel || 'JSWS')}&body=Dear%20JSWS%20Team,%0A%0AI%20have%20transferred%20my%20donation.%20Please%20find%20details%20below.`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-amber-100/50 text-amber-900 border border-amber-300 text-xs sm:text-sm font-semibold transition-colors"
            >
              <Mail className="w-4 h-4 text-amber-700" />
              <span>{t("share_receipt_email") || "Email Receipt"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
