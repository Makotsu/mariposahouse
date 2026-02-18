# Mariposa House WordPress セットアップガイド

さくらレンタルサーバーでのWordPressセットアップ手順です。

---

## Step 1: さくらサーバーでWordPressをインストール

### 1.1 データベースの作成
1. さくらのサーバーコントロールパネル（https://secure.sakura.ad.jp/rs/cp/）にログイン
2. 左メニュー「Webサイト/データ」→「データベース」を選択
3. 「新規追加」をクリック
4. 以下を設定:
   - データベース名: 任意（例: `mariposa_wp`）
   - データベースの文字コード: `UTF-8 (utf8mb4)`
   - データベースパスワード: 設定してメモする
5. 「同意する」にチェックして「作成する」

### 1.2 WordPressクイックインストール
1. 左メニュー「Webサイト/データ」→「クイックインストール」
2. 「WordPress」を選択
3. 以下を入力:
   - インストール先: ドメイン直下にインストールする場合は空欄
   - 利用するデータベース: 先ほど作成したもの
   - テーブルの接頭語: `wp_` (デフォルトのまま)
4. 「インストール」をクリック
5. WordPress初期設定画面が表示されるので:
   - サイトタイトル: `Mariposa House`
   - ユーザー名: 管理者アカウント名
   - パスワード: 強固なパスワード
   - メールアドレス: 管理者メールアドレス
6. 「WordPressをインストール」をクリック

---

## Step 2: テーマのアップロードと有効化

### 2.1 テーマファイルをZIPにする
`wordpress-theme/mariposa-house/` フォルダをZIPファイルに圧縮します。

ターミナルで:
```bash
cd wordpress-theme
zip -r mariposa-house.zip mariposa-house/
```

### 2.2 テーマのアップロード
1. WordPress管理画面にログイン（`https://あなたのドメイン/wp-admin`）
2. 「外観」→「テーマ」を選択
3. 「新しいテーマを追加」→「テーマのアップロード」
4. `mariposa-house.zip` を選択してアップロード
5. 「有効化」をクリック

---

## Step 3: 必須プラグインのインストール

WordPress管理画面の「プラグイン」→「新規追加」から、以下を検索してインストール・有効化:

| プラグイン | 検索キーワード | 用途 |
|---|---|---|
| **Polylang** | `polylang` | 日英多言語対応 |
| **Contact Form 7** | `contact form 7` | お問い合わせフォーム |
| **Yoast SEO** | `yoast seo` | SEO対策 |
| **UpdraftPlus** | `updraftplus` | バックアップ |

### 推奨プラグイン（任意）
| プラグイン | 検索キーワード | 用途 |
|---|---|---|
| **WP Super Cache** | `wp super cache` | 高速化 |
| **Wordfence** | `wordfence` | セキュリティ |

---

## Step 4: Polylang（多言語）の設定

### 4.1 言語の追加
1. 「言語」→「言語」を選択
2. 「日本語」を追加（デフォルト言語に設定）
3. 「English」を追加
4. 「設定」タブで:
   - URLの変更方法: 「言語コードをディレクトリに入れる」を選択
   - デフォルト言語のURLからコードを削除: お好みで

### 4.2 各ページの翻訳を紐づけ
- 固定ページや投稿を作成する際、Polylangの言語パネルで対応する翻訳ページを紐づけます

---

## Step 5: 固定ページの作成

以下の固定ページを **日本語・英語それぞれ** 作成します。

### 日本語ページ

| ページ名 | スラッグ | テンプレート |
|---|---|---|
| ホーム | `home` | ※フロントページに設定 |
| 私たちについて | `about` | About Page |
| 信仰と礼拝 | `worship` | Worship Page |
| お問い合わせ | `contact` | Contact Page |
| プライバシーポリシー | `privacy` | Privacy Policy Page |
| お知らせ | `news` | ※投稿ページに設定 |

### 英語ページ

| ページ名 | スラッグ | テンプレート |
|---|---|---|
| Home | `home` | ※フロントページに設定 |
| About Us | `about` | About Page |
| Faith & Worship | `worship` | Worship Page |
| Contact Us | `contact` | Contact Page |
| Privacy Policy | `privacy` | Privacy Policy Page |
| News | `news` | ※投稿ページに設定 |

