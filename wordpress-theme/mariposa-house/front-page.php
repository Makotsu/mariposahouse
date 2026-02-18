<?php
/**
 * Front Page Template
 *
 * @package Mariposa_House
 */

get_header();

$is_ja = mariposa_is_ja();
$butterfly_url = MARIPOSA_URI . '/assets/images/butterfly.png';

// Read from Customizer
$h = array(
    'title'       => mariposa_mod('fp_hero_title', 'Mariposa House'),
    'subtitle'    => mariposa_mod('fp_hero_subtitle', $is_ja ? 'マリポサハウス' : 'Mariposa House Church'),
    'tagline'     => mariposa_mod('fp_hero_tagline', $is_ja ? 'いのちの変革 — キリストにあって新しくされる' : 'Life Transformation — Made New in Christ'),
    'description' => mariposa_mod('fp_hero_desc', $is_ja ? 'キリストにあって新しく造られた者となる喜びを分かち合う' : 'Sharing the joy of becoming a new creation in Christ'),
    'cta_worship' => mariposa_mod('fp_hero_cta_worship', $is_ja ? '礼拝のご案内' : 'Worship Info'),
    'cta_contact' => mariposa_mod('fp_hero_cta_contact', $is_ja ? 'お問い合わせ' : 'Contact Us'),
);

$w = array(
    'title'       => mariposa_mod('fp_worship_title', $is_ja ? '礼拝のご案内' : 'Worship Service'),
    'description' => mariposa_mod('fp_worship_desc', $is_ja ? '毎週日曜日、オンラインで共に主を礼拝し、みことばに聴き、祈りと交わりの時を持っています。初めての方も心から歓迎します。' : 'Every Sunday, we gather online to worship the Lord together, hear His Word, and enjoy prayer and fellowship. Everyone is warmly welcome!'),
    'time'        => mariposa_mod('fp_worship_time', $is_ja ? '毎週日曜日 10:00 - 12:00（オンライン）' : 'Every Sunday 10:00 AM - 12:00 PM (Online)'),
    'details'     => mariposa_mod('fp_worship_details', $is_ja ? '詳しく見る' : 'Learn More'),
);

$c = array(
    'title'       => mariposa_mod('fp_cta_title', $is_ja ? 'あなたとの出会いを心待ちにしています' : 'We Look Forward to Meeting You'),
    'description' => mariposa_mod('fp_cta_desc', $is_ja ? 'マリポサハウスは、すべての人を歓迎します。共に主を礼拝し、共に成長し、神の愛のうちに歩みましょう。' : 'Mariposa House welcomes everyone. Let\'s worship the Lord together, grow together, and walk in God\'s love.'),
);
?>

<div style="min-height: 100vh; background: var(--white);">

    <!-- Hero Section -->
    <section class="hero">
        <div class="container-md text-center">
            <div class="animate-fade-in-up">
                <!-- Butterfly Icon -->
                <div class="hero-butterfly">
                    <img src="<?php echo esc_url($butterfly_url); ?>" alt="Mariposa" width="160" height="160">
                </div>

                <!-- Main heading -->
                <h1><?php echo esc_html($h['title']); ?></h1>
                <p class="subtitle"><?php echo esc_html($h['subtitle']); ?></p>
                <p class="tagline"><?php echo esc_html($h['tagline']); ?></p>
                <p class="description"><?php echo esc_html($h['description']); ?></p>

                <!-- CTA Buttons -->
                <div class="hero-buttons">
                    <a href="<?php echo esc_url(mariposa_get_page_url('worship')); ?>" class="btn-primary">
                        <?php echo esc_html($h['cta_worship']); ?>
                        <?php echo mariposa_arrow_icon('right'); ?>
                    </a>
                    <a href="<?php echo esc_url(mariposa_get_page_url('contact')); ?>" class="btn-secondary">
                        <?php echo esc_html($h['cta_contact']); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Latest News Section -->
    <section class="section section-gray">
        <div class="container-lg">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
                <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--gray-900);">
                    <?php echo esc_html($is_ja ? 'お知らせ' : 'News & Updates'); ?>
                </h2>
                <a href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))); ?>"
                   style="color: var(--gray-600); font-size: 1rem; display: inline-flex; align-items: center; gap: 0.25rem; text-decoration: none; transition: color 0.2s;">
                    <?php echo esc_html(mariposa_t('view_all')); ?>
                    <?php echo mariposa_arrow_icon('right'); ?>
                </a>
            </div>

            <?php
            $latest_posts = new WP_Query(array(
                'posts_per_page' => 3,
                'post_status'    => 'publish',
            ));

            if ($latest_posts->have_posts()) : ?>
                <div class="news-grid cols-3">
                    <?php while ($latest_posts->have_posts()) : $latest_posts->the_post(); ?>
                        <a href="<?php the_permalink(); ?>" class="news-card">
                            <div class="card">
                                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
                                    <?php
                                    $categories = get_the_category();
                                    foreach ($categories as $cat) : ?>
                                        <span class="category-tag"><?php echo esc_html($cat->name); ?></span>
                                    <?php endforeach; ?>
                                </div>
                                <h3 class="post-title" style="line-height: 1.4;">
                                    <?php the_title(); ?>
                                </h3>
                                <p class="post-excerpt"><?php echo esc_html(get_the_excerpt()); ?></p>
                                <time class="post-meta-date"><?php echo get_the_date(); ?></time>
                            </div>
                        </a>
                    <?php endwhile; ?>
                </div>
            <?php else : ?>
                <p style="color: var(--gray-500); text-align: center; padding: 2rem 0;">
                    <?php echo esc_html(mariposa_t('no_news')); ?>
                </p>
            <?php endif;
            wp_reset_postdata();
            ?>
        </div>
    </section>

    <!-- Worship Info Section -->
    <section class="section section-white">
        <div class="container-sm text-center">
            <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--gray-900); margin-bottom: 1rem;">
                <?php echo esc_html($w['title']); ?>
            </h2>
            <p style="color: var(--gray-600); margin-bottom: 1.5rem; line-height: 1.6;">
                <?php echo esc_html($w['description']); ?>
            </p>

            <div class="worship-time-info">
                <div class="worship-time-inner">
                    <div class="worship-time-icon">
                        <?php echo mariposa_clock_icon(); ?>
                    </div>
                    <div>
                        <p style="font-weight: 500; color: var(--gray-900);">
                            <?php echo esc_html($w['time']); ?>
                        </p>
                    </div>
                </div>
            </div>

            <a href="<?php echo esc_url(mariposa_get_page_url('worship')); ?>" class="btn-primary">
                <?php echo esc_html($w['details']); ?>
            </a>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="section section-gray cta-section">
        <div class="container-sm">
            <h2><?php echo esc_html($c['title']); ?></h2>
            <p><?php echo esc_html($c['description']); ?></p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url(mariposa_get_page_url('worship')); ?>" class="btn-primary">
                    <?php echo esc_html($h['cta_worship']); ?>
                </a>
                <a href="<?php echo esc_url(mariposa_get_page_url('contact')); ?>" class="btn-secondary">
                    <?php echo esc_html(mariposa_t('contact')); ?>
                </a>
            </div>
        </div>
    </section>

</div>

<?php get_footer(); ?>
