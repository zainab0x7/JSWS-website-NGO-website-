"use client";

import React from "react";
import { ShieldCheck, Lock, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BidiLTR } from "@/components/ui/BidiLTR";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-gray-50/70">
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl space-y-4">
          <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto" />
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 text-sm sm:text-base">
            Jamila Sultan Welfare Society (JSWS) is committed to protecting the privacy and personal data of our donors, patients, and website visitors.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Card className="p-8 sm:p-12 rounded-3xl border border-gray-200 bg-white shadow-lg space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">1. Data Collection & Purpose</h2>
              <p>
                We collect personal information such as name, contact details, email address, and transaction references strictly for processing donations, scheduling medical appointments, issuing official donation receipts, and providing updates on our welfare initiatives.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">2. Confidentiality & Security</h2>
              <p>
                All donor and patient medical records are kept strictly confidential. JSWS does not sell, rent, trade, or share your personal information with third parties without your explicit consent, except as required by law or official tax regulations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">3. Financial & Zakat Transparency</h2>
              <p>
                Donation records and Zakat disbursement audits are maintained under strict Shariah and statutory guidelines. All financial data is encrypted and handled by authorized personnel only.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">4. Contact Information</h2>
              <p>
                If you have questions or concerns regarding our privacy practices, please contact us at:
                <br />
                Email: <BidiLTR className="font-bold text-gray-900">jswswelfare@gmail.com</BidiLTR>
                <br />
                Helpline: <BidiLTR className="font-bold text-gray-900">+92 307 2021882</BidiLTR>
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
