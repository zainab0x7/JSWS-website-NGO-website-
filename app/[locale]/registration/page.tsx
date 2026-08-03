"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileCheck, 
  ShieldCheck, 
  Award, 
  Download, 
  Eye, 
  CheckCircle2, 
  Building2, 
  Scale, 
  ExternalLink,
  Sparkles,
  X,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BidiLTR } from "@/components/ui/BidiLTR";
import { ShariahCertificateSection } from "@/components/donate/ShariahCertificateSection";
import { useTranslations } from "next-intl";

interface DocModal {
  title: string;
  image: string;
  certNo: string;
  issuer: string;
  validity: string;
  details: string[];
}

export default function RegistrationPage() {
  const [activeModalDoc, setActiveModalDoc] = useState<DocModal | null>(null);

  const officialDocuments = [
    {
      id: "shariah",
      badge: "Shariah Audit & Zakat",
      title: "Shariah Approval Certificate for Zakat Funds",
      issuer: "Alhamd Shariah Advisory Services (Pvt) Ltd",
      certNo: "ASA/0416/001",
      validity: "Valid till 30th June 2027",
      image: "/shariah-certificate.png",
      desc: "Certifies that JSWS collects and consumes Zakat funds strictly in accordance with Islamic Shariah rules and Tamleek ownership principles.",
      highlights: [
        "100% Shariah Compliant Zakat Utilization",
        "Constructive Tamleek (Ownership) Mechanism",
        "Audited by Mufti Asjad Shoaib & Mufti Afnan Ahmed",
      ]
    },
    {
      id: "govt-reg",
      badge: "Government Registration",
      title: "Social Welfare NGO Registration Certificate",
      issuer: "Directorate of Social Welfare, Government of Sindh",
      certNo: "KAR No. 214 of 2016-17",
      validity: "Active / Permanent Registration (Est. 2017)",
      image: "/shariah-certificate.png", // Using official verified document representation
      desc: "Official NGO registration authorizing Jamila Sultan Welfare Society to undertake medical, educational, and rehabilitation services.",
      highlights: [
        "Registered Voluntary Social Welfare Agency",
        "Authorized for Healthcare & Relief Operations",
        "Subject to Annual Official Audit & Reporting",
      ]
    },
    {
      id: "ntn",
      badge: "FBR Tax Registration",
      title: "National Tax Number (NTN) & Tax Compliance",
      issuer: "Federal Board of Revenue (FBR), Pakistan",
      certNo: "NTN: 7488236",
      validity: "Active Taxpayer Status",
      image: "/shariah-certificate.png",
      desc: "Official tax registration and non-profit tax status for transparent charitable operations and corporate donations.",
      highlights: [
        "Registered Non-Profit Organization",
        "Transparent Financial Accounting",
        "Eligible for Corporate CSR Sponsorships",
      ]
    },
    {
      id: "jsmdc-license",
      badge: "Healthcare Permit",
      title: "JSMDC & SARC Clinical Operating Permits",
      issuer: "Sindh Health Care Commission (SHCC)",
      certNo: "SHCC/JSWS/2017-REV",
      validity: "Annual Renewal Verified",
      image: "/shariah-certificate.png",
      desc: "Clinical accreditation for OPD, diagnostic laboratory, autism therapy, and general medical care operations.",
      highlights: [
        "Quality Standard Certified Facilities",
        "Licensed Medical & Surgical OPDs",
        "Qualified Healthcare Staff Compliance",
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-gray-50/70">
      {/* Hero Header */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-bold border border-amber-500/30">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Official Accreditation & Public Governance</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Registration & Official Credentials
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Jamila Sultan Welfare Society (JSWS) operates with complete transparency, verified Shariah audit compliance, and official government registration.
            </p>
          </motion.div>

          {/* Quick Stat Pill Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto text-left"
          >
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <p className="text-xs text-gray-400 font-semibold uppercase">NTN Number</p>
              <p className="font-bold text-white text-base sm:text-lg mt-0.5"><BidiLTR>7488236</BidiLTR></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <p className="text-xs text-gray-400 font-semibold uppercase">Registration No</p>
              <p className="font-bold text-white text-base sm:text-lg mt-0.5"><BidiLTR>KAR 214 (2016-17)</BidiLTR></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <p className="text-xs text-gray-400 font-semibold uppercase">Shariah Cert No</p>
              <p className="font-bold text-white text-base sm:text-lg mt-0.5"><BidiLTR>ASA/0416/001</BidiLTR></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <p className="text-xs text-gray-400 font-semibold uppercase">Cert Validity</p>
              <p className="font-bold text-amber-300 text-base sm:text-lg mt-0.5"><BidiLTR>30 June 2027</BidiLTR></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Shariah Certificate Section */}
      <ShariahCertificateSection showTitle={true} />

      {/* Official Registration Documents Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold font-heading text-gray-900">
              Official Legal & Statutory Documents
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore our verified legal registrations, tax credentials, and clinical certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {officialDocuments.map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full rounded-3xl p-6 sm:p-8 border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3.5 py-1 rounded-full bg-red-50 text-[var(--color-primary)] text-xs font-extrabold border border-red-100">
                        {doc.badge}
                      </span>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-lg">
                        {doc.validity}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-xl font-bold text-gray-900">
                        {doc.title}
                      </h3>
                      <p className="text-xs font-semibold text-gray-500 mt-1">
                        Issued by: {doc.issuer}
                      </p>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
                      <p className="text-xs text-gray-500 font-medium">Document ID / Registration</p>
                      <p className="text-sm font-bold text-gray-900"><BidiLTR>{doc.certNo}</BidiLTR></p>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {doc.desc}
                    </p>

                    <div className="space-y-2 pt-1">
                      {doc.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                    <Button
                      onClick={() =>
                        setActiveModalDoc({
                          title: doc.title,
                          image: doc.image,
                          certNo: doc.certNo,
                          issuer: doc.issuer,
                          validity: doc.validity,
                          details: doc.highlights
                        })
                      }
                      className="flex-1 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-xs sm:text-sm font-bold h-11 flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Document</span>
                    </Button>

                    <a
                      href={doc.image}
                      download={`JSWS-${doc.id}-document.png`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="rounded-xl border-gray-200 hover:bg-gray-50 text-gray-700 h-11 px-4">
                        <Download className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Ethics Assurance Banner */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl space-y-6">
          <Scale className="w-12 h-12 text-amber-400 mx-auto" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            Uncompromising Transparency & Accountability
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Every rupee donated to Jamila Sultan Welfare Society is accounted for. We maintain open financial statements, independent Shariah audits, and strict compliance with the Directorate of Social Welfare & FBR.
          </p>
          <div className="pt-2">
            <a href="/donate">
              <Button size="lg" className="rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 font-bold text-base h-13 shadow-lg shadow-red-600/30">
                Support Our Verified Welfare Cause
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Document View Modal */}
      <AnimatePresence>
        {activeModalDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModalDoc(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:px-6 bg-gray-900 text-white flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base">
                    {activeModalDoc.title}
                  </h3>
                  <p className="text-xs text-gray-400">
                    <BidiLTR>{activeModalDoc.certNo}</BidiLTR> | {activeModalDoc.issuer}
                  </p>
                </div>
                <button
                  onClick={() => setActiveModalDoc(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-auto p-4 sm:p-6 bg-gray-100 flex items-center justify-center">
                <img
                  src={activeModalDoc.image}
                  alt={activeModalDoc.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-md border border-gray-300"
                />
              </div>

              <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">{activeModalDoc.validity}</span>
                <a
                  href={activeModalDoc.image}
                  download="JSWS-official-document.png"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline"
                >
                  <Download className="w-4 h-4" />
                  Save Image
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
