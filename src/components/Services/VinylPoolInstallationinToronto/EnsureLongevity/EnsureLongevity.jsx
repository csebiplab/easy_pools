"use client";

import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

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
// import { SwiperNavButtons } from "../../LocationPageComponent/OurProcess/SwiperSliderButton";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

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
    img: "/assets/fiberglass/s1.png",
    title: "Extended Seasons",
    para: "Fibreglass pools in Toronto and Barrie offer a longer swimming season with their durable and weather-resistant material.",
  },
  {
    img: "/assets/fiberglass/s2.png",
    title: "Low Maintenance",
    para: "Enjoy hassle-free pool ownership with minimal maintenance, as fiberglass pools require less upkeep compared to traditional options.",
  },
  {
    img: "/assets/fiberglass/s3.png",
    title: "Energy Efficiency",
    para: "Fibreglass pools in Toronto and Barrie offer a longer swimming season with their durable and weather-resistant material.",
  },
  {
    img: "/assets/fiberglass/s4.png",
    title: "Quick Installation",
    para: "Fibreglass pools in Toronto and Barrie offer a longer swimming season with their durable and weather-resistant material.",
  },
  {
    img: "/assets/fiberglass/s5.png",
    title: "Cost Savings",
    para: "Fibreglass pools in Toronto and Barrie offer a longer swimming season with their durable and weather-resistant material.",
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
              <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-normal text-black text-center pb-[25px]">
                Benefits of Installing a Fiberglass Swimming Pool in Toronto
              </h3>
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
                    

                    <div className="mx-auto w-[250px] h-[230px] cart px-4 py-[13px]">
                      <div className="">
                        <h5 className="text-black text-2xl font-bold text-center">
                          {service.title}{" "}
                        </h5>
                        <p className="text-black text-lg font-normal text-center">
                          {service.para}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {/* <SwiperNavButtons /> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnsureLongevity;
