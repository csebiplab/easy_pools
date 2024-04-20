import CreateBlog from "@/components/__dashboard/BlogComponents/CreateBlog/CreateBlog";

const UpdateBlogPage = async ({ params }) => {
  const { id } = params;
  const data = await getBlogDataById(id);

  const blog = data?.data;

  return <CreateBlog id={id} data={blog} />;
};
export default UpdateBlogPage;

const getBlogDataById = async (id) => {
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const res = await fetch(`${baseAPIUrl}/api/blogContent/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
