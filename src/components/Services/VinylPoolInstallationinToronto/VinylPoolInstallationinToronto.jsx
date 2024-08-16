import React from "react";
import "./VinylPoolInstallationinToronto.css";
import VinylPoolBanner from "./VinylPoolBanner/VinylPoolBanner";
import PartnerNRatings from "@/components/__one_time_used/MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import OurServiceAreas from "@/components/__one_time_used/MainHomePageComponent/OurServiceAreas/OurServiceAreas";
import Review from "../SwimingPoolInstallationInVaughan/Review/Review";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import QA from "./Q&A/Q&A";
import AboutUsInVinylPool from "./AboutUsInVinylPool/AboutUsInVinylPool";
import QualityExcellence from "./QualityExcellence/QualityExcellence";
import ReadyToStart from "./ReadyToStart/ReadyToStart";
import { bHeadingTexts } from "@/utils/bHeadingText";
import { headingIconText } from "@/utils/heading-text";
import Definition from "./Definition/Definition";
import Unveils from "./Unveils/Unveils";
import Process from "@/components/Services/FiberglassPoolInstallationInToronto/Process/Process";
import Design from "./Design/Design";
import VinylCompare from "./VinylCompare/VinylCompare";
import Benifits from "./Benifits/Benifits";
import EnsureLongevity from "./EnsureLongevity/EnsureLongevity";
import HireUs from "./HireUs/HireUs";

const VinylPoolInstallationinToronto = () => {
  return (
    <div>
      <section>
        <VinylPoolBanner />
      </section>

      <section>
        <PartnerNRatings classNames={{ bg: "bg_vinylPool" }} />
      </section>

      <section>
        <AboutUsInVinylPool />
      </section>

      <section>
        <Definition />
      </section>

      <section>
        <Design />
      </section>

      <section>
        <Unveils />
      </section>

      <section>
        <EnsureLongevity />
      </section>

      <section>
        <ProjectGallery />
      </section>

      <section className="bg_vinylPool padding__top">
        <Process
          bHeading={bHeadingTexts.vinylPoolProcess__bHeading}
          sHeading={headingIconText.process__inFiberglassText}
        />
      </section>

      <section>
        <QualityExcellence />
      </section>

      <section>
        <VinylCompare />
      </section>

      <section>
        <Review
          classNames={{ bg: "bg_vinylPool" }}
          bHeading={bHeadingTexts.swimmingPoolReview__bHeading}
        />
      </section>

      <section>
        <Benifits />
      </section>

      <section>
        <HireUs />
      </section>

      <section>
        <QA />
      </section>

      <section>
        <ReadyToStart />
      </section>

      <section className="padding__all bg_vinylPool">
        <OurServiceAreas
          classNames={{ bg: "bg_vinylPool" }}
          sHeading={headingIconText.map__IconTxt}
          bHeading={bHeadingTexts.vinylPoolMap__bHeading}
        />
      </section>
    </div>
  );
};

export default VinylPoolInstallationinToronto;
