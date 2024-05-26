import OurServiceAreas from "../MainHomePageComponent/OurServiceAreas/OurServiceAreas";
import PartnerNRatings from "../MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import ProjectGallery from "../MainHomePageComponent/ProjectGallery/ProjectGallery";
import Review from "../MainHomePageComponent/Review/Review";
import BestChoice from "./BestChoice/BestChoice";
import CompanyIntroduction from "./CompanyIntroduction/CompanyIntroduction";
import ProjectBanner from "./ProjectBanner/ProjectBanner";
import "./ProjectsPageComponent.css";
import QAPoolInstallation from "./QAPoolInstallation/QAPoolInstallation";
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
        <StunningDesign/>
      </section>

      <section>
        <Review/>
      </section>

      <section>
        <ProjectGallery/>
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
