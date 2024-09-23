import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import LeadingToronto from './LeadingToronto/LeadingToronto';
import TrustedPartner from './TrustedPartner/TrustedPartner';
import DesignCustomization from './DesignCustomization/DesignCustomization';
import MaterialsEquipment from './MaterialsEquipment/MaterialsEquipment';
import Specialists from './Specialists/Specialists';

const MainHomePage = () => {
    return (
        <div>
            <section>
                <AboutUs/>
            </section>

            <section>
                <LeadingToronto/>
            </section>

            <section>
                <TrustedPartner/>
            </section>

            <section>
                <DesignCustomization/>
            </section>

            <section>
                <MaterialsEquipment/>
            </section>

            <section>
                <Specialists/>
            </section>
        </div>
    );
};

export default MainHomePage;