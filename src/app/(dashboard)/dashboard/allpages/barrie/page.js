"use client";

import ShareComponent from "@/components/__shared/dashboard/ShareComponent";
import { pageName } from "@/constants/dashboard/pageName.constants";
import useFetchData from "@/hooks/useFetchData";
import { useState } from "react";


const CreateBarrieMetadata = () => {
  const editRoute = "dashboard/allpages/home/editBarrie";
  const pagename = pageName?.barrie;
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/metaDatas?pageName=${pagename}`

  const [isCreateRUpdateFinished, setIsCreateRUpdateFinished] = useState(false);
  const [isUpdateCreateLoading, setIsUpdateCreateLoading] = useState(false);
  const { data, loading, error } = useFetchData(baseAPIUrl, isCreateRUpdateFinished)



  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }


  const metaData = data?.data;



  return (
    <>
      <ShareComponent
        editPath={editRoute}
        metaData={metaData}
        pagename={pagename}
        isUpdateCreateLoading={isUpdateCreateLoading}
        setIsUpdateCreateLoading={setIsUpdateCreateLoading}
        setIsCreateRUpdateFinished={setIsCreateRUpdateFinished}
      />
    </>
  );
};

export default CreateBarrieMetadata;

