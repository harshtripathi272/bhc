/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bhcmp.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,

  // Additional paths for dynamic product category pages
  additionalPaths: async () => {
    const categorySlugs = [
      'trending',
      'machines',
      'dialysers',
      'spare-parts',
      'blood-tubings',
      'needles',
      'chemical',
      'citos',
      'syringes',
      'surgical',
    ]

    return categorySlugs.map((slug) => ({
      loc: `/products/${slug}`,
      changefreq: 'weekly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    }))
  },

  // Assign priority per route
  transform: async (config, path) => {
    const priorityMap = {
      '/': 1.0,
      '/dialysis-unit': 0.95,
      '/products': 0.9,
      '/services': 0.85,
      '/about': 0.8,
      '/contact': 0.8,
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorityMap[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    }
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
  },
}
