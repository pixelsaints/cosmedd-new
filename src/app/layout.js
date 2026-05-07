import { Onest } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/style.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageMask from "@/components/transitions/PageMask";
import PageEnter from "@/components/transitions/PageEnter";


const dmSans = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL("https://cosmedd.com"),

  title: "Home | Cosmedd",
  description: "Advanced skincare solutions",

  openGraph: {
    title: "Cosmedd",
    description: "Modern skincare solutions",
    url: "https://cosmedd.com",
    siteName: "Cosmedd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cosmedd",
    description: "Modern skincare solutions",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="font-sans">
        <PageMask />
        <PageEnter />
        <Header />
        <main className="wrapper">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
