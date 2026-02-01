/**
 * モックデータ
 * WordPress接続前の開発用ダミーデータ
 */

import { WPPost, WPPage, WPCategory } from './wordpress';

export const mockPosts: WPPost[] = [
  {
    id: 1,
    date: '2026-02-01T09:00:00',
    date_gmt: '2026-02-01T00:00:00',
    modified: '2026-02-01T09:00:00',
    slug: 'weekly-gatherings',
    status: 'publish',
    type: 'post',
    title: {
      rendered: '集会のご案内',
    },
    content: {
      rendered: `<p>マリポサハウスでは、以下の集会を行っています。</p>
<h3>日曜礼拝</h3>
<p>毎週日曜日 10:00〜12:00、オンラインで共に主を礼拝しています。</p>
<h3>水曜日 聖書の学び会</h3>
<p>毎週水曜日、聖書を深く学ぶ時を持っています。</p>
<h3>BSF（Bible Study Fellowship）</h3>
<p>国際的な聖書研究プログラムに参加しています。</p>
<p>どなたでもお気軽にご参加ください。初めての方も心から歓迎いたします。</p>`,
      protected: false,
    },
    excerpt: {
      rendered: '<p>日曜礼拝、水曜日の聖書の学び会、BSFを行っています。</p>',
      protected: false,
    },
    featured_media: 0,
    categories: [1],
    tags: [],
  },
  {
    id: 2,
    date: '2026-01-25T10:00:00',
    date_gmt: '2026-01-25T01:00:00',
    modified: '2026-01-25T10:00:00',
    slug: 'bsf-2025-2026',
    status: 'publish',
    type: 'post',
    title: {
      rendered: 'BSF 2025-2026年度のご案内',
    },
    content: {
      rendered: `<p>BSF（Bible Study Fellowship）が行われています。</p>
<h3>BSFとは</h3>
<p>BSFは1959年に始まった国際的な聖書研究プログラムです。世界中で同じ箇所を学び、質問に答え、グループで分かち合うことを通して、聖書の理解を深めていきます。</p>
<h3>開催期間</h3>
<p>毎年9月から翌年5月まで行われます。</p>
<p>ご関心がありましたら、ぜひ教会またはお問い合わせフォームよりご連絡ください。</p>`,
      protected: false,
    },
    excerpt: {
      rendered: '<p>BSF（毎年9月〜5月）が行われています。</p>',
      protected: false,
    },
    featured_media: 0,
    categories: [1],
    tags: [],
  },
  {
    id: 3,
    date: '2026-01-15T09:00:00',
    date_gmt: '2026-01-15T00:00:00',
    modified: '2026-01-15T09:00:00',
    slug: 'welcome-message',
    status: 'publish',
    type: 'post',
    title: {
      rendered: 'ウェブサイトを開設しました',
    },
    content: {
      rendered: `<p>マリポサハウスのウェブサイトを開設しました。</p>
<p>このサイトでは、私たちの信仰、礼拝案内、お知らせなどをお伝えしていきます。</p>
<p>「マリポサ」はスペイン語で「蝶」を意味します。蝶が幼虫から美しい姿に変容するように、私たちもキリストにあって日々新しくされていくことを願っています。</p>
<p>ご質問やご関心がございましたら、お気軽にお問い合わせください。皆様との出会いを心よりお待ちしております。</p>`,
      protected: false,
    },
    excerpt: {
      rendered: '<p>マリポサハウスのウェブサイトを開設しました。私たちの信仰や礼拝案内をお伝えしていきます。</p>',
      protected: false,
    },
    featured_media: 0,
    categories: [1],
    tags: [],
  },
];

export const mockCategories: WPCategory[] = [
  {
    id: 1,
    count: 3,
    name: 'お知らせ',
    slug: 'news',
    description: '教会からのお知らせ',
  },
  {
    id: 2,
    count: 1,
    name: 'イベント',
    slug: 'events',
    description: 'イベント情報',
  },
];

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
