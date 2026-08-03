"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, CheckCircle2, FileText, Download, Eye, ExternalLink, X, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BidiLTR } from "@/components/ui/BidiLTR";

interface ShariahCertificateProps {
  showTitle?: boolean;
}

export function ShariahCertificateSection({ showTitle = true }: ShariahCertificateProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50/40 via-white to-gray-50 border-y border-amber-100/60 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold border border-amber-200">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>100% Shariah Compliant & Certified Zakat Utilization</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Official Shariah Approval Certificate
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Certified by <strong className="text-gray-900">Alhamd Shariah Advisory Services (Pvt) Limited</strong> for Jamila Sultan Welfare Society (JSWS).
            </p>
          </div>
        )}

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Certificate Image Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white ring-1 ring-amber-200/60 hover:shadow-amber-500/10 transition-all duration-300">
              <img
                src="/shariah-certificate.png"
                alt="Shariah Approval Certificate for Zakat Funds of JSWS"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                onClick={() => setIsPreviewOpen(true)}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <Button
                  onClick={() => setIsPreviewOpen(true)}
                  className="rounded-full bg-white text-gray-900 hover:bg-amber-50 font-bold px-6 py-2.5 shadow-lg flex items-center gap-2"
                >
                  <Eye className="w-4 h-4 text-amber-700" />
                  <span>View Full Certificate</span>
                </Button>
              </div>

              <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Verified Shariah Certificate</span>
              </div>
            </div>
          </motion.div>

          {/* Right Details & Compliance Specs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <Card className="p-6 sm:p-8 rounded-3xl border border-amber-100 bg-white shadow-xl space-y-6">
              <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-5">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900">
                    Alhamd Shariah Advisory Services (Pvt) Ltd
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Independent Shariah Consultant & Zakat Audit Authority
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg inline-block">
                    Valid till 30th June 2027
                  </span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-100">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Certificate No</p>
                  <p className="font-bold text-gray-900 mt-0.5"><BidiLTR>ASA/0416/001</BidiLTR></p>
                </div>
                <div className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-100">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">National Tax Number (NTN)</p>
                  <p className="font-bold text-gray-900 mt-0.5"><BidiLTR>7488236</BidiLTR></p>
                </div>
                <div className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-100">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Govt Registration No</p>
                  <p className="font-bold text-gray-900 mt-0.5"><BidiLTR>KAR No. 214 of 2016-17</BidiLTR></p>
                </div>
                <div className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-100">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Establishment Year</p>
                  <p className="font-bold text-gray-900 mt-0.5"><BidiLTR>2017</BidiLTR></p>
                </div>
              </div>

              {/* Shariah Ruling Text summary */}
              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Key Shariah & Tamleek Safeguards:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span><strong>Constructive Tamleek (Ownership)</strong>: JSWS collects Zakat on behalf of eligible beneficiaries and directly funds their medical treatment & medicines.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span><strong>Independent Audit</strong>: Reviewed by Mufti Asjad Shoaib & Mufti Afnan Ahmed ensuring strict adherence to Islamic principles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span><strong>100% Zakat Compliance Guarantee</strong>: Whosoever gives Zakat to JSWS, his/her Zakat will be fully paid as per Shariah rules.</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4 border-t border-gray-100">
                <Button
                  onClick={() => setIsPreviewOpen(true)}
                  className="rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 h-11 flex items-center gap-2 shadow-md shadow-amber-600/20"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview Certificate</span>
                </Button>
                <a
                  href="/shariah-certificate.png"
                  download="JSWS-Shariah-Approval-Certificate.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="rounded-xl border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold h-11 flex items-center gap-2">
                    <Download className="w-4 h-4 text-amber-700" />
                    <span>Download Image</span>
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Lightbox / Modal for Full Certificate View */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:px-6 sm:py-4 bg-gray-900 text-white flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <h3 className="font-heading font-bold text-sm sm:text-base">
                    Shariah Approval Certificate - Alhamd Shariah Advisory Services
                  </h3>
                </div>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Certificate Image */}
              <div className="overflow-auto p-4 sm:p-6 bg-gray-100 flex items-center justify-center">
                <img
                  src="/shariah-certificate.png"
                  alt="Shariah Certificate Full Document"
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-md border border-gray-300"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-gray-600">
                <p><strong>Certificate No:</strong> ASA/0416/001 | Valid till 30th June 2027</p>
                <a
                  href="/shariah-certificate.png"
                  download="JSWS-Shariah-Approval-Certificate.png"
                  className="inline-flex items-center gap-1.5 font-bold text-amber-700 hover:text-amber-800"
                >
                  <Download className="w-4 h-4" />
                  Save Certificate
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
