"use client";
import React from "react";
import "./CostFactors.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
};

const costFactors = [
  {
    id: 1,
    title: "Type of Pool",
    desc: (
      <>
        <p>
        <strong>Vinyl:</strong> Typically the least expensive option, but you'll need to budget for future liner replacements.
      </p>
      <p>
        <strong>Fiberglass:</strong> More costly than vinyl, but it comes with lower maintenance costs.
      </p>
      <p>
        <strong>Concrete:</strong> The most expensive option due to the labor-intensive construction process, but offers the most customization.
      </p>
      <p>
        <strong>ICF (Insulated Concrete Form):</strong> Similar to concrete in price, but with potential long-term savings due to energy efficiency.
      </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Type of Pool",
    desc: (
      <>
        <p>
        <strong>Vinyl:</strong> Typically the least expensive option, but you'll need to budget for future liner replacements.
      </p>
      <p>
        <strong>Fiberglass:</strong> More costly than vinyl, but it comes with lower maintenance costs.
      </p>
      <p>
        <strong>Concrete:</strong> The most expensive option due to the labor-intensive construction process, but offers the most customization.
      </p>
      <p>
        <strong>ICF (Insulated Concrete Form):</strong> Similar to concrete in price, but with potential long-term savings due to energy efficiency.
      </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Type of Pool",
    desc: (
      <>
        <p>
        <strong>Vinyl:</strong> Typically the least expensive option, but you'll need to budget for future liner replacements.
      </p>
      <p>
        <strong>Fiberglass:</strong> More costly than vinyl, but it comes with lower maintenance costs.
      </p>
      <p>
        <strong>Concrete:</strong> The most expensive option due to the labor-intensive construction process, but offers the most customization.
      </p>
      <p>
        <strong>ICF (Insulated Concrete Form):</strong> Similar to concrete in price, but with potential long-term savings due to energy efficiency.
      </p>
      </>
    ),
  },
  
];

const CostFactors = () => {
  return (
    <div>
      <div className="container padding__top padding__bottom">
        <div className="flex flex-col items-center justify-center">
          <HeadingIcon text={headingIconText.costFactors__IconText} />
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center pt-[5px]">
            Cost Factors for Swimming Pool Installation
          </h2>
          <p className="text-lg font-normal text-black pt-[10px] text-center pb-[270px]">
            The cost of installing a swimming pool can vary widely based on
            several factors. Here are the key pool installation cost factors to
            consider:
          </p>
        </div>
        {/* ==================== swiper slider ================ */}
        <Swiper
          className=" !overflow-visible"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={breakpoints}
          spaceBetween={12}
        >
          {costFactors?.map((data) => (
            <SwiperSlide key={data.id} className={`bg-secondary py-[50px] px-[25px] !h-auto !md:h-full`}>
                <div className="cart__bg !bg-white pb-[50px] pt-[39px] pr-[15px] pl-[8px] -mt-[250px]">
                  <p className="text-center text-[25px] text-black font-bold pb-[15px]">{data.title}</p>
                  <p className="text-center text-lg font-normal text-black">{data.desc}</p>
                </div>
              {/* <div className="bg-secondary px-[25px] pb-[95px] ">
                
              </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CostFactors;
