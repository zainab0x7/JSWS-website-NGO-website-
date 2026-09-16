"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  HeartHandshake, 
  TrendingUp, 
  Users, 
  Building2, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function CareersPage() {
  const whyWorkCards = [
    {
      icon: HeartHandshake,
      title: "Meaningful Work",
      description: "Contribute to initiatives that positively impact individuals, families and communities.",
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Develop your skills and gain valuable experience in a professional healthcare and welfare environment.",
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work alongside dedicated professionals who value teamwork, compassion and excellence.",
    },
    {
      icon: Building2,
      title: "Community Impact",
      description: "Be part of an organization committed to improving healthcare, rehabilitation and community wellbeing.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 sm:pt-24 bg-white text-gray-900">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[var(--color-gray-light)] border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Careers at JSWS</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-black)] leading-tight">
              Join Our Team
            </h1>

            <p className="text-lg sm:text-xl font-medium text-gray-800">
              Build your career while making a meaningful difference in the lives of others.
            </p>

            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              JSWS is committed to bringing together dedicated, skilled and compassionate professionals who share our vision of serving the community.
            </p>

            <div className="pt-3">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-base font-bold shadow-md hover:shadow-lg transition-all"
              >
                <a href="#openings">
                  View Current Openings
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY WORK WITH JSWS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-black)]">
              Why Work With JSWS?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Empowering healthcare professionals to deliver high-quality, compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyWorkCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start"
                >
                  <div className="p-3 rounded-xl bg-red-50 text-[var(--color-primary)] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[var(--color-black)] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CURRENT JOB OPENINGS */}
      <section id="openings" className="py-16 sm:py-20 bg-[var(--color-gray-light)] border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-black)]">
                Current Job Openings
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Explore our active vacancies and join our healthcare and rehabilitation team.
              </p>
            </div>
            <div className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>1 Position Available</span>
            </div>
          </div>

          {/* Job Card - Occupational Therapist */}
          <Card className="bg-white rounded-3xl border border-gray-200/80 shadow-md hover:shadow-lg transition-all p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-gray-100 pb-6 mb-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-50 text-[var(--color-primary)] border border-red-100">
                    Full-Time
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">
                    Sultan Ahmed Rehabilitation Centre (SARC)
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-black)]">
                  Occupational Therapist
                </h3>
                <p className="text-sm sm:text-base font-semibold text-gray-700 flex items-center gap-2">
                  <span>Jamila Sultan Welfare Society (JSWS)</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-[var(--color-primary)]">SARC</span>
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold"
                >
                  <Link href="/careers/occupational-therapist">
                    View Details & Apply
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[var(--color-black)]">
                  <GraduationCap className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Qualification Requirements</span>
                </div>
                <ul className="space-y-1.5 pl-6 list-disc text-gray-600">
                  <li>Bachelor&apos;s or Master&apos;s degree in Occupational Therapy from a recognized institution.</li>
                  <li>Specialized subfield certifications (Neurorehabilitation, Pediatric OT, Hand Therapy, etc.) are an advantage.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[var(--color-black)]">
                  <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Experience & Expertise</span>
                </div>
                <ul className="space-y-1.5 pl-6 list-disc text-gray-600">
                  <li>3 to 5 years of professional clinical experience.</li>
                  <li>Neurological, orthopedic, or developmental rehabilitation expertise.</li>
                  <li>JCI-accredited & ISO-certified hospital experience preferred.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>Sector 31A, Korangi, Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified JSWS Healthcare Recruitment</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 4. NGO CULTURE / COMMITMENT BANNER */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center space-y-4">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-black)]">
            Equal Opportunity & Dignity in Care
          </h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Jamila Sultan Welfare Society, we treat every team member and patient with dignity, equity, and compassion. Join us in providing non-profit rehabilitation and medical services to those who need it most.
          </p>
        </div>
      </section>
    </div>
  );
}
