import React from "react";
import "./SwimmingPoolContractorsInToronto.css";
import SwimmingPoolContractorsInTorontoBanner from "./SwimmingPoolContractorsInTorontoBanner/SwimmingPoolContractorsInTorontoBanner";
import AboutUs from "./AboutUs/AboutUs";
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
import { headingIconText } from "@/utils/heading-text";
import Faq from "./Faq/Faq";
import Benefits from "./Benefits/Benefits";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import WorkingProcess from "./WorkingProcess/WorkingProcess";
import ConsiderationsAndLimitations from "./ConsiderationsAndLimitations/ConsiderationsAndLimitations";
import HireUs from "./HireUs/HireUs";
import SwimmingPoolsContractors from "./SwimmingPoolsContractors/SwimmingPoolsContractors";
import Premium from "./Premium/Premium";
import PartnerNRatings from "@/components/__one_time_used/MainHomePage/PartnerNRatings/PartnerNRatings";
import OurServiceAreas from "@/components/__one_time_used/MainHomePage/OurServiceAreas/OurServiceAreas";

const SwimmingPoolContractorsInToronto = () => {
  return (
    <div className="swimmingPoolContractor__bg custom-container">
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
        <Benefits/>
      </section>

      <section>
        <TopRatedPoolContractors/>
      </section>

      <section>
        <LuxuryDesigns/>
      </section>

      <section>
        <Premium/>
      </section>
      
      <section>
        <BestSwimming/>
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
        <ProjectGallery/>
      </section>

      <section>
        <Experienced/>
      </section>

      <section>
        <WorkingProcess/>
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
        <ConsiderationsAndLimitations/>
      </section>

      <section>
        <HireUs/>
      </section>

      <section>
        <SwimmingPoolsContractors/>
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
