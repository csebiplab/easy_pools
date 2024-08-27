"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import RemoveBtnComponent from "./RemoveButtonComponent";


function SiteVerificationComponent({ data }) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    title: "",
    url: "",
  });

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
  const id = data?.[0]?._id;


  useEffect(() => {
    setInputValue({
      title: data?.[0]?.title,
      url: data?.[0]?.url,
    });
  }, [id]);
  const handleTitleChange = (e) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      title: e.target.value,
    }));
  };
  const handleUrlChange = (e) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      url: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (id) {
      let { title, url } = inputValue;
      try {
        const res = await fetch(`${baseAPIUrl}/api/verificationUrl/${id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, url }),
        });

        if (res.ok) {
          toast(`Successfully updated verification url & meta data`);
          router.refresh();
          router.push(`/dashboard/siteVerification`);
        } else {
          throw new Error(`Failed to update verification url & meta data`);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      let { title, url } = inputValue;
      try {
        const res = await fetch(`${baseAPIUrl}/api/verificationUrl`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, url }),
        });

        if (res.ok) {
          toast(`Successfully submitted verification url & meta data`);
          router.refresh();
          router.push(`/dashboard/siteVerification`);
        } else {
          throw new Error(`Failed to create verificationUrl url`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <div className="px-5">

        <div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <input required
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
                Verification Url
              </label>
              <div className="mt-2">
                <input required
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="family-name"
                  className="block lg:w-4/6 w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={inputValue.url}
                  onChange={handleUrlChange}
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
            {id ? "Update" : "Save"}
          </button>
        </div>



        <>
          <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Message
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Verification Url
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr
                    key={item._id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item?.title}
                    </th>
                    <td className="px-6 py-4">{item?.url}</td>
                    {/* <td className="px-6 py-4">{item?.keywords}</td> */}
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {" "}
                        {/* <Link
                            href={`/dashboard/verificationUrl/editverificationUrl/${item?._id}`}
                          >
                            <HiPencilAlt size={24} />
                          </Link> */}
                        <RemoveBtnComponent id={item._id} endpoint={'verificationUrl'} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      </div>
    </div>
  );
}

export default SiteVerificationComponent;
