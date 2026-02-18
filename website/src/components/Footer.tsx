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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="inline-flex items-center gap-2.5 mb-5 group">
              <Image
                src="/butterfly.png"
                alt="Mariposa"
                width={32}
                height={32}
                className="w-8 h-auto transition-transform group-hover:scale-105"
              />
              <span className="text-lg font-bold text-gray-900 font-serif tracking-wide">
                Mariposa House
              </span>
            </Link>
            <p className="text-gray-500 text-base leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-base tracking-wide">
              {t('navigation')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-accent transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-base tracking-wide">
              {t('contact')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-accent transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-base tracking-wide">
              {t('worshipTime')}
            </h3>
            <p className="text-gray-500 text-base">{t('worshipSchedule')}</p>

            <div className="mt-6 pt-5 border-t border-gray-200">
              <Link
                href={`/${locale}/privacy`}
                className="text-gray-500 hover:text-accent transition-colors text-base"
              >
                {t('privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-gray-400 text-base text-center">
            &copy; {new Date().getFullYear()} Mariposa House Church. {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
