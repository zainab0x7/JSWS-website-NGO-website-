"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  HeartHandshake,
  AlertCircle,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BidiLTR } from "@/components/ui/BidiLTR";
import { Link } from "@/i18n/routing";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export default function ScholarshipsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    studentCnic: "",
    guardianCnic: "",
    age: "",
    gender: "",
    studentNumber: "",
    phone: "",
    guardianPhone: "",
    address: "",
    educationLevel: "",
    institutionName: "",
    financialNeed: ""
  });

  const [lastSubmittedData, setLastSubmittedData] = useState<typeof formData | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [applicationId, setApplicationId] = useState<string | null>(null);

  const criteria = [
    { title: "Merit & Academic Record", desc: "Minimum 65%+ or equivalent B grade in recent examinations." },
    { title: "Financial Need Verification", desc: "Deserving students from low-income families verified by JSWS team." },
    { title: "Enrolled in Recognized Institution", desc: "School, College, University, or Vocational Technical Training." },
    { title: "Commitment to Community", desc: "Dedication to completing education and helping society." },
  ];

  const formatCNIC = (val: string) => {
    const digitsOnly = val.replace(/\D/g, "").slice(0, 13);
    if (digitsOnly.length <= 5) return digitsOnly;
    if (digitsOnly.length <= 12) return `${digitsOnly.slice(0, 5)}-${digitsOnly.slice(5)}`;
    return `${digitsOnly.slice(0, 5)}-${digitsOnly.slice(5, 12)}-${digitsOnly.slice(12)}`;
  };

  const validatePakCnic = (cnic: string) => {
    if (!cnic) return false;
    const cleaned = cnic.replace(/\D/g, "");
    return cleaned.length === 13;
  };

  const validatePakPhone = (phone: string) => {
    if (!phone) return false;
    const cleaned = phone.replace(/[\s\-()]/g, "");
    return /^(?:\+?92|0092|0)?3\d{9}$/.test(cleaned);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let finalValue = value;
    if (name === "studentCnic" || name === "cnic" || name === "guardianCnic") {
      finalValue = formatCNIC(value);
    }
    setFormData((prev) => ({ ...prev, [name]: finalValue }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        if (name === "studentCnic") delete updated.cnic;
        if (name === "cnic") delete updated.studentCnic;
        return updated;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Student Full Name is required.";
    }
    if (!formData.fatherName.trim()) {
      newErrors.fatherName = "Guardian / Father Name is required.";
    }
    const studentCnicVal = formData.studentCnic || (formData as any).cnic || "";
    if (!studentCnicVal.trim() || !validatePakCnic(studentCnicVal)) {
      newErrors.studentCnic = "Valid 13-digit Student CNIC or B-Form is required (e.g. 35202-1234567-1).";
    }
    if (!formData.guardianCnic.trim() || !validatePakCnic(formData.guardianCnic)) {
      newErrors.guardianCnic = "Valid 13-digit Parent / Guardian CNIC is required (e.g. 35202-1234567-1).";
    }
    const numAge = Number(formData.age);
    if (!formData.age || isNaN(numAge) || numAge <= 0 || numAge > 120) {
      newErrors.age = "Please enter a valid age (1-120).";
    }
    if (!formData.gender) {
      newErrors.gender = "Please select gender.";
    }
    if (!formData.studentNumber.trim()) {
      newErrors.studentNumber = "Student / Registration Number is required.";
    }
    if (!formData.phone.trim() || !validatePakPhone(formData.phone)) {
      newErrors.phone = "Valid Pakistani phone number required (e.g. 03001234567).";
    }
    if (!formData.guardianPhone.trim() || !validatePakPhone(formData.guardianPhone)) {
      newErrors.guardianPhone = "Valid Pakistani guardian phone number required (e.g. 03001234567).";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Complete residential address is required.";
    }
    if (!formData.educationLevel) {
      newErrors.educationLevel = "Please select educational level.";
    }
    if (!formData.institutionName.trim()) {
      newErrors.institutionName = "School / College / University Name is required.";
    }
    if (!formData.financialNeed.trim()) {
      newErrors.financialNeed = "Please briefly explain your financial need.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const studentCnicVal = formData.studentCnic || (formData as any).cnic || "";
      const res = await fetch("/api/scholarship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          studentCnic: studentCnicVal,
          age: Number(formData.age)
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setLastSubmittedData({ ...formData });
        setSubmitted(true);
        if (data.applicationId) {
          setApplicationId(data.applicationId);
        }
      } else {
        if (data.details) {
          setErrors(data.details);
        }
        setSubmissionError(data.error || "Failed to submit application. Please check form errors.");
      }
    } catch {
      setSubmissionError("Network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppUrl = () => {
    const rawNumber = process.env.NEXT_PUBLIC_MASP_WHATSAPP_NUMBER || "923072021882";
    const cleanNumber = rawNumber.replace(/\D/g, "");
    
    const data = lastSubmittedData || formData;
    const studentCnicVal = data.studentCnic || (data as any).cnic || "";

    const text = `New MASP Scholarship Application Received
Student Name: ${data.fullName}
Father/Guardian Name: ${data.fatherName}
Student CNIC/B-Form: ${studentCnicVal}
Parent/Guardian CNIC: ${data.guardianCnic}
Student Number: ${data.studentNumber}
Phone: ${data.phone}
Guardian Contact: ${data.guardianPhone}
Age: ${data.age}
Address: ${data.address}
Please review the application in the MASP Scholarship Google Sheet.`;

    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50/70">
      {/* Hero Banner */}
      <section className="relative py-24 bg-sky-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop"
            alt="Students studying"
            width={1600}
            height={900}
            priority
            sizes="100vw"
            quality={80}
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
              Muhammad Aslam Scholarship Program (MASP)
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
                MASP Scholarship Form
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Fill out the details below. Our educational committee will review and contact you.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-sky-50 text-sky-900 rounded-3xl text-center space-y-6 border border-sky-100 shadow-sm">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">
                    Application Submitted Successfully
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
                    Your scholarship application has been submitted successfully.
                  </p>
                  {applicationId && (
                    <div className="pt-1">
                      <span className="text-xs font-mono font-bold bg-sky-100 text-sky-800 py-1.5 px-4 rounded-full inline-block border border-sky-200">
                        Application Ref ID: <BidiLTR>{applicationId}</BidiLTR>
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 h-13 text-base shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                      <WhatsAppIcon className="w-5 h-5 fill-current" />
                      Notify Admin on WhatsApp
                    </Button>
                  </a>

                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setLastSubmittedData(null);
                      setFormData({
                        fullName: "",
                        fatherName: "",
                        studentCnic: "",
                        guardianCnic: "",
                        age: "",
                        gender: "",
                        studentNumber: "",
                        phone: "",
                        guardianPhone: "",
                        address: "",
                        educationLevel: "",
                        institutionName: "",
                        financialNeed: ""
                      });
                      setErrors({});
                    }}
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-xl border-sky-600 text-sky-700 hover:bg-sky-50 px-6 h-13 text-base font-semibold"
                  >
                    Submit Another Application
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {submissionError && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <span>{submissionError}</span>
                  </div>
                )}

                {/* Basic Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">
                      Student Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50'} text-sm focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-900`}
                      placeholder="e.g. Ali Ahmed"
                    />
                    {errors.fullName && <p className="text-xs text-red-500 font-medium">{errors.fullName}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">
                      Guardian / Father Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.fatherName ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50'} text-sm focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-900`}
                      placeholder="Father or Guardian Name"
                    />
                    {errors.fatherName && <p className="text-xs text-red-500 font-medium">{errors.fatherName}</p>}
                  </div>
                </div>

                {/* Student & Guardian CNIC / B-Form */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">
                      Student CNIC or B-Form No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="studentCnic"
                      value={formData.studentCnic}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      maxLength={15}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.studentCnic || errors.cnic ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50'} text-sm focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-900`}
                      placeholder="35202-1234567-1"
                    />
                    {(errors.studentCnic || errors.cnic) && <p className="text-xs text-red-500 font-medium">{errors.studentCnic || errors.cnic}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">
                      Parent / Guardian CNIC No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="guardianCnic"
                      value={formData.guardianCnic}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      maxLength={15}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.guardianCnic ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50'} text-sm focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-900`}
                      placeholder="35202-1234567-1"
                    />
                    {errors.guardianCnic && <p className="text-xs text-red-500 font-medium">{errors.guardianCnic}</p>}
                  </div>
                </div>

                {/* Age & Gender */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">
                      Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="number"
                      name="age"
                      min="1"
                      max="120"
                      value={formData.age}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.age ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50'} text-sm focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-900`}
                      placeholder="Enter your age"
                    />
                    {errors.age && <p className="text-xs text-red-500 font-medium">{errors.age}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <label className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border ${errors.gender ? 'border-red-400 bg-red-50/20' : 'border-gray-200 bg-gray-50'} hover:bg-sky-50/50 has-[:checked]:border-sky-600 has-[:checked]:bg-sky-50 has-[:checked]:text-sky-700 font-semibold text-sm cursor-pointer transition-all`}>
                        <input
                          required
                          type="radio"
                          name="gender"
                          value="Male"
                          checked={formData.gender === "Male"}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="accent-sky-600 w-4 h-4"
                        />
                        <span>Male</span>
                      </label>
                      <label className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border ${errors.gender ? 'border-red-400 bg-red-50/20' : 'border-gray-200 bg-gray-50'} hover:bg-sky-50/50 has-[:checked]:border-sky-600 has-[:checked]:bg-sky-50 has-[:checked]:text-sky-700 font-semibold text-sm cursor-pointer transition-all`}>
                        <input
                          required
                          type="radio"
                          name="gender"
                          value="Female"
                          checked={formData.gender === "Female"}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="accent-sky-600 w-4 h-4"
                        />
                        <span>Female</span>
                      </label>
                    </div>
                    {errors.gender && <p className="text-xs text-red-500 font-medium">{errors.gender}</p>}
                  </div>
                </div>

                {/* Student Number & WhatsApp Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">
                      Student Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="studentNumber"
                      value={formData.studentNumber}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.studentNumber ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50'} text-sm focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-900`}
                      placeholder="Enter student/registration number"
                    />
                    {errors.studentNumber && <p className="text-xs text-red-500 font-medium">{errors.studentNumber}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">
                      Phone Number (WhatsApp) <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50'} text-sm focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-900`}
                      placeholder="03001234567"
                    />
                    {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                {/* Guardian Contact Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">
                    Student Guardian Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    name="guardianPhone"
                    value={formData.guardianPhone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.guardianPhone ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50'} text-sm focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-900`}
                    placeholder="Enter guardian's contact number"
                  />
                  {errors.guardianPhone && <p className="text-xs text-red-500 font-medium">{errors.guardianPhone}</p>}
                </div>

                {/* Residential Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.address ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50'} text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-900`}
                    placeholder="Enter your complete residential address"
                  />
                  {errors.address && <p className="text-xs text-red-500 font-medium">{errors.address}</p>}
                </div>

                {/* Educational Level & Institution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">
                      Educational Level <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.educationLevel ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50'} text-sm focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-900`}
                    >
                      <option value="">Select Educational Level</option>
                      <option value="Matriculation / Secondary School">Matriculation / Secondary School</option>
                      <option value="Intermediate / FSc / FA">Intermediate / FSc / FA</option>
                      <option value="University / Bachelors Degree">University / Bachelors Degree</option>
                      <option value="Vocational / Technical Skills">Vocational / Technical Skills</option>
                    </select>
                    {errors.educationLevel && <p className="text-xs text-red-500 font-medium">{errors.educationLevel}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">
                      School / College / University Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="institutionName"
                      value={formData.institutionName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.institutionName ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50'} text-sm focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-900`}
                      placeholder="Institution Name & City"
                    />
                    {errors.institutionName && <p className="text-xs text-red-500 font-medium">{errors.institutionName}</p>}
                  </div>
                </div>

                {/* Financial Need Explanation */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">
                    Briefly Explain Your Financial Need <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    name="financialNeed"
                    value={formData.financialNeed}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.financialNeed ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50'} text-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-900`}
                    placeholder="Describe family income and why you need educational scholarship support..."
                  />
                  {errors.financialNeed && <p className="text-xs text-red-500 font-medium">{errors.financialNeed}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-13 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-base shadow-md disabled:opacity-70 flex items-center justify-center cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Scholarship Application
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
}
