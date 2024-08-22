import Footer from "@/components/layouts/Footer/Footer";
import { Roboto_Slab } from "next/font/google";
import "../globals.css"
import { NavHeader } from "@/components/layouts/Header/NavHeader";
import { pageName } from "@/constants/dashboard/pageName.constants";
import { headers } from "next/headers";
import { GoogleTagManager } from '@next/third-parties/google'
import JsonLd from "@/components/__SEORelated/JsonLd";



const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

function extractGoogleConsoleKey(verificationData) {
  try {
    const metaTagContent = verificationData.verificationUrl?.[0]?.url;
    if (!metaTagContent) return "";

    const parts = metaTagContent.split(" ");
    if (parts.length < 3) return "";


    const consoleKeyPart = parts[2].split("=")[1];
    return consoleKeyPart.slice(1, -1);
  } catch (error) {
    console.error('Error extracting Google console key:', error);
    return "";
  }
}

export async function generateMetadata() {

  const headerList = headers();
  const pathname = headerList.get("x-current-path");


  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const metaDataResponse = await fetch(`${apiUrl}/api/metaDatas?pageName=${pageName.home}`, {
      cache: "no-store",
    });
    const metaData = await metaDataResponse.json();
    const { title, description, keywords } = metaData?.data[0] ?? {};

    const googleVerificationResponse = await fetch(`${apiUrl}/api/verificationUrl`, {
      cache: "no-store",
    });
    const googleVerification = await googleVerificationResponse.json();
    const googleConsoleKey = extractGoogleConsoleKey(googleVerification);

    return {
      title: title || "#1 Swimming Pool Installation in Toronto | Easy Pools",
      description: description || "Easy Pools offers expert swimming pool installation services in Toronto. Our skilled Toronto pool installers ensure top-quality workmanship.",
      keywords: keywords || "easy pools, best pools, great pools, Toronto Pool Installation, Pool Installation Toronto, ",
      verification: {
        google: googleConsoleKey,
      },
      alternates: {
        canonical: `https://easypools.ca${pathname}`,
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    };
  } catch (error) {
    return {
      title: "#1 Swimming Pool Installation in Toronto | Easy Pools",
      keywords: "easy pools, best pools, great pools, Toronto Pool Installation, Pool Installation Toronto, ",
      description: "Easy Pools offers expert swimming pool installation services in Toronto. Our skilled Toronto pool installers ensure top-quality workmanship.",
    };
  }
}

export default function RootLayout({ children }) {

  const jsonData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Easy Pools",
    "url": "https://easypools.ca",
    "logo": "https://easypools.ca/logo.png",
    "description": "Easy Pools provides top-quality pool installation and maintenance services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1331 Major MacKenzie Dr W",
      "addressLocality": "Vaughan",
      "addressRegion": "ON",
      "postalCode": "L6A 4W4",
      "addressCountry": "Canada"
    },
    "telephone": "+1-647-449-9512",
    "openingHours": "Mo-Sa 09:00-18:00",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.65107",
      "longitude": "-79.347015"
    },
    "sameAs": "https://g.co/kgs/7msjHmq",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+1-647-449-9512",
      "email": "easypools.landscaping@gmail.com"
    }
  }


  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WLRGDBZW" />



      <body className={robotoSlab.className}>
        <JsonLd data={jsonData} />

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLRGDBZW"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <>
          <NavHeader />
        </>
        <>
          {children}
        </>
        <>
          <Footer />
        </>
      </body>
    </html>
  );
}
