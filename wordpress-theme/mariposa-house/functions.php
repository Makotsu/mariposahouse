<?php
/**
 * Mariposa House Theme Functions
 *
 * @package Mariposa_House
 */

if (!defined('ABSPATH')) {
    exit;
}

define('MARIPOSA_VERSION', '1.0.0');
define('MARIPOSA_DIR', get_template_directory());
define('MARIPOSA_URI', get_template_directory_uri());

/**
 * Theme setup
 */
function mariposa_setup() {
    // Title tag support
    add_theme_support('title-tag');

    // Featured images
    add_theme_support('post-thumbnails');

    // HTML5 support
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Custom logo
    add_theme_support('custom-logo', array(
        'height'      => 36,
        'width'       => 36,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Register menus
    register_nav_menus(array(
        'primary'   => __('Main Navigation', 'mariposa-house'),
        'footer'    => __('Footer Navigation', 'mariposa-house'),
    ));

    // Content width
    if (!isset($content_width)) {
        $content_width = 1024;
    }
}
add_action('after_setup_theme', 'mariposa_setup');

/**
 * Enqueue styles and scripts
 */
function mariposa_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'mariposa-google-fonts',
        'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;600;700&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'mariposa-style',
        get_stylesheet_uri(),
        array('mariposa-google-fonts'),
        MARIPOSA_VERSION
    );

    // Main JS
    wp_enqueue_script(
        'mariposa-main',
        MARIPOSA_URI . '/assets/js/main.js',
        array(),
        MARIPOSA_VERSION,
        true
    );
}
add_action('wp_enqueue_scripts', 'mariposa_scripts');

/**
 * Get Polylang language URL helper
 * Returns the URL for the given language, or null if Polylang is not active
 */
function mariposa_get_language_url($lang) {
    if (function_exists('pll_the_languages')) {
        $languages = pll_the_languages(array(
            'raw'           => true,
            'hide_current'  => false,
        ));
        if (isset($languages[$lang])) {
            return $languages[$lang]['url'];
        }
    }
    return null;
}

/**
 * Get current language
 */
function mariposa_get_current_lang() {
    if (function_exists('pll_current_language')) {
        return pll_current_language('slug');
    }
    return 'ja';
}

/**
 * Check if current language is Japanese
 */
function mariposa_is_ja() {
    return mariposa_get_current_lang() === 'ja';
}

/**
 * Helper: get theme mod for current language
 */
function mariposa_mod($key, $default = '') {
    $lang = mariposa_get_current_lang();
    return get_theme_mod($key . '_' . $lang, $default);
}

/**
 * Get translation string - used for hardcoded UI strings
 */
