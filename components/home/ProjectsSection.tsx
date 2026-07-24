"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Stethoscope, Activity, GraduationCap, Megaphone } from "lucide-react";
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
      color: "from-blue-600 to-indigo-600",
      lightColor: "bg-blue-50 text-blue-600 border-blue-100",
      badge: "Medical & Dental"
    },
    {
      id: "sarc",
      icon: Activity,
      title: t("sarc.title"),
      services: t.raw("sarc.services") as string[],
      href: "/sarc",
      color: "from-emerald-600 to-teal-600",
      lightColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
      badge: "Rehabilitation"
    },
    {
      id: "sasp",
      icon: GraduationCap,
      title: t("sasp.title"),
      services: t.raw("sasp.services") as string[],
      href: "/scholarships",
      color: "from-amber-500 to-amber-600",
      lightColor: "bg-amber-50 text-amber-600 border-amber-100",
      badge: "Education"
    },
    {
      id: "awareness",
      icon: Megaphone,
      title: t("awareness.title"),
      services: t.raw("awareness.services") as string[],
      href: "/awareness",
      color: "from-purple-600 to-pink-600",
      lightColor: "bg-purple-50 text-purple-600 border-purple-100",
      badge: "Community Health"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/80 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider">
            Flagship Welfare Initiatives
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Core Programs & Projects
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Delivering accessible healthcare, rehabilitation, educational scholarships, and community health drives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm ${project.lightColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-bold text-xs tracking-wide uppercase">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-heading tracking-tight group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>

                  <ul className="space-y-3.5 mb-8">
                    {project.services.map((service, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-sm sm:text-base">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={project.href as "/"}
                  className={`inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r ${project.color} shadow-md hover:shadow-lg transition-all duration-300 group/btn`}
                >
                  <span>Explore Program Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
