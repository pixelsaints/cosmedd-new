export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        // 1. Explicitly allow the homepage and general crawling
        allow: "/",
      },
      {
        userAgent: "*",
        // 2. Put the specific ALLOW rule BEFORE the DISALLOW rule
        allow: "/archive/1Q84",
        disallow: "/archive/",
      },
    ],
    sitemap: "https://cosmedd.com/sitemap.xml",
  };
}