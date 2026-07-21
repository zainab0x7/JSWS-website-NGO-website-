"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Beaker, Baby, Stethoscope, Syringe, HeartPulse } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const t = useTranslations("ServicesSection");
  
  const services = [
    {
      title: t('services.general.title'),
      description: t('services.general.description'),
      icon: Stethoscope,
      link: "/services#general"
    },
    {
      title: t('services.camps.title'),
      description: t('services.camps.description'),
      icon: Activity,
      link: "/services#camps"
    },
    {
      title: t('services.laboratory.title'),
      description: t('services.laboratory.description'),
      icon: Beaker,
      link: "/laboratory"
    },
    {
      title: t('services.womens_health.title'),
      description: t('services.womens_health.description'),
      icon: HeartPulse,
      link: "/services#womens-health"
    },
    {
      title: t('services.childrens_health.title'),
      description: t('services.childrens_health.description'),
      icon: Baby,
      link: "/services#childrens-health"
    },
    {
      title: t('services.vaccination.title'),
      description: t('services.vaccination.description'),
      icon: Syringe,
      link: "/services#vaccination"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[var(--color-primary)] font-semibold tracking-wider uppercase text-sm mb-2">
            {t('badge')}
          </h2>
          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-black)] mb-6">
            {t('title')}
          </h3>
          <p className="text-gray-600 text-lg">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/50 hover:-translate-y-2 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-[var(--color-black)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    {service.description}
                  </CardDescription>
                  <Link href={service.link} className="inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]">
                    {t('learn_more')} <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full bg-white text-white hover:bg-gray-800 dark:bg-gray-200">
            <Link href="/services">{t('view_all')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
