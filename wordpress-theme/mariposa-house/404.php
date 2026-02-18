<?php
/**
 * 404 Page Template
 *
 * @package Mariposa_House
 */

get_header();
?>

<div class="page-404">
    <div>
        <h1>404</h1>
        <h2><?php echo esc_html(mariposa_t('404_title')); ?></h2>
        <p><?php echo esc_html(mariposa_t('404_desc')); ?></p>
        <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-primary">
            <?php echo esc_html(mariposa_t('404_home')); ?>
        </a>
    </div>
</div>

<?php get_footer(); ?>
