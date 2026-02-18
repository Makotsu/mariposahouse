<?php
/**
 * Template Name: Privacy Policy Page
 * Description: Template for the Privacy Policy page
 *
 * @package Mariposa_House
 */

get_header();
?>

<div style="min-height: 100vh; padding-top: 5rem; background: var(--white);">

    <!-- Hero -->
    <section class="section section-gray" style="padding: 4rem 0;">
        <div class="container-sm">
            <h1 style="font-size: 1.875rem; font-weight: 700; color: var(--gray-900); margin-bottom: 1rem;">
                <?php the_title(); ?>
            </h1>
        </div>
    </section>

    <!-- Content from WordPress Editor -->
    <section class="section" style="padding: 4rem 0;">
        <div class="container-sm">
            <div class="entry-content">
                <?php
                while (have_posts()) : the_post();
                    the_content();
                endwhile;
                ?>
            </div>

            <!-- CTA -->
            <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--gray-200); text-align: center;">
                <p style="color: var(--gray-600); margin-bottom: 1rem;">
                    <?php echo esc_html(mariposa_t('questions_desc')); ?>
                </p>
                <a href="<?php echo esc_url(mariposa_get_page_url('contact')); ?>" class="btn-primary">
                    <?php echo esc_html(mariposa_t('contact')); ?>
                </a>
            </div>
        </div>
    </section>

</div>

<?php get_footer(); ?>
