export default async function robots() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/robotTxt`, {
            cache: "no-store",
        });
        // console.log(response.ok, "from robot")
        if (!response.ok) {
            console.log('Failed to fetch robot.txt data|-------------------------------->>>>>');
        }
        const data = await response.json();

        const { data: robotTxts } = data ?? {};

        // console.log(robotTxts)
        if (robotTxts?.length > 0) {
            const formattedData = robotTxts?.map((singleRobot) => ({
                userAgent: singleRobot?.user_agent || '*',
                allow: singleRobot?.allow || '/',
                disallow: singleRobot?.disallow || '/private/',
            }));

            return {
                rules: formattedData?.length > 0 ? formattedData : null,
                sitemap: robotTxts[0]?.sitemap_url || `${process.env.NEXT_PUBLIC_API_URL}`,
            }
        }

        return {
            rules: {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
            sitemap: `${process.env.NEXT_PUBLIC_API_URL}`,
        }



    } catch (error) {
        console.error("Error fetching robot.txt data:==========e=====e=e====e=ee=e", error);
        return null;
    }
}
