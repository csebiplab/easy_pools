"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function CreateCategory({ id, data }) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    name: "",
    slug: "",
    description: "",
  });

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleInputChange = (eventKey, e) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [eventKey]: e.target.value,
    }));
  };
  useEffect(() => {
    if (data) {
      const { blogCategoryData } = data;
      setInputValue({
        name: blogCategoryData?.name,
        slug: blogCategoryData?.slug,
        description: blogCategoryData?.description,
      });
    }
  }, [id]);

  const handleSubmit = async () => {
    if (id) {
      let { name, slug, description } = inputValue;
      try {
        const res = await fetch(`${baseAPIUrl}/api/blogCategory/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ name, slug, description }),
        });
        if (!res.ok) {
          toast(`Failed to update category`);
        }
        if (res.status == 200) {
          toast(`Successfully updated category data`);
          router.refresh();
          router.push(`/dashboard/blogs/categories`);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      let { name, slug, description } = inputValue;
      try {
        const res = await fetch(`${baseAPIUrl}/api/blogCategory`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ name, slug, description }),
        });

        if (res.ok) {
          toast(`Successfully submitted blog content meta data`);
          router.refresh();
          router.push(`/dashboard/blogs/categories`);
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
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                required
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="block lg:w-4/6 w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={inputValue.name}
                onChange={(e) => handleInputChange("name", e)}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Slug
            </label>
            <div className="mt-2">
              <input
                required
                type="text"
                name="slug"
                id="slug"
                autoComplete="given-name"
                className="block lg:w-4/6 w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={inputValue.slug}
                // onChange={handleTitleChange}
                onChange={(e) => handleInputChange("slug", e)}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                type="text"
                name="description"
                rows="4"
                id="description"
                autoComplete="family-name"
                className="block lg:w-4/6 w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={inputValue?.description}
                onChange={(e) => handleInputChange("description", e)}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          aria-label="Submit"
          onClick={handleSubmit}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 my-5 px-5 border border-blue-500 hover:border-transparent rounded"
        >
          {id ? "Update" : "Create"}
        </button>
      </div>
    </div>
  );
}

export default CreateCategory;
