"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RemoveBlogBtnComponent({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL;

    if (confirmed) {
      const res = await fetch(`${baseAPIUrl}/api/blogContent?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
      toast(`Blog data successfully deleted.`);
      router.push(`/dashboard/blogs`);
    }
  };

  return (
    <button aria-label="Delete" onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
      <span className="sr-only">Delete</span>
    </button>
  );
}
