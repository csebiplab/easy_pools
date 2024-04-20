"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RemoveBtn({ id, endPoints }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL

    if (confirmed) {
      const res = await fetch(
        `${baseAPIUrl}/api/${endPoints}?id=${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        router.refresh();
      }
      toast(`${endPoints} meta data successfully deleted.`);
      router.push(`/dashboard/allpages/${endPoints}`);
      console.log("resposne for delete", res);
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