function mariposa_t($key) {
    $lang = mariposa_get_current_lang();

    $strings = array(
        'ja' => array(
            'home'              => 'ホーム',
            'about'             => '私たちについて',
            'worship'           => '信仰と礼拝',
            'news'              => 'お知らせ',
            'contact'           => 'お問い合わせ',
            'privacy'           => 'プライバシーポリシー',
            'navigation'        => 'ナビゲーション',
            'worship_time'      => '礼拝時間',
            'worship_schedule'  => '毎週日曜日 10:00 - 12:00',
            'copyright'         => 'All rights reserved.',
            'footer_desc'       => 'キリストにあって新しく造られた者となる喜びを分かち合う',
            'read_more'         => '続きを読む',
            'back_to_news'      => 'お知らせ一覧に戻る',
            'no_news'           => 'お知らせはありません',
            'view_all'          => 'すべて見る',
            'questions'         => 'ご質問はお気軽に',
            'questions_desc'    => '詳しい情報やご質問がありましたら、お問い合わせください。',
            'news_questions'    => 'ご質問・お問い合わせ',
            'news_questions_desc' => 'お知らせについてのご質問は、お気軽にお問い合わせください。',
            '404_title'         => 'ページが見つかりません',
            '404_desc'          => 'お探しのページは存在しないか、移動された可能性があります。',
            '404_home'          => 'ホームに戻る',
            'open_menu'         => 'メニューを開く',
            'close_menu'        => 'メニューを閉じる',
            'lang_selector'     => '言語を選択',
            'about_cta_title'   => 'お会いできることを楽しみにしています',
            'about_cta_desc'    => 'ご質問やご関心がございましたら、どうぞお気軽にお問い合わせください。',
        ),
        'en' => array(
            'home'              => 'Home',
            'about'             => 'About',
            'worship'           => 'Faith & Worship',
            'news'              => 'News',
            'contact'           => 'Contact',
            'privacy'           => 'Privacy Policy',
            'navigation'        => 'Navigation',
            'worship_time'      => 'Worship Time',
            'worship_schedule'  => 'Every Sunday 10:00 AM - 12:00 PM',
            'copyright'         => 'All rights reserved.',
            'footer_desc'       => 'Sharing the joy of becoming a new creation in Christ',
            'read_more'         => 'Read More',
            'back_to_news'      => 'Back to News',
            'no_news'           => 'No news available',
            'view_all'          => 'View All',
            'questions'         => 'Questions?',
            'questions_desc'    => 'For more information or questions, please contact us.',
            'news_questions'    => 'Questions?',
            'news_questions_desc' => 'If you have any questions, please feel free to contact us.',
            '404_title'         => 'Page Not Found',
            '404_desc'          => 'The page you are looking for does not exist or has been moved.',
            '404_home'          => 'Back to Home',
            'open_menu'         => 'Open menu',
            'close_menu'        => 'Close menu',
            'lang_selector'     => 'Select language',
            'about_cta_title'   => 'We Look Forward to Meeting You',
            'about_cta_desc'    => 'If you have any questions or interest, please feel free to contact us.',
        ),
    );

    if (isset($strings[$lang][$key])) {
        return $strings[$lang][$key];
    }

    // Fallback to Japanese
    if (isset($strings['ja'][$key])) {
        return $strings['ja'][$key];
    }

    return $key;
}

/**
 * Get page URL by slug (Polylang-aware)
 */
function mariposa_get_page_url($slug) {
    $page = get_page_by_path($slug);
    if ($page) {
        return get_permalink($page->ID);
    }
    return home_url('/');
}

/**
 * Customize excerpt length
 */
function mariposa_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'mariposa_excerpt_length');

/**
 * Customize excerpt more text
 */
function mariposa_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'mariposa_excerpt_more');

/**
 * Add SVG arrow icon helper
 */
function mariposa_arrow_icon($direction = 'right') {
    if ($direction === 'left') {
        return '<svg class="icon-arrow" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>';
    }
    return '<svg class="icon-arrow" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>';
}

/**
 * Add clock icon helper
 */
function mariposa_clock_icon() {
    return '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';
}

/**
 * Register widget areas (optional)
 */
function mariposa_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'mariposa-house'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'mariposa-house'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'mariposa_widgets_init');

/**
 * Disable WordPress emoji scripts for performance
 */
function mariposa_disable_emojis() {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
}
add_action('init', 'mariposa_disable_emojis');

/**
 * Customizer settings for editable content
 */
