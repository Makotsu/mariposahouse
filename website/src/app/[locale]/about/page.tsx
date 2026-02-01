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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroSection
        title={t('pageTitle')}
        subtitle={t('pageSubtitle')}
      />

      {/* Welcome Message */}
      <Section variant="gray" padding="md">
        <Container size="sm" center>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
            {t('welcome.title')}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            {t('welcome.message1')}<br />
            {t('welcome.message2')}<br />
            {t('welcome.message3')}<br />
            {t('welcome.message4')}
          </p>
        </Container>
      </Section>

      {/* Meaning of Mariposa */}
      <Section variant="white" id="meaning">
        <Container size="md">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-8 text-center">
            {t('mariposa.title')}
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            <p>
              {t('mariposa.content1Prefix')}
              <strong className="text-gray-900">{t('mariposa.butterfly')}</strong>
              {t('mariposa.content1Suffix')}
            </p>
            <p>{t('mariposa.content2')}</p>
            <p>{t('mariposa.content3')}</p>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <ScriptureQuote
              text={t('mariposa.scripture')}
              reference={t('mariposa.scriptureRef')}
              centered
            />
          </div>
        </Container>
      </Section>

      {/* Core Scripture */}
      <Section variant="white">
        <Container size="sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-12 text-center">
            {t('scriptures.title')}
          </h2>

          <div className="space-y-8">
            <div className="scripture-quote">
              <h3 className="font-bold text-gray-900 mb-2">
                {t('scriptures.galatians.reference')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                {t('scriptures.galatians.text')}
              </p>
              <p className="text-gray-400 text-sm">
                {t('scriptures.galatians.translation')}
              </p>
            </div>

            <div className="scripture-quote">
              <h3 className="font-bold text-gray-900 mb-2">
                {t('scriptures.corinthians.reference')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                {t('scriptures.corinthians.text')}
              </p>
              <p className="text-gray-400 text-sm">
                {t('scriptures.corinthians.translation')}
              </p>
            </div>

            <div className="scripture-quote">
              <h3 className="font-bold text-gray-900 mb-2">
                {t('scriptures.ephesians.reference')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                {t('scriptures.ephesians.text')}
              </p>
              <p className="text-gray-400 text-sm">
                {t('scriptures.ephesians.translation')}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        title={t('cta.title')}
        description={t('cta.description')}
        buttons={[
          { label: tContact('pageTitle'), href: `/${locale}/contact` }
        ]}
      />
    </div>
  );
}
