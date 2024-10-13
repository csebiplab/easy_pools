"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RemoveBtnComponent({ id, endpoint }) {
  const router = useRouter();
  const deleteDataHandler = async () => {
    const confirmed = confirm("Are you sure?");

    const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL

    if (confirmed) {
      const res = await fetch(`${baseAPIUrl}/api/${endpoint}?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
      toast(`Successfully deleted.`);
    }
  };

  return (
    <button aria-label="Delete" onClick={deleteDataHandler} className="text-red-400">
      <HiOutlineTrash size={24} />
      <span className="sr-only">Delete</span>
    </button>
  );
}
