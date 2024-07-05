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
        <AboutUsInVinylPool/>
      </section>

      <section>
        <ProjectGallery/>
      </section>

      <section>
        <QualityExcellence/>
      </section>

      <section>
        <Review classNames={{ bg: "bg_vinylPool" }}/>
      </section>

      <section>
        <QA/>
      </section>

      <section>
      <ReadyToStart/>
      </section>
      

      <section className="padding__all bg_vinylPool">
        <OurServiceAreas classNames={{ bg: "bg_vinylPool" }}  />
      </section>
    </div>
  );
};

export default VinylPoolInstallationinToronto;
