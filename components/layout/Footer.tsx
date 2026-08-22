"use client";

import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin, ShieldCheck, HeartHandshake, Award, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { BidiLTR } from "@/components/ui/BidiLTR";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export function Footer() {
  const t = useTranslations('Footer');
  const tc = useTranslations('FooterCommon');

  const operationalArms = [
    { href: "/sarc" as const, logo: "/sarc-logo.png", alt: "SARC Logo" },
    { href: "/jsmdc" as const, logo: "/jsmdc-logo.png", alt: "JSMDC Logo" },
    { href: "/awareness" as const, logo: "/cap.png", alt: "CAP Logo" },
    { href: "/scholarships" as const, logo: "/masp.png", alt: "MASP Logo" },
  ];

  return (
    <footer className="bg-white text-gray-900 pt-16 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-gray-200">
          
          {/* Brand & Initiatives (Cols: 4) */}
          <div className="lg:col-span-4 space-y-6 text-center sm:text-left">
            <Link href="/" className="inline-block group">
              <div className="bg-white p-2.5 rounded-2xl inline-block shadow-md group-hover:scale-105 transition-transform duration-300">
                <img src="/jsws-logo.png" alt="JSWS Logo" className="h-20 sm:h-24 md:h-28 w-auto object-contain" />
              </div>
            </Link>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
              {t('description')}
            </p>

            {/* Child Initiatives Logos */}
            <div className="space-y-2 pt-1">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">{tc('operational_arms')}</p>
              <div className="inline-flex flex-wrap items-center gap-3 bg-gray-50 px-4 py-2.5 rounded-2xl border border-gray-200 shadow-sm">
                {operationalArms.map((arm, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.08, y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href={arm.href} className="block">
                      <Image src={arm.logo} alt={arm.alt} width={0} height={0} sizes="96px" className="h-10 sm:h-12 w-auto object-contain" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-[var(--color-primary)] text-gray-600 hover:text-white border border-gray-200 transition-all flex items-center justify-center shadow-sm"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Cols: 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-primary)] border-b border-gray-200 pb-2">
              {t('quick_links')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              {[
                { href: "/about", label: t('links.about') },
                { href: "/services", label: t('links.services') },
                { href: "/doctors", label: t('links.doctors') },
                { href: "/laboratory", label: t('links.laboratory') },
                { href: "/volunteer", label: t('links.volunteer') },
                { href: "/registration", label: t('links.registration') },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-red-400 transition-colors inline-flex items-center gap-1.5 py-0.5">
                    <ChevronRight className="w-3 h-3 text-red-500 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Initiatives & Programs (Cols: 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-primary)] border-b border-gray-200 pb-2">
              {tc('programs_initiatives')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              {[
                { href: "/jsmdc", label: t('links.jsmdc') },
                { href: "/sarc", label: t('links.sarc') },
                { href: "/scholarships", label: t('links.scholarships') },
                { href: "/awareness", label: t('links.awareness') },
                { href: "/gallery", label: t('links.gallery') },
                { href: "/donate", label: tc('donate_zakat') },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-red-400 transition-colors inline-flex items-center gap-1.5 py-0.5">
                    <ChevronRight className="w-3 h-3 text-red-500 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address (Cols: 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-primary)] border-b border-gray-200 pb-2">
              {t('contact_us')}
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 h-4 text-red-500 shrink-0 mt-1" />
                <span className="leading-relaxed whitespace-pre-line">{t('address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 h-4 text-red-500 shrink-0" />
                <div className="flex flex-col gap-0.5 font-medium text-gray-900">
                  <BidiLTR>+92 307 2021882</BidiLTR>
                  <BidiLTR>+92 336 3398787</BidiLTR>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 h-4 text-red-500 shrink-0" />
                <BidiLTR className="font-medium text-gray-900">jswswelfare@gmail.com</BidiLTR>
              </li>
            </ul>
          </div>

        </div>

        {/* Accreditation & Governance Badge Bar */}
        <div className="py-6 border-b border-gray-200 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t('accreditation')}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-900 font-semibold">
            <Award className="w-4 h-4 shrink-0 text-[var(--color-primary)]" />
            <span>{tc('registration_no')}</span>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="text-center sm:text-left">
            &copy; <BidiLTR>{new Date().getFullYear()}</BidiLTR> Jamila Sultan Welfare Society. {t('rights')}
          </p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/privacy" className="hover:text-[var(--color-primary)] transition-colors">{t('privacy')}</Link>
            <Link href="/terms" className="hover:text-[var(--color-primary)] transition-colors">{t('terms')}</Link>
            <Link href="/registration" className="hover:text-[var(--color-primary)] transition-colors">{tc('registration_credentials')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
