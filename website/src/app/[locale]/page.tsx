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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero min-h-[80vh] flex items-center justify-center pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            {/* Butterfly Icon */}
            <div className="mb-8">
              <Image
                src="/butterfly.png"
                alt="Mariposa"
                width={160}
                height={160}
                className="mx-auto drop-shadow-lg animate-gentle-float"
                priority
              />
            </div>

            {/* Main heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-serif mb-4">
              {t('hero.subtitle')}
            </p>

            {/* Tagline */}
            <p className="text-base text-gray-500 mb-4 max-w-2xl mx-auto leading-relaxed">
              {t('hero.tagline')}
            </p>
            <p className="text-base text-gray-400 mb-10 max-w-xl mx-auto">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
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

      {/* Section Divider */}
      <div className="section-divider-butterfly">
        <Image src="/butterfly.png" alt="" width={24} height={24} className="opacity-30" />
      </div>

      {/* Latest News Section */}
      <section className="py-16 gradient-section-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
              {t('news.title')}
            </h2>
            <Link
              href={`/${locale}/news`}
              className="text-accent hover:text-accent-light text-base transition-colors inline-flex items-center gap-1 font-medium"
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
                      <span key={cat.id} className="category-badge">
                        {cat.name}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-accent transition-colors mb-2 line-clamp-2">
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

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Worship Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-5">
            {t('worship.title')}
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {t('worship.description')}
          </p>

          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4 bg-gray-50 px-6 py-4 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-accent"
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
                <p className="font-semibold text-gray-900 text-lg">{t('worship.time')}</p>
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
      <section className="py-16 gradient-accent text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-5 text-white">
            {t('cta.title')}
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/worship`}
              className="inline-flex items-center justify-center px-8 py-3 min-h-[48px] bg-white text-accent font-semibold rounded-xl hover:bg-gray-50 transition-all hover:shadow-lg"
            >
              {t('hero.ctaWorship')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-8 py-3 min-h-[48px] border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              {t('cta.contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
