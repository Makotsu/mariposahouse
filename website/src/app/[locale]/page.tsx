import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getPosts } from "@/lib/content";
import { Locale } from "@/i18n/config";

export const revalidate = 60;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Home');
  const tNav = await getTranslations('Navigation');

  // 最新のお知らせを3件取得
  const latestNews = await getPosts({ perPage: 3, locale });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced */}
      <section className="min-h-[75vh] flex items-center justify-center pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            {/* Butterfly Icon */}
            <div className="mb-6">
              <Image
                src="/butterfly.png"
                alt="Mariposa"
                width={160}
                height={160}
                className="mx-auto drop-shadow-lg"
                priority
              />
            </div>

            {/* Main heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif mb-3">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-serif mb-3">
              {t('hero.subtitle')}
            </p>

            {/* Tagline */}
            <p className="text-base text-gray-500 mb-4 max-w-2xl mx-auto">
              {t('hero.tagline')}
            </p>
            <p className="text-base text-gray-400 mb-8 max-w-xl mx-auto">
              {t('hero.description')}
            </p>

            {/* CTA Buttons - Two buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/worship`}
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                {t('hero.ctaWorship')}
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link href={`/${locale}/contact`} className="btn-secondary">
                {t('hero.ctaContact')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 font-serif">
              {t('news.title')}
            </h2>
            <Link
              href={`/${locale}/news`}
              className="text-gray-600 hover:text-gray-900 text-base transition-colors inline-flex items-center gap-1"
            >
              {t('news.viewAll')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {latestNews.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {latestNews.map((post) => (
                <Link
                  key={post.id}
                  href={`/${locale}/news/${post.slug}`}
                  className="card p-6 group"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((cat) => (
                      <span
                        key={cat.id}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-base font-medium rounded"
                      >
                        {cat.name}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-base mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <time className="text-base text-gray-400">{post.formattedDate}</time>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">{t('news.noNews')}</p>
          )}
        </div>
      </section>

      {/* Worship Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-4">
            {t('worship.title')}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {t('worship.description')}
          </p>

          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">{t('worship.time')}</p>
              </div>
            </div>
          </div>

          <Link
            href={`/${locale}/worship`}
            className="btn-primary inline-flex items-center gap-2"
          >
            {t('worship.details')}
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/worship`} className="btn-primary">
              {t('hero.ctaWorship')}
            </Link>
            <Link href={`/${locale}/contact`} className="btn-secondary">
              {t('cta.contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
