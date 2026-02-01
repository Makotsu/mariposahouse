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

  // 現在地を判定
  const isActivePath = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

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
        <div className="flex justify-between items-center h-18 py-2">
          {/* Logo */}
          <Link href={`/${locale}`} className="logo-link flex items-center gap-2 py-2">
            <Image
              src={IMAGES.butterfly}
              alt="Mariposa"
              width={36}
              height={36}
              className="w-9 h-auto"
            />
            <span className="text-lg font-bold text-gray-900 font-serif">
              Mariposa House
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = isActivePath(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'nav-link px-3 py-2 rounded-md transition-colors text-sm font-medium',
                    isActive
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
            <LanguageToggle className="ml-1" />
          </div>

          {/* Mobile menu button - アクセシビリティ向上: タップ領域を48px以上に */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 min-w-[48px] min-h-[48px] rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            aria-label={isOpen ? t('closeMenu') : t('openMenu')}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
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

        {/* Mobile Navigation - アクセシビリティ向上: タップ領域拡大、現在地明示 */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => {
                const isActive = isActivePath(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'nav-link px-4 py-4 min-h-[48px] rounded-lg transition-colors text-base font-medium',
                      isActive
                        ? 'text-gray-900 bg-gray-100 border-l-4 border-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="px-4 py-4">
                <LanguageToggle className="inline-flex" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
