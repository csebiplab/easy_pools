import React from "react";
import "./SwimingPoolInstallationInVaughan.css";

import PartnerNRatings from "@/components/__one_time_used/MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import SwimmingPoolBanner from "./SwimmingPoolBanner/SwimmingPoolBanner";
import AboutUsInSwimmingPool from "./AboutUsInSwimmingPool/AboutUsInSwimmingPool";
import OurServiceAreas from "@/components/__one_time_used/MainHomePageComponent/OurServiceAreas/OurServiceAreas";
import InstallationProcess from "./InstallationProcess/InstallationProcess";
import Review from "./Review/Review";
import TrustUs from "./TrustUs/TrustUs";
import Expert from "./Expert/Exper";
import Experienced from "./Experienced/Experienced";
import PoolProject from "./PoolProject/PoolProject";
import InstallationCost from "./InstallationCost/InstallationCost";
import FAQ from "./FAQ/FAQ";

const SwimingPoolInstallationInVaughan = () => {
  return (
    <div>
      <section>
        <SwimmingPoolBanner />
      </section>
      <section>
        <PartnerNRatings classNames={{ bg: "bg__fiberglassPage " }} />
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
        <InstallationProcess />
      </section>

      <section>
        <InstallationCost/>
      </section>

      <sectioin>
        <PoolProject/>
      </sectioin>

      <section>
        <TrustUs />
      </section>

      <section>
        <Review />
      </section>

      <section>
        <FAQ/>
      </section>

      <section>
        <OurServiceAreas />
      </section>
    </div>
  );
};

export default SwimingPoolInstallationInVaughan;
