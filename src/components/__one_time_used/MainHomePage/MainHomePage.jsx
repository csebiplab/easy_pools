import React from "react";
import "./MainHomePage.css";
import AboutUs from "./AboutUs/AboutUs";
import LeadingToronto from "./LeadingToronto/LeadingToronto";
import TrustedPartner from "./TrustedPartner/TrustedPartner";
import DesignCustomization from "./DesignCustomization/DesignCustomization";
import MaterialsEquipment from "./MaterialsEquipment/MaterialsEquipment";
import Specialists from "./Specialists/Specialists";
import HireFor from "./HireFor/HireFor";
import WorkingProcess from "./WorkingProcess/WorkingProcess";
import ConsiderationsLimitations from "./ConsiderationsLimitations/ConsiderationsLimitations";
import Banner from "./Banner/Banner";
import { bHeadingTexts } from "@/utils/bHeadingText";
import { headingIconText } from "@/utils/heading-text";
import PartnerNRatings from "./PartnerNRatings/PartnerNRatings";
import OurServiceAreas from "./OurServiceAreas/OurServiceAreas";
import Review from "./Review/Review";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import PoolComparison from "./PoolComparison/PoolComparison";
import CostFactors from "./CostFactors/CostFactors";
import InstallationServices from "./InstallationServices/InstallationServices";
import Faq from "./Faq/Faq";
import JoinWithUs from "./JoinWithUs/JoinWithUs";
import Benefits from "./Benefits/Benefits";
const MainHomePage = () => {
  return (
    <div className="homePage__bg custom-container">

      <section>
        <Banner/>
      </section>

      <section>
        <PartnerNRatings classNames={{ bg: "homePage__bg" }} />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <LeadingToronto />
      </section>

      <section>
        <TrustedPartner />
      </section>

      <section>
        <DesignCustomization />
      </section>

      <section>
        <MaterialsEquipment />
      </section>

      <section>
        <Specialists />
      </section>

      <section>
        <InstallationServices />
      </section>

      <section>
        <PoolComparison />
      </section>

      <section>
        <WorkingProcess />
      </section>

      <section>
        <ProjectGallery />
      </section>

      <section>
        <ConsiderationsLimitations />
      </section>

      <section>
        <Benefits />
      </section>

      <section>
        <CostFactors />
      </section>

      <section>
        <HireFor />
      </section>

      <section>
        <JoinWithUs />
      </section>

      <section>
        <Faq />
      </section>

      <section>
        <Review />
      </section>

      <section className="padding__all bg_poolInstallationCompanyInMarkham">
        <OurServiceAreas
          classNames={{ bg: "bg_poolInstallationCompanyInMarkham" }}
          sHeading={headingIconText.map__IconTxt}
          bHeading={bHeadingTexts.homePageLocationMap__bHeading}
        />
      </section>
    </div>
  );
};

export default MainHomePage;
