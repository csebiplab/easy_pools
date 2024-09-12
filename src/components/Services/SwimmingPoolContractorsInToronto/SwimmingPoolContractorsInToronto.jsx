import React from "react";
import "./SwimmingPoolContractorsInToronto.css";
import SwimmingPoolContractorsInTorontoBanner from "./SwimmingPoolContractorsInTorontoBanner/SwimmingPoolContractorsInTorontoBanner";
import AboutUs from "./AboutUs/AboutUs";
import PartnerNRatings from "@/components/__one_time_used/MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import LuxuryDesigns from "./LuxuryDesigns/LuxuryDesigns";
import BestSwimming from "./BestSwimming/BestSwimming";
import TopRatedPoolContractors from "./TopRatedPoolContractors/TopRatedPoolContractors";

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

      <section>
        <TopRatedPoolContractors/>
      </section>

      <section>
        <LuxuryDesigns/>
      </section>
      
      <section>
        <BestSwimming/>
      </section>
    </div>
  );
};

export default SwimmingPoolContractorsInToronto;
