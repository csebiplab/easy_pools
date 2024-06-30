"use client";

import "./FlawlessDesign.css";

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

import ee1 from "../../../../../public/assets/fiberglass/ee1.png";
import ao2 from "../../../../../public/assets/fiberglass/ao2.png";
import zr3 from "../../../../../public/assets/fiberglass/zr3.png";
import cs4 from "../../../../../public/assets/fiberglass/cs4.png";
import ii5 from "../../../../../public/assets/fiberglass/ii5.png";
import ss6 from "../../../../../public/assets/fiberglass/ss6.png";

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
};

const services = [
  {
    desc: "Merge timeless charm with modern aesthetics, crafting a fiberglass pool that seamlessly blends sophistication and contemporary design.",
    title: "Eternal Elegance",
    img: ee1,
  },
  {
    desc: "Transform your space into a serene haven with a flawlessly installed fiberglass pool, harmonizing nature-inspired elements for ultimate relaxation.",
    title: "Aquatic Oasis",
    img: ao2,
  },
  {
    desc: "Infuse tranquility into your backyard with a minimalist design, marrying sleek fiberglass lines with Zen-inspired landscaping for a serene retreat.",
    title: "Zen Retreat",
    img: zr3,
  },
  {
    desc: "Illuminate your nights with an ethereal fiberglass pool, featuring LED lighting that turns your backyard into a celestial oasis for unforgettable evening dips.",
    title: "Celestial Soak",
    img: cs4,
  },
  {
    desc: "Redefine luxury with an infinity-edge fiberglass pool, offering a seamless blend of modern innovation and classic opulence for an unparalleled swimming experience.",
    title: "Innovative Infinity",
    img: ii5,
  },
  {
    desc: "Capture the breathtaking hues of a sunset with a carefully crafted fiberglass pool design, providing a front-row seat to nature's daily masterpiece.",
    title: "Sunset Serenity",
    img: ss6,
  },
];

const FlawlessDesign = () => {
  return (
    <div className="!overflow-hidden">
      <div className="bg__fiberglassPage common__padding__top">
        <div className="container">
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
                      <h6 className="mt-4 mx-auto text-center text-2xl font-bold">
                        {service.title}{" "}
                      </h6>
                      <h6 className="mx-auto text-center text-xs md:text-sm xl:text-base 3xl:text-lg font-normal">
                        {service.desc}{" "}
                      </h6>
                    </div>
                    <div className="absolute  -top-10 md:-top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Image
                        src={service.img}
                        height={100}
                        width={100}
                        className="w-20 h-20 lg:w-[100px] lg:h-[100px]"
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
