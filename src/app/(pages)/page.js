import MainHomePageComponent from "@/components/__one_time_used/MainHomePageComponent/MainHomePageComponent";
import { pageName } from "@/constants/dashboard/pageName.constants";

function extractGoogleConsoleKey(verificationData) {
  try {
    const metaTagContent = verificationData.verificationUrl?.[0]?.url;
    // console.log(metaTagContent, "META TAG CONTNT")
    if (!metaTagContent) return "";

    const parts = metaTagContent.split(" ");
    if (parts.length < 3) return "";

    // console.log(parts, "key parts")

    const consoleKeyPart = parts[2].split("=")[1];
    // console.log(consoleKeyPart, "gvid")
    return consoleKeyPart.slice(1, -1);
  } catch (error) {
    console.error('Error extracting Google console key:', error);
    return "";
  }
}

export async function generateMetadata() {
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
    // console.log("verificaion", googleVerification)
    const googleConsoleKey = extractGoogleConsoleKey(googleVerification);

    return {
      title: title || "#1 Swimming Pool Installation in Toronto | Easy Pools",
      description: description || "Easy Pools offers expert swimming pool installation services in Toronto. Our skilled Toronto pool installers ensure top-quality workmanship.",
      keywords: keywords || "easy pools, best pools, great pools, Toronto Pool Installation, Pool Installation Toronto, ",
      verification: {
        google: googleConsoleKey,
      },
      alternates: {
        canonical: 'https://easypools.ca/',
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: "#1 Swimming Pool Installation in Toronto | Easy Pools",
      keywords: "easy pools, best pools, great pools, Toronto Pool Installation, Pool Installation Toronto, ",
      description: "Easy Pools offers expert swimming pool installation services in Toronto. Our skilled Toronto pool installers ensure top-quality workmanship.",
    };
  }
}

// Main Home component
export default function Home() {
  return (
    <main className="min-h-screen">
      <MainHomePageComponent />
    </main>
  );
}
