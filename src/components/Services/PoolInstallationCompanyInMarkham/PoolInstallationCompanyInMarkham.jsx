import React from "react";
import "./PoolInstallationCompanyInMarkham.css";
import PoolInstallationCompanyInMarkhamBanner from "./PoolInstallationCompanyInMarkhamBanner/PoolInstallationCompanyInMarkhamBanner";
import PartnerNRatings from "@/components/__one_time_used/MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import AboutUs from "./AboutUs/AboutUs";
import Review from "../SwimingPoolInstallationInVaughan/Review/Review";
import ProjectGallery from "../SwimingPoolInstallationInVaughan/ProjectGallery/ProjectGallery";
import { bHeadingTexts } from "@/utils/bHeadingText";
import { headingIconText } from "@/utils/heading-text";
import OurServiceAreas from "@/components/__one_time_used/MainHomePageComponent/OurServiceAreas/OurServiceAreas";
import InstallationAndConstruction from "./InstallationAndConstruction/InstallationAndConstruction";
import BestPoolDesigner from "./BestPoolDesigner/BestPoolDesigner";
import HowMuchCost from "./HowMuchCost/HowMuchCost";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Faq from "./Faq/Faq";
import VetPoolInstallers from "./VetPoolInstallers/VetPoolInstallers";
import SkilledContractors from "./SkilledContractors/SkilledContractors";
import AvoidMistakes from "./AvoidMistakes/AvoidMistakes";
import Qualities from "./Qualities/Qualities";
import OurApproach from "./OurApproach/OurApproach";

const PoolInstallationCompanyInMarkham = () => {
  return (
    <div className="bg_poolInstallationCompanyInMarkham">
      <section>
        <PoolInstallationCompanyInMarkhamBanner />
      </section>

      <section>
        <PartnerNRatings
          classNames={{ bg: "bg_poolInstallationCompanyInMarkham" }}
        />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <InstallationAndConstruction />
      </section>

      <section>
        <Qualities />
      </section>

      <section>
        <OurApproach />
      </section>

      <section>
        <BestPoolDesigner />
      </section>

      <section>
        <ProjectGallery />
      </section>

      <section>
        <HowMuchCost />
      </section>

      <section>
        <AvoidMistakes />
      </section>

      <section>
        <SkilledContractors />
      </section>

      <section>
        <VetPoolInstallers />
      </section>

      <section>
        <Faq />
      </section>

      <section>
        <Review
          classNames={{ bg: "bg_poolInstallationCompanyInMarkham" }}
          bHeading={
            bHeadingTexts.poolInstallationCompanyMarkhamReview__bHeading
          }
        />
      </section>

      <section>
        <WhyChooseUs />
      </section>

      <section className="padding__all bg_poolInstallationCompanyInMarkham">
        <OurServiceAreas
          classNames={{ bg: "bg_poolInstallationCompanyInMarkham" }}
          sHeading={headingIconText.map__IconTxt}
          bHeading={bHeadingTexts.swimmgingPoolMap__bHeading}
        />
      </section>
    </div>
  );
};

export default PoolInstallationCompanyInMarkham;
