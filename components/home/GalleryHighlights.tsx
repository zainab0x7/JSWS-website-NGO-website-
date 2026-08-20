"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { Camera } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { PremiumBackground } from "@/components/premium/PremiumBackground";
import { ScrollReveal } from "@/components/premium/ScrollReveal";

const DepthCarousel = dynamic(
  () => import("@/components/premium/DepthCarousel"),
  { ssr: false }
);

const galleryImages = [
  { image: "/rehab1.jpeg", alt: "Rehabilitation Center" },
  { image: "/gp/gp1.jpeg", alt: "General Physician OPD" },
  { image: "/pt/pt1.jpeg", alt: "Physical Therapy" },
  { image: "/rehab2.jpeg", alt: "Patient Care" },
  { image: "/gp/gp2.jpeg", alt: "Medical Consultation" },
  { image: "/pt/pt2.jpeg", alt: "Therapy Session" },
  { image: "/rehab3.jpeg", alt: "Community Health" },
  { image: "/gp/gp3.jpeg", alt: "Free Medicine Pharmacy" },
  { image: "/pt/pt3.jpeg", alt: "Physical Rehabilitation" },
  { image: "/rehab4.jpeg", alt: "Medical Camp" },
];

export function GalleryHighlights() {
  const t = useTranslations("GalleryHighlights");

  return (
    <section className="relative overflow-hidden bg-gray-950 py-16 sm:py-20 md:py-24 lg:py-28">
      <PremiumBackground variant="dark" showParticles={false} />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <ScrollReveal className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-300 backdrop-blur-md">
              <Camera className="h-3.5 w-3.5" /> {t("badge")}
            </span>
            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {t("title")}
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            data-cursor="pointer"
            className="hidden items-center gap-2 rounded-full border-white/20 bg-white/5 px-6 font-semibold text-white hover:bg-white/10 md:flex"
          >
            <Link href="/gallery">
              <span>{t("view_all")}</span>
            </Link>
          </Button>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <div className="mx-auto h-[400px] sm:h-[450px] md:h-[500px] lg:h-[520px]">
            <DepthCarousel
              items={galleryImages}
              cardWidth={280}
              cardHeight={360}
              depth={180}
              spread={70}
              tilt={18}
              tiltDirection="right"
              perspective={1400}
              visibleCards={4}
              falloff={0.22}
              blur={5}
              tint="#0a0a0f"
              autoplay
              autoplayDelay={3500}
              loop
              showControls
              showIndicators
            />
          </div>
        </ScrollReveal>

        <div className="mt-8 text-center md:hidden">
          <Button
            asChild
            variant="outline"
            className="w-full rounded-full border-white/20 bg-white/5 py-6 font-semibold text-white"
          >
            <Link href="/gallery">{t("view_all")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
