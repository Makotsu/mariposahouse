/**
 * コンテンツ取得レイヤー
 * WordPress API または モックデータからコンテンツを取得
 */

import * as wordpress from './wordpress';
import { getMockPosts, getMockCategories } from './mock-data';
import { Locale } from '@/i18n/config';

// モックモードかどうか
const USE_MOCK = process.env.USE_MOCK_DATA === 'true';

export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  formattedDate: string;
  categories: Array<{ id: number; name: string; slug: string }>;
  featuredImage: string | null;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

/**
 * WordPressの投稿を統一フォーマットに変換
 */
function transformPost(wpPost: wordpress.WPPost): Post {
  return {
    id: wpPost.id,
    slug: wpPost.slug,
    title: wordpress.stripHtml(wpPost.title.rendered),
    content: wpPost.content.rendered,
    excerpt: wordpress.stripHtml(wpPost.excerpt.rendered),
    date: wpPost.date,
    formattedDate: wordpress.formatDate(wpPost.date),
    categories: wordpress.getPostCategories(wpPost),
    featuredImage: wordpress.getFeaturedImageUrl(wpPost),
  };
}

/**
 * モック投稿を統一フォーマットに変換
 */
function transformMockPost(mockPost: wordpress.WPPost, locale: Locale = 'ja'): Post {
  const mockCategories = getMockCategories(locale);
  const category = mockCategories.find(c => mockPost.categories.includes(c.id));
  const dateLocale = locale === 'ja' ? 'ja-JP' : 'en-US';
  return {
    id: mockPost.id,
    slug: mockPost.slug,
    title: wordpress.stripHtml(mockPost.title.rendered),
    content: mockPost.content.rendered,
    excerpt: wordpress.stripHtml(mockPost.excerpt.rendered),
    date: mockPost.date,
    formattedDate: wordpress.formatDate(mockPost.date, dateLocale),
    categories: category ? [{ id: category.id, name: category.name, slug: category.slug }] : [],
    featuredImage: null,
  };
}

// ===== 投稿取得 =====

/**
 * 投稿一覧を取得
 */
export async function getPosts(params?: {
  perPage?: number;
  page?: number;
  category?: string;
  locale?: Locale;
}): Promise<Post[]> {
  const locale = params?.locale || 'ja';

  if (USE_MOCK) {
    const mockPosts = getMockPosts(locale);
    const mockCategories = getMockCategories(locale);
    let posts = [...mockPosts];

    // カテゴリフィルタ
    if (params?.category) {
      const cat = mockCategories.find(c => c.slug === params.category);
      if (cat) {
        posts = posts.filter(p => p.categories.includes(cat.id));
      }
    }

    // ページネーション
    const perPage = params?.perPage || 10;
    const page = params?.page || 1;
    const start = (page - 1) * perPage;
    posts = posts.slice(start, start + perPage);

    return posts.map(p => transformMockPost(p, locale));
  }

  try {
    // カテゴリスラッグからIDを取得
    let categoryIds: number[] | undefined;
    if (params?.category) {
      const category = await wordpress.getCategoryBySlug(params.category);
      if (category) {
        categoryIds = [category.id];
      }
    }

    const wpPosts = await wordpress.getPosts({
      perPage: params?.perPage,
      page: params?.page,
      categories: categoryIds,
    });
    return wpPosts.map(transformPost);
  } catch (error) {
    console.error('Failed to fetch posts from WordPress:', error);
    // フォールバック: モックデータを返す
    const mockPosts = getMockPosts(locale);
    return mockPosts.map(p => transformMockPost(p, locale));
  }
}

/**
 * スラッグで投稿を取得
 */
export async function getPostBySlug(slug: string, locale: Locale = 'ja'): Promise<Post | null> {
  if (USE_MOCK) {
    const mockPosts = getMockPosts(locale);
    const post = mockPosts.find(p => p.slug === slug);
    return post ? transformMockPost(post, locale) : null;
  }

  try {
    const wpPost = await wordpress.getPostBySlug(slug);
    return wpPost ? transformPost(wpPost) : null;
  } catch (error) {
    console.error('Failed to fetch post from WordPress:', error);
    const mockPosts = getMockPosts(locale);
    const post = mockPosts.find(p => p.slug === slug);
    return post ? transformMockPost(post, locale) : null;
  }
}

// ===== カテゴリ取得 =====

/**
 * カテゴリ一覧を取得
 */
export async function getCategories(locale: Locale = 'ja'): Promise<Category[]> {
  const mockCategories = getMockCategories(locale);

  if (USE_MOCK) {
    return mockCategories.map(c => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      count: c.count,
    }));
  }

  try {
    const wpCategories = await wordpress.getCategories();
    return wpCategories.map(c => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      count: c.count,
    }));
  } catch (error) {
    console.error('Failed to fetch categories from WordPress:', error);
    return mockCategories.map(c => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      count: c.count,
    }));
  }
}
