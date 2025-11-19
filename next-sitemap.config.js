/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.bravemoor.com', // ✅ your site URL
  generateRobotsTxt: true,              // ✅ auto-create robots.txt
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 7000,
  exclude: ['/api/*'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};
