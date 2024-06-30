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
import FlawlessDesign from "./FlawlessDesign/FlawlessDesign";
import QA from "./QA/QA";
import WhyChooseEasyPools from "./WhyChooseEasyPools/WhyChooseEasyPools";
import OurServiceAreas from "../MainHomePageComponent/OurServiceAreas/OurServiceAreas";
import ProjectGalleryInFiberglass from "./FiberglassProjectGal/FiberglassProjectGal";
import ReviewsInFiberglass from "./ReviewsInFiberglass/ReviewsInFiberglass";

const FiberglassPoolInstallationInToronto = () => {
  return (
    <div className="">
      {/* <FiberglassPoolBanner /> */}
      <section>
        <HomeBanner />
      </section>

      <section>
        <PartnerNRatings classNames={{ bg: "bg__fiberglassPage " }} />
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
        <ProjectGalleryInFiberglass />
      </section>

      <section>
        <FlawlessDesign />
      </section>

      <section>
        <ReviewsInFiberglass />
      </section>

      <section>
        <QA />
      </section>

      <section>
        <WhyChooseEasyPools />
      </section>

      <section>
        <OurServiceAreas
          classNames={{
            bg: "bg__fiberglassPage ",
            pdy: "common__padding__top common__padding__btm",
          }}
        />
      </section>
    </div>
  );
};

export default FiberglassPoolInstallationInToronto;
