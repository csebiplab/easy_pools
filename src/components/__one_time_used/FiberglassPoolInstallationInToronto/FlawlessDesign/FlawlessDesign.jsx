"use client";

import "./FlawlessDesign.css";

import location from "../../../../../public/assets/projects/images/location.png";
import environmental from "../../../../../public/assets/projects/images/environmental.png";
import legal from "../../../../../public/assets/projects/images/legal.png";
import soil from "../../../../../public/assets/projects/images/soil.png";
import accessibility from "../../../../../public/assets/projects/images/accessibility.png";
import utility from "../../../../../public/assets/projects/images/utility.png";
import budgetary from "../../../../../public/assets/projects/images/budgetary.png";
import safety from "../../../../../public/assets/projects/images/safety.png";
import future from "../../../../../public/assets/projects/images/future.png";

import Image from "next/image";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import { SwiperNavButtons } from "../../LocationPageComponent/OurProcess/SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  767: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

const services = [
  {
    title: "Location Assessment for Pool Installation",
    img: location,
  },
  {
    title: "Environmental Considerations for Pool Placement",
    img: environmental,
  },
  {
    title: "Legal and Regulatory Compliance for Pool Installation Sites",
    img: legal,
  },
  {
    title: "Soil and Ground Conditions Analysis",
    img: soil,
  },
  {
    title: "Accessibility and Transportation Logistics",
    img: accessibility,
  },
  {
    title: "Utility Infrastructure Evaluation for Pool Installation",
    img: utility,
  },
  {
    title: "Budgetary Analysis and Cost Considerations for Site Selection",
    img: budgetary,
  },
  {
    title: "Safety and Security Measures for Pool Placement",
    img: safety,
  },
  {
    title: "Future Expansion and Maintenance Considerations",
    img: future,
  },
];

const FlawlessDesign = () => {
  return (
    <div className="!overflow-hidden">
      <div className="bg__color">
        <div className="container  py-[34px] md:py-[54px]">
          <div className="flex flex-col items-center">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon
                text={headingIconText.flawlessDesign__inFiberglassText}
              />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
              Impeccable Flawless Design for Fiberglass Pool Installation
            </h3>
          </div>

          <div className="lg:mt-15 mt-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              breakpoints={breakpoints}
              loop={true}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                stopOnLastSlide: false,
              }}
              speed={3000}
              allowTouchMove={false}
              className="!px-5 md:px-0 !overflow-visible"
            >
              {services.map((service, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-white border-4 rounded border-secondary-50 !h-auto !md:h-full px-2 py-6 md:py-0"
                >
                  <div className="mx-auto relative px-2">
                    <div className="py-7">
                      <p className="mt-4 py-5 mx-auto text-center text-xs md:text-sm xl:text-base 3xl:text-lg 5xl:text-[20px] font-bold">
                        {service.title}{" "}
                      </p>
                    </div>
                    <div className="absolute  -top-10 md:-top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Image
                        src={service.img}
                        height={58}
                        width={58}
                        className="w-14 h-14 lg:w-[80px] lg:h-[80px] p-[14px] lg:p-[20px] bg-white rounded-full border-[3px] border-secondary-50"
                        alt="Profile"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperNavButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlawlessDesign;
