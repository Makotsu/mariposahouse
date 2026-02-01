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
    title: locale === 'ja' ? '信仰と礼拝' : 'Faith & Worship',
    description: locale === 'ja'
      ? 'マリポサハウスの信仰告白、礼拝案内、弟子訓練について'
      : 'Learn about our beliefs, worship services, and discipleship at Mariposa House',
  };
}

export default async function WorshipPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Worship');
  const tAbout = await getTranslations('About');
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

      {/* Core Beliefs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-4">
              {t('beliefs.title')}
            </h2>
            <p className="text-gray-600">
              {isJa
                ? 'マリポサハウスは、聖書に基づく歴史的なキリスト教信仰に立っています。'
                : 'Mariposa House stands on historic Christian faith based on the Bible.'}
            </p>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">1. {t('beliefs.bible.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('beliefs.bible.description')}
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">2. {t('beliefs.trinity.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('beliefs.trinity.description')}
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">3. {t('beliefs.jesus.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('beliefs.jesus.description')}
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">4. {t('beliefs.salvation.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('beliefs.salvation.description')}
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">5. {t('beliefs.holySpirit.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('beliefs.holySpirit.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm mb-2">
              {isJa ? '毎週日曜日' : 'Every Sunday'}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
              {t('service.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('service.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">
                {isJa ? '時間' : 'Time'}
              </h3>
              <p className="text-gray-600">
                {isJa ? '10:00 - 12:00（オンライン）' : '10:00 AM - 12:00 PM (Online)'}
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">
                {isJa ? '内容' : 'Content'}
              </h3>
              <p className="text-gray-600">
                {isJa ? '賛美・祈り・聖書メッセージ' : 'Praise, Prayer, Bible Message'}
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">
                {isJa ? '対象' : 'Welcome'}
              </h3>
              <p className="text-gray-600">
                {isJa ? 'どなたでも歓迎' : 'Everyone is welcome'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Gatherings */}
      <section className="py-20 bg-gray-50" id="schedule">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-2">
              {t('gatherings.title')}
            </h2>
            <p className="text-gray-500">Regular Gatherings</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                {t('gatherings.shirHashirim.title')}
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                {isJa ? '雅歌の学び' : 'Song of Songs Study'}
              </p>
              <p className="text-gray-600 text-sm">
                {t('gatherings.shirHashirim.description')}
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                {t('gatherings.prayer.title')}
              </h3>
              <p className="text-gray-500 text-sm mb-3">Prayer Meeting</p>
              <p className="text-gray-600 text-sm">
                {t('gatherings.prayer.description')}
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                {t('gatherings.smallGroup.title')}
              </h3>
              <p className="text-gray-500 text-sm mb-3">Small Groups</p>
              <p className="text-gray-600 text-sm">
                {t('gatherings.smallGroup.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discipleship */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm mb-2">
              {isJa ? '弟子訓練' : 'Discipleship'}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
              {t('discipleship.title')}
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 text-gray-600 leading-relaxed">
            <p>{t('discipleship.description')}</p>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 font-serif mb-6 text-center">
              {t('discipleship.traits.title')}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-1">{t('discipleship.traits.obedience')}</h4>
                <p className="text-gray-600 text-sm">
                  {isJa ? '聖書を学び、その教えに従って歩む' : 'Study the Bible and walk according to its teachings'}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-1">{t('discipleship.traits.prayer')}</h4>
                <p className="text-gray-600 text-sm">
                  {isJa ? '絶えず祈り、神との交わりを深める' : 'Pray continually and deepen communion with God'}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-1">{t('discipleship.traits.scripture')}</h4>
                <p className="text-gray-600 text-sm">
                  {isJa ? '互いに愛し合い、仕え合う' : 'Love and serve one another'}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-1">{t('discipleship.traits.fellowship')}</h4>
                <p className="text-gray-600 text-sm">
                  {isJa ? 'キリストの似姿へと変えられていく' : 'Being transformed into the likeness of Christ'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agape Love */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-2">
              {t('agape.title')}
            </h2>
            <p className="text-gray-500">Agape Love</p>
          </div>

          <blockquote className="scripture-quote text-center mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              {t('agape.scripture')}
            </p>
            <cite className="text-gray-500 not-italic">— {t('agape.reference')}</cite>
          </blockquote>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>{t('agape.description')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
            {isJa ? 'ぜひご参加ください' : 'Join Us'}
          </h2>
          <p className="text-gray-600 mb-8">
            {isJa
              ? '初めての方も大歓迎です。お気軽にお問い合わせください。'
              : 'First-time visitors are always welcome. Please feel free to contact us.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/about`} className="btn-primary">
              {tAbout('pageTitle')}
            </Link>
            <Link href={`/${locale}/contact`} className="btn-secondary">
              {tContact('pageTitle')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
