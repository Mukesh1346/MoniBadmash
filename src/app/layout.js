import Navbar from "@/components/Navbar/navbar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Script from "next/script";
import "aos/dist/aos.css"; // Import AOS styles globally
import Top from "@/components/ScrollToTop/top";
import Footer from "@/components/Footer/footer";
import Head from "next/head";

export const metadata = {
  title: "KANIKA ALMIRAH | Best Luxury Premium Almirah in India",
  description:
    "Shop high-quality steel almirahs, wardrobes, and premium metal furniture at Steel Shiva. Secure shopping, best prices, and fast delivery. Explore our collection now!",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Head>
          {/* Primary Meta Tags */}
          <title>Steel Shiva - Buy Best Luxury Steel Almirahs in India</title>
          <meta
            name="description"
            content="Shop premium steel almirahs, modern wardrobes, and metal storage furniture at Steel Shiva. Best quality, durable designs, and affordable pricing."
          />
          <meta
            name="keywords"
            content="steel almirah, luxury wardrobe, metal furniture, best steel almirah in India, premium storage solutions, durable steel furniture, modern wardrobe designs, almirah online shopping, affordable steel almirahs"
          />
          <meta name="author" content="Steel Shiva" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph (For Social Media) */}
          <meta
            property="og:title"
            content="Steel Shiva - Buy Premium Steel Almirahs & Furniture Online"
          />
          <meta
            property="og:description"
            content="Buy premium steel almirahs and modern wardrobes at affordable prices. Explore a wide range of durable and stylish storage solutions for your home and office."
          />
          <meta
            property="og:image"
            content="https://steelshiva.com/images/og-image.jpg"
          />
          <meta property="og:url" content="https://steelshiva.com/" />
          <meta property="og:type" content="website" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Steel Shiva - Best Steel Almirahs & Furniture Online"
          />
          <meta
            name="twitter:description"
            content="Shop luxury steel almirahs and storage furniture at the best prices. High-quality, modern designs for home and office."
          />
          <meta
            name="twitter:image"
            content="https://steelshiva.com/images/twitter-image.jpg"
          />

          {/* Canonical Tag */}
          <link rel="canonical" href="https://steelshiva.com/" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* Preconnect for Faster Loading */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://cdn.jsdelivr.net" />

          {/* JSON-LD Structured Data (For SEO) */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Steel Shiva",
              url: "https://steelshiva.com/",
              logo: "https://steelshiva.com/images/logo.png",
              description:
                "Premium steel almirahs and metal furniture at the best prices in India.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9312217117",
                contactType: "customer service",
              },
            })}
          </script>

          {/* Bootstrap CSS (Only Load if Needed) */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          />
        </Head>
      </head>
      <body>
        <Navbar />
        <Top />
        {children}
        <Footer />

        {/* Bootstrap JS (Only Load if Needed) */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
