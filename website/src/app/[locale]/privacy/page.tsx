import Link from "next/link";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Locale } from "@/i18n/config";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy',
    description: locale === 'ja'
      ? 'マリポサハウスのプライバシーポリシー'
      : 'Privacy Policy of Mariposa House',
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Privacy');
  const tContact = await getTranslations('Contact');

  const isJa = locale === 'ja';

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
            {t('pageTitle')}
          </h1>
          <p className="text-gray-500">
            {t('lastUpdated')}: 2026{isJa ? '年' : '/'}2{isJa ? '月' : '/'}1{isJa ? '日' : ''}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">{t('intro')}</p>

            <div className="space-y-8">
              {/* Section 1 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-serif mb-4">
                  {t('sections.collection.title')}
                </h2>
                <p className="text-gray-600">
                  {t('sections.collection.content')}
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-serif mb-4">
                  {t('sections.use.title')}
                </h2>
                <p className="text-gray-600 mb-4">
                  {t('sections.use.content')}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {isJa ? (
                    <>
                      <li>お問い合わせへの回答</li>
                      <li>教会活動に関するご連絡</li>
                      <li>礼拝や各種イベントのご案内</li>
                    </>
                  ) : (
                    <>
                      <li>Responding to inquiries</li>
                      <li>Communication regarding church activities</li>
                      <li>Information about worship services and events</li>
                    </>
                  )}
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-serif mb-4">
                  {t('sections.thirdParty.title')}
                </h2>
                <p className="text-gray-600">
                  {t('sections.thirdParty.content')}
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-serif mb-4">
                  {t('sections.cookies.title')}
                </h2>
                <p className="text-gray-600">
                  {t('sections.cookies.content')}
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-serif mb-4">
                  {t('sections.security.title')}
                </h2>
                <p className="text-gray-600">
                  {t('sections.security.content')}
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-serif mb-4">
                  {t('sections.contact.title')}
                </h2>
                <p className="text-gray-600">
                  {t('sections.contact.content')}
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-serif mb-4">
                  {t('sections.changes.title')}
                </h2>
                <p className="text-gray-600">
                  {t('sections.changes.content')}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">
              {isJa
                ? 'ご質問がございましたら、お気軽にお問い合わせください。'
                : 'If you have any questions, please feel free to contact us.'}
            </p>
            <Link href={`/${locale}/contact`} className="btn-primary">
              {tContact('pageTitle')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
