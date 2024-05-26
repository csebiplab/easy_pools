import HeadingIcon from "@/components/ui/HeadingIcon";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";
import Image from "next/image";
import "./StunningDesign.css";
import CommonButton from "@/components/ui/CommonButton";

const StunningDesign = () => {
  return (
    <div className=" bg-white">
      <div className=" container">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px] 2xl:py-[100px] lg:py-[70px] py-[50px]">
          <div className=" md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/projects/images/stunning__design.png"
                width={596}
                height={490}
                alt="about us image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-4 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={projectsHeadingIconText.stunningdesign__IconText} />
            </div>
            <p className="mt-4 lg:mb-[25px] mb-[15px] text-lg md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center">
              Stunning Designs, Exceptional Swimming Pool Installation in Barrie
            </p>
            <p className=" 2xl:text-[16px] md:text-[14px] text-[10px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] md:text-start text-center">
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
