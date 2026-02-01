import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChurchSchema from "@/components/ChurchSchema";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  const titles = {
    ja: "マリポサハウス | Mariposa House Church",
    en: "Mariposa House Church",
  };

  const descriptions = {
    ja: "マリポサハウスはキリストにあって新しく造られる喜びを分かち合う教会です。蝶のように変容し、神の愛の中で成長する場所へようこそ。",
    en: "Mariposa House is a church community sharing the joy of being made new in Christ. Welcome to a place of transformation and growth in God's love.",
  };

  return {
    title: {
      default: titles[locale],
      template: locale === 'ja' ? '%s | マリポサハウス' : '%s | Mariposa House',
    },
    description: descriptions[locale],
    keywords: ["教会", "マリポサハウス", "キリスト教", "礼拝", "Mariposa House", "Church"],
    metadataBase: new URL('https://mariposahouse.church'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ja: '/ja',
        en: '/en',
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: 'https://mariposahouse.church',
      siteName: 'Mariposa House',
      locale: locale === 'ja' ? 'ja_JP' : 'en_US',
      type: "website",
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Mariposa House Church',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale],
      description: descriptions[locale],
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <ChurchSchema locale={locale} />
      </head>
      <body className={`${notoSans.variable} ${notoSerif.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="skip-link">
            {locale === 'ja' ? 'メインコンテンツへスキップ' : 'Skip to main content'}
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
