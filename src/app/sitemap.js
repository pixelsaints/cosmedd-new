export default function sitemap() {
  const baseUrl = "https://cosmedd.com";
  const lastModified = new Date().toISOString();

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/about`, lastModified },
    { url: `${baseUrl}/products`, lastModified },
    { url: `${baseUrl}/products/pharmaceuticals`, lastModified },
    { url: `${baseUrl}/products/herbal-natural-medicines`, lastModified },
    { url: `${baseUrl}/products/consumer-healthcare`, lastModified },
    { url: `${baseUrl}/products/active-pharma-ingredients`, lastModified },
    { url: `${baseUrl}/products/womens-healthcare`, lastModified },
    { url: `${baseUrl}/products/mens-healthcare`, lastModified },
    { url: `${baseUrl}/products/veterinary-solutions`, lastModified },
    { url: `${baseUrl}/quality`, lastModified },
    { url: `${baseUrl}/global-presence`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },
    { url: `${baseUrl}/why-choose-us`, lastModified },
  ];
}