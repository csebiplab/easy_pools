"use client";
import HeadingIcon from "@/components/ui/HeadingIcon";
import "./HireUs.css";

import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";

const usualPool = [
  {
    title: "Subpar craftsmanship leads to frequent.",
  },
  {
    title: "Poor communication causes delays",
  },
  {
    title: "Unreliable scheduling disrupts daily life.",
  },
  {
    title: "Low-quality materials result in rapid",
  },
  {
    title: "Lack of attention to detail leaves shoddy",
  },
  {
    title: "Unprofessional conduct creates stress.",
  },
  {
    title: "Hidden costs inflate the final bill.",
  },
  {
    title: "Limited design options fail to inspire.",
  },
  {
    title: "Inadequate planning leads to incomplete",
  },
  {
    title: "Disregarding safety standards poses",
  },
];
const easyPool = [
  {
    title: "Expert Craftsmanship",
  },
  {
    title: "Customized Designs",
  },
  {
    title: "Premium Quality Materials",
  },
  {
    title: "Seamless Installation Process",
  },
  {
    title: "Innovative Solutions",
  },
  {
    title: "Attention to Detail",
  },
  {
    title: "Timely Project Completion",
  },
  {
    title: "Budget-Friendly Options",
  },
  {
    title: "Dedicated Customer Service",
  },
  {
    title: "Stunning Transformation",
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
              
              <HeadingIcon text={headingIconText.hireUs__IconText}/>
              </div>

              <div>
                <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
                Why Hire Our 
                  <span className="text-primary"> Kitchen Renovation Brooklyn Contractors?</span>
                </h3>
              </div>

              <div>
                <p className="text-lg font-normal md:text-start text-center py-[10px]">
                Hiring our kitchen renovators ensures expertise, quality, and efficiency in transforming your kitchen space. With years of experience, our kitchen remodeling in Brooklyn team brings innovative design ideas, precise craftsmanship, and attention to detail to every projec
                </p>
              </div>
            </div>

            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className="title-bg text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-lg font-bold">
              Usual Kitchen Renovators
              </p>
              <div className=" grid grid-rows-8 3xl:py-[35px] py-[25px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
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
                    <p className="text-xs md:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 my-6 md:my-0 cart2">
              <p className="title-bg2 text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-lg font-bold">
              Our Kitchen Renovation Contractors
              </p>
              <div className=" grid grid-rows-8 3xl:py-[35px] py-[25px]  px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
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
                    <p className="text-xs md:text-sm text-black font-bold">
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