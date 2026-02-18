<?php
/**
 * Template Name: Contact Page
 * Description: Template for the Contact page with Contact Form 7
 *
 * @package Mariposa_House
 */

get_header();

$butterfly_url = MARIPOSA_URI . '/assets/images/butterfly.png';
?>

<div style="min-height: 100vh; padding-top: 4rem; background: var(--white);">

    <!-- Hero -->
    <section class="section">
        <div class="container-md text-center">
            <img src="<?php echo esc_url($butterfly_url); ?>" alt="Mariposa" width="100" height="100" style="margin: 0 auto 1.25rem;">
            <h1 style="font-size: 1.875rem; font-weight: 700; color: var(--gray-900); margin-bottom: 0.75rem;">
                <?php the_title(); ?>
            </h1>
        </div>
    </section>

    <!-- Content from WordPress Editor -->
    <section class="section section-gray">
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

</div>

<?php get_footer(); ?>
