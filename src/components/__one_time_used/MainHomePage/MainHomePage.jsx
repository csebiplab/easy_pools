import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import LeadingToronto from './LeadingToronto/LeadingToronto';
import TrustedPartner from './TrustedPartner/TrustedPartner';
import DesignCustomization from './DesignCustomization/DesignCustomization';

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
        </div>
    );
};

export default MainHomePage;