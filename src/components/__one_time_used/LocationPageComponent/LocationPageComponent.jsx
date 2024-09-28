// import OurServiceAreas from "../MainHomePageComponent/OurServiceAreas/OurServiceAreas";
// import PartnerNRatings from "../MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import BestChoice from "./BestChoice/BestChoice";
import CompanyIntroduction from "./CompanyIntroduction/CompanyIntroduction";
import FlatPoolInstallation from "./FlatPoolInstallation/FlatPoolInstallation";
import HireUs from "./HireUs/HireUs";
import OurProcessSteps from "./OurProcess/OurProcessSteps";
import PermitsandRegulations from "./PermitsandRegulations/PermitsandRegulations";
import ProjectBanner from "./ProjectBanner/ProjectBanner";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import "./LocationPageComponent.css";
import QAPoolInstallation from "./QAPoolInstallation/QAPoolInstallation";
import Review from "./Review/Review";
import SelectionPreparation from "./SelectionPreparation/SelectionPreparation";
import StunningDesign from "./StunningDesign/StunningDesign";
import TopRatedPoolInstallation from "./TopRatedPoolInstallation/TopRatedPoolInstallation";
import TrustedPartner from "./TrustedPartner/TrustedPartner";
import { headingIconText } from "@/utils/heading-text";
import { bHeadingTexts } from "@/utils/bHeadingText";
import PartnerNRatings from "../MainHomePage/PartnerNRatings/PartnerNRatings";
import OurServiceAreas from "../MainHomePage/OurServiceAreas/OurServiceAreas";

const LocationPageComponent = () => {
  return (
    <div className="custom-container">
      <section>
        <ProjectBanner/>
      </section>

      <section className="mt-6">
        <PartnerNRatings />
      </section>

      <section>
        <CompanyIntroduction />
      </section>

      <section>
        <TopRatedPoolInstallation/>
      </section>

      <section>
        <OurProcessSteps/>
      </section>

      <section>
        <SelectionPreparation/>
      </section>

      <section>
        <ProjectGallery/>
      </section>

      <section>
        <TrustedPartner/>
      </section>

      <section>
        <StunningDesign/>
      </section>

      <section>
        <PermitsandRegulations/>
      </section>

      <section>
        <Review/>
      </section>

      <section>
        <HireUs/>
      </section>

      <section>
        <FlatPoolInstallation/>
      </section>

      <section>
        <BestChoice/>
      </section>

      <section>
        <QAPoolInstallation/>
      </section>

      <section>
        <OurServiceAreas 
        sHeading={
          headingIconText.map__IconTxt
        }
        bHeading={
          bHeadingTexts.barriePoolMap__bHeading
        }
        />
      </section>
    </div>
  );
};

export default LocationPageComponent;
