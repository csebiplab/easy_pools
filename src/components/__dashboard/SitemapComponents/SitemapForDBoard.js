"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

function SitemapForDBoard({ data, id, changefreqValue, locValue, priorityValue }) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    changefreq: "weekly", // Default value for changefreq
    loc: "",
    priority: 0.5,
  });

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    setInputValue({
      changefreq: changefreqValue || "weekly", // Use the provided value or default to "weekly"
      loc: locValue || "",
      priority: priorityValue || 0.5,
    });
  }, [id, changefreqValue, locValue, priorityValue]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const { changefreq, loc, priority } = inputValue;

    const requestOptions = {
      method: id ? "PATCH" : "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ changefreq, loc, priority }), // Send payload with proper field names
    };

    const apiUrl = `${baseAPIUrl}/api/siteMap${id ? `/${id}` : ""}`;

    try {
      const res = await fetch(apiUrl, requestOptions);

      if (res.ok) {
        toast(`Successfully ${id ? "updated" : "submitted"} siteMap url & meta data`);
        router.refresh();
        router.push(`/dashboard/siteMap`);
      } else {
        throw new Error(`Failed to ${id ? "update" : "create"} siteMap url & meta data`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="px-5">
        <div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="changefreq"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Change Frequency
              </label>
              <div className="mt-2">
                <select
                  name="changefreq"
                  id="changefreq"
                  required
                  className="block w-full lg:w-4/6 px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={inputValue.changefreq}
                  onChange={handleInputChange}
                >
                  <option value="yearly">Yearly</option>
                  <option value="monthly">Monthly</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="loc"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Sitemap URL
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="loc"
                  id="loc"
                  required
                  className="block w-full lg:w-4/6 px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={inputValue.loc}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="priority"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Priority
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="priority"
                  id="priority"
                  step="0.1"
                  min="0"
                  max="1"
                  required
                  className="block w-full lg:w-4/6 px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={inputValue.priority}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 my-5 px-5 border border-blue-500 hover:border-transparent rounded"
          >
            {id ? "Update" : "Save"}
          </button>
        </div>



        <div className="mt-40 text-center">
          <Link href="/dashboard/siteMap/show-all-sitemaps" className="px-5 py-3 bg-primary text-white">Show All Sitemaps</Link>
        </div>
      </div>
    </div>
  );
}

export default SitemapForDBoard;
