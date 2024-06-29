import "./FiberglassPoolInstallationInToronto.css";

import HomeBanner from "../MainHomePageComponent/HomeBanner/HomeBanner";
import PartnerNRatings from "../MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import AboutUsInFiberglass from "./AboutUsInFiberglass/AboutUsInFiberglass";
import MeaningFiberglass from "./MeaningFiberglass/MeaningFiberglass";
import Excelence from "./Excelence/Excelence";
import LeadsTheFiberglasss from "./LeadsTheFiberglasss/LeadsTheFiberglasss";
import Expert from "./BestChoiceForExpert/Expert";

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

      <section>
        <LeadsTheFiberglasss />
      </section>

      <section>
        <Expert />
      </section>
    </div>
  );
};

export default FiberglassPoolInstallationInToronto;
