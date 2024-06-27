import HomeBanner from "../MainHomePageComponent/HomeBanner/HomeBanner";
import PartnerNRatings from "../MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import AboutUsInFiberglass from "./AboutUsInFiberglass/AboutUsInFiberglass";
import FiberglassPoolBanner from "./FiberglassPoolBanner/FiberglassPoolBanner";

import "./FiberglassPoolInstallationInToronto.css";

const FiberglassPoolInstallationInToronto = () => {
  return (
    <div className="bg__fiberglassPage">
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
    </div>
  );
};

export default FiberglassPoolInstallationInToronto;
