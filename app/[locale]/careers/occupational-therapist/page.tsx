"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BidiLTR } from "@/components/ui/BidiLTR";
import { 
  Building2, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2, 
  ChevronLeft, 
  Send, 
  Loader2, 
  AlertCircle, 
  Maximize2, 
  X,
  ShieldCheck,
  Clock,
  Sparkles
} from "lucide-react";

export default function OccupationalTherapistJobPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPosterLightboxOpen, setIsPosterLightboxOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "Occupational Therapist",
    qualification: "",
    experience: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required.";
    if (!formData.phone.trim()) errors.phone = "Phone number is required.";
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errors.message = "Cover letter / note is required.";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validate()) return;

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT || "/api/contact";

    setStatus("loading");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          subject: `Job Application: ${formData.position} - ${formData.name}`,
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "Occupational Therapist",
          qualification: "",
          experience: "",
          message: "",
        });
        setFieldErrors({});
      } else {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setErrorMessage(
          data?.errors?.[0]?.message || data?.error || "Submission failed. Please try again or email jswswelfare@gmail.com"
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-20 sm:pt-24 bg-white text-gray-900">
      {/* Header Breadcrumb */}
      <div className="bg-[var(--color-gray-light)] border-b border-gray-200/80 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-600 hover:text-[var(--color-primary)] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Careers & Openings</span>
          </Link>
        </div>
      </div>

      {/* Main Job Container */}
      <div className="py-10 sm:py-14 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Job Header Card */}
          <Card className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8 mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-50 text-[var(--color-primary)] border border-red-100">
                    We Are Hiring
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    SARC Healthcare & Rehab
                  </span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-black)]">
                  Occupational Therapist
                </h1>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-600 font-medium">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                    <span>Jamila Sultan Welfare Society (JSWS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                    <span>Sultan Ahmed Rehabilitation Centre (SARC)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                    <span>Karachi, Pakistan</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="rounded-full px-8 py-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-base font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Apply Now</span>
                </Button>
              </div>
            </div>
          </Card>

          {/* 2-Column Layout for Desktop/Tablet */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Job Details Content (8 cols) */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-10">
              
              {/* Job Overview */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-gray-200">
                  <Briefcase className="w-5 h-5 text-[var(--color-primary)]" />
                  <h2 className="font-heading text-2xl font-bold text-[var(--color-black)]">
                    Job Overview
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Sultan Ahmed Rehabilitation Centre (SARC), an initiative of Jamila Sultan Welfare Society (JSWS), is seeking a dedicated and qualified <strong className="text-gray-900">Occupational Therapist</strong> to join our clinical rehabilitation team in Karachi.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  The selected professional will design and execute customized therapeutic plans for patients, aiding their recovery from neurological, orthopedic, or developmental conditions, enabling independence and improving quality of life.
                </p>
              </div>

              {/* Qualifications */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-gray-200">
                  <GraduationCap className="w-5 h-5 text-[var(--color-primary)]" />
                  <h2 className="font-heading text-2xl font-bold text-[var(--color-black)]">
                    Qualifications
                  </h2>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Bachelor&apos;s or Master&apos;s degree in Occupational Therapy from a recognized university or institution.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Additional certifications in specialized subfields such as Neurorehabilitation, Pediatric Occupational Therapy, Hand Therapy, Sensory Integration, or Ergonomics are an advantage.</span>
                  </li>
                </ul>
              </div>

              {/* Experience & Skills */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-gray-200">
                  <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                  <h2 className="font-heading text-2xl font-bold text-[var(--color-black)]">
                    Experience & Skills
                  </h2>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>3 to 5 years of professional clinical experience in a hospital, physical rehabilitation center, or therapeutic setting.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Proven expertise in evaluating and treating patients recovering from neurological disorders, orthopedic conditions, or developmental delays.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Strong interpersonal communication, patient empathy, and collaborative teamwork skills.</span>
                  </li>
                </ul>
              </div>

              {/* Preferred Experience */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-gray-200">
                  <Award className="w-5 h-5 text-[var(--color-primary)]" />
                  <h2 className="font-heading text-2xl font-bold text-[var(--color-black)]">
                    Preferred Experience
                  </h2>
                </div>
                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100 flex items-start gap-3 text-sm sm:text-base text-gray-800">
                  <ShieldCheck className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Hospital Accreditation Preference</p>
                    <p className="text-gray-700 mt-0.5 text-xs sm:text-sm">
                      Prior clinical experience in JCI-accredited & ISO-certified hospitals or healthcare centers will be given preference.
                    </p>
                  </div>
                </div>
              </div>

              {/* How to Apply Section */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-gray-200">
                  <Send className="w-5 h-5 text-[var(--color-primary)]" />
                  <h2 className="font-heading text-2xl font-bold text-[var(--color-black)]">
                    How to Apply
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Interested candidates who meet the specified criteria are invited to submit their updated resume / CV along with cover letter via email or contact our administration directly.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    size="lg"
                    className="rounded-full px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold"
                  >
                    Submit Application Form
                  </Button>
                  <a
                    href="mailto:jswswelfare@gmail.com?subject=Application%20for%20Occupational%20Therapist"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email CV Directly
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Recruitment Poster Image Display (5 cols / 4 cols) */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-6">
              <Card className="bg-white p-4 rounded-3xl border border-gray-200 shadow-md">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-primary)]">
                    Official Recruitment Poster
                  </h3>
                  <button
                    onClick={() => setIsPosterLightboxOpen(true)}
                    className="text-xs text-gray-500 hover:text-[var(--color-primary)] flex items-center gap-1 font-semibold transition-colors"
                    title="Expand recruitment poster"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </button>
                </div>

                {/* Poster Display */}
                <div 
                  onClick={() => setIsPosterLightboxOpen(true)}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group bg-gray-100 border border-gray-200 aspect-[3/4]"
                >
                  <Image
                    src="/ot-hiring-poster.jpg"
                    alt="JSWS Occupational Therapist Recruitment Poster"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 30vw"
                    quality={90}
                    className="object-contain group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md transition-opacity flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5" />
                      View Full Size
                    </span>
                  </div>
                </div>

                <p className="text-xs text-center text-gray-500 mt-3">
                  Click poster to view full resolution hiring announcement.
                </p>
              </Card>
            </div>

          </div>

          {/* 5. APPLICATION / CONTACT CTA SECTION */}
          <section className="mt-16 pt-12 border-t border-gray-200">
            <Card className="bg-[var(--color-gray-light)] rounded-3xl border border-gray-200/80 p-8 sm:p-10 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left side info (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                    Direct Contact & Submission
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-black)]">
                    Interested in Joining Our Team?
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    If you meet the requirements and are interested in becoming part of JSWS, please contact our team or submit your application through the available contact details.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm text-gray-700">
                    <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-gray-200/80">
                      <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-gray-900 block">Phone Helplines</span>
                        <BidiLTR className="block text-gray-600 font-medium">+92 307 2021882</BidiLTR>
                        <BidiLTR className="block text-gray-600 font-medium">+92 336 3398787</BidiLTR>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-gray-200/80">
                      <Mail className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-gray-900 block">Email Address</span>
                        <BidiLTR className="block text-gray-600 font-medium">jswswelfare@gmail.com</BidiLTR>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-gray-200/80">
                      <Globe className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-gray-900 block">Careers Portal</span>
                        <span className="block text-gray-600 font-medium">www.jsws.org.pk/careers</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-gray-200/80">
                      <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-gray-900 block">Headquarters Address</span>
                        <span className="block text-gray-600 text-xs">P-66 - 15 A, Sector 31A, Allah Wala Town Korangi, Karachi, 74900, Pakistan</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side CTA Button (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
                  <div className="p-4 rounded-full bg-red-50 text-[var(--color-primary)] mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                    Ready to Apply?
                  </h3>
                  <p className="text-xs text-gray-500 mb-6">
                    Submit your application details online directly to our HR team.
                  </p>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    size="lg"
                    className="w-full rounded-full py-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-base font-bold shadow-md"
                  >
                    Apply Now
                  </Button>
                </div>

              </div>
            </Card>
          </section>

        </div>
      </div>

      {/* Lightbox Modal for Recruitment Poster Image */}
      <AnimatePresence>
        {isPosterLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center"
            onClick={() => setIsPosterLightboxOpen(false)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
              <button
                onClick={() => setIsPosterLightboxOpen(false)}
                className="absolute -top-10 right-0 text-white bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div 
                className="relative w-full h-[80vh] max-h-[85vh] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src="/ot-hiring-poster.jpg"
                  alt="JSWS Occupational Therapist Recruitment Poster Full View"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Application Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl relative my-8"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                  JSWS Job Application
                </span>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mt-1">
                  Apply for Occupational Therapist
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Please complete the form below to submit your candidacy.
                </p>
              </div>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3 text-green-800">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-900">Application Submitted!</h4>
                    <p className="text-xs text-green-700 mt-1">
                      Thank you for applying to JSWS. Our recruitment team will review your application and contact you soon.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900">Submission Error</h4>
                    <p className="text-xs text-red-700 mt-1">
                      {errorMessage}
                    </p>
                  </div>
                </div>
              )}

              {status !== "success" && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: "" });
                      }}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-gray-900"
                      placeholder="e.g. Dr. Sara Khan"
                      disabled={status === "loading"}
                    />
                    {fieldErrors.name && <p className="text-xs text-red-500 font-medium">{fieldErrors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: "" });
                        }}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-gray-900"
                        placeholder="sara@example.com"
                        disabled={status === "loading"}
                      />
                      {fieldErrors.email && <p className="text-xs text-red-500 font-medium">{fieldErrors.email}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700">Phone Number *</label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: "" });
                        }}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-gray-900"
                        placeholder="+92 300 1234567"
                        disabled={status === "loading"}
                      />
                      {fieldErrors.phone && <p className="text-xs text-red-500 font-medium">{fieldErrors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700">Highest Qualification</label>
                      <input
                        type="text"
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-gray-900"
                        placeholder="e.g. BS in Occupational Therapy"
                        disabled={status === "loading"}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700">Years of Experience</label>
                      <input
                        type="text"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-gray-900"
                        placeholder="e.g. 4 Years"
                        disabled={status === "loading"}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">Cover Letter / Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: "" });
                      }}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] h-28 resize-none text-gray-900"
                      placeholder="Tell us about your background, subfield certifications, and availability..."
                      disabled={status === "loading"}
                    />
                    {fieldErrors.message && <p className="text-xs text-red-500 font-medium">{fieldErrors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-base font-bold transition-all mt-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting Application...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              )}

              {status === "success" && (
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-gray-900 hover:bg-black text-white text-base font-bold mt-4"
                >
                  Close
                </Button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
