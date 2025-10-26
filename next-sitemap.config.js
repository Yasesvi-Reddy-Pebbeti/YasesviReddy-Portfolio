/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://yasesvireddy.dev",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.8,

  // ✅ Manually include known routes for App Router
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/about"),
    await config.transform(config, "/projects"),
    await config.transform(config, "/experience"),
    await config.transform(config, "/contact"),
  ],

  exclude: ["/404"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};
