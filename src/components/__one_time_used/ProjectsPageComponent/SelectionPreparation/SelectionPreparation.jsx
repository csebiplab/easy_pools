"use client";

import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

import "./SelectionPreparation.css";

import location from "../../../../../public/assets/projects/images/location.png";
import environmental from "../../../../../public/assets/projects/images/environmental.png";
import legal from "../../../../../public/assets/projects/images/legal.png";
import soil from "../../../../../public/assets/projects/images/soil.png";
import accessibility from "../../../../../public/assets/projects/images/accessibility.png";
import utility from "../../../../../public/assets/projects/images/utility.png";
import budgetary from "../../../../../public/assets/projects/images/budgetary.png";
import safety from "../../../../../public/assets/projects/images/safety.png";
import future from "../../../../../public/assets/projects/images/future.png";

// --------------------------------------

import permits from "../../../../../public/assets/projects/images/permits.png";
import design from "../../../../../public/assets/projects/images/design.png";
import excavation from "../../../../../public/assets/projects/images/excavation.png";
import utility1 from "../../../../../public/assets/projects/images/utility1.png";
import drainage from "../../../../../public/assets/projects/images/drainage.png";
import structural from "../../../../../public/assets/projects/images/structural.png";
import poll from "../../../../../public/assets/projects/images/poll.png";
import filtraation from "../../../../../public/assets/projects/images/filtraation.png";
import plumbing from "../../../../../public/assets/projects/images/plumbing.png";
import decking from "../../../../../public/assets/projects/images/decking.png";
import safety1 from "../../../../../public/assets/projects/images/safety1.png";
import inspection from "../../../../../public/assets/projects/images/inspection.png";
import poll__filling from "../../../../../public/assets/projects/images/poll__filling.png";
import maintenance from "../../../../../public/assets/projects/images/maintenance.png";

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
import { projectsHeadingIconText } from "@/utils/projects/heading__text";

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
    slidesPerView: 5,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 6,
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
    title: "Showrooms cleaning",
    img: accessibility,
  },
  {
    title: " Medical offices cleaning",
    img: utility,
  },
  {
    title: " Medical offices cleaning",
    img: budgetary,
  },
  {
    title: " Medical offices cleaning",
    img: safety,
  },
  {
    title: " Medical offices cleaning",
    img: future,
  },
];
const services2 = [
  {
    title: "Permits and Regulations",
    img: permits,
  },
  {
    title: "Design Selection and Layout Planning",
    img: design,
  },
  {
    title: "Excavation and Groundwork",
    img: excavation,
  },
  {
    title: "Brown Stone Repair",
    img: utility1,
  },
  {
    title: "Brick Works",
    img: drainage,
  },
  {
    title: " Power Wash",
    img: structural,
  },
  {
    title: " Power Wash",
    img: poll,
  },
  {
    title: " Power Wash",
    img: filtraation,
  },
  {
    title: " Power Wash",
    img: plumbing,
  },
  {
    title: " Power Wash",
    img: decking,
  },
  {
    title: " Power Wash",
    img: safety1,
  },
  {
    title: " Power Wash",
    img: inspection,
  },
  {
    title: " Power Wash",
    img: poll__filling,
  },
  {
    title: " Power Wash",
    img: maintenance,
  },
];

const SelectionPreparation = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="overflow-hidden">
      <div className="bg__color">
        <div className="container lg:py-20 py-14">
          <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-40 gap-4  p-5 items-center text-sm ">
            <div className="  ">
              <div className="flex justify-center lg:justify-normal items-center">
                <HeadingIcon
                  text={projectsHeadingIconText.selectionPreparation__IconText}
                />
              </div>
              <h2 className="text-lg lg:text-2xl 2xl:text-[32px] font-semibold text-[#1F1F1F] mt-[15px]">
                Site Selection & <br className=" hidden lg:block" /> Preparation
                for Pool <br className=" hidden lg:block" /> Installation
              </h2>
            </div>

            <div className="flex justify-center items-center">
              <p className="text-[12px] lg:text-base">
                When considering the installation of a pool,{" "}
                <br className=" hidden lg:block" /> site selection and
                preparation are crucial steps{" "}
                <br className=" hidden lg:block" /> that can significantly
                impact the success and <br className=" hidden lg:block" />{" "}
                longevity of your investment.
              </p>
            </div>
          </div>

          {/* taggle button */}
          <div className="flex justify-center items-center py-5 mb-12 mx-2 ">
            <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-3xl bg-white border border-secondary-50">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={`flex items-center border pr-5  lg:px-32 rounded-3xl lg:py-4 py-2  text-[10px] md:text-base font-semibold ${
                  !isChecked ? "text-white bg-secondary-50 " : "text-body-color"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-[6px] fill-current"
                >
                  <g clipPath="url(#clip0_3122_652)"></g>
                  <defs>
                    <clipPath id="clip0_3122_652">
                      <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                Commercial Cleaning
              </span>
              <span
                className={`flex items-center pr-5 lg:px-32 rounded-3xl lg:py-4 py-2 text-[10px] md:text-base font-semibold ${
                  isChecked ? "text-white bg-secondary-50 " : "text-body-color"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-[6px] fill-current"
                ></svg>
                Residential Cleaning
              </span>
            </label>
          </div>

          <div className="lg:my-10 my-5">
            {!isChecked && (
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
                      <div className="">
                        <p className="mt-4 py-5 mx-auto text-center text-base">
                          {service.title}{" "}
                        </p>
                      </div>
                      <div className="absolute  -top-10 md:-top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
              </Swiper>
            )}

            {isChecked && (
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
                {services2.map((service, index) => (
                  <SwiperSlide
                    key={index}
                    className="bg-white border-4 rounded border-secondary-50 !h-auto !md:h-full px-2 py-6 md:py-0"
                  >
                    <div className="mx-auto rounded-lg relative">
                      <div className=" py-7 ">
                        <p className="mt-4 py-5 mx-auto text-center text-base">
                          {service.title}{" "}
                        </p>
                      </div>
                      <div className="absolute -top-6 md:top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionPreparation;
