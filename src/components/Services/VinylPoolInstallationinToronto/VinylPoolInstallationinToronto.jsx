import React from "react";
import "./VinylPoolInstallationinToronto.css";
import VinylPoolBanner from "./VinylPoolBanner/VinylPoolBanner";
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
import Design from "./Design/Design";
import VinylCompare from "./VinylCompare/VinylCompare";
import Benifits from "./Benifits/Benifits";
import EnsureLongevity from "./EnsureLongevity/EnsureLongevity";
import HireUs from "./HireUs/HireUs";
import Process from "./Process/Process";
import PartnerNRatings from "@/components/__one_time_used/MainHomePage/PartnerNRatings/PartnerNRatings";
import OurServiceAreas from "@/components/__one_time_used/MainHomePage/OurServiceAreas/OurServiceAreas";

const VinylPoolInstallationinToronto = () => {
  return (
    <div className="custom-container">
      <section>
        <VinylPoolBanner />
      </section>

      <section >
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

      <section>
        <Process/>
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
