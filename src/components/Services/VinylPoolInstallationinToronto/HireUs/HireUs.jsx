"use client";
import HeadingIcon from "@/components/ui/HeadingIcon";
import "./HireUs.css";

import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";

const usualPool = [
  {
    title: "High initial cost",
  },
  {
    title: "Maintenance requirements",
  },
  {
    title: "Potential for construction delays",
  },
  {
    title: "Risk of structural issues",
  },
  {
    title: "Limited seasonal use",
  },
  {
    title: "High energy consumption",
  },
  {
    title: "Water evaporation and loss",
  },
  {
    title: "Chemical usage for maintenance",
  },
  {
    title: "Safety concerns, especially for children",
  },
  {
    title: "Possible zoning restrictions",
  },
  {
    title: "Environmental impact",
  },
  {
    title: "Noise during construction",
  },
];
const easyPool = [
  {
    title: "Highly experienced professionals",
  },
  {
    title: "Exceptional craftsmanship",
  },
  {
    title: "Innovative design solutions",
  },
  {
    title: "Timely project completion",
  },
  {
    title: "Competitive Pricing",
  },
  {
    title: "Excellent customer service",
  },
  {
    title: "High-quality materials",
  },
  {
    title: "Customizable pool options",
  },
  {
    title: "Comprehensive maintenance services",
  },
  {
    title: "Eco-friendly construction practices",
  },
  {
    title: "Reliable project management",
  },
  {
    title: "Extensive industry knowledge",
  },
];

const HireUs = () => {
  return (
    <div className="bg_vinylPool">
      <div className="container padding__top">
        <div className="shadow-sm md:mx-0 xs:mx-[35px] ">
          <div className=" grid md:grid-cols-3 2xl:gap-[40px] md:gap-[30px] ">
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
                <HeadingIcon text={headingIconText.hireUs__IconText} />
              </div>

              <div>
                <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-normal text-black md:text-start text-center">
                  Why Hire Our Pool Contractors in Toronto
                </h3>
              </div>

              <div>
                <p className="text-lg font-normal md:text-start text-center py-[14px]">
                  Are you envisioning a serene oasis in your backyard or a
                  vibrant centerpiece for your community space? Look no further
                  than our expert vinyl pool installation contractors in
                  Toronto. Whether you dream of a luxurious private pool or a
                  functional public aquatic facility, our contractors specialize
                  in bringing aquatic visions to life.
                </p>
              </div>
            </div>

            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className="title-bg text-center 2xl:py-[15px] py-[14px] text-white text-base md:text-lg font-bold">
                Usual Swimming Pool Contractors
              </p>
              <div className=" grid grid-rows-8 3xl:py-[35px] py-[25px] px-[20px] 2xl:text-[16px] lg:text-sm xs:text-[9px]  ">
                {usualPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/VinylPool/x.png"
                      alt="x"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-sm  text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 my-6 md:my-0 cart2">
              <p className="title-bg2 text-center 2xl:py-[15px] py-[14px] text-white text-base md:text-lg font-bold">
                Our Swimming Pool Contractors
              </p>
              <div className=" grid grid-rows-8 3xl:py-[35px] py-[25px]  px-[20px] 2xl:text-[16px] lg:text-sm xs:text-[9px]  ">
                {easyPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex  gap-4 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/VinylPool/r.png"
                      alt="r"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-sm  text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireUs;
