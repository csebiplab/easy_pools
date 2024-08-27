"use client";

import { useSwiper } from "swiper/react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div>
      <>
        <div className="flex lg:gap-8 gap-3 items-center justify-center lg:py-6 py-5">
          {/* ========= first line ======== */}
          <div className="lg:w-[330px] w-[154px] h-0.5 bg-secondary-50"></div>
          <div className="flex lg:gap-5 gap-3">
            <button
              aria-label="Prev"
              onClick={() => swiper.slidePrev()}
              className="p-3 rounded-full border-2 hover:text-white hover:bg-secondary-50 border-secondary-50"
            >
              <FaChevronLeft />
              <span className="sr-only">Prev</span>
            </button>
            <button
              aria-label="next"
              onClick={() => swiper.slideNext()}
              className="text-white hover:text-secondary-50 hover:bg-white border-2 p-3 bg-secondary-50 rounded-full border-secondary-50"
            >
              <FaChevronRight />
              <span className="sr-only">Next</span>
            </button>
          </div>
          {/* =============== second line ============= */}
          <div className="lg:w-[330px] w-[154px] h-0.5 bg-secondary-50"></div>
        </div>
      </>
    </div>
  );
};
