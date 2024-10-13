import LocationPageComponent from '@/components/__one_time_used/LocationPageComponent/LocationPageComponent';
import { pageName } from '@/constants/dashboard/pageName.constants';


export async function generateMetadata() {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        const metaDataResponse = await fetch(`${apiUrl}/api/metaDatas?pageName=${pageName.barrie}`, {
            cache: "no-store",
        });
        const metaData = await metaDataResponse.json();
        const { title, description, keywords } = metaData?.data[0] ?? {};


        return {
            title: title ? title : "#1 Swimming Pool Installation in Barrie | Easy Pools",
            description: description ? description : "Easy Pools offers the best swimming pool installation services and a wide range of pool supplies in Barrie.",
            keywords: keywords ? keywords : "easy pools, best pools, great pools, Barrie Pool Installation, Pool Installation Barrie, ",

        };
    } catch (error) {
        return {
            title: "#1 Swimming Pool Installation in Barrie | Easy Pools",
            keywords: "easy pools, best pools, great pools, Barrie Pool Installation, Pool Installation Barrie, ",
            description: "Easy Pools offers the best swimming pool installation services and a wide range of pool supplies in Barrie.",
        };
    }
}

const LocationPage = () => {
    return (
        <div>
            <LocationPageComponent />
        </div>
    );
};

export default LocationPage;