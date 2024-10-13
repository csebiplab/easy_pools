import UpdateMeta from "@/components/__shared/dashboard/UpdateMeta";


export async function getSingleMetadata(id) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const metaDataResponse = await fetch(`${apiUrl}/api/metaDatas/${id}`, {
        cache: "no-store",
    });
    const metaData = await metaDataResponse.json();
    return metaData;
}


const page = async ({ params }) => {
    const { id } = params;

    const data = await getSingleMetadata(id);


    return (
        <>
            <UpdateMeta
                metaData={data?.data}
            />
        </>
    );
};

export default page;

