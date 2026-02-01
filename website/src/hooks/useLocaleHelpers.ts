'use client';

import { useLocale } from 'next-intl';
import type { Locale } from '@/i18n/config';

export function useLocaleHelpers() {
  const locale = useLocale() as Locale;
  const isJa = locale === 'ja';

  const localePath = (path: string) => `/${locale}${path}`;

  return {
    locale,
    isJa,
    localePath,
  };
}
