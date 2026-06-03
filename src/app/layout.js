import { Onest } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/style.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import PageEnter from "@/components/transitions/PageEnter";
import CatalogDrawer from "@/components/ui/CatalogDrawer";
import { DrawerProvider } from "@/context/DrawerContext";


const dmSans = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL("https://cosmedd.com/"),

  title: "Cosmedd Healthcare | Global Pharmaceutical & Wellness Export Solutions",
  description: "Cosmedd Healthcare is a global export-oriented company delivering pharmaceutical formulations, nutraceuticals, APIs, medical devices, and wellness solutions worldwide.",

  openGraph: {
    title: "Cosmedd Healthcare | Global Healthcare Export Solutions",
    description: "Trusted sourcing and export of pharmaceutical, nutraceutical, wellness, and healthcare products across global markets.",
    url: "https://cosmedd.com/",
    siteName: "Cosmedd",
    images: [
      {
        url: "/images/ogg-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cosmedd",
    description: "Trusted sourcing and export of pharmaceutical, nutraceutical, wellness, and healthcare products across global markets.",
    images: ["/images/ogg-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cosmedd Healthcare",
  url: "https://cosmedd.com",
  logo: "https://cosmedd.com/logo.png",
  description: "Global healthcare sourcing and export partner for pharmaceutical, nutraceutical, wellness, and healthcare products.",
  foundingDate: "2015",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="font-sans">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9926QR033Q" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">

          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9926QR033Q');`}
        </Script>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <DrawerProvider>
          <PageEnter />
          <Header />
          <main className="wrapper">
            {children}
            <Footer />
          </main>
          <CatalogDrawer />
        </DrawerProvider>
      </body>
    </html>
  );
}
