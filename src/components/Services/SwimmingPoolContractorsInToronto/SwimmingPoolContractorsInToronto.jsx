import React from "react";
import "./SwimmingPoolContractorsInToronto.css";
import SwimmingPoolContractorsInTorontoBanner from "./SwimmingPoolContractorsInTorontoBanner/SwimmingPoolContractorsInTorontoBanner";
import AboutUs from "./AboutUs/AboutUs";
import PartnerNRatings from "@/components/__one_time_used/MainHomePageComponent/PartnerNRatings/PartnerNRatings";

const SwimmingPoolContractorsInToronto = () => {
  return (
    <div className="swimmingPoolContractor__bg">
      <section>
        <SwimmingPoolContractorsInTorontoBanner />
      </section>

      <section>
        <PartnerNRatings
          classNames={{ bg: "bg_poolInstallationCompanyInMarkham" }}
        />
      </section>

      <section>
        <AboutUs/>
      </section>
    </div>
  );
};

export default SwimmingPoolContractorsInToronto;
