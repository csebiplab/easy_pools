"use client";
import { useSwiper } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const SwiperButton = () => {
  const swiper = useSwiper();

  return (
    <div className="!z-[100]">
      <div className="">
        <div className="flex justify-between items-center">
          <button
            aria-label="prev"
            onClick={() => swiper.slidePrev()}
            className="-mt-[340px] -ml-8 p-1 rounded-full border-2 border-[#049E43] hover:text-white hover:bg-[#049E43]  "
          >
            <FaChevronLeft className="fill-[#049E43] hover:fill-white" />
            <span className="sr-only">Prev</span>
          </button>

          <button
            aria-label="next"
            onClick={() => swiper.slideNext()}
            className="-mt-[340px] -mr-8 hover:text-white bg-active hover:bg-[#049E43] border-2 p-1  rounded-full  border-[#049E43]  "
          >
            <FaChevronRight className="fill-[#049E43] hover:fill-white" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
