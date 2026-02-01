/**
 * WordPress REST API Client
 * ヘッドレスWordPressとの連携用ユーティリティ
 */

// WordPress API のベースURL（環境変数から取得）
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json';

// 型定義
export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

export interface WPPage {
  id: number;
  date: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  parent: number;
  menu_order: number;
  acf?: Record<string, unknown>; // Advanced Custom Fields
}

export interface WPCategory {
  id: number;
  count: number;
  name: string;
  slug: string;
  description: string;
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: Record<string, {
      source_url: string;
      width: number;
      height: number;
    }>;
  };
}

// APIリクエスト用のヘルパー
async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${WORDPRESS_API_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    next: {
      revalidate: 60, // 60秒ごとにキャッシュを再検証
    },
  });

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// ===== 投稿（お知らせ）関連 =====

/**
 * すべての投稿を取得
 */
export async function getPosts(params?: {
  perPage?: number;
  page?: number;
  categories?: number[];
  orderBy?: 'date' | 'title' | 'id';
  order?: 'asc' | 'desc';
}): Promise<WPPost[]> {
  const searchParams = new URLSearchParams();

  searchParams.set('per_page', String(params?.perPage || 10));
  searchParams.set('page', String(params?.page || 1));
  searchParams.set('orderby', params?.orderBy || 'date');
  searchParams.set('order', params?.order || 'desc');
  searchParams.set('_embed', 'true'); // 関連データを含める

  if (params?.categories?.length) {
    searchParams.set('categories', params.categories.join(','));
  }

  return fetchAPI<WPPost[]>(`/wp/v2/posts?${searchParams.toString()}`);
}

/**
 * スラッグで投稿を取得
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await fetchAPI<WPPost[]>(
    `/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=true`
  );
  return posts[0] || null;
}

/**
 * IDで投稿を取得
 */
export async function getPostById(id: number): Promise<WPPost> {
  return fetchAPI<WPPost>(`/wp/v2/posts/${id}?_embed=true`);
}

// ===== ページ関連 =====

/**
 * すべてのページを取得
 */
export async function getPages(): Promise<WPPage[]> {
  return fetchAPI<WPPage[]>('/wp/v2/pages?per_page=100&_embed=true');
}

/**
 * スラッグでページを取得
 */
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await fetchAPI<WPPage[]>(
    `/wp/v2/pages?slug=${encodeURIComponent(slug)}&_embed=true`
  );
  return pages[0] || null;
}

// ===== カテゴリ関連 =====

/**
 * すべてのカテゴリを取得
 */
export async function getCategories(): Promise<WPCategory[]> {
  return fetchAPI<WPCategory[]>('/wp/v2/categories?per_page=100');
}

/**
 * スラッグでカテゴリを取得
 */
export async function getCategoryBySlug(slug: string): Promise<WPCategory | null> {
  const categories = await fetchAPI<WPCategory[]>(
    `/wp/v2/categories?slug=${encodeURIComponent(slug)}`
  );
  return categories[0] || null;
}

// ===== メディア関連 =====

/**
 * IDでメディアを取得
 */
export async function getMediaById(id: number): Promise<WPMedia> {
  return fetchAPI<WPMedia>(`/wp/v2/media/${id}`);
}

// ===== ユーティリティ =====

/**
 * HTMLタグを除去してプレーンテキストに変換
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * 日付をフォーマット
 */
export function formatDate(dateString: string, locale: string = 'ja-JP'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * 投稿のアイキャッチ画像URLを取得
 */
export function getFeaturedImageUrl(post: WPPost): string | null {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
}

/**
 * 投稿のカテゴリを取得
 */
export function getPostCategories(post: WPPost): Array<{ id: number; name: string; slug: string }> {
  return post._embedded?.['wp:term']?.[0] || [];
}
