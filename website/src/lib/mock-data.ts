/**
 * モックデータ
 * WordPress接続前の開発用ダミーデータ
 */

import { WPPost, WPPage, WPCategory } from './wordpress';
import { Locale } from '@/i18n/config';

// ローカライズされた投稿データ
interface LocalizedPostData {
  title: string;
  content: string;
  excerpt: string;
}

interface LocalizedPost {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  slug: string;
  status: 'publish' | 'draft';
  type: 'post';
  featured_media: number;
  categories: number[];
  tags: number[];
  ja: LocalizedPostData;
  en: LocalizedPostData;
}

const localizedPosts: LocalizedPost[] = [
  {
    id: 1,
    date: '2026-02-01T09:00:00',
    date_gmt: '2026-02-01T00:00:00',
    modified: '2026-02-01T09:00:00',
    slug: 'weekly-gatherings',
    status: 'publish',
    type: 'post',
    featured_media: 0,
    categories: [1],
    tags: [],
    ja: {
      title: '集会のご案内',
      content: `<p>マリポサハウスでは、以下の集会を行っています。</p>
<h3>日曜礼拝</h3>
<p>毎週日曜日 10:00〜12:00、オンラインで共に主を礼拝しています。</p>
<h3>水曜日 聖書の学び会</h3>
<p>毎週水曜日、聖書を深く学ぶ時を持っています。</p>
<h3>BSF（Bible Study Fellowship）</h3>
<p>国際的な聖書研究プログラムに参加しています。</p>
<p>どなたでもお気軽にご参加ください。初めての方も心から歓迎いたします。</p>`,
      excerpt: '<p>日曜礼拝、水曜日の聖書の学び会、BSFを行っています。</p>',
    },
    en: {
      title: 'Our Weekly Gatherings',
      content: `<p>Mariposa House holds the following gatherings:</p>
<h3>Sunday Worship</h3>
<p>Every Sunday 10:00-12:00, we worship the Lord together online.</p>
<h3>Wednesday Bible Study</h3>
<p>Every Wednesday, we gather for in-depth Bible study.</p>
<h3>BSF (Bible Study Fellowship)</h3>
<p>We participate in this international Bible study program.</p>
<p>Everyone is welcome to join. First-time visitors are warmly welcomed.</p>`,
      excerpt: '<p>We hold Sunday worship, Wednesday Bible study, and BSF.</p>',
    },
  },
  {
    id: 2,
    date: '2026-01-25T10:00:00',
    date_gmt: '2026-01-25T01:00:00',
    modified: '2026-01-25T10:00:00',
    slug: 'bsf-2025-2026',
    status: 'publish',
    type: 'post',
    featured_media: 0,
    categories: [1],
    tags: [],
    ja: {
      title: 'BSF 2025-2026年度のご案内',
      content: `<p>BSF（Bible Study Fellowship）が行われています。</p>
<h3>BSFとは</h3>
<p>BSFは1959年に始まった国際的な聖書研究プログラムです。世界中で同じ箇所を学び、質問に答え、グループで分かち合うことを通して、聖書の理解を深めていきます。</p>
<h3>開催期間</h3>
<p>毎年9月から翌年5月まで行われます。</p>
<p>ご関心がありましたら、ぜひ教会またはお問い合わせフォームよりご連絡ください。</p>`,
      excerpt: '<p>BSF（毎年9月〜5月）が行われています。</p>',
    },
    en: {
      title: 'BSF 2025-2026 Season',
      content: `<p>BSF (Bible Study Fellowship) is currently in session.</p>
<h3>About BSF</h3>
<p>BSF is an international Bible study program that began in 1959. Through studying the same passages worldwide, answering questions, and sharing in groups, we deepen our understanding of the Bible.</p>
<h3>Schedule</h3>
<p>BSF runs annually from September to May.</p>
<p>If you are interested, please contact us through the church or the inquiry form.</p>`,
      excerpt: '<p>BSF (September-May annually) is currently in session.</p>',
    },
  },
  {
    id: 3,
    date: '2026-01-15T09:00:00',
    date_gmt: '2026-01-15T00:00:00',
    modified: '2026-01-15T09:00:00',
    slug: 'welcome-message',
    status: 'publish',
    type: 'post',
    featured_media: 0,
    categories: [1],
    tags: [],
    ja: {
      title: 'ウェブサイトを開設しました',
      content: `<p>マリポサハウスのウェブサイトを開設しました。</p>
<p>このサイトでは、私たちの信仰、礼拝案内、お知らせなどをお伝えしていきます。</p>
<p>「マリポサ」はスペイン語で「蝶」を意味します。蝶が幼虫から美しい姿に変容するように、私たちもキリストにあって日々新しくされていくことを願っています。</p>
<p>ご質問やご関心がございましたら、お気軽にお問い合わせください。皆様との出会いを心よりお待ちしております。</p>`,
      excerpt: '<p>マリポサハウスのウェブサイトを開設しました。私たちの信仰や礼拝案内をお伝えしていきます。</p>',
    },
    en: {
      title: 'Website Launched',
      content: `<p>We have launched the Mariposa House website.</p>
<p>On this site, we will share about our faith, worship information, and announcements.</p>
<p>"Mariposa" means "butterfly" in Spanish. Just as a butterfly transforms from a caterpillar into a beautiful creature, we hope to be renewed daily in Christ.</p>
<p>If you have any questions or interest, please feel free to contact us. We look forward to meeting you.</p>`,
      excerpt: '<p>We have launched the Mariposa House website. We will share about our faith and worship information.</p>',
    },
  },
];

