export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        // Combine all paths into the same array for a single User-Agent block
        allow: ["/", "/archive/1Q84"],
        disallow: ["/archive/"],
      },
    ],
    sitemap: "https://cosmedd.com/sitemap.xml",
  };
}