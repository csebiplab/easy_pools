"use client";

import SiteVerificationComponent from "@/components/__dashboard/siteMapComponent/SiteMapComponent";
import useFetchData from "@/hooks/useFetchData";



export default function SeoSiteVerification() {
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/siteMap`;

  const { data, loading, error } = useFetchData(baseAPIUrl)


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(data)
  const sitemaps = data?.data

  return (
    <>
      <SiteVerificationComponent sitemaps={sitemaps} />
    </>
  );
}

