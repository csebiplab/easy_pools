import HeadingIcon from "@/components/ui/HeadingIcon";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";
import Image from "next/image";
import CommonButton from "@/components/ui/CommonButton";
import "./StunningDesign.css";

const StunningDesign = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px] padding__all">
          <div className="md:col-span-3 flex justify-center items-center">
            <Image
              src="/assets/projects/images/stunning__design.png"
              width={596}
              height={490}
              alt="Stunning design of a swimming pool"
              className=""
            />
          </div>

          <div className="md:col-span-4">
            <div className="flex md:justify-start justify-center md:items-start items-center">
              <HeadingIcon
                text={projectsHeadingIconText.stunningdesign__IconText}
              />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px]">
              Stunning Designs Exceptional Swimming Pool Installation in Barrie
            </h3>
            <p className="text-sm md:text-base font-normal text-center md:text-left text-black pt-[15px] md:pt-[25px] leading-6 lg:leading-8">
              Creating stunning designs for swimming pools requires a delicate
              balance between aesthetic appeal and functionality. Our team of
              expert designers is dedicated to crafting visually striking pool
              designs that seamlessly integrate with the surrounding landscape.
              From modern and sleek designs that complement contemporary
              architecture to more naturalistic designs that blend harmoniously
              with lush greenery, we tailor each project to meet the unique
              preferences of our clients. Our commitment to excellence ensures
              that every detail, from the shape and size of the pool to the
              choice of materials, is carefully considered to achieve a
              breathtaking result.
            </p>
            <div className="py-5 flex justify-start">
              <CommonButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StunningDesign;
