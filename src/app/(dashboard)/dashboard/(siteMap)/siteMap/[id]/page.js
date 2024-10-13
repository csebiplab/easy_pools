import SitemapForDBoard from "@/components/__dashboard/SitemapComponents/SitemapForDBoard";


export async function getData(id) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(`${apiUrl}/api/siteMap/${id}`, {
        cache: "no-store",
    });
    const { data } = await res.json();
    return data;
}


const page = async ({ params }) => {
    const { id } = params;

    const data = await getData(id);


    return (
        <>
            <SitemapForDBoard data={data} />
        </>
    );
};

export default page;

