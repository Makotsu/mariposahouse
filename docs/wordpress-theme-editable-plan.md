# Plan: WordPress テーマのコンテンツ編集可能化

## Context
現在のテーマは全ページのコンテンツがPHPテンプレートファイルにハードコードされており、WordPress管理画面から編集できない。非技術者の教会管理者が管理画面からテキストを変更できるように修正する。

## 方針
追加プラグインなしで、WordPress標準機能のみで対応する。

- **Customizer API**: フロントページ・礼拝ページなど構造化されたコンテンツ（テキストフィールド単位で編集）
- **the_content()**: 自由記述ページ（About, Privacy, Contact）はWordPressエディタで編集

Polylangで日英ページが分離されているため、Customizer設定には `_ja` / `_en` の言語サフィックスを付ける。

---

## 修正対象ファイル

### 1. `functions.php` — Customizer設定の追加
- `mariposa_customize_register()` 関数を追加
- **フロントページ設定パネル**: Hero（title, subtitle, tagline, description, ボタン文言）、Worship Info（title, desc, time）、CTA（title, desc）を日英それぞれ登録
- **礼拝ページ設定パネル**: 5つの信仰箇条（title, desc）、礼拝情報（title, day, desc, time, content, welcome）、その他の集会（2つ）、アガペーの愛（title, desc, scripture, ref）、CTA を日英それぞれ登録

### 2. `front-page.php` — Customizerから読み込み
- ハードコードされた `$hero`, `$worship`, `$cta` 配列を `get_theme_mod()` に置き換え
- HTML構造・CSSクラスはそのまま維持
- 最新お知らせセクション（WP_Query）は変更なし

### 3. `page-worship.php` — Customizerから読み込み
- ハードコードされた `$content` 配列を `get_theme_mod()` に置き換え
- HTML構造（信仰カード、インフォグリッド、集会カード、聖句引用）はそのまま維持

### 4. `page-about.php` — the_content() に変換
- テンプレートはヒーロー（蝶 + ページタイトル）とCTAセクションのみ保持
- 中間のコンテンツ（歓迎メッセージ、マリポサの意味、聖句一覧）はWordPressエディタから読み込み
- 管理画面のページエディタに現在のコンテンツを入力してもらう

### 5. `page-privacy.php` — the_content() に変換
- テンプレートはヒーロー（タイトル）とCTAのみ保持
- プライバシーポリシー本文はWordPressエディタから読み込み

### 6. `page-contact.php` — the_content() に変換
- テンプレートはヒーロー（蝶 + タイトル）のみ保持
- 紹介文 + Contact Form 7ショートコードはWordPressエディタから読み込み

---

## 変更しないファイル
- `header.php` — ナビゲーションは `mariposa_t()` で動作中、変更不要
- `footer.php` — 同上
- `page.php`, `single.php`, `archive.php`, `404.php` — 既に動的
- `style.css` — 変更なし
- `assets/js/main.js` — 変更なし

---

## 実装順序

| Step | ファイル | 内容 |
|------|---------|------|
| 1 | `functions.php` | Customizer設定を追加 |
| 2 | `front-page.php` | ハードコード → `get_theme_mod()` |
| 3 | `page-worship.php` | ハードコード → `get_theme_mod()` |
| 4 | `page-about.php` | ハードコード → `the_content()` |
| 5 | `page-privacy.php` | ハードコード → `the_content()` |
| 6 | `page-contact.php` | ハードコード → `the_content()` |
| 7 | テーマZIP再作成 | アップロード |
| 8 | WordPress管理画面 | Customizer設定入力 + ページコンテンツ入力 |

## 検証方法
1. テーマZIPを再アップロード後、管理画面の「外観」→「カスタマイズ」でフロントページ・礼拝ページの全テキストが編集可能か確認
2. About/Privacy/Contactページのエディタでコンテンツを入力し、正しく表示されるか確認
3. 日英の言語切替が正常に動作するか確認
4. デザイン（レイアウト、スタイル）が変更前と同一か確認

---

## 現在のセットアップ進捗（2026-02-11時点）

### 完了済み
- [x] さくらサーバーにWordPressインストール（`/isy40954/`サブディレクトリ）
- [x] mariposa-houseテーマのアップロード・有効化
- [x] プラグイン4つインストール（Polylang, Contact Form 7, SEOプラグイン, UpdraftPlus）
- [x] Polylang言語設定（日本語=デフォルト、English）
- [x] 日本語固定ページ6つ作成（ホーム, 私たちについて, 信仰と礼拝, お問い合わせ, プライバシーポリシー, お知らせ）
- [x] 英語固定ページ6つ作成（Home, About Us, Faith & Worship, Contact Us, Privacy Policy, News）
- [x] Polylangで日英ページの翻訳紐づけ

### 未完了（テーマ修正前に保留中）
- [ ] テーマのコンテンツ編集可能化（本計画）
- [ ] Contact Form 7 のフォーム作成
- [ ] 投稿記事の作成（ウェルカムメッセージ等）
- [ ] メニューの設定
- [ ] SSL設定
- [ ] ドメイン移行（mariposahouse.church）
- [ ] 旧サイト（Vercel）の停止
