import MainHomePageComponent from "@/components/__one_time_used/MainHomePageComponent/MainHomePageComponent";
import { pageName } from "@/constants/dashboard/pageName.constants";


// Dynamic Metadata
export async function generateMetadata() {
  try {
    const metaDataResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/metaDatas?pageName=${pageName.home}`);
    const metaData = await metaDataResponse.json();

    const { data } = metaData ?? {};

    const { title, description, keywords } = data ?? {}



    // Fetch Google site verification URL
    // const googleVerificationResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/verificationUrl`);
    // const googleVerification = await googleVerificationResponse.json();

    // console.log("googleVerificationResponse", googleVerificationResponse)
    // console.log("googleVerification", googleVerification)

    // Extract Google console key from the meta tag content
    // const googleConsoleKey = extractGoogleConsoleKey(googleVerification);

    return {
      title: title,
      description: description,
      keywords: keywords,
      // verification: {
      //   google: googleConsoleKey,
      // }
    }


  } catch (error) {
    console.log("object err:", error)
    return {
      title: "Easy pools | Home",
      keywords: "Home, Easy pools",
      description: "Easy pools"
    };
  }
}

function extractGoogleConsoleKey(googleVerification) {
  try {
    const { verificationUrl } = googleVerification ?? {};
    const metaTagContent = verificationUrl[0]?.title;
    const consoleKey = metaTagContent?.split(" ")[2]?.split("=")[1]?.slice(1, -1);
    return consoleKey;
  } catch (error) {
    console.error('Error extracting Google console key:', error);
  }
}



export default function Home() {
  return (
    <main className="min-h-screen ">
      <MainHomePageComponent />
    </main>
  );
}
