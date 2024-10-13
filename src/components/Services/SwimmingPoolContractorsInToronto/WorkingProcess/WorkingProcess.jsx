"use client";

import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

import "./WorkingProcess.css";

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
import { SwiperNavButtons } from "@/components/__one_time_used/LocationPageComponent/OurProcess/SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  767: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1536: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1736: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};

const services = [
  {
    img: "/assets/swimming_pool_contractors/workingProcess/workingProcess1.png",
    title: "Initial Consultation",
    para: "Discuss Your Vision: We begin with a detailed consultation to understand your needs, preferences, and budget. Our experts will discuss various pool types, designs, and features to find the perfect match for your outdoor space. Site Assessment: Our team visits your property to assess the site, taking into account factors such as space, soil conditions, and access.",
  },
  {
    img: "/assets/swimming_pool_contractors/workingProcess/workingProcess2.png",
    title: "Design and Planning",
    para: "Custom Design: Based on your input and site assessment, we create a custom pool design that fits your vision and maximizes your space. Detailed Proposal: We provide a comprehensive proposal that outlines the project scope, timeline, and cost, ensuring transparency and clarity before we proceed.",
  },
  {
    img: "/assets/swimming_pool_contractors/workingProcess/workingProcess3.png",
    title: "Permitting & Approvals",
    para: "Obtain Permits: We handle all permits and approvals required for pool construction in Toronto, ensuring compliance with local regulations and codes",
  },
  {
    img: "/assets/swimming_pool_contractors/workingProcess/workingProcess4.png",
    title: "Construction & Install",
    para: "Excavation and Preparation: Our team prepares the site by excavating and setting up the groundwork for your pool. Pool Construction: Depending on the type of pool, we install fiberglass, concrete, or ICF structures. This phase also includes plumbing, electrical work, and any additional Finishing Touches: We complete the project with finishing touches such as tiling, decking."
  },
  {
    img: "/assets/swimming_pool_contractors/workingProcess/workingProcess5.png",
    title: "Final Inspection",
    para: "Quality Check: We conduct a thorough inspection to ensure everything is installed to our high standards and meets your expectations. Client Walkthrough: We walk you through the finished pool, explaining its features, operation, and maintenance requirements.",
  }
];

const WorkingProcess = () => {
  return (
    <div className="bg_swimmingPool">
      <div className="!overflow-hidden padding__top">
        <div className="bg__fiberglassPage">
          <div className="container">
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center lg:justify-normal items-center">
                <HeadingIcon
                  text={headingIconText.workingProcess__IconText}
                />
              </div>
              <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center">
              Working Process of Our Toronto Pool Contractors
              </h2>
            </div>

            <div className="w-full h-[3px] bg-primary-500 mt-8" />

            <div className="">
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
                className="!px-5 md:px-0 !overflow-hidden"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index} className="">

                    <div className="">
                      <div className="flex justify-around ">
                        <div className="w-[3px] h-[40px] bg-primary-500" />
                      </div>
                    </div>
                      
                    <div className="">
                      <Image
                        src={service.img}
                        width={57}
                        height={57}
                        alt="benifits image"
                        className="w-[57px] h-[57px] mx-auto p-2 border-2 border-primary-500 rounded-full"
                      />
                    </div>

                    <div className="">
                      <div className="flex justify-around ">
                        <div className="w-[3px] h-[40px] bg-primary-500" />
                      </div>
                    </div>
                    

                    <div className="mx-auto w-[323px] h-[393px] cart px-3 py-[13px]">
                      <div className="">
                        <p className="text-black text-2xl font-bold text-center">
                          {service.title}{" "}
                        </p>
                        <p className="text-black text-lg font-normal text-center pt-[5px]">
                          {service.para}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperNavButtons/>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
