const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  productionBrowserSourceMaps: true,
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
});
