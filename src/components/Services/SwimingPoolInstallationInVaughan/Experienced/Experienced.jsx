import Image from "next/image";
// import "./Expert.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";
import { headingIconText } from "@/utils/heading-text";

const Experienced = () => {
  return (
    <div className="bg_swimmingPool">
      <div className=" container">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px] padding__top">
          <div className="md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/swimmingPool/Experienced.png"
                width={596}
                height={490}
                alt="Experienced image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.experienced__IconText} />
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
              Experienced Vaughan Pools Designers
            </h2>
            <p className="text-black text-lg font-normal mt-4 text-center md:text-left">
              Are you looking for experienced designers to transform your
              backyard into a stunning oasis? Look no further than Easy Pools,
              experienced Vaughan Pools designers! With years of expertise in
              crafting breathtaking pool designs, our team is dedicated to
              bringing your vision to life. From modern designs to rustic
              aesthetics, we specialize in creating customized pools that blend
              seamlessly with your surroundings.
            </p>
            <p className="text-sm md:text-base font-normal text-center md:text-left text-black pt-[5px] leading-6 lg:leading-8">
              At Easy Pools designers, we also prioritize quality craftsmanship
              and attention to detail during the construction process. From
              excavation to finishing touches, we handle every aspect of the
              construction with precision and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experienced;
