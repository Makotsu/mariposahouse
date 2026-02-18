<?php
/**
 * Template Name: About Page
 * Description: Template for the About page
 *
 * @package Mariposa_House
 */

get_header();

$butterfly_url = MARIPOSA_URI . '/assets/images/butterfly.png';
?>

<div style="min-height: 100vh; background: var(--white);">

    <!-- Hero -->
    <section class="hero-page" style="padding-top: 5rem;">
        <div class="container-md text-center">
            <img src="<?php echo esc_url($butterfly_url); ?>" alt="Mariposa" width="100" height="100" style="margin: 0 auto 1.25rem;">
            <h1 style="font-size: 1.875rem; font-weight: 700; color: var(--gray-900); margin-bottom: 0.75rem;">
                <?php the_title(); ?>
            </h1>
        </div>
    </section>

    <!-- Content from WordPress Editor -->
    <section class="section">
        <div class="container-sm">
            <div class="entry-content">
                <?php
                while (have_posts()) : the_post();
                    the_content();
                endwhile;
                ?>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="section section-gray cta-section">
        <div class="container-sm">
            <h2><?php echo esc_html(mariposa_t('about_cta_title')); ?></h2>
            <p><?php echo esc_html(mariposa_t('about_cta_desc')); ?></p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url(mariposa_get_page_url('contact')); ?>" class="btn-primary">
                    <?php echo esc_html(mariposa_t('contact')); ?>
                </a>
            </div>
        </div>
    </section>

</div>

<?php get_footer(); ?>
