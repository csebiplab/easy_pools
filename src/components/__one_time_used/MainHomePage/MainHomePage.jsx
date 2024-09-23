import React from 'react';
import "./MainHomePage.css";
import AboutUs from './AboutUs/AboutUs';
import LeadingToronto from './LeadingToronto/LeadingToronto';
import TrustedPartner from './TrustedPartner/TrustedPartner';
import DesignCustomization from './DesignCustomization/DesignCustomization';
import MaterialsEquipment from './MaterialsEquipment/MaterialsEquipment';
import Specialists from './Specialists/Specialists';
import HireFor from './HireFor/HireFor';

const MainHomePage = () => {
    return (
        <div className='homePage__bg'>
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

            <section>
                <HireFor/>
            </section>
        </div>
    );
};

export default MainHomePage;