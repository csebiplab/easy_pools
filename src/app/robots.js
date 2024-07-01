import connectMongoDB from "@/libs/db";
import RobotTxt from "@/models/robot.model";

export default async function robots() {
    await connectMongoDB();
    const data = await RobotTxt.find({});

    if (data?.length < 1) {
        return {
            rules: [
                {
                    userAgent: '*',
                    allow: ['/'],
                    disallow: ['/private/'],
                },
            ],
            sitemap: `${process.env.NEXT_PUBLIC_API_URL}/sitemap.xml`,
        };
    }

    const rules = data.map(item => ({
        userAgent: item.user_agent,
        allow: item.allow,
        disallow: item.disallow
    }));

    return {
        rules,
        sitemap: `${process.env.NEXT_PUBLIC_API_URL}/sitemap.xml`,
    };
}
