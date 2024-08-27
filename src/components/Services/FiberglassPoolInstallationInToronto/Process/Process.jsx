"use client";

import HeadingIcon from "@/components/ui/HeadingIcon";
import "./Process.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
};

const allImages = [
  "/assets/fiberglass/process/process1.png",
  "/assets/fiberglass/process/process2.png",
  "/assets/fiberglass/process/process3.png",
  "/assets/fiberglass/process/process4.png",
  "/assets/fiberglass/process/process5.png",
  "/assets/fiberglass/process/process6.png",
  "/assets/fiberglass/process/process7.png",
  "/assets/fiberglass/process/process8.png",
  "/assets/fiberglass/process/process9.png",
  "/assets/fiberglass/process/process10.png",
  "/assets/fiberglass/process/process11.png",
];

const Process = ({ sHeading = "empty", bHeading = "empty" }) => {
  return (
    <div className="">
      <div className="container common__padding__top">
        <div className="flex flex-col justify-center items-center">
          <HeadingIcon text={sHeading} />
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
            {bHeading}
          </h3>
        </div>

        <div className="relative mt-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center w-full">
            <button aria-label="prev">
              <span className="sr-only">Prev</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="50"
                viewBox="0 0 52 50"
                fill="none"
              >
                <rect width="52" height="50" rx="9" fill="#049E43" />
                <path
                  d="M15.4697 24.4697C15.1768 24.7626 15.1768 25.2374 15.4697 25.5303L20.2426 30.3033C20.5355 30.5962 21.0104 30.5962 21.3033 30.3033C21.5962 30.0104 21.5962 29.5355 21.3033 29.2426L17.0607 25L21.3033 20.7574C21.5962 20.4645 21.5962 19.9896 21.3033 19.6967C21.0104 19.4038 20.5355 19.4038 20.2426 19.6967L15.4697 24.4697ZM36 24.25H16V25.75H36V24.25Z"
                  fill="white"
                />
              </svg>
            </button>
            <div className="bg-[#049E43] h-3 w-full" />
            <button aria-label="next">
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="50"
                viewBox="0 0 52 50"
                fill="none"
              >
                <rect width="52" height="50" rx="9" fill="#049E43" />
                <path
                  d="M36.5303 25.5303C36.8232 25.2374 36.8232 24.7626 36.5303 24.4697L31.7574 19.6967C31.4645 19.4038 30.9896 19.4038 30.6967 19.6967C30.4038 19.9896 30.4038 20.4645 30.6967 20.7574L34.9393 25L30.6967 29.2426C30.4038 29.5355 30.4038 30.0104 30.6967 30.3033C30.9896 30.5962 31.4645 30.5962 31.7574 30.3033L36.5303 25.5303ZM16 25.75H36V24.25H16V25.75Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            speed={3000}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            allowTouchMove={false}
            breakpoints={breakpoints}
            className="!flex justify-between !overflow-hidden"
          >
            {allImages.map((img, index) => (
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
          </Swiper>
        </div>

        <div className="text__card w-full md:w-[385px] px-3 py-4 mx-auto mt-28">
          <h5 className="text-center text-2xl font-medium text-[#049E43] mb-1">
            Excavate with precision
          </h5>
          <p className="text-center text-base font-medium leading-[218%]">
            Ensure accurate dimensions and smooth contours for a seamless pool
            foundation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
