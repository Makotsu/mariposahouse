<?php
/**
 * Default Page Template
 * Used for pages that don't have a custom template assigned
 *
 * @package Mariposa_House
 */

get_header();

$butterfly_url = MARIPOSA_URI . '/assets/images/butterfly.png';
?>

<div style="min-height: 100vh; padding-top: 5rem; background: var(--white);">

    <?php while (have_posts()) : the_post(); ?>

        <!-- Hero -->
        <section class="section" style="padding-top: 3rem;">
            <div class="container-md text-center">
                <img src="<?php echo esc_url($butterfly_url); ?>" alt="Mariposa" width="80" height="80" style="margin: 0 auto 1.25rem;">
                <h1 style="font-size: 1.875rem; font-weight: 700; color: var(--gray-900); margin-bottom: 0.75rem;">
                    <?php the_title(); ?>
                </h1>
            </div>
        </section>

        <!-- Content -->
        <section class="section">
            <div class="container-sm">
                <article class="entry-content">
                    <?php the_content(); ?>
                </article>
            </div>
        </section>

    <?php endwhile; ?>

</div>

<?php get_footer(); ?>