### テンプレートの割り当て方法
1. 固定ページ編集画面の右サイドバー「ページ」セクションを開く
2. 「テンプレート」のドロップダウンから対応するテンプレートを選択

### フロントページの設定
1. 「設定」→「表示設定」を開く
2. 「ホームページの表示」を「固定ページ」に変更
3. 「ホームページ」: 「ホーム」ページを選択
4. 「投稿ページ」: 「お知らせ」ページを選択

---

## Step 6: Contact Form 7 の設定

### 6.1 フォームの作成
1. 「お問い合わせ」→「新規追加」
2. 以下のフォームテンプレートを使用:

**日本語フォーム:**
```
<div class="form-group">
<label for="name">お名前 <span class="required">*</span></label>
[text* your-name id:name placeholder "山田 太郎"]
</div>

<div class="form-group">
<label for="email">メールアドレス <span class="required">*</span></label>
[email* your-email id:email placeholder "example@email.com"]
</div>

<div class="form-group">
<label for="subject">件名 <span class="optional">(任意)</span></label>
[select your-subject id:subject include_blank "礼拝に参加したい" "質問・相談" "祈りのリクエスト" "その他"]
</div>

<div class="form-group">
<label for="message">メッセージ <span class="required">*</span></label>
[textarea* your-message id:message placeholder "お問い合わせ内容をご記入ください"]
</div>

[submit class:btn-primary "送信する"]
```

### 6.2 メール設定
- 「メール」タブで送信先メールアドレスを設定
- 件名や本文をカスタマイズ

---

## Step 7: 投稿記事の作成

以下の記事を **日本語・英語それぞれ** 作成:

1. **ウェルカムメッセージ** / Welcome Message
2. **毎週の集会について** / Weekly Gatherings
3. **BSF 2025-2026** / BSF 2025-2026

各記事にカテゴリーを割り当てます:
- お知らせ / News
- イベント / Events
- 礼拝 / Worship
- 聖書の学び / Bible Study

---

## Step 8: メニューの設定

1. 「外観」→「メニュー」
2. メニュー名「メインナビゲーション」を作成
3. 以下のページを追加: ホーム、私たちについて、信仰と礼拝、お知らせ、お問い合わせ
4. 「メニューの位置」で「Main Navigation」にチェック
5. 保存

※ テーマのナビゲーションはPHPで直接管理しているため、WordPressメニューはバックアップ用途です。

---

## Step 9: SSL設定

### さくらのコントロールパネルで:
1. 左メニュー「ドメイン/SSL」を選択
2. 対象ドメインの「SSL」をクリック
3. 「Let's Encrypt（無料SSL）」を選択
4. 「設定する」をクリック

### WordPressで:
1. 「設定」→「一般」
2. 「WordPress アドレス (URL)」と「サイトアドレス (URL)」を `https://` に変更
3. 保存

---

## Step 10: ドメインの移行（mariposahouse.church）

### 方法A: ネームサーバーの変更（推奨）
1. ドメイン管理サービス（現在のレジストラ）にログイン
2. ネームサーバーをさくらのNSに変更:
   - `ns1.dns.ne.jp`
   - `ns2.dns.ne.jp`
3. さくらのコントロールパネルでドメインを追加

### 方法B: Aレコードの変更
1. ドメインのDNS設定でAレコードをさくらサーバーのIPアドレスに変更
2. さくらのコントロールパネルでドメインを追加

※ DNS変更は反映に最大48時間かかる場合があります

---

## Step 11: 旧サイト（Vercel）の停止

ドメイン移行が完了し、新サイトの動作確認ができたら:
1. Vercelダッシュボードでプロジェクトのカスタムドメインを削除
2. 必要に応じてVercelプロジェクトを削除

---

## トラブルシューティング

### ページが表示されない
- 「設定」→「パーマリンク設定」で「変更を保存」をクリック（リライトルールを再生成）

### テンプレートが反映されない
- 固定ページ編集画面で正しいテンプレートが選択されているか確認
- スラッグが正しいか確認（about, worship, contact, privacy）

### 言語切替が動作しない
- Polylangが有効化されているか確認
- 各ページの翻訳が正しく紐づけられているか確認

### お問い合わせフォームが動作しない
- Contact Form 7がインストール・有効化されているか確認
- フォームIDが正しいか確認
