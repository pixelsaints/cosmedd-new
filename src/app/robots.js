export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/archive/1Q84",
        disallow: "/archive/",
      },
    ],
    sitemap: "https://cosmedd.com/sitemap.xml",
  };
}