"use client";

import ShareComponent from "@/components/__shared/dashboard/ShareComponent";
import useFetchData from "@/hooks/useFetchData";


const CreateHomeMetadata = () => {
  const editRoute = "dashboard/allpages/home/editHome";
  const endPoints = "home";
  // const { homeRouteAllMetaData } = await getHomeMetaData() ?? {};

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/metaDatas`;
  const { data, loading, error } = useFetchData()

  console.log(data, loading, error, "from home component")

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <ShareComponent
        editPath={editRoute}
        metaData={data?.homeRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default CreateHomeMetadata;

