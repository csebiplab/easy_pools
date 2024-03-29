import HeadingIcon from "@/app/components/ui/HeadingIcon";
import { headingIconText } from "@/app/utils/heading-text";
import React from "react";
import "./ourexpert.css";
import xImg from "../../../../../../public/assets/exPool/x.png";
import rImg from "../../../../../../public/assets/exPool/r.png";
import Image from "next/image";

const OurExpertPoolInstaller = () => {
  const usualPool = [
    {
      title: "Poor quality workmanship",
    },
    {
      title: "Unreliable timelines",
    },
    {
      title: "Hidden fees and costs",
    },
    {
      title: "Inadequate customer service",
    },
    {
      title: "Subpar materials used",
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
      title: "Limited pool warranty coverage",
    },
    {
      title: "Difficulty in communication",
    },
  ];
  const easyPool = [
    {
      title: "Pool construction expertise",
    },
    {
      title: "Quality assurance & attention to detail",
    },
    {
      title: "Skilled pool design and layout",
    },
    {
      title: "Technical proficiency in pool installation",
    },
    {
      title: "Efficient project management",
    },
    {
      title: "Safety standards compliance",
    },
    {
      title: "Equipment installation & maintenance",
    },
    {
      title: "Landscaping integration",
    },
    {
      title: "Customer service excellence",
    },
    {
      title: "Troubleshooting & problem-solving skills",
    },
  ];

  return (
    <div className="">
      <div className=" 2xl:py-20 py-10 shadow-sm md:mx-0 xs:mx-[35px] ">
        <div className="mx-auto   flex flex-col items-center justify-center">
          <div>
            <HeadingIcon text={headingIconText.expartPool__IconText} />
          </div>

          <div>
            <p className="2xl:text-[36px] md:text-[20px] xs:text-[18px] md:pb-0 xs:pb-[20px] text-center ">
              Serving the Greater Toronto Horseshoe Area for all your pool's
              needs.
            </p>
          </div>

          <div>
            <p className=" md:block xs:hidden 2xl:text-[16px] text-[14px] text-center 3xl:py-[35px] py-[30px] ">
              Trust our professionals to deliver exceptional results that exceed
              expectations, transforming your backyard into a luxurious oasis.
              Choose our expert pool installers in Toronto for a seamless and
              satisfying experience from start to finish.
            </p>
          </div>
        </div>

        <div className=" grid md:grid-cols-2 2xl:gap-[50px] md:gap-[30px] ">
          <div className=" border-2 shadow">
            <h2 className="title-bg text-center 2xl:py-[15px] py-[10px] text-white 2xl:text-[18px] text-[16px]">
              Usual Pool Installers
            </h2>
            <div className=" grid grid-flow-col grid-rows-5 3xl:py-[35px] py-[25px] 3xl:px-[25px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
              {usualPool.map((usual, idx) => (
                <div key={idx} className="flex  gap-4 items-center 3xl:mb-[40px] lg:mb-[30px] xs:mb-[15px]  leading-none  ">
                  <img
                    src={xImg.src}
                    className="2xl:h-[23px] 2xl:w-[23px] h-[15px] w-[15px] "
                  ></img>
                  <p>{usual.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className=" border-2 shadow">
            <h2 className="title-bg text-center 2xl:py-[15px] py-[10px] text-white 2xl:text-[18px] text-[16px]">
              Easy Pools Pool Installers
            </h2>
            <div className=" grid grid-flow-col grid-rows-5 3xl:py-[35px] py-[25px] 3xl:px-[25px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px] ">
              {easyPool.map((usual, idx) => (
                <div key={idx} className="flex  gap-4 items-center 3xl:mb-[40px] lg:mb-[30px]  xs:mb-[15px] leading-none ">
                  <img
                    src={rImg.src}
                    className="2xl:h-[23px] 2xl:w-[23px] h-[15px] w-[15px] "
                  ></img>
                  <p className="">{usual.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertPoolInstaller;
