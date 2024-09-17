"use client";
import HeadingIcon from "@/components/ui/HeadingIcon";
import "./HireUs.css";

import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";

const usualPool = [
  {
    title: "Lack of Experience",
  },
  {
    title: "Poor Communication",
  },
  {
    title: "Use of Subpar Materials",
  },
  {
    title: "Inconsistent Quality of Work",
  },
  {
    title: "Limited Customization Options",
  },
  {
    title: "Delays in Project Completion",
  },
  {
    title: "Inadequate Permitting and Compliance",
  },
  {
    title: "Insufficient Post-Installation Support",
  },
  {
    title: "Hidden Costs and Overcharges",
  },
  {
    title: "Unreliable Maintenance Services",
  }
];
const easyPool = [
  {
    title: "Extensive Experience",
  },
  {
    title: "Exceptional Craftsmanship",
  },
  {
    title: "Clear Communication",
  },
  {
    title: "High-Quality Materials",
  },
  {
    title: "Custom Design Solutions",
  },
  {
    title: "Timely Project Completion",
  },
  {
    title: "Comprehensive Services",
  },
  {
    title: "Transparent Pricing",
  },
  {
    title: "Reliable Maintenance and Support",
  },
  {
    title: "Strong Client Testimonials",
  } 
];

const HireUs = () => {
  return (
    <div className="">
      <div className="bg_vinylPool container padding__top">
        <div className="shadow-sm md:mx-0 xs:mx-[35px] ">
          <div className=" grid md:grid-cols-3 2xl:gap-[40px] md:gap-[30px] ">
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
                <HeadingIcon text={headingIconText.whyHireUs__IconText} />
              </div>

              <div>
                <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-normal text-black md:text-start text-center">
                  Why Choose Our Swimming Pool Contractors
                </h2>
              </div>

              <div>
                <p className="text-lg font-normal md:text-start text-center py-[14px]">
                Choosing Easy Pools means partnering with Toronto's leading pool contractors, renowned for our unparalleled expertise and commitment to excellence. Trust our swimming pool contractors for superior craftsmanship, exceptional customer service, and a pool that transforms your backyard into a luxurious retreat.
                </p>
              </div>
            </div>

            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className="title-bg text-center 2xl:py-[15px] py-[14px] text-white text-base md:text-lg font-bold">
              Usual Pool Contractors
              </p>
              <div className="grid grid-rows-8 3xl:py-[35px] py-[20px] px-[20px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {usualPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-center mb-[25px] leading-none"
                  >
                    <Image
                      src="/assets/VinylPool/x.png"
                      alt="x"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-[13px] 2xl:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 my-6 md:my-0 cart2">
              <p className="title-bg2 text-center 2xl:py-[15px] py-[14px] text-white text-base md:text-lg font-bold">
              Easy Pools
              </p>
              <div className="grid grid-rows-8 3xl:py-[35px] py-[25px] px-[20px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {easyPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-center mb-[25px] leading-none  "
                  >
                    <Image
                      src="/assets/VinylPool/r.png"
                      alt="r"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-[13px] 2xl:text-sm text-black font-bold">
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
