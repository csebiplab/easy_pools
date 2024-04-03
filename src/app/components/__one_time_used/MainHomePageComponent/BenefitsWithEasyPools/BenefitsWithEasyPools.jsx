"use client";
import React from "react";
import con from "../../../../../../public/assets/benefits/convenince.png";
import cost from "../../../../../../public/assets/benefits/cost.png";
import dur from "../../../../../../public/assets/benefits/durability.png";
import saf from "../../../../../../public/assets/benefits/safety.png";
import topright from "../../../../../../public/assets/benefits/topcorner.png";
import bottomleft from "../../../../../../public/assets/benefits/bottomcorner.png";
import { headingIconText } from "@/app/utils/heading-text";
import HeadingIcon from "@/app/components/ui/HeadingIcon";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";

import { SwipButton } from "./SwipButton";


const BenefitsWithEasyPools = () => {
  const services = [
    {
      title: "Convenience",
      img: con,
      details:
        "Our pool company provides a hassle-free installation process, saving time and effort compared to traditional pool construction methods.",
    },
    {
      title: "Cost-effectiveness",
      img: cost,
      details:
        "With our pool contractor, you can often save money on both installation and maintenance costs. The streamlined process and materials used may result in lower expenses compared to custom-built pools.",
    },
    {
      title: "Durability",
      img: dur,
      details:
        "Despite the streamlined installation process, Easy Pools are built to last. They typically utilize high-quality materials that are resistant to wear and tear, ensuring longevity and reducing the need for frequent repairs.",
    },
    {
      title: "Safety Features",
      img: saf,
      details:
        "Our pool services company comes with built-in safety features such as non-slip surfaces, sturdy construction, and secure fencing options. These features help prevent accidents and provide peace of mind, especially for families with children or pets.",
    },
  ];

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1736: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  };


  return (
    <div className="container !overflow-x-hidden">
      <div className="lg:py-[120px] py-20 md:px-0 xs:px-[35px]">


        {/* heading  */}
        <div className=" flex flex-col justify-center items-center ">
          <HeadingIcon text={headingIconText.Benefits__IconText} />

          <div>
            <p className="lg:text-[36px] text-[20px] md:mb-14 xs:mb-10 mb-8 text-center  ">
              Benefits of Installing Swimming Pools with Easy Pools
            </p>
          </div>
        </div>


        {/* show when sm screen to large */}
        <div className=" ">
          <Swiper

            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 55,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              }
            }}

            className=" !overflow-visible "

          >
            {services.map((service, index) => (
              <SwiperSlide
                key={index}
                className="border-2 shadow-md rounded border-green-600 md:gap-5 px-[10px] pb-[10px] !overflow-visible lg:!h-[250px] !h-[180px] "

              >
                {/* SVG background for left bottom corner */}
                <div className="absolute bottom-0 left-0 z-10">
                  <img
                    className="lg:w-16 lg:h-16 w-14 h-14  border-black"
                    src={bottomleft.src}
                    alt="Profile"
                  />
                </div>

                {/* SVG background for right top corner */}
                <div className="absolute top-0 right-0 z-10">
                  <img
                    className="lg:w-16 lg:h-16 w-14 h-14   border-black"
                    src={topright.src}
                    alt="Profile"
                  />
                </div>

                <div className="mx-auto rounded-lg relative z-20 ">

                  <div className="5xl:pt-[30px] pt-[25px]">
                    <p className=" mx-auto text-center lg:text-[24px] text-[15px] mb-2">
                      {service.title}{" "}
                    </p>
                  </div>

                  <div>
                    <p className="5xl:px-[20px] lg:px-[15px] px-4 5xl:pb-[30px] lg:pb-[20px] xl:text-[15px] lg:text-[12px] text-[10px] text-center flex items-center md:leading-0 leading-[20px] ">
                      {" "}
                      {service.details}{" "}
                    </p>
                  </div>

                  <div className="absolute top-0 left-1/2  z-80  transform -translate-x-1/2 -translate-y-1/2 ">
                    <img
                      className="lg:w-20 lg:h-20 md:w-14 md:h-14 w-16 h-16 bg-white rounded-full border-black"
                      src={service.img.src}
                      alt="Profile"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwipButton></SwipButton>

          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BenefitsWithEasyPools;
