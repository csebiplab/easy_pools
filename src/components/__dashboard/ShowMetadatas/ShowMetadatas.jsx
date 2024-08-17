"use client";

import NoDataFound from "@/components/__shared/dashboard/NoDataFound";
import RemoveBtn from "@/components/__shared/dashboard/RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

export default function ShowMetadatas({ data }) {
  return data && data.length > 0 ? (
    <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 !font-extrabold text-green-800"
            >
              Page Name
            </th>
            <th scope="col" className="px-6 py-3">
              Meta Title
            </th>
            <th scope="col" className="px-6 py-3">
              Meta Description
            </th>
            <th scope="col" className="px-6 py-3">
              Meta Keywords
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr
              key={item?._id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-green-800 !uppercase">
                {item?.pageName}
                <br />
                <span className="text-blue-500 underline !lowercase">
                  {item?.pageLink ? item?.pageLink : "Please add page link"}
                </span>
              </td>
              <td className="px-6 py-4">{item?.title}</td>
              <td className="px-6 py-4">{item?.description}</td>
              <td className="px-6 py-4">{item?.keywords}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <Link href={`/dashboard/allpages/edit-metadata/${item?._id}`}>
                    <HiPencilAlt size={24} />
                  </Link>
                  <RemoveBtn id={item?._id} pagename={item?.pagename} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <NoDataFound />
  );
}