// ローカライズされたカテゴリデータ
interface LocalizedCategory {
  id: number;
  count: number;
  slug: string;
  ja: { name: string; description: string };
  en: { name: string; description: string };
}

const localizedCategories: LocalizedCategory[] = [
  {
    id: 1,
    count: 3,
    slug: 'news',
    ja: { name: 'お知らせ', description: '教会からのお知らせ' },
    en: { name: 'News', description: 'Church announcements' },
  },
  {
    id: 2,
    count: 1,
    slug: 'events',
    ja: { name: 'イベント', description: 'イベント情報' },
    en: { name: 'Events', description: 'Event information' },
  },
];

/**
 * ロケールに応じたモック投稿を取得
 */
export function getMockPosts(locale: Locale = 'ja'): WPPost[] {
  return localizedPosts.map((post) => {
    const localized = post[locale];
    return {
      id: post.id,
      date: post.date,
      date_gmt: post.date_gmt,
      modified: post.modified,
      slug: post.slug,
      status: post.status,
      type: post.type,
      title: { rendered: localized.title },
      content: { rendered: localized.content, protected: false },
      excerpt: { rendered: localized.excerpt, protected: false },
      featured_media: post.featured_media,
      categories: post.categories,
      tags: post.tags,
    };
  });
}

/**
 * ロケールに応じたモックカテゴリを取得
 */
export function getMockCategories(locale: Locale = 'ja'): WPCategory[] {
  return localizedCategories.map((cat) => {
    const localized = cat[locale];
    return {
      id: cat.id,
      count: cat.count,
      name: localized.name,
      slug: cat.slug,
      description: localized.description,
    };
  });
}

// 後方互換性のため、デフォルトは日本語
export const mockPosts: WPPost[] = getMockPosts('ja');
export const mockCategories: WPCategory[] = getMockCategories('ja');

export const mockPages: WPPage[] = [
  {
    id: 1,
    date: '2026-01-01T00:00:00',
    slug: 'about',
    status: 'publish',
    title: {
      rendered: '私たちについて',
    },
    content: {
      rendered: '<p>マリポサハウスについてのページ内容</p>',
    },
    excerpt: {
      rendered: '',
    },
    featured_media: 0,
    parent: 0,
    menu_order: 0,
  },
];
