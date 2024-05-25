import HomeBanner from "../MainHomePageComponent/HomeBanner/HomeBanner";
import PartnerNRatings from "../MainHomePageComponent/PartnerNRatings/PartnerNRatings";
import CompanyIntroduction from "./CompanyIntroduction/CompanyIntroduction";
import "./ProjectsPageComponent.css";

const ProjectsPageComponent = () => {
  return (
    <div>
      <section>
        <HomeBanner />
      </section>

      <section>
        <PartnerNRatings />
      </section>

      <section>
        <CompanyIntroduction />
      </section>
    </div>
  );
};

export default ProjectsPageComponent;
