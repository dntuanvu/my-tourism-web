const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  // Other Next.js configuration ...
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/en/homepage",
        permanent: true,
      },
      // Wildcard path matching
    ];
  },
  images: {
    domains: ["images.unsplash.com", "images.pexels.com"],
  },
});
