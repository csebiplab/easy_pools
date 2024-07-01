"use client";

import { useSwiper } from "swiper/react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div>
      {/* <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button> */}
      <>
        <div className="flex lg:gap-8 gap-3 items-center justify-center lg:py-6 py-5">
          {/* ========= first line ======== */}
          <div className="lg:w-[330px] w-[154px] h-0.5 bg-secondary-50">

          </div>
          <div className="flex lg:gap-5 gap-3">
            <button
              onClick={() => swiper.slidePrev()}
              className="p-3 rounded-full border-2  hover:bg-secondary-50 border-secondary-50"><FaChevronLeft className="hover:text-white"/>
            </button>
            <button
              onClick={() => swiper.slideNext()}
              className=" hover:text-secondary-50 hover:bg-white border-2 p-3 bg-secondary-50 rounded-full border-secondary-50"><FaChevronRight  className="hover:text-white"/>
            </button>
          </div>
          {/* =============== second line ============= */}
          <div className="lg:w-[330px] w-[154px] h-0.5 bg-secondary-50"></div>
        </div>
      </>
    </div>
  );
};