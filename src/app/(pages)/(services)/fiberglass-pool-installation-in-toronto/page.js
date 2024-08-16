import FiberglassPoolInstallationInToronto from '@/components/Services/FiberglassPoolInstallationInToronto/FiberglassPoolInstallationInToronto';
import { pageName } from '@/constants/dashboard/pageName.constants';

export async function generateMetadata() {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        const metaDataResponse = await fetch(`${apiUrl}/api/metaDatas?pageName=${pageName.fiberglass}`, {
            cache: "no-store",
        });
        const metaData = await metaDataResponse.json();
        const { title, description, keywords } = metaData?.data ?? {};


        return {
            title: title ? title : "Fiberglass Pool Installation in Toronto | Easy Pools",
            description: description ? description : "Easy Pools specializes in expert fiberglass pool installation in Toronto with our experienced pool installers.",
            keywords: keywords ? keywords : "fiberglass pools, fiberglass inground pools, fiberglass swimming pool, fiberglass pools Toronto,",
        };
    } catch (error) {
        return {
            title: "Fiberglass Pool Installation in Toronto | Easy Pools",
            keywords: "Easy Pools specializes in expert fiberglass pool installation in Toronto with our experienced pool installers.",
            description: "fiberglass pools, fiberglass inground pools, fiberglass swimming pool, fiberglass pools Toronto",
        };
    }
}

const FiberglassPoolInstallationPage = () => {
    return (
        <div className=''>
            <FiberglassPoolInstallationInToronto />
        </div>
    );
};

export default FiberglassPoolInstallationPage;