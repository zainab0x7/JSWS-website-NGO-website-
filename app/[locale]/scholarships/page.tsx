"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  UserCheck, 
  FileText, 
  Send,
  HeartHandshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BidiLTR } from "@/components/ui/BidiLTR";
import { Link } from "@/i18n/routing";

export default function ScholarshipsPage() {
  const [submitted, setSubmitted] = useState(false);

  const criteria = [
    { title: "Merit & Academic Record", desc: "Minimum 65%+ or equivalent B grade in recent examinations." },
    { title: "Financial Need Verification", desc: "Deserving students from low-income families verified by JSWS team." },
    { title: "Enrolled in Recognized Institution", desc: "School, College, University, or Vocational Technical Training." },
    { title: "Commitment to Community", desc: "Dedication to completing education and helping society." },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-gray-50/70">
      {/* Hero Banner */}
      <section className="relative py-24 bg-sky-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
            alt="Students studying"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-sky-950/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 text-sky-300 text-xs sm:text-sm font-bold border border-sky-500/30">
              <GraduationCap className="w-4 h-4 text-sky-400" />
              <span>Educational Welfare Initiative</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Sultan Ahmed Scholarship Program (SASP)
            </h1>

            <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Empowering bright and deserving students by covering tuition fees, books, exam costs, and educational stipends so no talent is lost due to poverty.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a href="#scholarship-form">
                <Button size="lg" className="rounded-full bg-sky-600 hover:bg-sky-700 text-white px-8 h-13 text-base font-bold shadow-lg shadow-sky-900/30">
                  <FileText className="mr-2 w-4 h-4" />
                  Apply for Scholarship
                </Button>
              </a>
              <Link href="/donate?cause=general">
                <Button size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 hover:bg-white/20 text-white text-base font-semibold backdrop-blur-md">
                  Sponsor a Student
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eligibility & Criteria */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900">
              Scholarship Eligibility Criteria
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Transparent, merit-cum-need based selection process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {criteria.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card className="h-full rounded-3xl p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading text-base font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Application Form */}
      <section id="scholarship-form" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Card className="p-8 sm:p-10 rounded-3xl border-none shadow-xl bg-white space-y-6">
            <div className="text-center space-y-2">
              <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
                Online Application
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">
                SASP Scholarship Form
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Fill out the details below. Our educational committee will review and contact you.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-sky-50 text-sky-900 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-heading text-xl font-bold">Application Submitted Successfully!</h4>
                <p className="text-sm text-gray-600">
                  Thank you for submitting your scholarship request. Our SASP Education Board will verify your documents and contact your family shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">Student Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="e.g. Ali Ahmed" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">Guardian / Father Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="Father or Guardian Name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">Phone Number (WhatsApp)</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="03001234567" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">Educational Level</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600">
                      <option>Matriculation / Secondary School</option>
                      <option>Intermediate / FSc / FA</option>
                      <option>University / Bachelors Degree</option>
                      <option>Vocational / Technical Skills</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">School / College / University Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="Institution Name & City" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">Briefly Explain Your Financial Need</label>
                  <textarea required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="Describe family income and why you need educational scholarship support..." />
                </div>

                <Button type="submit" className="w-full h-13 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-base shadow-md">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Scholarship Application
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
}