function mariposa_customize_register($wp_customize) {

    // Helper to register a bilingual setting + control
    $add = function($id, $label, $section, $default_ja, $default_en, $type = 'text') use ($wp_customize) {
        $sanitize = ($type === 'textarea') ? 'sanitize_textarea_field' : 'sanitize_text_field';

        $wp_customize->add_setting($id . '_ja', array(
            'default'           => $default_ja,
            'sanitize_callback' => $sanitize,
        ));
        $wp_customize->add_control($id . '_ja', array(
            'label'   => $label . '（日本語）',
            'section' => $section,
            'type'    => $type,
        ));

        $wp_customize->add_setting($id . '_en', array(
            'default'           => $default_en,
            'sanitize_callback' => $sanitize,
        ));
        $wp_customize->add_control($id . '_en', array(
            'label'   => $label . '（English）',
            'section' => $section,
            'type'    => $type,
        ));
    };

    // =============================================
    // Panel: Front Page
    // =============================================
    $wp_customize->add_panel('mariposa_frontpage', array(
        'title'    => 'フロントページ設定',
        'priority' => 30,
    ));

    // --- Section: Hero ---
    $wp_customize->add_section('mariposa_fp_hero', array(
        'title' => 'ヒーローセクション',
        'panel' => 'mariposa_frontpage',
    ));

    $add('fp_hero_title', 'タイトル', 'mariposa_fp_hero',
        'Mariposa House', 'Mariposa House');
    $add('fp_hero_subtitle', 'サブタイトル', 'mariposa_fp_hero',
        'マリポサハウス', 'Mariposa House Church');
    $add('fp_hero_tagline', 'タグライン', 'mariposa_fp_hero',
        'いのちの変革 — キリストにあって新しくされる', 'Life Transformation — Made New in Christ');
    $add('fp_hero_desc', '説明文', 'mariposa_fp_hero',
        'キリストにあって新しく造られた者となる喜びを分かち合う',
        'Sharing the joy of becoming a new creation in Christ', 'textarea');
    $add('fp_hero_cta_worship', '礼拝ボタン文言', 'mariposa_fp_hero',
        '礼拝のご案内', 'Worship Info');
    $add('fp_hero_cta_contact', 'お問い合わせボタン文言', 'mariposa_fp_hero',
        'お問い合わせ', 'Contact Us');

    // --- Section: Worship Info ---
    $wp_customize->add_section('mariposa_fp_worship', array(
        'title' => '礼拝案内セクション',
        'panel' => 'mariposa_frontpage',
    ));

    $add('fp_worship_title', 'タイトル', 'mariposa_fp_worship',
        '礼拝のご案内', 'Worship Service');
    $add('fp_worship_desc', '説明文', 'mariposa_fp_worship',
        '毎週日曜日、オンラインで共に主を礼拝し、みことばに聴き、祈りと交わりの時を持っています。初めての方も心から歓迎します。',
        'Every Sunday, we gather online to worship the Lord together, hear His Word, and enjoy prayer and fellowship. Everyone is warmly welcome!',
        'textarea');
    $add('fp_worship_time', '時間', 'mariposa_fp_worship',
        '毎週日曜日 10:00 - 12:00（オンライン）', 'Every Sunday 10:00 AM - 12:00 PM (Online)');
    $add('fp_worship_details', '詳細ボタン文言', 'mariposa_fp_worship',
        '詳しく見る', 'Learn More');

    // --- Section: CTA ---
    $wp_customize->add_section('mariposa_fp_cta', array(
        'title' => 'CTA（行動喚起）セクション',
        'panel' => 'mariposa_frontpage',
    ));

    $add('fp_cta_title', 'タイトル', 'mariposa_fp_cta',
        'あなたとの出会いを心待ちにしています', 'We Look Forward to Meeting You');
    $add('fp_cta_desc', '説明文', 'mariposa_fp_cta',
        'マリポサハウスは、すべての人を歓迎します。共に主を礼拝し、共に成長し、神の愛のうちに歩みましょう。',
        'Mariposa House welcomes everyone. Let\'s worship the Lord together, grow together, and walk in God\'s love.',
        'textarea');

    // =============================================
    // Panel: Worship Page
    // =============================================
    $wp_customize->add_panel('mariposa_worship', array(
        'title'    => '礼拝ページ設定',
        'priority' => 31,
    ));

    // --- Section: Page Header ---
    $wp_customize->add_section('mariposa_wp_header', array(
        'title' => 'ページヘッダー',
        'panel' => 'mariposa_worship',
    ));

    $add('wp_page_title', 'ページタイトル', 'mariposa_wp_header',
        '信仰と礼拝', 'Faith & Worship');
    $add('wp_page_subtitle', 'サブタイトル', 'mariposa_wp_header',
        'Faith & Worship', 'Faith & Worship');

    // --- Section: Core Beliefs ---
    $wp_customize->add_section('mariposa_wp_beliefs', array(
        'title' => '信仰箇条',
        'panel' => 'mariposa_worship',
    ));

    $add('wp_beliefs_title', 'セクションタイトル', 'mariposa_wp_beliefs',
        '私たちの信じること', 'What We Believe');
    $add('wp_beliefs_intro', '紹介文', 'mariposa_wp_beliefs',
        'マリポサハウスは、聖書に基づく歴史的・正統的なキリスト教信仰に堅く立っています。',
        'Mariposa House stands firmly on historic, orthodox Christian faith based on the Bible.',
        'textarea');

    $beliefs_ja = array(
        array('聖書', '聖書66巻は神の霊感によって書かれた誤りなき神のことばであり、信仰と生活における唯一の権威です。'),
        array('三位一体の神', '唯一の神が、父・子・聖霊の三つの位格において永遠に存在される三位一体の神を信じます。'),
        array('イエス・キリスト', 'イエス・キリストはまことの神でありまことの人であり、処女マリアより生まれ、十字架で私たちの罪の身代わりとして死に、三日目によみがえられました。'),
        array('救い', 'すべての人は罪によって神から離れていますが、神の恵みにより、イエス・キリストを信じる信仰によってのみ救われます。'),
        array('聖霊', '聖霊は信じる者のうちに宿り、真理を悟らせ、導き、キリストに似た者へと造り変えてくださいます。'),
    );
    $beliefs_en = array(
        array('The Bible', 'The 66 books of the Bible are the inspired, inerrant Word of God and the sole authority for faith and practice.'),
        array('The Trinity', 'We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit — the triune God.'),
        array('Jesus Christ', 'Jesus Christ is fully God and fully man, born of the Virgin Mary, died on the cross as our substitute for sin, and rose again on the third day.'),
        array('Salvation', 'All people are separated from God by sin, but by God\'s grace, we are saved through faith in Jesus Christ alone.'),
        array('The Holy Spirit', 'The Holy Spirit dwells in believers, illuminating truth, guiding, and transforming us into the likeness of Christ.'),
    );

    for ($i = 1; $i <= 5; $i++) {
        $add("wp_belief_{$i}_title", "信仰箇条{$i} タイトル", 'mariposa_wp_beliefs',
            $beliefs_ja[$i - 1][0], $beliefs_en[$i - 1][0]);
        $add("wp_belief_{$i}_desc", "信仰箇条{$i} 説明", 'mariposa_wp_beliefs',
            $beliefs_ja[$i - 1][1], $beliefs_en[$i - 1][1], 'textarea');
    }

    // --- Section: Sunday Service ---
    $wp_customize->add_section('mariposa_wp_service', array(
        'title' => '日曜礼拝',
        'panel' => 'mariposa_worship',
    ));

    $add('wp_service_title', 'タイトル', 'mariposa_wp_service',
        '日曜礼拝', 'Sunday Worship');
    $add('wp_service_day', '曜日', 'mariposa_wp_service',
        '毎週日曜日', 'Every Sunday');
    $add('wp_service_desc', '説明文', 'mariposa_wp_service',
        '賛美と祈り、みことばの説き明かし、交わりの時を通して、共に主を礼拝します。',
        'We worship the Lord together through praise, prayer, the proclamation of the Word, and fellowship.',
        'textarea');
    $add('wp_service_time_label', '時間ラベル', 'mariposa_wp_service',
        '時間', 'Time');
    $add('wp_service_time_value', '時間の値', 'mariposa_wp_service',
        '10:00 - 12:00（オンライン）', '10:00 AM - 12:00 PM (Online)');
    $add('wp_service_content_label', '内容ラベル', 'mariposa_wp_service',
        '内容', 'Content');
    $add('wp_service_content_value', '内容の値', 'mariposa_wp_service',
        '賛美・祈り・みことばのメッセージ', 'Praise, Prayer, Bible Message');
    $add('wp_service_welcome_label', '対象ラベル', 'mariposa_wp_service',
        '対象', 'Welcome');
    $add('wp_service_welcome_value', '対象の値', 'mariposa_wp_service',
        'どなたでも歓迎', 'Everyone is welcome');

    // --- Section: Other Gatherings ---
    $wp_customize->add_section('mariposa_wp_gatherings', array(
        'title' => 'その他の集会',
        'panel' => 'mariposa_worship',
    ));

    $add('wp_gatherings_title', 'セクションタイトル', 'mariposa_wp_gatherings',
        'その他の集会', 'Other Gatherings');
    $add('wp_gatherings_subtitle', 'サブタイトル', 'mariposa_wp_gatherings',
        '定期的な集まり', 'Regular Gatherings');
    $add('wp_bible_study_title', '聖書の学び タイトル', 'mariposa_wp_gatherings',
        '水曜日の聖書の学び会', 'Wednesday Bible Study');
    $add('wp_bible_study_sched', '聖書の学び スケジュール', 'mariposa_wp_gatherings',
        '毎週水曜日', 'Every Wednesday');
    $add('wp_bible_study_desc', '聖書の学び 説明', 'mariposa_wp_gatherings',
        '毎週水曜日に集まり、聖書を丁寧に読み解き、理解を深める時間です。',
        'We gather every Wednesday to carefully study the Bible and deepen our understanding.',
        'textarea');
    $add('wp_bsf_title', 'BSF タイトル', 'mariposa_wp_gatherings',
        'BSFの集まり', 'BSF Gathering');
    $add('wp_bsf_sched', 'BSF スケジュール', 'mariposa_wp_gatherings',
        'BSF', 'BSF');
    $add('wp_bsf_desc', 'BSF 説明', 'mariposa_wp_gatherings',
        'BSF（Bible Study Fellowship）を通じて、体系的に聖書を学び、信仰の成長を目指します。',
        'Through BSF (Bible Study Fellowship), we systematically study the Bible and pursue growth in faith.',
        'textarea');

    // --- Section: Agape Love ---
    $wp_customize->add_section('mariposa_wp_agape', array(
        'title' => 'アガペーの愛',
        'panel' => 'mariposa_worship',
    ));

    $add('wp_agape_title', 'タイトル', 'mariposa_wp_agape',
        'アガペーの愛', 'Agape Love');
    $add('wp_agape_subtitle', 'サブタイトル', 'mariposa_wp_agape',
        'Agape Love', 'Agape Love');
    $add('wp_agape_desc', '説明文', 'mariposa_wp_agape',
        'アガペーはギリシャ語で「自己犠牲的な愛」「無条件の愛」を意味します。神が私たちを愛してくださったように、私たちも互いに愛し合うことが主の命令であり、私たちの喜びです。',
        'Agape means \'self-sacrificial, unconditional love\' in Greek. Just as God loved us, loving one another is the Lord\'s command and our joy.',
        'textarea');
    $add('wp_agape_scripture', '聖句', 'mariposa_wp_agape',
        'わたしはあなたがたに新しい戒めを与えます。互いに愛し合いなさい。わたしがあなたがたを愛したように、あなたがたも互いに愛し合いなさい。',
        'A new command I give you: Love one another. As I have loved you, so you must love one another.',
        'textarea');
    $add('wp_agape_ref', '聖句の参照', 'mariposa_wp_agape',
        'ヨハネ 13:34', 'John 13:34');

    // --- Section: CTA ---
    $wp_customize->add_section('mariposa_wp_cta', array(
        'title' => 'CTA（行動喚起）',
        'panel' => 'mariposa_worship',
    ));

    $add('wp_cta_title', 'タイトル', 'mariposa_wp_cta',
        'ぜひご参加ください', 'Join Us');
    $add('wp_cta_desc', '説明文', 'mariposa_wp_cta',
        '初めての方も心から歓迎します。お気軽にお問い合わせください。',
        'First-time visitors are warmly welcome. Please feel free to contact us.',
        'textarea');
}
add_action('customize_register', 'mariposa_customize_register');

