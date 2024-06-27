import HomeBanner from "../MainHomePageComponent/HomeBanner/HomeBanner";
import PartnerNRatings from "../MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import AboutUsInFiberglass from "./AboutUsInFiberglass/AboutUsInFiberglass";
import MeaningFiberglass from "./MeaningFiberglass/MeaningFiberglass";

import "./FiberglassPoolInstallationInToronto.css";
import PermitsandRegulations from "../LocationPageComponent/PermitsandRegulations/PermitsandRegulations";

const FiberglassPoolInstallationInToronto = () => {
  return (
    <div className="">
      {/* <FiberglassPoolBanner /> */}
      <section>
        <HomeBanner />
      </section>

      <section>
        <PartnerNRatings />
      </section>

      <section>
        <AboutUsInFiberglass />
      </section>

      <section>
        <MeaningFiberglass />
      </section>

      <section>
        <PermitsandRegulations />
      </section>
    </div>
  );
};

export default FiberglassPoolInstallationInToronto;
