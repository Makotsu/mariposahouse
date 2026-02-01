"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import { IMAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrollEffect(10);
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('worship'), href: `/${locale}/worship` },
    { name: t('news'), href: `/${locale}/news` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  const LanguageToggle = ({ className }: { className?: string }) => (
    <div
      className={cn('lang-toggle', className)}
      role="group"
      aria-label={t('languageSelector')}
    >
      <button
        onClick={() => switchLocale('ja')}
        className={locale === 'ja' ? 'active' : ''}
        aria-pressed={locale === 'ja'}
      >
        日本語
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={locale === 'en' ? 'active' : ''}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b border-gray-100 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-white'
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image
              src={IMAGES.butterfly}
              alt="Mariposa"
              width={32}
              height={32}
              className="w-8 h-auto"
            />
            <span className="text-lg font-bold text-gray-900 font-serif">
              Mariposa House
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors text-base"
              >
                {item.name}
              </Link>
            ))}
            <LanguageToggle className="ml-2" />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded hover:bg-gray-50 transition-colors"
            aria-label={isOpen ? t('closeMenu') : t('openMenu')}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded transition-colors text-base"
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <LanguageToggle className="inline-flex" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
