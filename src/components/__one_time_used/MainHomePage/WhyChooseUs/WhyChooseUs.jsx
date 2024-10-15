"use client";
import HeadingIcon from "@/components/ui/HeadingIcon";
import "./WhyChooseUs.css";

import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";

const usualPool = [
  {
    title: "Low-quality workmanship",
  },
  {
    title: "Unreliable timelines",
  },
  {
    title: "Inadequate customer service",
  },
  {
    title: "Low-quality materials are used.",
  },
  {
    title: "Lack of attention to detail",
  },
  {
    title: "Shoddy installation practices",
  },
  {
    title: "Ignored safety regulations",
  },
  {
    title: "Pool warranty coverage is limited.",
  },
  {
    title: "Communication difficulties",
  },
  {
    title: "Hidden fees and expenses",
  }
];
const easyPool = [
  {
    title: "Pool construction expertise",
  },
  {
    title: "Technical proficiency in pool install",
  },
  {
    title: "Skilled pool design and layout",
  },
  {
    title: "Quality assurance and attention ",
  },
  {
    title: "Efficient project management",
  },
  {
    title: "Compliance with safety standards",
  },
  {
    title: "Expertise in equipment installation",
  },
  {
    title: "Landscaping integration",
  },
  {
    title: "Excellence in customer service",
  },
  {
    title: "Troubleshooting & problem-solving",
  } 
];

const WhyChooseUs = () => {
  return (
    <div className="">
      <div className="bg_vinylPool container padding__top">
        <div className="shadow-sm md:mx-0 xs:mx-[35px] ">
          <div className=" grid md:grid-cols-3 2xl:gap-[40px] md:gap-[30px] ">
            
          <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
              <HeadingIcon
                text={headingIconText.chooseUs__IconText}
              />
              </div>

              <div>
                <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center md:text-left leading-normal pt-[5px]">
                Choose Our Expert Pool Installers in Toronto
                </h2>
              </div>

              <div>
                <p className="text-lg font-normal md:text-start text-center text-black">
                Trust our professionals to deliver exceptional results for transforming your backyard into a luxurious oasis. Choose our expert pool installers in Toronto for a seamless and satisfying experience from start to finish.
                </p>
              </div>
            </div>

            <div className="w-full my-6 md:my-0 cart1">
              <p className="title-bg text-center 2xl:py-[15px] py-[14px] text-black text-base md:text-lg font-bold">
              Usual Swimming Pool Installers
              </p>
              <div className="grid grid-rows-8 3xl:py-[35px] py-[20px] px-[20px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {usualPool?.map((usual, index) => (
                  <>
                  <div
                    key={index}
                    className="flex gap-4 items-center leading-none"
                  >
                    <Image
                      src="/assets/homePage/icons/x.png"
                      alt="x"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-[13px] 2xl:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-secondary-100 my-[16px] 5xl:my-[22px]"/>
                  </>
                  
                  
                ))}
              </div>
            </div>
            <div className="my-6 md:my-0 cart2">
              <p className="title-bg2 text-center 2xl:py-[15px] py-[14px] text-black text-base md:text-lg font-bold">
              Easy Pools Pool Installers
              </p>
              <div className="grid grid-rows-8 3xl:py-[35px] py-[25px] px-[20px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {easyPool?.map((usual, index) => (
                  <>
                  <div
                    key={index}
                    className="flex gap-4 items-center leading-none  "
                  >
                    <Image
                      src="/assets/homePage/icons/r.png"
                      alt="r"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-[13px] 2xl:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-secondary-100 my-[16px] 5xl:my-[22px]"/>
                  </>
                  
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
