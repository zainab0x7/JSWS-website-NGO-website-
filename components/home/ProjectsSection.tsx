"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Stethoscope, Activity, GraduationCap, Megaphone } from "lucide-react";
import { Link } from "@/i18n/routing";

export function ProjectsSection() {
  const t = useTranslations("HomeProjects");

  const projects = [
    {
      id: "jsmdc",
      icon: Stethoscope,
      title: t("jsmdc.title"),
      services: t.raw("jsmdc.services") as string[],
      href: "/jsmdc",
      color: "from-blue-500 to-blue-600",
      lightColor: "bg-blue-50 text-blue-600"
    },
    {
      id: "sarc",
      icon: Activity,
      title: t("sarc.title"),
      services: t.raw("sarc.services") as string[],
      href: "/sarc",
      color: "from-emerald-500 to-emerald-600",
      lightColor: "bg-emerald-50 text-emerald-600"
    },
    {
      id: "sasp",
      icon: GraduationCap,
      title: t("sasp.title"),
      services: t.raw("sasp.services") as string[],
      href: "/scholarships",
      color: "from-amber-500 to-amber-600",
      lightColor: "bg-amber-50 text-amber-600"
    },
    {
      id: "awareness",
      icon: Megaphone,
      title: t("awareness.title"),
      services: t.raw("awareness.services") as string[],
      href: "/awareness",
      color: "from-purple-500 to-purple-600",
      lightColor: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${project.lightColor}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                  {project.title}
                </h3>
                <ul className="space-y-3 mb-8 flex-1">
                  {project.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link
                  href={project.href as any}
                  className={`inline-flex items-center justify-center w-full py-4 rounded-xl font-medium text-white bg-gradient-to-r ${project.color} shadow-md opacity-90 group-hover:opacity-100 transition-opacity`}
                >
                  Learn More
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
