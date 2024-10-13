"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CreateAndUpdateFormForPageMeta = ({
    metaData,
    isUpdateCreateLoading,
    setIsUpdateCreateLoading,
}) => {
    const [inputValue, setInputValue] = useState({
        pageLink: "",
        pageName: "",
        title: "",
        description: "",
        keywords: "",
    });


    const { _id: id,
        pageLink,
        pageName,
        title: titleValue,
        description: descriptionValue,
        keywords: keywordsValue } = metaData ?? {}



    const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
    const endPoints = "metaDatas";

    useEffect(() => {
        setInputValue({
            pageLink: pageLink,
            pageName: pageName,
            title: titleValue,
            description: descriptionValue,
            keywords: keywordsValue,
        });
    }, [id]);

    const handlepageLinkChange = (e) => {
        setInputValue((prevInputValue) => ({
            ...prevInputValue,
            pageLink: e.target.value,
        }));
    };

    const handlepageNameChange = (e) => {
        setInputValue((prevInputValue) => ({
            ...prevInputValue,
            pageName: e.target.value,
        }));
    };

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
            let { pageLink, pageName, title, description, keywords } = inputValue;
            try {
                const res = await fetch(
                    `${baseAPIUrl}/api/${endPoints}/${id}`,
                    {
                        method: "PATCH",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify({ pageLink, pageName, title, description, keywords }),
                    }
                );
                if (!res.ok) {
                    toast(`Failed to update metaData`);
                    setIsUpdateCreateLoading(false)
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
            setIsUpdateCreateLoading(true)
            try {
                const res = await fetch(`${baseAPIUrl}/api/${endPoints}`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ ...inputValue }),
                });

                if (res.ok) {
                    toast(`Successfully submitted meta data`);
                    setIsUpdateCreateLoading(false)
                    setInputValue({
                        pageLink: "",
                        pageName: "",
                        title: "",
                        description: "",
                        keywords: "",
                    });
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
                {
                    id ? <> <h3 className="text-2xl uppercase">Update <span className="text-primary-600 border-2 p-2 border-secondary">{pageName}</span> Page Meta Data</h3>
                        <h3 className="text-xl mt-1">Update <span className="text-primary">{pageLink ? pageLink : "Please Add Page Link"}</span> Page Meta Data</h3> </> :
                        <h3 className="text-2xl uppercase">Create Page Meta Data</h3>
                }
                <div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="pageLink"
                                className="block text-sm font-extrabold leading-6 text-gray-900"
                            >
                                Page Link
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="pageLink"
                                    id="pageLink"
                                    autoComplete="given-name"
                                    className="block lg:w-4/6 w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={inputValue.pageLink}
                                    onChange={handlepageLinkChange}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="pageName"
                                className="block text-sm font-extrabold leading-6 text-gray-900"
                            >
                                Page Name <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                                <input
                                    readOnly={id ? true : false}
                                    required
                                    type="text"
                                    name="pageName"
                                    id="pageName"
                                    autoComplete="given-name"
                                    className="block lg:w-4/6 w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={inputValue.pageName}
                                    onChange={handlepageNameChange}
                                />
                            </div>
                        </div>



                        <div className="col-span-full">
                            <label
                                htmlFor="title"
                                className="block text-sm font-extrabold leading-6 text-gray-900"
                            >
                                Meta Title
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="title"
                                    name="title"
                                    rows={3}
                                    className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={""}
                                    value={inputValue.title}
                                    onChange={handleTitleChange}
                                />

                            </div>
                        </div>
                        <div className="col-span-full">
                            <label
                                htmlFor="description"
                                className="block text-sm font-extrabold leading-6 text-gray-900"
                            >
                                Meta Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={""}
                                    value={inputValue.description}
                                    onChange={handleDescriptionChange}
                                />

                            </div>
                        </div>
                        <div className="col-span-full">
                            <label
                                htmlFor="keyword"
                                className="block text-sm font-extrabold leading-6 text-gray-900"
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

            </div>

        </div>
    );
};

export default CreateAndUpdateFormForPageMeta;
