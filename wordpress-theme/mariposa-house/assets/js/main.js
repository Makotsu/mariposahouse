/**
 * Mariposa House - Main JavaScript
 *
 * Handles:
 * - Mobile menu toggle
 * - Header scroll effect
 */

document.addEventListener('DOMContentLoaded', function () {

  // =============================================
  // Mobile Menu Toggle
  // =============================================
  var menuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var iconOpen = document.getElementById('menu-icon-open');
  var iconClose = document.getElementById('menu-icon-close');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('open');

      if (isOpen) {
        mobileMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', menuBtn.dataset.labelOpen || 'Open menu');
        if (iconOpen) iconOpen.style.display = '';
        if (iconClose) iconClose.style.display = 'none';
      } else {
        mobileMenu.classList.add('open');
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.setAttribute('aria-label', menuBtn.dataset.labelClose || 'Close menu');
        if (iconOpen) iconOpen.style.display = 'none';
        if (iconClose) iconClose.style.display = '';
      }
    });

    // Close menu when clicking a link
    var mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        if (iconOpen) iconOpen.style.display = '';
        if (iconClose) iconClose.style.display = 'none';
      });
    });
  }

  // =============================================
  // Header Scroll Effect
  // =============================================
  var header = document.getElementById('site-header');

  if (header) {
    var scrollThreshold = 10;

    function handleScroll() {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Throttle scroll event for performance
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Initial check
    handleScroll();
  }

});
