import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ButterflyIcon from "@/components/ButterflyIcon";
import { getPostBySlug, getPosts } from "@/lib/content";
import { Locale, locales } from "@/i18n/config";

export const revalidate = 60;

// 静的生成用のパラメータを生成
export async function generateStaticParams() {
  const posts = await getPosts({ perPage: 100 });
  const params = [];

  for (const locale of locales) {
    for (const post of posts) {
      params.push({
        locale,
        slug: post.slug,
      });
    }
  }

  return params;
}

// メタデータ生成
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: locale === 'ja' ? '記事が見つかりません | マリポサハウス' : 'Article Not Found | Mariposa House',
    };
  }

  return {
    title: `${post.title} | ${locale === 'ja' ? 'マリポサハウス' : 'Mariposa House'}`,
    description: post.excerpt,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('News');
  const tNav = await getTranslations('Navigation');
  const tContact = await getTranslations('Contact');

  const isJa = locale === 'ja';
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href={`/${locale}`} className="text-gray-500 hover:text-gray-900 transition-colors">
                  {tNav('home')}
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href={`/${locale}/news`} className="text-gray-500 hover:text-gray-900 transition-colors">
                  {t('pageTitle')}
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium truncate max-w-[200px]">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((cat) => (
              <span
                key={cat.id}
                className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full"
              >
                {cat.name}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
            {post.title}
          </h1>

          {/* Date */}
          <time className="text-gray-500">{post.formattedDate}</time>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-a:text-gray-700 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-gray-300 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Back to list */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href={`/${locale}/news`}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToList')}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ButterflyIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 font-serif mb-4">
            {isJa ? 'ご質問・お問い合わせ' : 'Questions?'}
          </h2>
          <p className="text-gray-600 mb-6">
            {isJa
              ? 'お知らせについてのご質問は、お気軽にお問い合わせください。'
              : 'If you have any questions, please feel free to contact us.'}
          </p>
          <Link href={`/${locale}/contact`} className="btn-primary">
            {tContact('pageTitle')}
          </Link>
        </div>
      </section>
    </div>
  );
}
