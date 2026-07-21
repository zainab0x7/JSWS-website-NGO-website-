"use client";

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { ChangeEvent, useTransition } from 'react';
import { useParams } from 'next/navigation';

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- Dynamic routes require params
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <select 
      value={locale} 
      onChange={onSelectChange} 
      disabled={isPending}
      className="bg-background text-foreground border border-input rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <option value="en">{t('en')}</option>
      <option value="ur">{t('ur')}</option>
    </select>
  );
}
