import React from "react";
import "./SwimmingPoolContractorsInToronto.css";
import SwimmingPoolContractorsInTorontoBanner from "./SwimmingPoolContractorsInTorontoBanner/SwimmingPoolContractorsInTorontoBanner";
import AboutUs from "./AboutUs/AboutUs";
import PartnerNRatings from "@/components/__one_time_used/MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import LuxuryDesigns from "./LuxuryDesigns/LuxuryDesigns";
import BestSwimming from "./BestSwimming/BestSwimming";
import TopRatedPoolContractors from "./TopRatedPoolContractors/TopRatedPoolContractors";
import PoolComparison from "./PoolComparison/PoolComparison";
import CostFactors from "./CostFactors/CostFactors";
import Experienced from "./Experienced/Experienced";
import FinestSwimmingPool from "./FinestSwimmingPool/FinestSwimmingPool";
import TrustUs from "./TrustUs/TrustUs";
import Expert from "./Expert/Expert";
import Review from "../SwimingPoolInstallationInVaughan/Review/Review";
import { bHeadingTexts } from "@/utils/bHeadingText";
import OurServiceAreas from "@/components/__one_time_used/MainHomePageComponent/OurServiceAreas/OurServiceAreas";
import { headingIconText } from "@/utils/heading-text";
import Faq from "./Faq/Faq";

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

      <section>
        <Review
          classNames={{ bg: "bg_poolInstallationCompanyInMarkham" }}
          bHeading={
            bHeadingTexts.swimmingPoolReview__bHeading
          }
        />
      </section>

      <section>
        <TrustUs/>
      </section>

      <section>
        <PoolComparison/>
      </section>

      <section>
        <Expert/>
      </section>
      
      <section>
        <CostFactors/>
      </section>

      <section>
        <FinestSwimmingPool/>
      </section>

      <section>
        <Experienced/>
      </section>

      <section>
        <Faq/>
      </section>

      <section className="padding__all bg_poolInstallationCompanyInMarkham">
        <OurServiceAreas
          classNames={{ bg: "bg_poolInstallationCompanyInMarkham" }}
          sHeading={headingIconText.map__IconTxt}
          bHeading={bHeadingTexts.swimmgingPoolMap__bHeading}
        />
      </section>
    </div>
  );
};

export default SwimmingPoolContractorsInToronto;
