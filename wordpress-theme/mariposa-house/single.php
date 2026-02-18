<?php
/**
 * Single Post Template
 *
 * @package Mariposa_House
 */

get_header();

$is_ja = mariposa_is_ja();
$butterfly_url = MARIPOSA_URI . '/assets/images/butterfly.png';
?>

<div style="min-height: 100vh; padding-top: 5rem;">

    <?php while (have_posts()) : the_post(); ?>

        <!-- Hero -->
        <section class="section section-gray" style="padding: 4rem 0;">
            <div class="container-md">
                <!-- Breadcrumb -->
                <nav class="breadcrumb" aria-label="Breadcrumb">
                    <a href="<?php echo esc_url(home_url('/')); ?>">
                        <?php echo esc_html(mariposa_t('home')); ?>
                    </a>
                    <span class="separator">/</span>
                    <a href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))); ?>">
                        <?php echo esc_html(mariposa_t('news')); ?>
                    </a>
                    <span class="separator">/</span>
                    <span class="current"><?php the_title(); ?></span>
                </nav>

                <!-- Categories -->
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                    <?php
                    $categories = get_the_category();
                    foreach ($categories as $cat) : ?>
                        <span class="category-tag-pill"><?php echo esc_html($cat->name); ?></span>
                    <?php endforeach; ?>
                </div>

                <!-- Title -->
                <h1 style="font-size: 1.875rem; font-weight: 700; color: var(--gray-900); margin-bottom: 1rem;">
                    <?php the_title(); ?>
                </h1>

                <!-- Date -->
                <time style="color: var(--gray-500);"><?php echo get_the_date(); ?></time>
            </div>
        </section>

        <!-- Content -->
        <section class="section section-white">
            <div class="container-md">
                <article class="entry-content">
                    <?php the_content(); ?>
                </article>
            </div>
        </section>

    <?php endwhile; ?>

    <!-- Back to list -->
    <section class="section section-gray" style="text-align: center;">
        <div class="container-md">
            <a href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))); ?>" class="btn-secondary">
                <?php echo mariposa_arrow_icon('left'); ?>
                <?php echo esc_html(mariposa_t('back_to_news')); ?>
            </a>
        </div>
    </section>

    <!-- CTA -->
    <section class="section section-white" style="padding: 4rem 0;">
        <div class="container-md text-center">
            <img src="<?php echo esc_url($butterfly_url); ?>" alt="Mariposa" width="48" height="48" style="margin: 0 auto 1rem; opacity: 0.4;">
            <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--gray-900); margin-bottom: 1rem;">
                <?php echo esc_html(mariposa_t('news_questions')); ?>
            </h2>
            <p style="color: var(--gray-600); margin-bottom: 1.5rem;">
                <?php echo esc_html(mariposa_t('news_questions_desc')); ?>
            </p>
            <a href="<?php echo esc_url(mariposa_get_page_url('contact')); ?>" class="btn-primary">
                <?php echo esc_html(mariposa_t('contact')); ?>
            </a>
        </div>
    </section>

</div>

<?php get_footer(); ?>
