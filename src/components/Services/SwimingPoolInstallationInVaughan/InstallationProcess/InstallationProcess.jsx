"use client";

import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

import "./InstallationProcess.css";

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
    img: "/assets/swimmingPool/ip1.png",
    title: "Initial Consultation",
    para: "We begin by scheduling a consultation with our clients to discuss their vision, and budget for their swimming pool. During this meeting, we also conduct a site assessment to determine the best location for the pool and identify any potential challenges.",
  },
  {
    img: "/assets/swimmingPool/ip2.png",
    title: "Design and Planning",
    para: "Once we have a clear understanding of the client's requirements, our team of experts works closely with them to create a customized design plan. This includes selecting the size, shape, and features of the pool, as well as any additional amenities.",
  },
  {
    img: "/assets/swimmingPool/ip3.png",
    title: "Permitting & Approvals",
    para: "Before any construction begins, we handle all necessary permits and approvals to ensure compliance with local building codes and regulations. This step helps to streamline the installation process and prevent any delays or complications down the line.",
  },
  {
    img: "/assets/swimmingPool/ip4.png",
    title: "Construction & Install",
    para: "Once the site is prepared, we begin the construction process according to the approved design plan. This includes installing the pool shell, plumbing, filtration system, and any additional features or accessories."
  },
  {
    img: "/assets/swimmingPool/ip5.png",
    title: "Finishing Touches",
    para: "With the main construction complete, we focus on adding the finishing touches to the pool and its surroundings. This may include applying finishes to the pool surface, installing decking and coping, landscaping the surrounding",
  },
  {
    img: "/assets/swimmingPool/ip6.png",
    title: "Final Inspection",
    para: "Before handing over the completed pool to the client, we conduct a thorough inspection to ensure that everything meets our high standards of quality and safety. Once satisfied, we provide the client with a comprehensive orientation to familiarize .",
  }
];

const InstallationProcess = () => {
  return (
    <div className="bg_swimmingPool">
      <div className="!overflow-hidden padding__top">
        <div className="bg__fiberglassPage">
          <div className="container">
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center lg:justify-normal items-center">
                <HeadingIcon
                  text={headingIconText.installationProcess__IconText}
                />
              </div>
              <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center">
              Our Vaughan Swimming Pools Installation Process
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
                        width={37}
                        height={37}
                        alt="benifits image"
                        className="w-[50px] h-[50px] mx-auto p-2 border-2 border-primary-500 rounded-full"
                      />
                    </div>

                    <div className="">
                      <div className="flex justify-around ">
                        <div className="w-[3px] h-[40px] bg-primary-500" />
                      </div>
                    </div>
                    

                    <div className="mx-auto w-[323px] h-[305px] cart px-4 py-[13px]">
                      <div className="">
                        <p className="text-black text-2xl font-bold text-center">
                          {service.title}{" "}
                        </p>
                        <p className="text-black text-lg font-normal text-center">
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

export default InstallationProcess;
