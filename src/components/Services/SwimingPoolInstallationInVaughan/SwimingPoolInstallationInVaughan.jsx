import React from "react";
import "./SwimingPoolInstallationInVaughan.css";

import SwimmingPoolBanner from "./SwimmingPoolBanner/SwimmingPoolBanner";
import AboutUsInSwimmingPool from "./AboutUsInSwimmingPool/AboutUsInSwimmingPool";
import InstallationProcess from "./InstallationProcess/InstallationProcess";
import Review from "./Review/Review";
import TrustUs from "./TrustUs/TrustUs";
import Expert from "./Expert/Exper";
import Experienced from "./Experienced/Experienced";
import PoolProject from "./PoolProject/PoolProject";
import InstallationCost from "./InstallationCost/InstallationCost";
import FAQ from "./FAQ/FAQ";
import HireUs from "./HireUs/HireUs";
import InstallationServices from "./InstallationServices/InstallationServices";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import { headingIconText } from "@/utils/heading-text";
import { bHeadingTexts } from "@/utils/bHeadingText";
import OurServiceAreas from "@/components/__one_time_used/MainHomePage/OurServiceAreas/OurServiceAreas";
import PartnerNRatings from "@/components/__one_time_used/MainHomePage/PartnerNRatings/PartnerNRatings";

const SwimingPoolInstallationInVaughan = () => {
  return (
    <div className="custom-container">
      <section>
        <SwimmingPoolBanner />
      </section>

      <section>
        <PartnerNRatings classNames={{ bg: "bg_swimmingPool" }} />
      </section>

      <section>
        <AboutUsInSwimmingPool />
      </section>

      <section>
        <Expert />
      </section>

      <section>
        <Experienced />
      </section>

      <section>
        <ProjectGallery bHeading={bHeadingTexts.SwimmingPoolInstallationInVaughanGallery__bHeading}/>
      </section>

      <section>
        <InstallationServices />
      </section>

      <section>
        <InstallationProcess />
      </section>

      <section>
        <InstallationCost />
      </section>

      <sectioin>
        <PoolProject />
      </sectioin>

      <section>
        <TrustUs />
      </section>

      <section>
        <Review bHeading={bHeadingTexts.swimmingPoolReview__bHeading} />
      </section>

      <section>
        <FAQ />
      </section>

      <section>
        <HireUs />
      </section>

      <section className="padding__all bg_swimmingPool">
        <OurServiceAreas
          classNames={{ bg: "bg_swimmingPool" }}
          sHeading={headingIconText.map__IconTxt}
          bHeading={bHeadingTexts.swimmgingPoolMap__bHeading}
        />
      </section>
    </div>
  );
};

export default SwimingPoolInstallationInVaughan;
