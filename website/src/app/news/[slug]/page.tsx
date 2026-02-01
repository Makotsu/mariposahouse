import Link from "next/link";
import { notFound } from "next/navigation";
import ButterflyIcon from "@/components/ButterflyIcon";
import { getPostBySlug, getPosts } from "@/lib/content";

export const revalidate = 60;

// 静的生成用のパラメータを生成
export async function generateStaticParams() {
  const posts = await getPosts({ perPage: 100 });
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// メタデータ生成
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "記事が見つかりません | マリポサハウス",
    };
  }

  return {
    title: `${post.title} | マリポサハウス`,
    description: post.excerpt,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="gradient-hero py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-primary transition-colors">
                  ホーム
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/news" className="text-gray-500 hover:text-primary transition-colors">
                  お知らせ
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-primary font-medium truncate max-w-[200px]">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((cat) => (
              <span
                key={cat.id}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
              >
                {cat.name}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-4">
            {post.title}
          </h1>

          {/* Date */}
          <time className="text-gray-500">
            {post.formattedDate}
          </time>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:bg-beige-light prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Back to list */}
      <section className="py-12 bg-beige-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/news"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            お知らせ一覧に戻る
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ButterflyIcon className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-bold text-primary font-serif mb-4">
            ご質問・お問い合わせ
          </h2>
          <p className="text-gray-600 mb-6">
            お知らせについてのご質問は、お気軽にお問い合わせください。
          </p>
          <Link href="/contact" className="btn-primary">
            お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}
