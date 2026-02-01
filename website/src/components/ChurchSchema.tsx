import { type Locale } from '@/i18n/config';

interface ChurchSchemaProps {
  locale: Locale;
}

export default function ChurchSchema({ locale }: ChurchSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Church",
    "name": locale === 'ja' ? "マリポサハウス" : "Mariposa House Church",
    "alternateName": "Mariposa House",
    "description": locale === 'ja'
      ? "マリポサハウスはキリストにあって新しく造られる喜びを分かち合う教会です。"
      : "Mariposa House is a church community sharing the joy of being made new in Christ.",
    "url": "https://mariposahouse.church",
    "logo": "https://mariposahouse.church/logo.png",
    "image": "https://mariposahouse.church/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "JP",
    },
    "sameAs": [
      // ソーシャルメディアリンクを追加可能
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "10:30",
      "closes": "12:00",
      "description": locale === 'ja' ? "主日礼拝" : "Sunday Worship",
    },
    "event": {
      "@type": "Event",
      "name": locale === 'ja' ? "主日礼拝" : "Sunday Worship Service",
      "description": locale === 'ja'
        ? "毎週日曜日の礼拝"
        : "Weekly Sunday worship service",
      "eventSchedule": {
        "@type": "Schedule",
        "byDay": "https://schema.org/Sunday",
        "startTime": "10:30",
        "endTime": "12:00",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
