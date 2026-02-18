<?php
/**
 * Archive/News Listing Template
 *
 * @package Mariposa_House
 */

get_header();

$is_ja = mariposa_is_ja();
$butterfly_url = MARIPOSA_URI . '/assets/images/butterfly.png';
?>

<div style="min-height: 100vh; padding-top: 4rem; background: var(--white);">

    <!-- Hero -->
    <section class="section">
        <div class="container-md text-center">
            <img src="<?php echo esc_url($butterfly_url); ?>" alt="Mariposa" width="100" height="100" style="margin: 0 auto 1.25rem;">
            <h1 style="font-size: 1.875rem; font-weight: 700; color: var(--gray-900); margin-bottom: 0.75rem;">
                <?php echo esc_html($is_ja ? 'お知らせ' : 'News'); ?>
            </h1>
            <p style="font-size: 1.125rem; color: var(--gray-500);">
                <?php echo esc_html($is_ja ? 'News & Updates' : 'News & Updates'); ?>
            </p>
        </div>
    </section>

    <!-- News List -->
    <section class="section section-gray">
        <div class="container-sm">
            <?php if (have_posts()) : ?>
                <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                    <?php while (have_posts()) : the_post(); ?>
                        <a href="<?php the_permalink(); ?>" class="news-card" style="text-decoration: none;">
                            <article class="card" style="cursor: pointer;">
                                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
                                    <?php
                                    $categories = get_the_category();
                                    foreach ($categories as $cat) : ?>
                                        <span class="category-tag"><?php echo esc_html($cat->name); ?></span>
                                    <?php endforeach; ?>
                                </div>
                                <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--gray-900); margin-bottom: 0.75rem;">
                                    <?php the_title(); ?>
                                </h2>
                                <p style="color: var(--gray-600); margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                                    <?php echo esc_html(get_the_excerpt()); ?>
                                </p>
                                <div style="display: flex; align-items: center; justify-content: space-between;">
                                    <time class="post-meta-date"><?php echo get_the_date(); ?></time>
                                    <span class="read-more">
                                        <?php echo esc_html(mariposa_t('read_more')); ?>
                                        <?php echo mariposa_arrow_icon('right'); ?>
                                    </span>
                                </div>
                            </article>
                        </a>
                    <?php endwhile; ?>
                </div>

                <!-- Pagination -->
                <div class="pagination">
                    <?php
                    echo paginate_links(array(
                        'prev_text' => '&laquo;',
                        'next_text' => '&raquo;',
                    ));
                    ?>
                </div>

            <?php else : ?>
                <div style="text-align: center; padding: 3rem 0;">
                    <p style="color: var(--gray-600);"><?php echo esc_html(mariposa_t('no_news')); ?></p>
                </div>
            <?php endif; ?>
        </div>
    </section>

    <!-- CTA -->
    <section class="section section-white cta-section">
        <div class="container-sm">
            <h2><?php echo esc_html(mariposa_t('questions')); ?></h2>
            <p><?php echo esc_html(mariposa_t('questions_desc')); ?></p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url(mariposa_get_page_url('contact')); ?>" class="btn-primary">
                    <?php echo esc_html(mariposa_t('contact')); ?>
                </a>
            </div>
        </div>
    </section>

</div>

<?php get_footer(); ?>
