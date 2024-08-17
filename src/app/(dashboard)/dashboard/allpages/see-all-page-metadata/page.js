import ShowMetadatas from "@/components/__dashboard/ShowMetadatas/ShowMetadatas";

export async function getAllMetadata() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const metaDataResponse = await fetch(`${apiUrl}/api/metaDatas`, {
        cache: "no-store",
    });
    const metaData = await metaDataResponse.json();
    return metaData;
}

export default async function page() {
    const metaDatas = await getAllMetadata();

    return <ShowMetadatas data={metaDatas?.data} />
}