/**
 * Add Open Graph meta tags for SEO
 */
function mariposa_og_meta_tags() {
    if (is_admin()) return;

    $title = wp_get_document_title();
    $description = get_bloginfo('description');
    $url = home_url(add_query_arg(array(), ''));
    $image = MARIPOSA_URI . '/assets/images/butterfly.png';

    if (is_singular()) {
        global $post;
        $description = has_excerpt($post->ID)
            ? wp_strip_all_tags(get_the_excerpt($post->ID))
            : wp_trim_words(wp_strip_all_tags($post->post_content), 30, '...');
        $url = get_permalink($post->ID);
        if (has_post_thumbnail($post->ID)) {
            $image = get_the_post_thumbnail_url($post->ID, 'large');
        }
    }

    echo '<meta property="og:title" content="' . esc_attr($title) . '">' . "\n";
    echo '<meta property="og:description" content="' . esc_attr($description) . '">' . "\n";
    echo '<meta property="og:url" content="' . esc_url($url) . '">' . "\n";
    echo '<meta property="og:image" content="' . esc_url($image) . '">' . "\n";
    echo '<meta property="og:type" content="' . (is_singular() ? 'article' : 'website') . '">' . "\n";
    echo '<meta property="og:site_name" content="' . esc_attr(get_bloginfo('name')) . '">' . "\n";
    echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
}
add_action('wp_head', 'mariposa_og_meta_tags', 5);

