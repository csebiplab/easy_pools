import React from "react";
import "./SwimingPoolInstallationInVaughan.css";


import PartnerNRatings from "@/components/__one_time_used/MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import SwimmingPoolBanner from "./SwimmingPoolBanner/SwimmingPoolBanner";
import AboutUsInSwimmingPool from "./AboutUsInSwimmingPool/AboutUsInSwimmingPool";
import OurServiceAreas from "@/components/__one_time_used/MainHomePageComponent/OurServiceAreas/OurServiceAreas";
import InstallationProcess from "./InstallationProcess/InstallationProcess";

const SwimingPoolInstallationInVaughan = () => {
  return <div>
    <section>
      <SwimmingPoolBanner/>
    </section>
    <section>
        <PartnerNRatings classNames={{ bg: "bg__fiberglassPage " }} />
      </section>
      <section>
        <AboutUsInSwimmingPool/>
      </section>
    <section>
      <InstallationProcess/>
    </section>
    <section>
      <OurServiceAreas/>
    </section>
  </div>;
};

export default SwimingPoolInstallationInVaughan;
