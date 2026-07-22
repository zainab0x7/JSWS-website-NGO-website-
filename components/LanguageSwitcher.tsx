"use client";

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition, useState, useRef, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', label: t('en'), flag: '🇬🇧' },
    { code: 'ur', label: t('ur'), flag: '🇵🇰' }
  ];

  const currentLang = languages.find(lang => lang.code === locale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLanguageChange(nextLocale: string) {
    if (nextLocale === locale) {
      setIsOpen(false);
      return;
    }
    
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- Dynamic routes require params
        { pathname, params },
        { locale: nextLocale }
      );
      setIsOpen(false);
    });
  }

  return (
    <div className="relative inline-block text-left z-50" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 shadow-sm",
          isPending && "opacity-70 cursor-not-allowed",
          isOpen && "border-[var(--color-primary)] ring-1 ring-[var(--color-primary)]/20"
        )}
      >
        <Globe className="w-4 h-4 text-gray-500" />
        <span className="hidden sm:inline-block">{currentLang.label}</span>
        <span className="sm:hidden">{currentLang.code.toUpperCase()}</span>
        <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-40 rounded-xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden origin-top-right"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={cn(
                    "flex items-center justify-between w-full px-4 py-2.5 text-sm transition-colors",
                    locale === lang.code 
                      ? "bg-red-50 text-[var(--color-primary)] font-medium" 
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base">{lang.flag}</span>
                    {lang.label}
                  </span>
                  {locale === lang.code && (
                    <Check className="w-4 h-4 text-[var(--color-primary)]" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
