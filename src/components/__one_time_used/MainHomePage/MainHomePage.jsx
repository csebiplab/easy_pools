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
import PartnerNRatings from "../MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import Banner from "./Banner/Banner";

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
    </div>
  );
};

export default MainHomePage;
