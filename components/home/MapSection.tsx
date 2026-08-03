"use client";

import React from "react";
import { MapPin, Navigation, Phone, ExternalLink } from "lucide-react";
import { BidiLTR } from "@/components/ui/BidiLTR";
import { Button } from "@/components/ui/button";

export function MapSection() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1039.8440892593023!2d67.10633747156312!3d24.82972324288454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b0035889a3d%3A0xd69d9f14ede186d8!2sJamila%20Sultan%20Welfare%20Society%20Clinics!5e0!3m2!1sen!2s!4v1785306962876!5m2!1sen!2s";
  const directDirectionsUrl = "https://maps.google.com/?q=Jamila+Sultan+Welfare+Society+Clinics+Karachi";

  return (
    <section className="py-16 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl text-white">
          {/* Info Side */}
          <div className="lg:w-1/3 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold border border-red-500/30">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Visit Our Clinics</span>
              </div>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Jamila Sultan Welfare Society Clinics
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                P-66 - 15 A, Sector 31A, Allah Wala Town, Korangi, Karachi, 74900, Pakistan
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-800">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <span>OPD & Helpline: <BidiLTR className="font-semibold text-white">+92 307 2021882</BidiLTR></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Navigation className="w-4 h-4 text-red-400 shrink-0" />
                <span>Karachi, Sector 31A Korangi</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={directDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full h-12 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-red-900/30">
                  <Navigation className="w-4 h-4" />
                  Get Live Directions
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </Button>
              </a>
            </div>
          </div>

          {/* Embedded Map Side */}
          <div className="lg:w-2/3 min-h-[380px] sm:min-h-[450px] relative w-full bg-gray-800">
            <iframe
              src={mapUrl}
              className="w-full h-full min-h-[380px] sm:min-h-[450px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Jamila Sultan Welfare Society Clinics Google Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
