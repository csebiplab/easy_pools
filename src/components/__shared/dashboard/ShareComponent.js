"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import RemoveBtn from "./RemoveBtn";
import NoDataFound from "./NoDataFound";

const ShareComponent = ({
  metaData,
  pagename,
  isUpdateCreateLoading,
  setIsUpdateCreateLoading,
  setIsCreateRUpdateFinished
}) => {
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
    keywords: "",
  });


  const { _id: id,
    pageName,
    title: titleValue,
    description: descriptionValue,
    keywords: keywordsValue } = metaData ?? {}



  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
  const endPoints = "metaDatas";

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
      setIsUpdateCreateLoading(true)
      let { title, description, keywords } = inputValue;
      try {
        const res = await fetch(
          `${baseAPIUrl}/api/${endPoints}/${id}`,
          {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ pageName, title, description, keywords }),
          }
        );
        if (!res.ok) {
          toast(`Failed to update metaData`);
          setIsUpdateCreateLoading(false)
          setIsCreateRUpdateFinished(true)
        }
        if (res.status == 200) {
          toast(`Successfully updated Meta data`);
          setIsUpdateCreateLoading(false)
        }
      } catch (error) {
        console.log(error);
        setIsUpdateCreateLoading(false)
      }
    } else {
      let { title, description, keywords } = inputValue;
      setIsUpdateCreateLoading(true)
      try {
        const res = await fetch(`${baseAPIUrl}/api/${endPoints}`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ pageName: pagename, title, description, keywords }),
        });

        if (res.ok) {
          toast(`Successfully submitted meta data`);
          setIsUpdateCreateLoading(false)
          setIsCreateRUpdateFinished(true)
        } else {
          setIsUpdateCreateLoading(false)
          throw new Error(`Failed to create meta data`);
        }
      } catch (error) {
        setIsUpdateCreateLoading(false)
        console.log(error);
      }
    }
  };


  return (
    <div>

      <div className="px-5">
        <h3 className="text-2xl uppercase">Create <span className="text-primary-600 border-2 p-2 border-secondary">{pagename}</span> Page Meta Data</h3>
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
            type="submit"
            aria-label="Submit"
            onClick={handleSubmit}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 my-5 px-5 border border-blue-500 hover:border-transparent rounded"
            disabled={isUpdateCreateLoading}
          >

            {
              !isUpdateCreateLoading && <span>{id ? "Update" : "Save"}</span>
            }

            {
              isUpdateCreateLoading && <span>Submitting...</span>
            }

          </button>
        </div>

        {
          metaData || id ? (
            <>
              <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                    <tr
                      key={id}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {titleValue}
                      </th>
                      <td className="px-6 py-4">{descriptionValue}</td>
                      <td className="px-6 py-4">{keywordsValue}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {/* <Link href={`/${editPath}/${id}`}>
                            <HiPencilAlt size={24} />
                          </Link> */}
                          <RemoveBtn id={id} endPoints={endPoints} pagename={pagename} />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <NoDataFound />
          )
        }
      </div>

    </div>
  );
};

export default ShareComponent;
