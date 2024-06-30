import HeadingIcon from "@/components/ui/HeadingIcon";

import "./MeaningFiberglass.css";
import { headingIconText } from "@/utils/heading-text";

const MeaningFiberglass = () => {
  return (
    <div className="meaningFiberglass__banner  py-[35px] md:py-[45px] lg:py-[55] xl:py-[65] 2xl:py-[75] 3xl:py-[85] 4xl:py-[95] 5xl:py-[103px] flex justify-center items-center bg-blend-multiply">
      <div className="container meaningFiberglass__content">
        <div className="grid grid-cols-2">
          <div>
            <div className="">
              <HeadingIcon
                text={headingIconText.meaning__inFiberglassText}
                classes={{ textWhite: "text-white" }}
              />
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-white pb-2.5">
                What Is the Meaning of a Fiberglass Pool?
              </h3>
            </div>
            <p className="text-xs md:text-base font-normal text-white leading-6 lg:leading-8">
              A fiberglass pool is a swimming pool structure made predominantly
              of fiberglass-reinforced plastic. This material offers durability,
              flexibility, and a smooth surface, making it an increasingly
              popular choice among homeowners for their aquatic retreats. Unlike
              traditional concrete pools, fiberglass pools come with
              pre-manufactured shells installed in the ground, providing a
              quicker and more efficient construction process. The smooth finish
              of fiberglass reduces the risk of abrasions, and its non-porous
              nature makes it resistant to algae growth, requiring less
              maintenance than other pool types. These features contribute to
              the appeal of the fiberglass pool as a long-lasting and
              aesthetically pleasing option for those seeking a hassle-free and
              visually appealing aquatic oasis.
            </p>
          </div>

          <div />
        </div>
      </div>
    </div>
  );
};

export default MeaningFiberglass;
