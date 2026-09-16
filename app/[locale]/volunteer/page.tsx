"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Heart, GraduationCap, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function VolunteerPage() {
  const t = useTranslations("VolunteerPage");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reason: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required.";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.reason.trim()) {
      errors.reason = "Please tell us why you want to volunteer.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validate()) {
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ENDPOINT || "/api/volunteer";

    setStatus("loading");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          reason: "",
        });
        setFieldErrors({});
      } else {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setErrorMessage(
          data?.errors?.[0]?.message || data?.error || "Submission failed. Please try again later."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[var(--color-gray-light)]">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1593113563332-e1478161f307?q=80&w=1600&auto=format&fit=crop"
            alt="Volunteers helping community"
            width={1600}
            height={900}
            priority
            sizes="100vw"
            quality={80}
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <Users className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight">
              {t("hero_title")}
            </h1>
            <p className="text-xl text-gray-600">
              {t("hero_desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Heart, title: t("impact_title"), desc: t("impact_desc") },
              { icon: GraduationCap, title: t("learn_title"), desc: t("learn_desc") },
              { icon: MapPin, title: t("service_title"), desc: t("service_desc") },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 text-center p-6 bg-white">
                  <benefit.icon className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-[var(--color-black)] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-none shadow-2xl bg-white p-8 md:p-12 rounded-3xl">
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl font-bold text-[var(--color-black)] mb-2">
                  {t("form_title")}
                </h2>
                <p className="text-gray-500">{t("form_desc")}</p>
              </div>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3 text-green-800">
                  <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-900">Application Submitted Successfully!</h4>
                    <p className="text-sm text-green-700 mt-1">
                      Thank you for offering your support. Our team will review your application and get in touch with you soon.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800">
                  <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900">Submission Error</h4>
                    <p className="text-sm text-red-700 mt-1">
                      {errorMessage || "Failed to submit your application. Please check your information and try again."}
                    </p>
                  </div>
                </div>
              )}

              <form
                action={process.env.NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ENDPOINT || ""}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t("first_name")}</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={(e) => {
                        setFormData({ ...formData, firstName: e.target.value });
                        if (fieldErrors.firstName) {
                          setFieldErrors({ ...fieldErrors, firstName: "" });
                        }
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-gray-900"
                      placeholder={t("placeholders.first_name")}
                      disabled={status === "loading"}
                    />
                    {fieldErrors.firstName && (
                      <p className="text-xs text-red-500 font-medium">{fieldErrors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t("last_name")}</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={(e) => {
                        setFormData({ ...formData, lastName: e.target.value });
                        if (fieldErrors.lastName) {
                          setFieldErrors({ ...fieldErrors, lastName: "" });
                        }
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-gray-900"
                      placeholder={t("placeholders.last_name")}
                      disabled={status === "loading"}
                    />
                    {fieldErrors.lastName && (
                      <p className="text-xs text-red-500 font-medium">{fieldErrors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">{t("email")}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (fieldErrors.email) {
                        setFieldErrors({ ...fieldErrors, email: "" });
                      }
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-gray-900"
                    placeholder={t("placeholders.email")}
                    disabled={status === "loading"}
                  />
                  {fieldErrors.email && (
                    <p className="text-xs text-red-500 font-medium">{fieldErrors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">{t("why")}</label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={(e) => {
                      setFormData({ ...formData, reason: e.target.value });
                      if (fieldErrors.reason) {
                        setFieldErrors({ ...fieldErrors, reason: "" });
                      }
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] h-32 resize-none text-gray-900"
                    placeholder={t("placeholders.why")}
                    disabled={status === "loading"}
                  ></textarea>
                  {fieldErrors.reason && (
                    <p className="text-xs text-red-500 font-medium">{fieldErrors.reason}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full h-14 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-lg flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    t("submit")
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
