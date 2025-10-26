/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://yasesvireddy.dev",
  generateRobotsTxt: true, // generates robots.txt as well
  sitemapSize: 7000,
  exclude: ["/404"],
  changefreq: "weekly",
  priority: 0.8,
};
