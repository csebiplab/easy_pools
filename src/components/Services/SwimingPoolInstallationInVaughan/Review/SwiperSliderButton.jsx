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
          <div className="lg:w-[330px] w-[154px] h-0.5 bg-secondary"></div>
          <div className="flex lg:gap-5 gap-3">
            <button
              aria-label="prev"
              onClick={() => swiper.slidePrev()}
              className="p-3 rounded-full border-2 hover:text-white hover:bg-secondary border-secondary"
            >
              <FaChevronLeft />
              <span className="sr-only">Prev</span>
            </button>
            <button
              aria-label="next"
              onClick={() => swiper.slideNext()}
              className="text-white hover:text-secondary hover:bg-white border-2 p-3 bg-secondary rounded-full border-secondary"
            >
              <FaChevronRight />
              <span className="sr-only">Next</span>
            </button>
          </div>
          {/* =============== second line ============= */}
          <div className="lg:w-[330px] w-[154px] h-0.5 bg-secondary"></div>
        </div>
      </>
    </div>
  );
};
