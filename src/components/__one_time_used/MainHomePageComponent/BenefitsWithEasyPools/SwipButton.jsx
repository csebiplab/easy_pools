"use client";

import { useSwiper } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const SwipButton =
  () => {

    const swiper = useSwiper();

    return (
      <div className="md:hidden block">
        <div className="flex gap-5 mt-5 items-center justify-center py-5">
          {/* ========= first line ======== */}
          <div className="w-[330px] h-0.5  bg-[#049E43]  ">

          </div>

          <div className="flex gap-5">

            <button onClick={() => swiper.slidePrev()} className="p-1 rounded-full border-2 border-[#049E43] hover:text-white hover:bg-[#049E43]  "><FaChevronLeft className='fill-[#049E43] hover:fill-white' /></button>

            <button onClick={() => swiper.slideNext()} className=" hover:text-white bg-active hover:bg-[#049E43] border-2 p-1  rounded-full  border-[#049E43]  "><FaChevronRight className='fill-[#049E43] hover:fill-white' /></button>

          </div>
          {/* =============== second line ============= */}
          <div className="w-[330px] h-0.5 bg-[#049E43] ">

          </div>
        </div>
      </div>
    )
  }
