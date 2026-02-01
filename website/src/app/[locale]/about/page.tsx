import Link from "next/link";
import Image from "next/image";
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
    title: locale === 'ja' ? '私たちについて' : 'About Us',
    description: locale === 'ja'
      ? 'マリポサハウスの紹介、「マリポサ」の意味、私たちのビジョンについて'
      : 'Learn about Mariposa House, the meaning of "Mariposa", and our vision',
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('About');
  const tContact = await getTranslations('Contact');

  const isJa = locale === 'ja';

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

      {/* Welcome Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
            {t('welcome.title')}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            {isJa ? (
              <>
                マリポサハウスへお越しいただきありがとうございます。<br />
                私たちは、あなたとの出会いを心から歓迎します。<br />
                教会が初めての方、久しぶりの方、どんな背景をお持ちの方でも、<br />
                ありのままのあなたでお越しください。
              </>
            ) : (
              <>
                Thank you for visiting Mariposa House.<br />
                We warmly welcome you.<br />
                Whether this is your first time at church, or you&apos;re returning after a while,<br />
                whatever your background, please come as you are.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Meaning of Mariposa */}
      <section className="py-20 bg-white" id="meaning">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-8 text-center">
            {t('mariposa.title')}
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {isJa ? (
              <>
                <p>
                  「マリポサ」はスペイン語で<strong className="text-gray-900">蝶</strong>を意味します。
                </p>
                <p>
                  蝶は幼虫から蛹を経て、美しい翅を持つ成虫へと変容する生き物です。
                  この驚くべき変態は、私たちがキリストにあって「新しく造られる」過程を
                  象徴しています。
                </p>
                <p>
                  古い自分を後にし、神の愛の中で成長し、やがてキリストの似姿へと
                  変えられていく — これが私たちマリポサハウスのビジョンです。
                </p>
              </>
            ) : (
              <>
                <p>
                  &quot;Mariposa&quot; means <strong className="text-gray-900">butterfly</strong> in Spanish.
                </p>
                <p>
                  A butterfly transforms from a caterpillar, through a chrysalis, into a beautiful winged creature.
                  This remarkable metamorphosis symbolizes our process of becoming &quot;a new creation&quot; in Christ.
                </p>
                <p>
                  Leaving behind our old selves, growing in God&apos;s love, and eventually being transformed
                  into the likeness of Christ — this is the vision of Mariposa House.
                </p>
              </>
            )}
          </div>

          <blockquote className="scripture-quote mt-12 max-w-2xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed">
              {isJa
                ? '「私たちはみな、覆いを取り除かれた顔に、鏡のように主の栄光を映しながら、栄光から栄光へと、主と同じかたちに変えられていきます。」'
                : '"And we all, who with unveiled faces contemplate the Lord\'s glory, are being transformed into his image with ever-increasing glory."'}
            </p>
            <cite className="text-gray-500 mt-2 block not-italic">
              — {isJa ? '2コリント 3:18' : '2 Corinthians 3:18'}
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Core Scripture */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-12 text-center">
            {t('scriptures.title')}
          </h2>

          <div className="space-y-8">
            <div className="scripture-quote">
              <h3 className="font-bold text-gray-900 mb-2">
                {isJa ? 'ガラテヤ 2:20' : 'Galatians 2:20'}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                {isJa
                  ? '「私はキリストとともに十字架につけられました。もはや私が生きているのではなく、キリストが私のうちに生きておられるのです。」'
                  : '"I have been crucified with Christ and I no longer live, but Christ lives in me."'}
              </p>
              <p className="text-gray-400 text-sm">
                {isJa
                  ? 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me.'
                  : '私はキリストとともに十字架につけられました。もはや私が生きているのではなく、キリストが私のうちに生きておられるのです。'}
              </p>
            </div>

            <div className="scripture-quote">
              <h3 className="font-bold text-gray-900 mb-2">
                {isJa ? '2コリント 5:17' : '2 Corinthians 5:17'}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                {isJa
                  ? '「ですから、だれでもキリストのうちにあるなら、その人は新しく造られた者です。古いものは過ぎ去って、見よ、すべてが新しくなりました。」'
                  : '"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"'}
              </p>
              <p className="text-gray-400 text-sm">
                {isJa
                  ? 'Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.'
                  : 'ですから、だれでもキリストのうちにあるなら、その人は新しく造られた者です。'}
              </p>
            </div>

            <div className="scripture-quote">
              <h3 className="font-bold text-gray-900 mb-2">
                {isJa ? 'エペソ 2:10' : 'Ephesians 2:10'}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                {isJa
                  ? '「実に、私たちは神の作品であって、良い行いをするためにキリスト・イエスにあって造られたのです。」'
                  : '"For we are God\'s handiwork, created in Christ Jesus to do good works."'}
              </p>
              <p className="text-gray-400 text-sm">
                {isJa
                  ? 'For we are his workmanship, created in Christ Jesus for good works.'
                  : '実に、私たちは神の作品であって、良い行いをするためにキリスト・イエスにあって造られたのです。'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
            {isJa ? 'お会いできることを楽しみにしています' : 'We look forward to meeting you'}
          </h2>
          <p className="text-gray-600 mb-8">
            {isJa
              ? 'ご質問やご不明な点がありましたら、お気軽にお問い合わせください。'
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
