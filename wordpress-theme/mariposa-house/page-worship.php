<?php
/**
 * Template Name: Worship Page
 * Description: Template for the Worship / Faith page
 *
 * @package Mariposa_House
 */

get_header();

$is_ja = mariposa_is_ja();
$butterfly_url = MARIPOSA_URI . '/assets/images/butterfly.png';

// Read from Customizer
$t = array(
    'page_title'    => mariposa_mod('wp_page_title', $is_ja ? '信仰と礼拝' : 'Faith & Worship'),
    'page_subtitle' => mariposa_mod('wp_page_subtitle', 'Faith & Worship'),
    'beliefs_title' => mariposa_mod('wp_beliefs_title', $is_ja ? '私たちの信じること' : 'What We Believe'),
    'beliefs_intro' => mariposa_mod('wp_beliefs_intro', $is_ja ? 'マリポサハウスは、聖書に基づく歴史的・正統的なキリスト教信仰に堅く立っています。' : 'Mariposa House stands firmly on historic, orthodox Christian faith based on the Bible.'),
    'service_title' => mariposa_mod('wp_service_title', $is_ja ? '日曜礼拝' : 'Sunday Worship'),
    'service_day'   => mariposa_mod('wp_service_day', $is_ja ? '毎週日曜日' : 'Every Sunday'),
    'service_desc'  => mariposa_mod('wp_service_desc', $is_ja ? '賛美と祈り、みことばの説き明かし、交わりの時を通して、共に主を礼拝します。' : 'We worship the Lord together through praise, prayer, the proclamation of the Word, and fellowship.'),
    'time_label'    => mariposa_mod('wp_service_time_label', $is_ja ? '時間' : 'Time'),
    'time_value'    => mariposa_mod('wp_service_time_value', $is_ja ? '10:00 - 12:00（オンライン）' : '10:00 AM - 12:00 PM (Online)'),
    'content_label' => mariposa_mod('wp_service_content_label', $is_ja ? '内容' : 'Content'),
    'content_value' => mariposa_mod('wp_service_content_value', $is_ja ? '賛美・祈り・みことばのメッセージ' : 'Praise, Prayer, Bible Message'),
    'welcome_label' => mariposa_mod('wp_service_welcome_label', $is_ja ? '対象' : 'Welcome'),
    'welcome_value' => mariposa_mod('wp_service_welcome_value', $is_ja ? 'どなたでも歓迎' : 'Everyone is welcome'),
    'gatherings_title'    => mariposa_mod('wp_gatherings_title', $is_ja ? 'その他の集会' : 'Other Gatherings'),
    'gatherings_subtitle' => mariposa_mod('wp_gatherings_subtitle', $is_ja ? '定期的な集まり' : 'Regular Gatherings'),
    'bible_study_title'   => mariposa_mod('wp_bible_study_title', $is_ja ? '水曜日の聖書の学び会' : 'Wednesday Bible Study'),
    'bible_study_sched'   => mariposa_mod('wp_bible_study_sched', $is_ja ? '毎週水曜日' : 'Every Wednesday'),
    'bible_study_desc'    => mariposa_mod('wp_bible_study_desc', $is_ja ? '毎週水曜日に集まり、聖書を丁寧に読み解き、理解を深める時間です。' : 'We gather every Wednesday to carefully study the Bible and deepen our understanding.'),
    'bsf_title'   => mariposa_mod('wp_bsf_title', $is_ja ? 'BSFの集まり' : 'BSF Gathering'),
    'bsf_sched'   => mariposa_mod('wp_bsf_sched', 'BSF'),
    'bsf_desc'    => mariposa_mod('wp_bsf_desc', $is_ja ? 'BSF（Bible Study Fellowship）を通じて、体系的に聖書を学び、信仰の成長を目指します。' : 'Through BSF (Bible Study Fellowship), we systematically study the Bible and pursue growth in faith.'),
    'agape_title'    => mariposa_mod('wp_agape_title', $is_ja ? 'アガペーの愛' : 'Agape Love'),
    'agape_subtitle' => mariposa_mod('wp_agape_subtitle', 'Agape Love'),
    'agape_desc'     => mariposa_mod('wp_agape_desc', $is_ja ? 'アガペーはギリシャ語で「自己犠牲的な愛」「無条件の愛」を意味します。神が私たちを愛してくださったように、私たちも互いに愛し合うことが主の命令であり、私たちの喜びです。' : 'Agape means \'self-sacrificial, unconditional love\' in Greek. Just as God loved us, loving one another is the Lord\'s command and our joy.'),
    'agape_scripture' => mariposa_mod('wp_agape_scripture', $is_ja ? 'わたしはあなたがたに新しい戒めを与えます。互いに愛し合いなさい。わたしがあなたがたを愛したように、あなたがたも互いに愛し合いなさい。' : 'A new command I give you: Love one another. As I have loved you, so you must love one another.'),
    'agape_ref'      => mariposa_mod('wp_agape_ref', $is_ja ? 'ヨハネ 13:34' : 'John 13:34'),
    'cta_title' => mariposa_mod('wp_cta_title', $is_ja ? 'ぜひご参加ください' : 'Join Us'),
    'cta_desc'  => mariposa_mod('wp_cta_desc', $is_ja ? '初めての方も心から歓迎します。お気軽にお問い合わせください。' : 'First-time visitors are warmly welcome. Please feel free to contact us.'),
);

