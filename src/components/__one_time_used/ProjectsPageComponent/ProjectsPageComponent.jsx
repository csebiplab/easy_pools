import OurServiceAreas from "../MainHomePageComponent/OurServiceAreas/OurServiceAreas";
import PartnerNRatings from "../MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import ProjectGallery from "../MainHomePageComponent/ProjectGallery/ProjectGallery";
import BestChoice from "./BestChoice/BestChoice";
import CompanyIntroduction from "./CompanyIntroduction/CompanyIntroduction";
import FlatPoolInstallation from "./FlatPoolInstallation/FlatPoolInstallation";
import HireUs from "./HireUs/HireUs";
import PermitsandRegulations from "./PermitsandRegulations/PermitsandRegulations";
import ProjectBanner from "./ProjectBanner/ProjectBanner";
import "./ProjectsPageComponent.css";
import QAPoolInstallation from "./QAPoolInstallation/QAPoolInstallation";
import Review from "./Review/Review";
import SelectionPreparation from "./SelectionPreparation/SelectionPreparation";
import StunningDesign from "./StunningDesign/StunningDesign";

const ProjectsPageComponent = () => {
  return (
    <div>
      <section>
        <ProjectBanner/>
      </section>

      <section>
        <PartnerNRatings />
      </section>

      <section>
        <CompanyIntroduction />
      </section>

      <section>
        <SelectionPreparation/>
      </section>

      <section>
        <ProjectGallery/>
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
        <OurServiceAreas/>
      </section>
    </div>
  );
};

export default ProjectsPageComponent;
