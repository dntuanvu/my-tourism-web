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
});
