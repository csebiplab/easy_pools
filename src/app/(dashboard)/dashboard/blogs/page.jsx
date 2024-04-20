"use client";

import BlogList from "@/components/__dashboard/BlogComponents/BlogList";
import useFetchData from "@/hooks/useFetchData";

export default function page() {
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/blogContent`;

  const { data, loading, error } = useFetchData(baseAPIUrl);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const blogs = data?.data;

  // console.log(blogs);

  return (
    <div>
      <BlogList allBlogList={blogs} />
    </div>
  );
}
