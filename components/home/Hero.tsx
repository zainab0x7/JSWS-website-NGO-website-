"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Pill,
  HeartPulse,
  Eye,
  Stethoscope,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import { DonateModal } from "@/components/donate/DonateModal";
import { GlassCard } from "@/components/premium/GlassCard";
import { PremiumBackground } from "@/components/premium/PremiumBackground";

const DepthText = dynamic(
  () => import("@/components/premium/DepthText"),
  { ssr: false }
);

const HeroScene = dynamic(
  () => import("@/components/premium/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function Hero() {
  const t = useTranslations("Hero");
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const highlightCards = [
    { icon: Pill, text: t("cards.medicines") },
    { icon: HeartPulse, text: t("cards.healthcare") },
    { icon: Eye, text: t("cards.eye") },
    { icon: Stethoscope, text: t("cards.dental") },
  ];

  const titleHighlight = t("title_highlight").trim();

  return (
    <>
      <section className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center overflow-hidden bg-gray-950 py-8 sm:py-10 md:py-12 text-white">
        <PremiumBackground variant="dark" />

        <div className="absolute inset-0 z-0">
          <video
            className="h-full w-full scale-105 object-cover opacity-20"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero.jpg"
            aria-hidden="true"
          >
            <source src="/jsws-tour.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(181,18,27,0.25),transparent_60%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[42%] overflow-hidden opacity-70 lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-gray-950/60 via-transparent to-transparent" />
          <HeroScene />
        </div>

        <div className="container relative z-10 mx-auto flex flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-left rtl:text-right">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-red-500/30 bg-red-500/15 px-4 py-2 text-xs font-semibold text-red-200 backdrop-blur-xl sm:text-sm"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>{t("badge_official")}</span>
            </motion.div>

            {/* Title line 1: "Free & Subsidized" */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-0 font-heading text-xl font-extrabold leading-none tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              {t("title_start")}
            </motion.h2>

            {/* Title line 2: "Healthcare" — 3D DepthText */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="my-1 sm:my-2"
            >
              <DepthText
                text={titleHighlight}
                layers={30}
                depth={2.2}
                faceColor="#fef2f2"
                depthColor="#B5121B"
                tilt={6}
                pointerTracking
                autoOrbit
                orbitSpeed={0.3}
                smoothing={0.12}
                perspective={900}
                fontSize="clamp(2.8rem, 12vw, 7.5rem)"
                fontWeight={900}
                shadow
              />
            </motion.div>

            {/* Title line 3: "for Deserving Patients" */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-6 font-heading text-xl font-extrabold leading-none tracking-tight text-white sm:mb-7 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              {t("title_end")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg lg:text-xl"
            >
              {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4 md:mb-14"
            >
              <Button
                onClick={() => setIsDonateModalOpen(true)}
                size="lg"
                className="flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 px-8 text-base font-bold text-white shadow-xl shadow-red-600/40 hover:from-red-500 hover:to-red-600 sm:w-auto sm:text-lg"
              >
                <HeartHandshake className="h-5 w-5 text-red-200" />
                <span>{t("donate_now") || "Donate Now"}</span>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="group flex h-14 w-full items-center justify-center rounded-full border-white/30 bg-white/10 px-8 text-base font-semibold text-white shadow-lg backdrop-blur-md hover:bg-white hover:text-gray-950 sm:w-auto"
              >
                <Link href="/doctors">
                  <span>{t("book_appointment")}</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-auto grid w-full max-w-6xl grid-cols-2 gap-2 sm:gap-3 md:gap-5 lg:grid-cols-4 lg:gap-6"
          >
            {highlightCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.32 + index * 0.08 }}
                >
                  <GlassCard dark tilt={false} className="p-4 sm:p-5 md:p-6">
                    <div className="flex flex-col items-start gap-2.5 sm:gap-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-800 text-white shadow-md shadow-red-900/50 sm:h-12 sm:w-12 sm:rounded-2xl">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <span className="text-xs font-bold leading-snug text-white sm:text-sm md:text-base">
                        {card.text}
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        defaultCategory="general"
      />
    </>
  );
}
