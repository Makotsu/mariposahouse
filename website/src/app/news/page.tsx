import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/content";

export const revalidate = 60;

export default async function NewsPage() {
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
            お知らせ
          </h1>
          <p className="text-xl text-gray-500">News & Updates</p>
        </div>
      </section>

      {/* News List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="space-y-6">
              {posts.map((post) => (
                <article key={post.id} className="bg-white border border-gray-200 rounded-lg p-6">
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
                  <Link href={`/news/${post.slug}`} className="group">
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors mb-3 font-serif">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-400">
                      {post.formattedDate}
                    </time>
                    <Link
                      href={`/news/${post.slug}`}
                      className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
                    >
                      続きを読む →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">お知らせはまだありません。</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
            ご質問はお気軽に
          </h2>
          <p className="text-gray-600 mb-8">
            詳しい情報やご質問がありましたら、お問い合わせください。
          </p>
          <Link href="/contact" className="btn-primary">
            お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}
