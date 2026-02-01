/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mariposahouse.church',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  alternateRefs: [
    {
      href: 'https://mariposahouse.church/ja',
      hreflang: 'ja',
    },
    {
      href: 'https://mariposahouse.church/en',
      hreflang: 'en',
    },
  ],
};
