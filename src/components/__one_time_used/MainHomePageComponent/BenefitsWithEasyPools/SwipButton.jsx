"use client";

import { useSwiper } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const SwipButton = () => {
  const swiper = useSwiper();

  return (
    <div className="md:hidden block">
      <div className="flex gap-5 mt-5 items-center justify-center py-5">
        {/* ========= first line ======== */}
        <div className="w-[330px] h-0.5  bg-secondary-700  "></div>

        <div className="flex gap-5">
          <button
            aria-label="prev"
            onClick={() => swiper.slidePrev()}
            className="p-1 rounded-full border-2 border-secondary hover:text-white hover:bg-secondary-700  "
          >
            <FaChevronLeft className="fill-secondary hover:fill-white" />
            <span className="sr-only">Prev</span>
          </button>

          <button
            aria-label="next"
            onClick={() => swiper.slideNext()}
            className=" hover:text-white bg-active hover:bg-secondary-700 border-2 p-1  rounded-full  border-secondary  "
          >
            <FaChevronRight className="fill-secondary hover:fill-white" />
            <span className="sr-only">Next</span>
          </button>
        </div>
        {/* =============== second line ============= */}
        <div className="w-[330px] h-0.5 bg-secondary-700 "></div>
      </div>
    </div>
  );
};
