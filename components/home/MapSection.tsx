"use client";

import { MapPin, Navigation, Phone, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { BidiLTR } from "@/components/ui/BidiLTR";
import { Button } from "@/components/ui/button";
import { PremiumBackground } from "@/components/premium/PremiumBackground";
import { ScrollReveal } from "@/components/premium/ScrollReveal";

export function MapSection() {
  const t = useTranslations("MapSection");
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1039.8440892593023!2d67.10633747156312!3d24.82972324288454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b0035889a3d%3A0xd69d9f14ede186d8!2sJamila%20Sultan%20Welfare%20Society%20Clinics!5e0!3m2!1sen!2s!4v1785306962876!5m2!1sen!2s";
  const directDirectionsUrl =
    "https://maps.google.com/?q=Jamila+Sultan+Welfare+Society+Clinics+Karachi";

  return (
    <section className="relative overflow-hidden border-t border-gray-100 py-12 sm:py-16 md:py-24">
      <PremiumBackground variant="light" showParticles={false} />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <ScrollReveal variant="scale">
          <div className="flex flex-col items-stretch gap-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-900 text-white shadow-2xl lg:flex-row">
            <div className="flex flex-col justify-between space-y-6 p-6 sm:p-8 lg:p-10 lg:w-1/3">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-300">
                  <MapPin className="h-3.5 w-3.5 text-red-400" />
                  <span>{t("visit_badge")}</span>
                </div>
                <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                  {t("title")}
                </h2>
                <p className="text-sm leading-relaxed text-gray-300">
                  {t("address")}
                </p>
              </div>

              <div className="space-y-3 border-t border-gray-800 pt-4">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Phone className="h-4 w-4 shrink-0 text-red-400" />
                  <span>
                    {t("phone_label")}{" "}
                    <BidiLTR className="font-semibold text-white">+92 307 2021882</BidiLTR>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Navigation className="h-4 w-4 shrink-0 text-red-400" />
                  <span>{t("location_label")}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={directDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] font-medium text-white shadow-lg shadow-red-900/30 hover:bg-[var(--color-primary-dark)]">
                    <Navigation className="h-4 w-4" />
                    {t("directions_btn")}
                    <ExternalLink className="ms-1 h-3.5 w-3.5 opacity-70" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative min-h-[300px] w-full bg-gray-800 sm:min-h-[380px] lg:min-h-[450px] lg:w-2/3">
              <iframe
                src={mapUrl}
                className="h-full min-h-[300px] w-full border-0 sm:min-h-[380px] lg:min-h-[450px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Jamila Sultan Welfare Society Clinics Google Map"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
