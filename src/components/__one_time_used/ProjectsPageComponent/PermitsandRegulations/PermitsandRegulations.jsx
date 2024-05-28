import HeadingIcon from "@/components/ui/HeadingIcon";
import "./PermitsandRegulations.css";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";

const PermitsandRegulations = () => {
  return (
    <div className="container PermitsandRegulations-banner py-[35px] md:py-[45px] lg:py-[55] xl:py-[65] 2xl:py-[75] 3xl:py-[85] 4xl:py-[95] 5xl:py-[103px] min-h-screen flex justify-center items-center bg-blend-multiply">
      <div className="text-center PermitsandRegulations-content">
        <div>
        <div className="flex flex-col justify-center items-center">
          <HeadingIcon text={projectsHeadingIconText.permitsandRegulations__IconText} classes={{textWhite : "text-white"}} />
          <h3 className="mb-[15px] md:mb-[25px] !mt-[10px] md:mt-4  text-white text-lg md:text-3xl lg:text-4xl font-medium">
          Permits and Regulations for Pool Installation Barrie
          </h3>
        </div>
          <p className="mt-4 lg:mt-8 lg:leading-10 leading-normal text-white text-[12px] xl:text-[14px] 5xl:text-base text-center font-normal">
            Installing a pool requires adherence to various permits and
            regulations to ensure safety and compliance with local ordinances.
            Before construction, homeowners typically need to obtain permits
            from their municipality or county, outlining the specifications of
            the pool and its intended location. These permits often involve
            inspections to verify that the pool meets safety standards, such as
            proper fencing and drainage requirements. Additionally, there may be
            zoning regulations dictating setbacks from property lines and
            restrictions on pool size and depth to prevent issues like
            groundwater contamination and overcrowding. Furthermore, adherence
            to safety regulations is paramount to prevent accidents and ensure
            the well-being of pool users. These regulations may include pool
            installation of safety barriers like fences or covers, as well as
            requirements for proper filtration and sanitation systems to
            maintain water quality. Compliance with electrical codes for pool
            lighting and equipment is also essential to prevent hazards. By
            navigating these permits and regulations diligently, homeowners can
            enjoy their pool while ensuring the safety of their family and
            community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PermitsandRegulations;
