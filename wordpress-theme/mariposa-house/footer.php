</main><!-- #main-content -->

<?php
$butterfly_url = MARIPOSA_URI . '/assets/images/butterfly.png';
$is_ja = mariposa_is_ja();
?>

<footer class="site-footer">
    <div class="container-lg">
        <div class="footer-inner">
            <div class="footer-grid">
                <!-- Brand -->
                <div>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="footer-brand-link">
                        <img src="<?php echo esc_url($butterfly_url); ?>" alt="Mariposa" width="28" height="28">
                        <span>Mariposa House</span>
                    </a>
                    <p class="footer-description">
                        <?php echo esc_html(mariposa_t('footer_desc')); ?>
                    </p>
                </div>

                <!-- Navigation -->
                <div>
                    <h3 class="footer-heading"><?php echo esc_html(mariposa_t('navigation')); ?></h3>
                    <div class="footer-links">
                        <a href="<?php echo esc_url(mariposa_get_page_url('about')); ?>">
                            <?php echo esc_html(mariposa_t('about')); ?>
                        </a>
                        <a href="<?php echo esc_url(mariposa_get_page_url('worship')); ?>">
                            <?php echo esc_html(mariposa_t('worship')); ?>
                        </a>
                    </div>
                </div>

                <!-- Contact -->
                <div>
                    <h3 class="footer-heading"><?php echo esc_html(mariposa_t('contact')); ?></h3>
                    <div class="footer-links">
                        <a href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))); ?>">
                            <?php echo esc_html(mariposa_t('news')); ?>
                        </a>
                        <a href="<?php echo esc_url(mariposa_get_page_url('contact')); ?>">
                            <?php echo esc_html(mariposa_t('contact')); ?>
                        </a>
                    </div>
                </div>

                <!-- Worship Time -->
                <div>
                    <h3 class="footer-heading"><?php echo esc_html(mariposa_t('worship_time')); ?></h3>
                    <p class="footer-worship-time"><?php echo esc_html(mariposa_t('worship_schedule')); ?></p>

                    <div class="footer-privacy-link">
                        <a href="<?php echo esc_url(mariposa_get_page_url('privacy')); ?>">
                            <?php echo esc_html(mariposa_t('privacy')); ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="container-lg">
            <p class="footer-copyright">
                &copy; <?php echo date('Y'); ?> Mariposa House Church. <?php echo esc_html(mariposa_t('copyright')); ?>
            </p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