// Beliefs from Customizer
$beliefs = array();
$belief_defaults_ja = array(
    array('聖書', '聖書66巻は神の霊感によって書かれた誤りなき神のことばであり、信仰と生活における唯一の権威です。'),
    array('三位一体の神', '唯一の神が、父・子・聖霊の三つの位格において永遠に存在される三位一体の神を信じます。'),
    array('イエス・キリスト', 'イエス・キリストはまことの神でありまことの人であり、処女マリアより生まれ、十字架で私たちの罪の身代わりとして死に、三日目によみがえられました。'),
    array('救い', 'すべての人は罪によって神から離れていますが、神の恵みにより、イエス・キリストを信じる信仰によってのみ救われます。'),
    array('聖霊', '聖霊は信じる者のうちに宿り、真理を悟らせ、導き、キリストに似た者へと造り変えてくださいます。'),
);
$belief_defaults_en = array(
    array('The Bible', 'The 66 books of the Bible are the inspired, inerrant Word of God and the sole authority for faith and practice.'),
    array('The Trinity', 'We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit — the triune God.'),
    array('Jesus Christ', 'Jesus Christ is fully God and fully man, born of the Virgin Mary, died on the cross as our substitute for sin, and rose again on the third day.'),
    array('Salvation', 'All people are separated from God by sin, but by God\'s grace, we are saved through faith in Jesus Christ alone.'),
    array('The Holy Spirit', 'The Holy Spirit dwells in believers, illuminating truth, guiding, and transforming us into the likeness of Christ.'),
);
$defaults = $is_ja ? $belief_defaults_ja : $belief_defaults_en;

for ($i = 1; $i <= 5; $i++) {
    $beliefs[] = array(
        'title' => mariposa_mod("wp_belief_{$i}_title", $defaults[$i - 1][0]),
        'desc'  => mariposa_mod("wp_belief_{$i}_desc", $defaults[$i - 1][1]),
    );
}
?>

