"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { HiPencilAlt } from "react-icons/hi";
// import RemoveBtn from "./RemoveBtn";

const ShareComponent = ({
  editPath,
  blogRouteAllMetaData,
  id,
  titleValue,
  descriptionValue,
  keywordsValue,
  endPoints,
}) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
    keywords: "",
  });

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    setInputValue({
      title: titleValue,
      description: descriptionValue,
      keywords: keywordsValue,
    });
  }, [id]);
  const handleTitleChange = (e) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      title: e.target.value,
    }));
  };
  const handleDescriptionChange = (e) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      description: e.target.value,
    }));
  };
  const handleKeywordChange = (e) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      keywords: e.target.value,
    }));
  };


  const handleSubmit = async () => {
    if (id) {
      let { title, description, keywords } = inputValue;
      try {
        const res = await fetch(
          `${baseAPIUrl}/api/metaDatas/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ title, description, keywords }),
          }
        );
        if (!res.ok) {
          toast(`Failed to update metaData`);
        }
        if (res.status == 200) {
          toast(`Successfully updated Meta data`);
          router.refresh();
          router.push(`/dashboard/allpages/${endPoints}`);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      let { title, description, keywords } = inputValue;
      try {
        const res = await fetch(`${baseAPIUrl}/api/metaDatas`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, description, keywords }),
        });

        if (res.ok) {
          toast(`Successfully submitted meta data`);
          router.refresh();
          router.push(`/dashboard/allpages/${endPoints}`);
        } else {
          throw new Error(`Failed to create meta data`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
    <div>

      <div className="px-5">
        {/* <h3>BLogs</h3> */}
        <div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Meta Title
              </label>
              <div className="mt-2">
                <input
                  required
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="given-name"
                  className="block lg:w-4/6 w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={inputValue.title}
                  onChange={handleTitleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Meta Description
              </label>
              <div className="mt-2">
                <input required
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="family-name"
                  className="block lg:w-4/6 w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={inputValue.description}
                  onChange={handleDescriptionChange}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="keyword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Keywords
              </label>
              <div className="mt-2">
                <textarea
                  id="keyword"
                  name="keyword"
                  rows={3}
                  className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  value={inputValue.keywords}
                  onChange={handleKeywordChange}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few keywords about this page.
              </p>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 my-5 px-5 border border-blue-500 hover:border-transparent rounded"
          >
            {id ? "Update" : "Save"}
          </button>
        </div>

        {
          blogRouteAllMetaData?.length > 0 || id ? (
            <>
              <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
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
                    {blogRouteAllMetaData?.map((item) => (
                      <tr
                        key={item._id} // Don't forget to add a unique key to each row
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.title}
                        </th>
                        <td className="px-6 py-4">{item?.description}</td>
                        <td className="px-6 py-4">{item?.keywords}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            {" "}
                            <Link href={`/${editPath}/${item?._id}`}>
                              <HiPencilAlt size={24} />
                            </Link>
                            {/* <RemoveBtn id={item._id} endPoints={endPoints} /> */}
                          </div>

                          {/* <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div>
              <hr className="mt-5 mb-3" />
              <h1> No Data Found  </h1>
            </div>
          )
        }
      </div>

    </div>
  );
};

export default ShareComponent;
