"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  const locale = useLocale();

  const footerLinks = {
    about: [
      { name: tNav('about'), href: `/${locale}/about` },
      { name: tNav('worship'), href: `/${locale}/worship` },
    ],
    connect: [
      { name: tNav('news'), href: `/${locale}/news` },
      { name: tNav('contact'), href: `/${locale}/contact` },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="inline-flex items-center gap-2 mb-4">
              <Image
                src="/butterfly.png"
                alt="Mariposa"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="text-lg font-bold text-gray-900 font-serif">
                Mariposa House
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3 text-sm">
              {t('navigation')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3 text-sm">
              {t('contact')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3 text-sm">
              {t('worshipTime')}
            </h3>
            <p className="text-gray-500 text-sm">{t('worshipSchedule')}</p>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link
                href={`/${locale}/privacy`}
                className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
              >
                {t('privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-gray-400 text-xs text-center">
            &copy; {new Date().getFullYear()} Mariposa House Church. {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