<div style="min-height: 100vh; background: var(--white);">

    <!-- Hero -->
    <section class="hero-page" style="padding-top: 5rem;">
        <div class="container-md text-center">
            <img src="<?php echo esc_url($butterfly_url); ?>" alt="Mariposa" width="100" height="100" style="margin: 0 auto 1.25rem;">
            <h1 style="font-size: 1.875rem; font-weight: 700; color: var(--gray-900); margin-bottom: 0.75rem;">
                <?php echo esc_html($t['page_title']); ?>
            </h1>
            <p style="font-size: 1.125rem; color: var(--gray-500);">
                <?php echo esc_html($t['page_subtitle']); ?>
            </p>
        </div>
    </section>

    <!-- Core Beliefs -->
    <section class="section section-gray">
        <div class="container-sm">
            <div class="text-center" style="margin-bottom: 2.5rem;">
                <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--gray-900); margin-bottom: 0.75rem;">
                    <?php echo esc_html($t['beliefs_title']); ?>
                </h2>
                <p style="color: var(--gray-600);"><?php echo esc_html($t['beliefs_intro']); ?></p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <?php foreach ($beliefs as $index => $belief) : ?>
                    <div class="card belief-card">
                        <h3><?php echo ($index + 1) . '. ' . esc_html($belief['title']); ?></h3>
                        <p><?php echo esc_html($belief['desc']); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Main Service -->
    <section class="section section-white">
        <div class="container-md">
            <div class="text-center" style="margin-bottom: 2rem;">
                <p style="color: var(--gray-500); font-size: 1rem; margin-bottom: 0.5rem;">
                    <?php echo esc_html($t['service_day']); ?>
                </p>
                <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--gray-900); margin-bottom: 1rem;">
                    <?php echo esc_html($t['service_title']); ?>
                </h2>
                <p style="color: var(--gray-600); max-width: 42rem; margin: 0 auto;">
                    <?php echo esc_html($t['service_desc']); ?>
                </p>
            </div>

            <div class="info-grid cols-3" style="margin-bottom: 2rem;">
                <div class="info-box">
                    <h3><?php echo esc_html($t['time_label']); ?></h3>
                    <p><?php echo esc_html($t['time_value']); ?></p>
                </div>
                <div class="info-box">
                    <h3><?php echo esc_html($t['content_label']); ?></h3>
                    <p><?php echo esc_html($t['content_value']); ?></p>
                </div>
                <div class="info-box">
                    <h3><?php echo esc_html($t['welcome_label']); ?></h3>
                    <p><?php echo esc_html($t['welcome_value']); ?></p>
                </div>
            </div>
        </div>
    </section>

    <!-- Other Gatherings -->
    <section class="section section-gray">
        <div class="container-md">
            <div class="text-center" style="margin-bottom: 2rem;">
                <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--gray-900); margin-bottom: 0.5rem;">
                    <?php echo esc_html($t['gatherings_title']); ?>
                </h2>
                <p style="color: var(--gray-500);"><?php echo esc_html($t['gatherings_subtitle']); ?></p>
            </div>

            <div class="info-grid cols-2" style="max-width: 42rem; margin: 0 auto;">
                <div class="card text-center" style="padding: 1.5rem;">
                    <h3 style="font-weight: 700; color: var(--gray-900); margin-bottom: 0.5rem;">
                        <?php echo esc_html($t['bible_study_title']); ?>
                    </h3>
                    <p style="color: var(--gray-500); font-size: 1rem; margin-bottom: 0.75rem;">
                        <?php echo esc_html($t['bible_study_sched']); ?>
                    </p>
                    <p style="color: var(--gray-600); font-size: 1rem;">
                        <?php echo esc_html($t['bible_study_desc']); ?>
                    </p>
                </div>

                <div class="card text-center" style="padding: 1.5rem;">
                    <h3 style="font-weight: 700; color: var(--gray-900); margin-bottom: 0.5rem;">
                        <?php echo esc_html($t['bsf_title']); ?>
                    </h3>
                    <p style="color: var(--gray-500); font-size: 1rem; margin-bottom: 0.75rem;">
                        <?php echo esc_html($t['bsf_sched']); ?>
                    </p>
                    <p style="color: var(--gray-600); font-size: 1rem;">
                        <?php echo esc_html($t['bsf_desc']); ?>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Agape Love -->
    <section class="section section-gray">
        <div class="container-sm">
            <div class="text-center" style="margin-bottom: 2rem;">
                <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--gray-900); margin-bottom: 0.5rem;">
                    <?php echo esc_html($t['agape_title']); ?>
                </h2>
                <p style="color: var(--gray-500);"><?php echo esc_html($t['agape_subtitle']); ?></p>
            </div>

            <div class="scripture-quote centered" style="margin-bottom: 2rem;">
                <p><?php echo esc_html($t['agape_scripture']); ?></p>
                <span class="reference"><?php echo esc_html($t['agape_ref']); ?></span>
            </div>

            <div class="text-center">
                <p style="color: var(--gray-600); line-height: 1.6;">
                    <?php echo esc_html($t['agape_desc']); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="section section-gray cta-section">
        <div class="container-sm">
            <h2><?php echo esc_html($t['cta_title']); ?></h2>
            <p><?php echo esc_html($t['cta_desc']); ?></p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url(mariposa_get_page_url('about')); ?>" class="btn-primary">
                    <?php echo esc_html(mariposa_t('about')); ?>
                </a>
                <a href="<?php echo esc_url(mariposa_get_page_url('contact')); ?>" class="btn-secondary">
                    <?php echo esc_html(mariposa_t('contact')); ?>
                </a>
            </div>
        </div>
    </section>

</div>

<?php get_footer(); ?>
