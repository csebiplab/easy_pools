import PoolInstallationCompanyInMarkham from '@/components/Services/PoolInstallationCompanyInMarkham/PoolInstallationCompanyInMarkham';
import { pageName } from '@/constants/dashboard/pageName.constants';



export async function generateMetadata() {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        const metaDataResponse = await fetch(`${apiUrl}/api/metaDatas?pageName=${pageName?.markhamPool}`, {
            cache: "no-store",
        });
        const metaData = await metaDataResponse.json();
        const { title, description, keywords } = metaData?.data[0] ?? {};


        return {
            title: title ? title : "Fiberglass Pool Installation in Toronto | Easy Pools",
            description: description ? description : "Easy Pools specializes in expert fiberglass pool installation in Toronto with our experienced pool installers.",
            keywords: keywords ? keywords : "fiberglass pools, fiberglass inground pools, fiberglass swimming pool, fiberglass pools Toronto,",
            alternates: {
                canonical: 'https://easypools.ca/pool-installation-company-in-markham',
            }
        };
    } catch (error) {
        return {
            title: "Fiberglass Pool Installation in Toronto | Easy Pools",
            keywords: "Easy Pools specializes in expert fiberglass pool installation in Toronto with our experienced pool installers.",
            description: "fiberglass pools, fiberglass inground pools, fiberglass swimming pool, fiberglass pools Toronto",
        };
    }
}
const page = () => {
    return (
        <div>
            <PoolInstallationCompanyInMarkham />
        </div>
    );
};

export default page;