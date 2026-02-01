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
      rendered: `
        <p>マリポサハウスでは、以下の集会を行っています。</p>
        <h3>日曜礼拝</h3>
        <p>毎週日曜日、共に神様を礼拝しています。</p>
        <h3>水曜日 聖書の学び会</h3>
        <p>毎週水曜日、聖書を深く学ぶ時を持っています。</p>
        <h3>BSF（Bible Study Fellowship）</h3>
        <p>国際的な聖書研究プログラムに参加しています。</p>
        <p>どなたでもお気軽にご参加ください。</p>
      `,
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
