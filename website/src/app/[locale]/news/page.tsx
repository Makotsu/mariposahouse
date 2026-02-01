import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getPosts } from "@/lib/content";
import { Locale } from "@/i18n/config";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ja' ? 'お知らせ' : 'News',
    description: locale === 'ja'
      ? 'マリポサハウスからの最新のお知らせ'
      : 'Latest news from Mariposa House',
  };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('News');
  const tContact = await getTranslations('Contact');

  const isJa = locale === 'ja';
  const posts = await getPosts({ perPage: 20 });

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/butterfly.png"
            alt="Mariposa"
            width={120}
            height={120}
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
            {t('pageTitle')}
          </h1>
          <p className="text-xl text-gray-500">{t('pageSubtitle')}</p>
        </div>
      </section>

      {/* News List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="space-y-6">
              {posts.map((post) => (
                <article key={post.id} className="card p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((cat) => (
                      <span
                        key={cat.id}
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded"
                      >
                        {cat.name}
                      </span>
                    ))}
                  </div>
                  <Link href={`/${locale}/news/${post.slug}`} className="group">
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors mb-3 font-serif">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-400">{post.formattedDate}</time>
                    <Link
                      href={`/${locale}/news/${post.slug}`}
                      className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors inline-flex items-center gap-1"
                    >
                      {t('readMore')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">{t('noNews')}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
            {isJa ? 'ご質問はお気軽に' : 'Questions?'}
          </h2>
          <p className="text-gray-600 mb-8">
            {isJa
              ? '詳しい情報やご質問がありましたら、お問い合わせください。'
              : 'For more information or questions, please contact us.'}
          </p>
          <Link href={`/${locale}/contact`} className="btn-primary">
            {tContact('pageTitle')}
          </Link>
        </div>
      </section>
    </div>
  );
}
