"use client";

import SiteVerificationComponent from "@/components/__dashboard/siteVerificationComponent/SiteVerificationComponent";
import useFetchData from "@/hooks/useFetchData";



export default function SeoSiteVerification() {
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/verificationUrl`;

  const { data, loading, error } = useFetchData(baseAPIUrl)


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const siteVerification = data?.verificationUrl

  return (
    <>
      <SiteVerificationComponent data={siteVerification} />
    </>
  );
}

