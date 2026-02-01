import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Locale } from "@/i18n/config";
import type { Metadata } from "next";
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ScriptureQuote } from '@/components/ui/ScriptureQuote';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ja' ? '信仰と礼拝' : 'Faith & Worship',
    description: locale === 'ja'
      ? 'マリポサハウスの信仰告白と礼拝案内について'
      : 'Learn about our beliefs and worship services at Mariposa House',
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

  const beliefs = ['bible', 'trinity', 'jesus', 'salvation', 'holySpirit'] as const;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroSection
        title={t('pageTitle')}
        subtitle={t('pageSubtitle')}
      />

      {/* Core Beliefs */}
      <Section variant="gray">
        <Container size="sm">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-3">
              {t('beliefs.title')}
            </h2>
            <p className="text-gray-600">{t('beliefs.intro')}</p>
          </div>

          <div className="space-y-6">
            {beliefs.map((key, index) => (
              <div key={key} className="card p-6">
                <h3 className="font-bold text-gray-900 mb-3">
                  {index + 1}. {t(`beliefs.${key}.title`)}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {t(`beliefs.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Main Service */}
      <Section variant="white">
        <Container size="md">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-base mb-2">{t('service.day')}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-4">
              {t('service.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('service.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">{t('service.timeLabel')}</h3>
              <p className="text-gray-600">{t('service.timeValue')}</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">{t('service.contentLabel')}</h3>
              <p className="text-gray-600">{t('service.contentValue')}</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">{t('service.welcomeLabel')}</h3>
              <p className="text-gray-600">{t('service.welcomeValue')}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Other Gatherings */}
      <Section variant="gray" id="schedule">
        <Container size="md">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-2">
              {t('gatherings.title')}
            </h2>
            <p className="text-gray-500">{t('gatherings.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="card p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">
                {t('gatherings.bibleStudy.title')}
              </h3>
              <p className="text-gray-500 text-base mb-3">
                {t('gatherings.bibleStudy.schedule')}
              </p>
              <p className="text-gray-600 text-base">
                {t('gatherings.bibleStudy.description')}
              </p>
            </div>

            <div className="card p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">
                {t('gatherings.bsf.title')}
              </h3>
              <p className="text-gray-500 text-base mb-3">
                {t('gatherings.bsf.schedule')}
              </p>
              <p className="text-gray-600 text-base">
                {t('gatherings.bsf.description')}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Agape Love */}
      <Section variant="gray">
        <Container size="sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-2">
              {t('agape.title')}
            </h2>
            <p className="text-gray-500">{t('agape.subtitle')}</p>
          </div>

          <ScriptureQuote
            text={t('agape.scripture')}
            reference={t('agape.reference')}
            centered
            className="mb-8"
          />

          <div className="space-y-6 text-gray-600 leading-relaxed text-center">
            <p>{t('agape.description')}</p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        title={t('cta.title')}
        description={t('cta.description')}
        buttons={[
          { label: tAbout('pageTitle'), href: `/${locale}/about` },
          { label: tContact('pageTitle'), href: `/${locale}/contact`, variant: 'secondary' }
        ]}
      />
    </div>
  );
}
