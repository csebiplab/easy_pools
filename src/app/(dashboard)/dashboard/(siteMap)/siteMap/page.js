"use client";

import SitemapForDBoard from "@/components/__dashboard/SitemapComponents/SitemapForDBoard";
import useFetchData from "@/hooks/useFetchData";



export default function SeoSitemap() {
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/siteMap`;

  const { data, loading, error } = useFetchData(baseAPIUrl)


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const sitemap = data?.data

  return (
    <>
      <SitemapForDBoard data={sitemap} />
    </>
  );
}

