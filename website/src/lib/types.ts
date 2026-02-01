import type { ReactNode, CSSProperties } from 'react';
import type { Locale } from '@/i18n/config';

export interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export interface LocaleParams {
  locale: Locale;
}

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export interface SectionBackground {
  variant?: 'white' | 'gray';
}

export interface CTAButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}
