import "./FiberglassPoolInstallationInToronto.css";

import PartnerNRatings from "../../__one_time_used/MainHomePageComponent/PartnerNRatings/PartnerNRatings";
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
import OurServiceAreas from "../../__one_time_used/MainHomePageComponent/OurServiceAreas/OurServiceAreas";
import ProjectGalleryInFiberglass from "./FiberglassProjectGal/FiberglassProjectGal";
import ReviewsInFiberglass from "./ReviewsInFiberglass/ReviewsInFiberglass";
import FiberglassPoolBanner from "./FiberglassPoolBanner/FiberglassPoolBanner";
import { headingIconText } from "@/utils/heading-text";
import { bHeadingTexts } from "@/utils/bHeadingText";

const FiberglassPoolInstallationInToronto = () => {
  return (
    <div className="">
      <section>
        <FiberglassPoolBanner />
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

      <section className="bg__fiberglassPage">
        <Process
          sHeading={headingIconText.process__inFiberglassText}
          bHeading={bHeadingTexts.fibeerGlassPoolProcess__bHeading}
        />
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
          sHeading={headingIconText.map__IconTxt}
          bHeading={bHeadingTexts.fiberglassMap__bHeading}
        />
      </section>
    </div>
  );
};

export default FiberglassPoolInstallationInToronto;
