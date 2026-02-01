import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/content";

export const revalidate = 60;

export default async function Home() {
  // 最新のお知らせを3件取得
  const latestNews = await getPosts({ perPage: 3 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            {/* Butterfly Icon */}
            <div className="mb-10">
              <Image
                src="/butterfly.png"
                alt="Mariposa"
                width={160}
                height={160}
                className="mx-auto"
              />
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-serif mb-4">
              Mariposa House
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-serif mb-12">
              マリポサハウス
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/worship" className="btn-primary inline-flex items-center justify-center gap-2">
                礼拝のご案内
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-gray-900 font-serif">
              お知らせ
            </h2>
            <Link
              href="/news"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              すべて見る →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestNews.map((post) => (
              <Link key={post.id} href={`/news/${post.slug}`} className="card p-6 group">
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
                <h3 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <time className="text-xs text-gray-400">
                  {post.formattedDate}
                </time>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
            礼拝のご案内
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            毎週日曜日、オンラインで共に神様を礼拝し、み言葉を学び、交わりの時を持っています。
            初めての方も大歓迎です。
          </p>

          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">毎週日曜日 10:00 - 12:00（オンライン）</p>
              </div>
            </div>
          </div>

          <Link href="/worship" className="btn-primary inline-flex items-center gap-2">
            詳しく見る
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
            あなたをお待ちしています
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            マリポサハウスは、すべての人を歓迎します。<br />
            共に礼拝し、共に成長し、共に神の愛を分かち合いましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/worship" className="btn-primary">
              礼拝のご案内
            </Link>
            <Link href="/contact" className="btn-secondary">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
