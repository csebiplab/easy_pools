import React from 'react';
import "./PoolInstallationCompanyInMarkham.css"
import PoolInstallationCompanyInMarkhamBanner from './PoolInstallationCompanyInMarkhamBanner/PoolInstallationCompanyInMarkhamBanner';
import PartnerNRatings from "@/components/__one_time_used/MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import AboutUs from './PoolInstallationCompanyInMarkhamBanner/AboutUs/AboutUs';

const PoolInstallationCompanyInMarkham = () => {
    return (
        <div className="bg_poolInstallationCompanyInMarkham">
            <section>
                <PoolInstallationCompanyInMarkhamBanner/>
            </section>

            <section>
                <PartnerNRatings classNames={{ bg: "bg_poolInstallationCompanyInMarkham" }} />
            </section>

            <section>
                <AboutUs/>
            </section>
            
        </div>
    );
};

export default PoolInstallationCompanyInMarkham;