"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import BlogContentEditor from "./BlogContentEditor";

function CreateBlog({ id, data }) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    blogTitle: "",
    metaTitle: "",
    customLink: "",
    metaDescription: "",
    metaKeywords: "",
    shortDescription: "",
    content: "",
  });

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (data) {
      setInputValue({
        blogTitle: data?.blogTitle,
        metaTitle: data?.metaTitle,
        customLink: data?.customLink,
        metaDescription: data?.metaDescription,
        metaKeywords: data?.metaKeywords,
        shortDescription: data?.shortDescription,
        content: data?.content,
      });
    }
  }, [id]);
  const handleInputChange = (eventKey, e) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [eventKey]: e.target.value,
    }));
  };
  const handleBlogContentEditor = (eventKey, e) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [eventKey]: e,
    }));
  };
  const handleSubmit = async () => {
    if (id) {
      // let {
      //   blogTitle,
      //   metaTitle,
      //   customLink,
      //   metaDescription,
      //   metaKeywords,
      //   shortDescription,
      //   content,
      // } = inputValue;
      try {
        const res = await fetch(`${baseAPIUrl}/api/blogContent/${id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            ...inputValue,
          }),
        });
        if (!res.ok) {
          toast(`Failed to update blog data`);
        }
        if (res.status == 200) {
          toast(`Successfully updated blog data`);
          router.refresh();
          router.push(`/dashboard/blogs`);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // let {
      //   blogTitle,
      //   metaTitle,
      //   customLink,
      //   metaDescription,
      //   metaKeywords,
      //   shortDescription,
      //   content,
      // } = inputValue;
      try {
        const res = await fetch(`${baseAPIUrl}/api/blogContent`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            ...inputValue,
          }),
        });

        if (res.ok) {
          toast(`Successfully submitted blog content meta data`);
          router.refresh();
          router.push(`/dashboard/blogs`);
        } else {
          throw new Error(`Failed to create blogData meta data`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="px-5">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-14">
          <div className="sm:col-span-3">
            <label
              htmlFor="blogTitle"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              Blog Title
            </label>
            <div className="mt-2">
              <input
                required
                type="text"
                name="blogTitle"
                id="blogTitle"
                autoComplete="given-name"
                className="block lg:w-4/6 w-full px-5 rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={inputValue.blogTitle}
                onChange={(e) => handleInputChange("blogTitle", e)}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="metaTitle"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              Meta Title
            </label>
            <div className="mt-2">
              <input
                required
                type="text"
                name="metaTitle"
                id="metaTitle"
                autoComplete="given-name"
                className="block lg:w-4/6 w-full px-5 rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={inputValue.metaTitle}
                onChange={(e) => handleInputChange("metaTitle", e)}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="customLink"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              Custom Link
            </label>
            <div className="mt-2">
              <input
                required
                type="text"
                name="customLink"
                id="customLink"
                autoComplete="given-name"
                className="block lg:w-4/6 w-full px-5 rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={inputValue.customLink}
                onChange={(e) => handleInputChange("customLink", e)}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="metaDescription"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              Meta Description
            </label>
            <div className="mt-2">
              <input
                required
                type="text"
                name="metaDescription"
                id="metaDescription"
                autoComplete="given-name"
                className="block lg:w-4/6 w-full px-5 rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={inputValue.metaDescription}
                onChange={(e) => handleInputChange("metaDescription", e)}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="metaKeywords"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              Meta Keywords
            </label>
            <div className="mt-2">
              <input
                required
                type="text"
                name="metaKeywords"
                id="metaKeywords"
                autoComplete="off"
                className="block lg:w-4/6 w-full px-5 rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={inputValue.metaKeywords}
                onChange={(e) => handleInputChange("metaKeywords", e)}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="shortDescription"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              Short Description
            </label>
            <div className="mt-2">
              <textarea
                type="text"
                name="shortDescription"
                rows="4"
                id="shortDescription"
                autoComplete="off"
                className="block lg:w-4/6 w-full px-5  rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={inputValue?.shortDescription}
                onChange={(e) => handleInputChange("shortDescription", e)}
              />
            </div>
          </div>
          <div className="blogContentEditor">
            <BlogContentEditor
              inputValue={inputValue}
              handleInputChange={handleBlogContentEditor}
            />
          </div>
        </div>
        <div className="mt-20">
          <button
            type="submit"
            aria-label="Submit"
            onClick={handleSubmit}
            className="bg-transparent w-1/6 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 my-5 px-5 border border-blue-500 hover:border-transparent rounded"
          >
            {id ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
