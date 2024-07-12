export default async function sitemap() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/siteMap`, {
            cache: "no-store",
        });
        const { data } = await response.json();

        const sitemapData = data?.map((singleData) => ({
            url: singleData?.loc,
            priority: singleData?.priority,
            changeFrequency: singleData?.changefreq,
            lastModified: singleData?.updatedAt,
        }));

        if (sitemapData?.length > 0) {
            return sitemapData;
        } else {
            return [
                {
                    url: 'https://easypools.ca',
                    lastModified: new Date().toISOString(),
                    changeFrequency: 'yearly',
                    priority: 1,
                },
            ];
        }
    } catch (error) {
        console.error("Error fetching sitemap data:", error);
        return [
            {
                url: 'https://easypools.ca',
                lastModified: new Date().toISOString(),
                changeFrequency: 'yearly',
                priority: 1,
            },
        ];
    }
}
