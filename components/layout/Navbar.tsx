"use client";

import * as React from "react";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Activity, Stethoscope, GraduationCap, Megaphone, Pill, HandCoins, Heart, Hospital, ShieldPlus, HeartHandshake, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { DonateModal } from "@/components/donate/DonateModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = React.useState(false);
  const [selectedDonateCause] = React.useState<string>("general");
  
  const [activeDesktopDropdown, setActiveDesktopDropdown] = React.useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = React.useState<string | null>(null);

  const pathname = usePathname();
  const t = useTranslations('Navigation');
  
  let dropdownTimeout: NodeJS.Timeout;

  const handleMouseEnter = (menu: string) => {
    clearTimeout(dropdownTimeout);
    setActiveDesktopDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setActiveDesktopDropdown(null);
    }, 150);
  };

  interface NavDropdownItem {
    href: string;
    label: string;
    icon: LucideIcon;
    desc?: string;
    disabled?: boolean;
    cause?: string;
  }

  const programsDropdown: NavDropdownItem[] = [
    { href: "/jsmdc", label: t('jsmdc_full'), icon: Stethoscope, desc: "Medical and Dental Services" },
    { href: "/sarc", label: t('sarc_full'), icon: Activity, desc: "Rehabilitation & Therapy" },
    { href: "/scholarships", label: t('masp_full'), icon: GraduationCap, desc: "Muhammad Aslam Scholarship Program" },
    { href: "/awareness", label: t('awareness'), icon: Megaphone, desc: "Community Health Drives" },
    { href: "#", label: t('dialysis'), icon: ShieldPlus, desc: "Future Expansion Project", disabled: true },
  ];

  const donateDropdown: NavDropdownItem[] = [
    { href: "/donate?cause=zakat", label: t('zakat'), icon: HandCoins, cause: "zakat" },
    { href: "/donate?cause=sadqah", label: t('sadqah'), icon: Heart, cause: "sadqah" },
    { href: "/donate?cause=general", label: t('general_donation'), icon: Heart, cause: "general" },
    { href: "/donate?cause=patient", label: t('sponsor_patient'), icon: Activity, cause: "patient" },
    { href: "/donate?cause=clinic", label: t('sponsor_clinic'), icon: Hospital, cause: "clinic" },
    { href: "/donate?cause=medicines", label: t('sponsor_medicines'), icon: Pill, cause: "medicines" },
    { href: "/donate?cause=equipment", label: t('sponsor_equipment'), icon: Stethoscope, cause: "equipment" },
  ];

  const navLinks = [
    { href: "/", label: t('home') },
    { href: "/about", label: t('about') },
    { id: "programs", label: t('programs'), type: "dropdown", items: programsDropdown },
    { id: "donate", label: t('donate_dropdown'), type: "dropdown", items: donateDropdown },

    { href: "/registration", label: t('registration') },
    { href: "/gallery", label: t('gallery') },
    { href: "/contact", label: t('contact') },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-md bg-white/95 border-b border-gray-100 shadow-sm",
          isScrolled && "shadow-md bg-white/98 py-0.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="JSWS Home">
            <div className="relative h-12 sm:h-14 group-hover:scale-105 transition-transform">
              <img
                src="/jsws-logo.png"
                alt="JSWS Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Link Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              if (link.type === "dropdown") {
                const isOpen = activeDesktopDropdown === link.id;
                return (
                  <div
                    key={link.id}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(link.id as string)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1.5 text-sm font-medium py-2 transition-colors hover:text-gray-500",
                        isOpen ? "text-[var(--color-primary)]" : "text-black"
                      )}
                    >
                      {link.label}
                      <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")} />
                    </button>

                    {/* Mega Dropdown Menu */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-80 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5 border border-gray-100 z-50"
                        >
                          <div className="space-y-1">
                            {link.items?.map((item, idx) => {
                              const ItemIcon = item.icon;
                              return item.disabled ? (
                                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl opacity-50 cursor-not-allowed bg-gray-50/50">
                                  <div className="mt-0.5 p-2 rounded-lg bg-gray-100 text-gray-400">
                                    <ItemIcon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium text-gray-700">{item.label}</h4>
                                    {item.desc && <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>}
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  key={idx}
                                  href={item.href as "/"}
                                  onClick={() => setActiveDesktopDropdown(null)}
                                  className={cn(
                                    "flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-red-50 group/item",
                                    pathname === item.href ? "bg-red-50/50" : ""
                                  )}
                                >
                                  <div className="mt-0.5 p-2 rounded-lg bg-red-50 text-[var(--color-primary)] group-hover/item:bg-[var(--color-primary)] group-hover/item:text-white transition-colors">
                                    <ItemIcon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <h4 className={cn(
                                      "text-sm font-medium transition-colors group-hover/item:text-[var(--color-primary)]",
                                      pathname === item.href ? "text-[var(--color-primary)]" : "text-gray-700"
                                    )}>
                                      {item.label}
                                    </h4>
                                    {item.desc && <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>}
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href as "/"}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-gray-500 whitespace-nowrap",
                    pathname === link.href
                      ? "text-[var(--color-primary)]"
                      : "text-black"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <Button
              onClick={() => setIsDonateModalOpen(true)}
              className="rounded-full px-6 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold shadow-md shadow-red-500/20 transition-all hover:scale-105 flex items-center gap-2"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Donate Now</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <Button
              onClick={() => setIsDonateModalOpen(true)}
              size="sm"
              className="rounded-full px-3 py-1.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-xs font-bold shadow-sm"
            >
              Donate Now
            </Button>
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 bg-white/50 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 overflow-hidden shadow-lg lg:hidden"
            >
              <nav className="flex flex-col space-y-1 p-4 max-h-[75vh] overflow-y-auto">
                {navLinks.map((link) => {
                  if (link.type === "dropdown") {
                    const isMobileActive = activeMobileDropdown === link.id;
                    return (
                      <div key={link.id} className="flex flex-col">
                        <button
                          onClick={() => setActiveMobileDropdown(isMobileActive ? null : link.id as string)}
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          {link.label}
                          <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", isMobileActive && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                          {isMobileActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-6 pr-4 py-2 space-y-1 bg-gray-50/50 rounded-xl mt-1">
                                {link.items?.map((item, idx) => (
                                  item.disabled ? (
                                    <div key={idx} className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                                      {item.label}
                                    </div>
                                  ) : (
                                    <Link
                                      key={idx}
                                      href={item.href as "/"}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={cn(
                                        "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                        pathname === item.href
                                          ? "text-[var(--color-primary)] bg-red-50"
                                          : "text-black hover:text-gray-500 hover:bg-gray-50"
                                      )}
                                    >
                                      {item.label}
                                    </Link>
                                  )
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href as "/"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                        pathname === link.href
                          ? "text-[var(--color-primary)] bg-red-50"
                          : "text-black hover:text-gray-500 hover:bg-gray-50"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsDonateModalOpen(true);
                    }}
                    className="w-full rounded-full py-6 text-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] shadow-md flex items-center justify-center gap-2"
                  >
                    <HeartHandshake className="w-5 h-5" />
                    <span>Donate Now</span>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Quick Donate Modal */}
      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        defaultCategory={selectedDonateCause}
      />
    </>
  );
}
