// "use client"

// import ShareComponent from "@/components/shareComponent/ShareComponent";
// import useFetchData from "@/hooks/useFetchData";
// import React from "react";

// const page = ({ params }) => {
//   const { id } = params;
//   // const { home } = await getHomeMetaDataById(id) ?? {};
//   const endPoints = "home";

//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/home/${id}`;
//   const { data, loading, error } = useFetchData(baseAPIUrl)

//   // console.log(data, loading, error, id)

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   const {home} = data;

//   const { title, description, keywords } = home;
//   return (
//     <ShareComponent
//       id={id}
//       titleValue={title}
//       descriptionValue={description}
//       keywordsValue={keywords}
//       endPoints={endPoints}
//     />
//   );
// };

// export default page;


