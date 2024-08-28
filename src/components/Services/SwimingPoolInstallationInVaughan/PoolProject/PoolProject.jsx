import Image from "next/image";
// import "./Expert.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const PoolProject = () => {
  return (
    <div className="bg_swimmingPool">
      <div className=" container">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px] padding__top">
          <div className="md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/swimmingPool/Pool Project.png"
                width={596}
                height={490}
                alt="Pool Project image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.poolProject__IconText} />
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            Complete Your Pool Project Within 7 Days
            </h2>
            <p className="text-black text-lg font-normal mt-4 text-center md:text-left">
            Our team of expert pool designers and builders is here to make your dream pool a reality in just 7 days. With meticulous planning and efficient execution, we'll create a stunning pool that perfectly complements your outdoor space, providing endless enjoyment for you and your family. From sleek modern designs to classic elegance, we'll work with you every step of the way to ensure your vision comes to life on time and within budget. Dive into luxury and relaxation sooner than you thought possible with our expedited pool project services!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolProject;
