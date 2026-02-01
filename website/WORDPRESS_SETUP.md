# WordPress ヘッドレスCMS セットアップガイド

このガイドでは、マリポサハウスのウェブサイトでWordPressをヘッドレスCMSとして使用するための設定手順を説明します。

## 目次

1. [概要](#概要)
2. [WordPressのインストール](#wordpressのインストール)
3. [REST APIの設定](#rest-apiの設定)
4. [推奨プラグイン](#推奨プラグイン)
5. [Next.jsとの接続設定](#nextjsとの接続設定)
6. [コンテンツの管理](#コンテンツの管理)
7. [セキュリティ設定](#セキュリティ設定)

---

## 概要

### ヘッドレスWordPressとは？

ヘッドレスCMSとしてWordPressを使用する場合、WordPressはコンテンツ管理（バックエンド）のみを担当し、フロントエンド（表示）はNext.jsが担当します。

```
┌─────────────────┐      REST API      ┌─────────────────┐
│    WordPress    │ ◄──────────────► │    Next.js      │
│   (バックエンド)  │                    │  (フロントエンド) │
│   記事管理・編集   │                    │   表示・デザイン   │
└─────────────────┘                    └─────────────────┘
```

### メリット

- ✅ WordPressの使い慣れた管理画面で記事を編集
- ✅ Next.jsの高速なページ表示
- ✅ デザインの自由度が高い
- ✅ セキュリティの向上（フロントとバックを分離）

---

## WordPressのインストール

### オプション1: レンタルサーバー（推奨）

日本のレンタルサーバーでWordPressを簡単にインストールできます：

- **エックスサーバー** - WordPress簡単インストール機能あり
- **さくらのレンタルサーバ** - クイックインストール対応
- **ConoHa WING** - WordPressかんたんセットアップ
- **ロリポップ** - WordPress簡単インストール

### オプション2: WordPress.com ビジネスプラン

WordPress.comのビジネスプラン以上でREST APIが利用可能です。

### オプション3: ローカル開発環境

開発用途には [Local](https://localwp.com/) がおすすめです。

```bash
# Localをインストール後、新しいサイトを作成
# サイト名: mariposa-cms
# 環境: Preferred (PHP 8.x, MySQL)
```

---

## REST APIの設定

### 1. パーマリンク設定

WordPress管理画面 → 設定 → パーマリンク設定

**「投稿名」を選択**（重要！これによりREST APIが有効になります）

```
https://your-wordpress-site.com/サンプル投稿/
```

### 2. REST API確認

ブラウザで以下のURLにアクセスして、JSONが返ってくることを確認：

```
https://your-wordpress-site.com/wp-json/wp/v2/posts
```

---

## 推奨プラグイン

### 必須プラグイン

#### 1. WPGraphQL（オプション - より高度な連携用）
REST APIの代わりにGraphQLを使用する場合。

#### 2. Advanced Custom Fields (ACF)
カスタムフィールドを追加する場合。

```php
// functions.php に追加（ACFフィールドをREST APIで公開）
add_filter('acf/rest_api/fields_endpoint', '__return_true');
```

#### 3. All-in-One WP Migration
バックアップ・移行用。

### セキュリティプラグイン

#### 4. Wordfence Security
セキュリティ強化。

#### 5. WP REST API Authentication
REST APIの認証を強化する場合。

---

## Next.jsとの接続設定

### 1. 環境変数の設定

`.env.local` ファイルを編集：

```bash
# WordPressサイトのURL
WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json

# モックモードを無効化
USE_MOCK_DATA=false
```

### 2. 接続テスト

```bash
# 開発サーバーを起動
npm run dev

# ブラウザで確認
open http://localhost:3000/news
```

### 3. 本番環境への設定

Vercelなどのホスティングサービスで環境変数を設定：

```
WORDPRESS_API_URL = https://your-wordpress-site.com/wp-json
USE_MOCK_DATA = false
```

---

## コンテンツの管理

### 投稿（お知らせ）の作成

1. WordPress管理画面 → 投稿 → 新規追加
2. タイトルと本文を入力
3. カテゴリを設定（例：「お知らせ」「イベント」）
4. 「公開」をクリック

### カテゴリの設定

推奨カテゴリ：
- **お知らせ** (slug: `news`) - 一般的なお知らせ
- **イベント** (slug: `events`) - イベント情報
- **礼拝** (slug: `worship`) - 礼拝関連
- **聖書の学び** (slug: `bible-study`) - 聖書学習

### アイキャッチ画像

投稿にアイキャッチ画像を設定すると、お知らせ一覧で表示されます。

推奨サイズ: 1200 x 630px (OGP対応)

---

## セキュリティ設定

### CORS設定（クロスオリジン）

WordPressの `functions.php` に追加：

```php
// REST APIのCORS設定
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        // 許可するオリジンを設定
        $allowed_origins = [
            'https://your-nextjs-site.com',
            'http://localhost:3000', // 開発用
        ];

        $origin = get_http_origin();
        if (in_array($origin, $allowed_origins)) {
            header('Access-Control-Allow-Origin: ' . $origin);
            header('Access-Control-Allow-Methods: GET, OPTIONS');
            header('Access-Control-Allow-Credentials: true');
        }

        return $value;
    });
});
```

### 認証が必要な操作の保護

デフォルトでは、GET操作（読み取り）は認証なしで可能です。
POST/PUT/DELETE（書き込み）は認証が必要です。

### 管理画面の保護

```php
// 管理画面へのアクセス制限（IP制限など）
// .htaccess または Wordfence で設定
```

---

## 開発フロー

### ローカル開発

```bash
# 1. モックモードで開発（WordPress不要）
USE_MOCK_DATA=true

# 2. ローカルWordPressで開発
# Localを使用してWordPressを起動
WORDPRESS_API_URL=http://mariposa-cms.local/wp-json
USE_MOCK_DATA=false
```

### 本番デプロイ

```bash
# 1. WordPressを本番サーバーにデプロイ

# 2. Next.jsをVercel等にデプロイ
vercel --prod

# 3. 環境変数を設定
WORDPRESS_API_URL=https://cms.mariposahouse.church/wp-json
```

---

## トラブルシューティング

### REST APIにアクセスできない

1. パーマリンク設定を確認（「投稿名」になっているか）
2. `.htaccess` が正しく生成されているか
3. セキュリティプラグインがAPIをブロックしていないか

### CORSエラー

1. `functions.php` にCORS設定を追加
2. 許可するオリジンにNext.jsのURLを追加

### 記事が表示されない

1. WordPress管理画面で記事が「公開」状態か確認
2. 環境変数が正しく設定されているか確認
3. `USE_MOCK_DATA=false` になっているか確認

---

## 参考リンク

- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

---

*マリポサハウス教会 ウェブサイトプロジェクト*
