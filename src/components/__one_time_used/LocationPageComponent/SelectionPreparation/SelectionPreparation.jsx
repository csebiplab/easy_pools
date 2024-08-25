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
import { SwiperNavButtons } from "../OurProcess/SwiperSliderButton";

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
    title: "Utility Assessments and Adjustments",
    img: utility1,
  },
  {
    title: "Drainage Considerations",
    img: drainage,
  },
  {
    title: "Structural Base Installation",
    img: structural,
  },
  {
    title: "Pool Shell Delivery and Installation",
    img: poll,
  },
  {
    title: "Filtration System Setup",
    img: filtraation,
  },
  {
    title: "Plumbing and Electrical Installation",
    img: plumbing,
  },
  {
    title: "Decking and Surrounding Features",
    img: decking,
  },
  {
    title: "Safety Measures and Equipment Installation",
    img: safety1,
  },
  {
    title: "Inspection and Quality Assurance",
    img: inspection,
  },
  {
    title: "Pool Filling and Initial Testing",
    img: poll__filling,
  },
  {
    title: "Maintenance and Care Instructions",
    img: maintenance,
  },
];

const SelectionPreparation = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="!overflow-hidden">
      <div className="bg__color">
        <div className="container  py-[34px] md:py-[54px]">
          <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-40 gap-4 items-center text-sm ">
            <div className="  ">
              <div className="flex justify-center lg:justify-normal items-center">
                <HeadingIcon
                  text={projectsHeadingIconText.selectionPreparation__IconText}
                />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
                Site Selection & <br className=" hidden lg:block" /> Preparation
                for Pool <br className=" hidden lg:block" /> Installation
              </h3>
            </div>

            <div className="flex justify-center items-center">
              <p className="text-sm md:text-base font-normal text-center md:text-left text-black pt-[15px] md:pt-[25px] leading-6 lg:leading-8">
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
                className={`flex items-center border pr-5  lg:px-32 rounded-3xl lg:py-4 py-2  text-sm md:text-base 3xl:text-lg 5xl:text-[20px] 5xl:leading-[25px] font-bold ${
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
                Site Selection
              </span>
              <span
                className={`flex items-center pr-5 lg:px-32 rounded-3xl lg:py-4 py-2 text-sm md:text-base 3xl:text-lg 5xl:text-[20px] 5xl:leading-[25px] font-bold ${
                  isChecked ? "text-white bg-secondary-50 " : "text-body-color"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-[6px] fill-current"
                ></svg>
                Preparation
              </span>
            </label>
          </div>

          <div className="lg:mt-15 mt-10">
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
                      <div className="py-7">
                        <p className="mt-4 py-5 mx-auto text-center text-sm md:text-sm xl:text-base 3xl:text-lg 5xl:text-[20px] font-bold">
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
                        <p className="mt-4 py-5 mx-auto text-center text-sm md:text-sm xl:text-base 3xl:text-lg 5xl:text-[20px] font-bold">
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
                <SwiperNavButtons />
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionPreparation;