/**
 * Add JSON-LD structured data for Church organization
 */
function mariposa_jsonld_schema() {
    if (!is_front_page() && !is_page()) return;

    $schema = array(
        '@context' => 'https://schema.org',
        '@type' => 'Church',
        'name' => 'Mariposa House Church',
        'description' => get_bloginfo('description'),
        'url' => home_url('/'),
        'logo' => MARIPOSA_URI . '/assets/images/butterfly.png',
        'event' => array(
            '@type' => 'Event',
            'name' => 'Sunday Worship Service',
            'eventSchedule' => array(
                '@type' => 'Schedule',
                'byDay' => 'https://schema.org/Sunday',
                'startTime' => '10:00',
                'endTime' => '12:00',
            ),
        ),
    );

    echo '<script type="application/ld+json">' . wp_json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) . '</script>' . "\n";
}
add_action('wp_head', 'mariposa_jsonld_schema', 5);

/**
 * Add preconnect for Google Fonts performance
 */
function mariposa_preconnect_fonts() {
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">' . "\n";
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
}
add_action('wp_head', 'mariposa_preconnect_fonts', 1);

/**
 * Add async/defer to non-critical scripts
 */
function mariposa_script_attributes($tag, $handle) {
    if ($handle === 'mariposa-main') {
        return str_replace(' src', ' defer src', $tag);
    }
    return $tag;
}
add_filter('script_loader_tag', 'mariposa_script_attributes', 10, 2);

/**
 * Remove unnecessary WordPress head items for performance
 */
function mariposa_cleanup_head() {
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
}
add_action('init', 'mariposa_cleanup_head');

/**
 * Custom Post Type: Events
 */
function mariposa_register_post_types() {
    register_post_type('mariposa_event', array(
        'labels' => array(
            'name'               => __('Events', 'mariposa-house'),
            'singular_name'      => __('Event', 'mariposa-house'),
            'add_new_item'       => __('Add New Event', 'mariposa-house'),
            'edit_item'          => __('Edit Event', 'mariposa-house'),
            'all_items'          => __('All Events', 'mariposa-house'),
        ),
        'public'       => true,
        'has_archive'  => true,
        'menu_icon'    => 'dashicons-calendar-alt',
        'supports'     => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite'      => array('slug' => 'events'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'mariposa_register_post_types');
