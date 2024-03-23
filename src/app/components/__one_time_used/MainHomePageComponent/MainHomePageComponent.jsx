import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import PartnerNRatings from "./PartnerNRatings/PartnerNRatings";
import AboutUs from "./AboutUs/AboutUs";
import OurServices from "./OurServices/OurServices";
import MaterialsNEquip from "./MaterialsNEquip/MaterialsNEquip";
import TopTierPools from "./TopTierPools/TopTierPools";
import BenefitsWithEasyPools from "./BenefitsWithEasyPools/BenefitsWithEasyPools";
import Review from "./Review/Review";
import HireForInstallationService from "./HireForInstallationService/HireForInstallationService";
import JoinWithUs from "./JoinWithUs/JoinWithUs";
import FAQ from "./FAQ/FAQ";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import OurExpertPoolInstaller from "./OurExpertPoolInstaller/OurExpertPoolInstaller";
import OurServiceAreas from "./OurServiceAreas/OurServiceAreas";
import GiveUsFeedback from "./GiveUsFeedback/GiveUsFeedback";
import LicensedNInsured from "./LicensedNInsured/LicensedNInsured";

const MainHomePageComponent = () => {
  return (
    <div>
      <section>
        <HomeBanner />
      </section>

      <section>
        <PartnerNRatings />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <OurServices />
      </section>

      <section>
        <MaterialsNEquip />
      </section>

      <section>
        <TopTierPools />
      </section>

      <section>
        <BenefitsWithEasyPools />
      </section>

      <section>
        <Review />
      </section>

      <section>
        <HireForInstallationService />
      </section>

      <section>
        <JoinWithUs />
      </section>

      <section>
        <FAQ />
      </section>

      <section>
        <ProjectGallery />
      </section>

      <section>
        <OurExpertPoolInstaller />
      </section>

      <section>
        <OurServiceAreas />
      </section>

      <section>
        <GiveUsFeedback />
      </section>

      <section>
        <LicensedNInsured />
      </section>
    </div>
  );
};

export default MainHomePageComponent;
