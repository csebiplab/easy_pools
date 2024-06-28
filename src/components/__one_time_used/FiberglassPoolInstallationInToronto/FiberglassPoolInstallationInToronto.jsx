import HomeBanner from "../MainHomePageComponent/HomeBanner/HomeBanner";
import PartnerNRatings from "../MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import AboutUsInFiberglass from "./AboutUsInFiberglass/AboutUsInFiberglass";
import MeaningFiberglass from "./MeaningFiberglass/MeaningFiberglass";

import "./FiberglassPoolInstallationInToronto.css";
import Excelence from "./Excelence/Excelence";

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
        <Excelence />
      </section>
    </div>
  );
};

export default FiberglassPoolInstallationInToronto;
