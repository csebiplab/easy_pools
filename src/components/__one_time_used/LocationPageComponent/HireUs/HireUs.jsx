"use client";
import HeadingIcon from "@/components/ui/HeadingIcon";
import "./HireUs.css";
import Image from "next/image";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HireUsSliderButton from "./HireUsSliderButton";
import { WhyHireUs } from "@/constants/hireUs";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
};
const contentbreakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 1,
  },
};

const allImages = [
  "/assets/projects/images/Why Hire us-1.png",
  "/assets/projects/images/Why Hire us-2.png",
  "/assets/projects/images/Why Hire us-3.png",
  "/assets/projects/images/Why Hire us-4.png",
  "/assets/projects/images/Why Hire us-5.png",
  "/assets/projects/images/Why Hire us-6.png",
  "/assets/projects/images/Why Hire us-7.png",
];

const HireUs = () => {
  return (
    <div className="bg__color">
      <div className="container py-[40px]">
        <div className="flex flex-col justify-center items-center">
          <HeadingIcon text={projectsHeadingIconText.hireUs__IconText} />
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
            What to Consider First When You Want to Hire a Pool Installer?
          </h3>
        </div>

        <div className=" mt-20">
          <Swiper
            modules={[Navigation]}
            breakpoints={breakpoints}
            className="!relative"
          >
            {allImages?.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <Image
                    src={img}
                    width={182}
                    height={153}
                    alt="working process"
                    className="w-[182px] h-[153px]"
                  />
                </div>
              </SwiperSlide>
            ))}
            <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
              <HireUsSliderButton />
            </div>
            
          </Swiper>
        </div>

        {/* content part  */}

        <div className="mt-[25px]">
          <Swiper
            modules={[Navigation]}
            breakpoints={contentbreakpoints}
            className=""
          >
            {WhyHireUs?.map((hireContent, index) => (
              <SwiperSlide key={index} className="!flex !justify-center !items-center !h-auto !md:h-full">
                <div className="!h-full text__card w-full md:w-[385px] py-[27px] px-[11px]">
                  <h5 className="text-center text-2xl font-medium text-[#049E43] pb-[10px]">
                    {hireContent.title}
                  </h5>
                  <p className="text-center text-base font-medium leading-[218%]">
                    {hireContent.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
            <HireUsSliderButton />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HireUs;


