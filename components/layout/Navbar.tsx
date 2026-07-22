"use client";

import * as React from "react";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Activity, Stethoscope, GraduationCap, Megaphone, Pill, HandCoins, Heart, Hospital, ShieldPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
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
    icon: React.ElementType;
    desc?: string;
    disabled?: boolean;
  }

  const programsDropdown: NavDropdownItem[] = [
    { href: "/jsmdc", label: t('jsmdc_full'), icon: Stethoscope, desc: "Medical and Dental Services" },
    { href: "/sarc", label: t('sarc_full'), icon: Activity, desc: "Rehabilitation & Therapy" },
    { href: "/scholarships", label: t('sasp_full'), icon: GraduationCap, desc: "Educational Support" },
    { href: "/awareness", label: t('awareness'), icon: Megaphone, desc: "Community Health Drives" },
    { href: "#", label: t('dialysis'), icon: ShieldPlus, desc: "Future Expansion Project", disabled: true },
  ];

  const donateDropdown: NavDropdownItem[] = [
    { href: "/donate?cause=zakat", label: t('zakat'), icon: HandCoins },
    { href: "/donate?cause=sadqah", label: t('sadqah'), icon: Heart },
    { href: "/donate?cause=general", label: t('general_donation'), icon: Heart },
    { href: "/donate?cause=patient", label: t('sponsor_patient'), icon: Activity },
    { href: "/donate?cause=clinic", label: t('sponsor_clinic'), icon: Hospital },
    { href: "/donate?cause=medicines", label: t('sponsor_medicines'), icon: Pill },
    { href: "/donate?cause=equipment", label: t('sponsor_equipment'), icon: Stethoscope },
  ];

  const navLinks = [
    { href: "/", label: t('home') },
    { href: "/about", label: t('about') },
    { id: "programs", label: t('programs'), type: "dropdown", items: programsDropdown },
    { id: "donate", label: t('donate_dropdown'), type: "dropdown", items: donateDropdown },
    { href: "/board-of-trustees", label: t('board_of_trustees') },
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-gray-200 bg-white",
        isScrolled ? "shadow-sm py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img src="/jsws-logo.png" alt="JSWS Logo" className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 justify-center flex-1 mx-4">
          {navLinks.map((link) => {
            if (link.type === "dropdown") {
              const isActiveDropdown = activeDesktopDropdown === link.id;
              // Check if any child is active
              const isChildActive = link.items?.some(item => pathname === item.href);

              return (
                <div 
                  key={link.id} 
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(link.id as string)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors py-2 whitespace-nowrap",
                      isActiveDropdown || isChildActive
                        ? "text-[var(--color-primary)]"
                        : "text-black hover:text-gray-500"
                    )}
                    aria-expanded={isActiveDropdown}
                  >
                    {link.label}
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isActiveDropdown && "rotate-180")} />
                  </button>

                  <AnimatePresence>
                    {isActiveDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={cn(
                          "absolute top-full ltr:left-0 rtl:right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden",
                          link.id === "programs" ? "w-[400px]" : "w-[260px]"
                        )}
                        onMouseEnter={() => handleMouseEnter(link.id as string)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className={cn(
                          "p-3",
                          link.id === "programs" ? "grid grid-cols-1 gap-1" : "grid grid-cols-1 gap-1"
                        )}>
                          {link.items?.map((item, idx) => {
                            const ItemIcon = item.icon;
                            return item.disabled ? (
                              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl opacity-60 cursor-not-allowed">
                                <div className="mt-0.5 p-2 rounded-lg bg-gray-50 text-gray-400">
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
                                href={item.href as any}
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
                href={link.href as any}
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
          <Button asChild className="rounded-full px-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white shadow-md">
            <Link href="/donate">{t('donate_dropdown')}</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3 shrink-0">
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

      {/* Mobile Navigation */}
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
                                    href={item.href as any}
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
                    href={link.href as any}
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
                <Button asChild className="w-full rounded-full py-6 text-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] shadow-md">
                  <Link href="/donate">{t('donate_dropdown')}</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
