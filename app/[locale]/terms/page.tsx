"use client";

import React from "react";
import { FileText, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BidiLTR } from "@/components/ui/BidiLTR";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-gray-50/70">
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl space-y-4">
          <Scale className="w-12 h-12 text-amber-400 mx-auto" />
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">Terms of Service</h1>
          <p className="text-gray-300 text-sm sm:text-base">
            Terms and conditions governing the use of Jamila Sultan Welfare Society website, services, and donation platforms.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Card className="p-8 sm:p-12 rounded-3xl border border-gray-200 bg-white shadow-lg space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">1. Organization Governance</h2>
              <p>
                Jamila Sultan Welfare Society (JSWS) is a registered non-profit organization under Government of Sindh Registration No: KAR No. 214 of 2016-17 and NTN: 7488236. All contributions support charitable medical, educational, and welfare projects.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">2. Donation Policy & Zakat Allocation</h2>
              <p>
                Donation contributions made as Zakat are designated exclusively for Shariah-eligible deserving beneficiaries via constructive Tamleek under Alhamd Shariah Advisory Services Certificate No: ASA/0416/001. General donations and Sadqah fund operational overheads, hospital supplies, and equipment.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">3. Medical & Clinical Services Disclaimer</h2>
              <p>
                Medical information provided on this site is for educational and appointment scheduling purposes. Diagnosis and prescription are carried out strictly in person by qualified medical professionals at JSMDC or SARC clinics.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">4. Amendments & Policy Updates</h2>
              <p>
                JSWS reserves the right to update these terms to reflect legal or operational changes. Continued use of the website signifies acceptance of revised policies.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
