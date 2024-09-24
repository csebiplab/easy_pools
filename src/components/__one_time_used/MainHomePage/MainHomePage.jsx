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
        <WorkingProcess />
      </section>

      <section>
        <ConsiderationsLimitations />
      </section>

      <section>
        <HireFor />
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
