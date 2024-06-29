import "./FiberglassPoolInstallationInToronto.css";

import HomeBanner from "../MainHomePageComponent/HomeBanner/HomeBanner";
import PartnerNRatings from "../MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import AboutUsInFiberglass from "./AboutUsInFiberglass/AboutUsInFiberglass";
import MeaningFiberglass from "./MeaningFiberglass/MeaningFiberglass";
import Excelence from "./Excelence/Excelence";
import LeadsTheFiberglasss from "./LeadsTheFiberglasss/LeadsTheFiberglasss";
import Expert from "./BestChoiceForExpert/Expert";
import Benefits from "./Benefits/Benefits";
import Process from "./Process/Process";
import CostCalculating from "./CostCalculating/CostCalculating";
import ProjectGallery from "../MainHomePageComponent/ProjectGallery/ProjectGallery";
import FlawlessDesign from "./FlawlessDesign/FlawlessDesign";
import Review from "../MainHomePageComponent/Review/Review";
import QA from "./QA/QA";

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

      <section>
        <Benefits />
      </section>

      <section>
        <Process />
      </section>

      <section>
        <CostCalculating />
      </section>

      <section>
        <ProjectGallery />
      </section>

      <section>
        <FlawlessDesign />
      </section>

      <section>
        <Review />
      </section>

      <section>
        <QA />
      </section>
    </div>
  );
};

export default FiberglassPoolInstallationInToronto;
