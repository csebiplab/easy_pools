"use client";

import "./EnsureLongevity.css";

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
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1536: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1736: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
};

const services = [
  {
    img: "/assets/VinylPool/s1.png",
    title: "Premium Vinyl Liner",
    para: "Easy Pools prioritizes top-grade vinyl liners, enhancing resilience against wear, tear, and UV rays.",
  },
  {
    img: "/assets/VinylPool/s2.png",
    title: "Robust Frame Structure",
    para: "Easy Pools prioritizes top-grade vinyl liners, enhancing resilience against wear, tear, and UV rays.",
  },
  {
    img: "/assets/VinylPool/s3.png",
    title: "Seamless Installation",
    para: "Precision in construction minimizes potential vulnerabilities, guaranteeing ",
  },
  {
    img: "/assets/VinylPool/s4.png",
    title: "Chemical Resistance",
    para: "Our company integrates vinyl compounds resistant to pool chemicals, preserving",
  },
  {
    img: "/assets/VinylPool/s5.png",
    title: "Welding Techniques",
    para: "Advanced welding technologies in vinyl pool installation eliminate weak points, contributing",
  },
  {
    img: "/assets/VinylPool/s6.png",
    title: "Tailored Reinforcement",
    para: "Strategic reinforcement in high-stress areas adds an extra layer of durability, addressing specific.",
  },
  {
    img: "/assets/VinylPool/s7.png",
    title: "Control Standards",
    para: "Precision in construction minimizes potential vulnerabilities, guaranteeing ",
  },
  {
    img: "/assets/VinylPool/s8.png",
    title: "Environment Adapt",
    para: "Our company is designed to adapt to temperature variations, preventing cracking or warping",
  },
];

const EnsureLongevity = () => {
  return (
    <div className="bg_vinylPool">
      <div className="!overflow-hidden padding__top">
        <div className="bg__fiberglassPage">
          <div className="container">
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center lg:justify-normal items-center">
                <HeadingIcon
                  text={headingIconText.ensureLongevity__IconText}
                />
              </div>
              <h2 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-normal text-black text-center pb-[25px]">
              Ensure Longevity for Vinyl Pool Installation in Toronto
              </h2>
            </div>

            <div className="w-full h-[3px] bg-primary-500" />

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
                        width={58}
                        height={58}
                        alt="benifits image"
                        className="w-[58px] h-[58px] mx-auto p-2 border-2 border-primary-500 rounded-full"
                      />
                    </div>

                    <div className="">
                      <div className="flex justify-around ">
                        <div className="w-[3px] h-[40px] bg-primary-500" />
                      </div>
                    </div>
                    

                    <div className="mx-auto w-[250px] h-[230px] cart px-4 py-[13px]">
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

export default EnsureLongevity;
