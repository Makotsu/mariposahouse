<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<?php
$lang = mariposa_get_current_lang();
$is_ja = mariposa_is_ja();
$butterfly_url = MARIPOSA_URI . '/assets/images/butterfly.png';

// Navigation items
$nav_items = array(
    array('label' => mariposa_t('home'),    'url' => home_url('/')),
    array('label' => mariposa_t('about'),   'url' => mariposa_get_page_url('about')),
    array('label' => mariposa_t('worship'), 'url' => mariposa_get_page_url('worship')),
    array('label' => mariposa_t('news'),    'url' => get_permalink(get_option('page_for_posts'))),
    array('label' => mariposa_t('contact'), 'url' => mariposa_get_page_url('contact')),
);

// Language URLs
$ja_url = mariposa_get_language_url('ja');
$en_url = mariposa_get_language_url('en');

// Current URL for active state (works on archive and singular pages)
global $wp;
$current_url = trailingslashit(home_url($wp->request));
$home_url = trailingslashit(home_url('/'));
?>

<header class="site-header" id="site-header">
    <nav class="container">
        <div class="header-inner">
            <!-- Logo -->
            <a href="<?php echo esc_url(home_url('/')); ?>" class="logo-link">
                <img src="<?php echo esc_url($butterfly_url); ?>" alt="Mariposa" width="36" height="36">
                <span>Mariposa House</span>
            </a>

            <!-- Desktop Navigation -->
            <div class="desktop-nav">
                <?php foreach ($nav_items as $item) :
                    $item_url = trailingslashit($item['url']);
                    $is_active = ($item_url === $home_url)
                        ? ($current_url === $home_url)
                        : (strpos($current_url, $item_url) === 0);
                ?>
                    <a href="<?php echo esc_url($item['url']); ?>"
                       class="nav-link <?php echo $is_active ? 'active' : ''; ?>"
                       <?php echo $is_active ? 'aria-current="page"' : ''; ?>>
                        <?php echo esc_html($item['label']); ?>
                    </a>
                <?php endforeach; ?>

                <?php if ($ja_url || $en_url) : ?>
                <div class="lang-toggle" role="group" aria-label="<?php echo esc_attr(mariposa_t('lang_selector')); ?>">
                    <a href="<?php echo esc_url($ja_url ?: '#'); ?>"
                       class="<?php echo $lang === 'ja' ? 'active' : ''; ?>"
                       <?php echo $lang === 'ja' ? 'aria-pressed="true"' : 'aria-pressed="false"'; ?>>
                        日本語
                    </a>
                    <a href="<?php echo esc_url($en_url ?: '#'); ?>"
                       class="<?php echo $lang === 'en' ? 'active' : ''; ?>"
                       <?php echo $lang === 'en' ? 'aria-pressed="true"' : 'aria-pressed="false"'; ?>>
                        EN
                    </a>
                </div>
                <?php endif; ?>
            </div>

            <!-- Mobile Menu Button -->
            <button class="mobile-menu-btn"
                    id="mobile-menu-btn"
                    aria-label="<?php echo esc_attr(mariposa_t('open_menu')); ?>"
                    aria-expanded="false"
                    aria-controls="mobile-menu">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" id="menu-icon-open">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" id="menu-icon-close" style="display:none;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div class="mobile-nav" id="mobile-menu">
            <div class="mobile-nav-links">
                <?php foreach ($nav_items as $item) :
                    $item_url = trailingslashit($item['url']);
                    $is_active = ($item_url === $home_url)
                        ? ($current_url === $home_url)
                        : (strpos($current_url, $item_url) === 0);
                ?>
                    <a href="<?php echo esc_url($item['url']); ?>"
                       class="mobile-nav-link <?php echo $is_active ? 'active' : ''; ?>"
                       <?php echo $is_active ? 'aria-current="page"' : ''; ?>>
                        <?php echo esc_html($item['label']); ?>
                    </a>
                <?php endforeach; ?>

                <?php if ($ja_url || $en_url) : ?>
                <div class="mobile-nav-lang">
                    <div class="lang-toggle" role="group" aria-label="<?php echo esc_attr(mariposa_t('lang_selector')); ?>">
                        <a href="<?php echo esc_url($ja_url ?: '#'); ?>"
                           class="<?php echo $lang === 'ja' ? 'active' : ''; ?>">
                            日本語
                        </a>
                        <a href="<?php echo esc_url($en_url ?: '#'); ?>"
                           class="<?php echo $lang === 'en' ? 'active' : ''; ?>">
                            EN
                        </a>
                    </div>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </nav>
</header>

<main id="main-content">
