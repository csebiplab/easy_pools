"use client";
import { useSwiper } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const SwiperButton = () => {

  const swiper = useSwiper();

  return (
    <div>
      <div className="sm:hidden block">
        <div className="  flex justify-between items-center ">
          <button onClick={() => swiper.slidePrev()} className="p-1 rounded-full border-2 border-[#049E43] hover:text-white hover:bg-[#049E43]  "><FaChevronLeft className='fill-[#049E43] hover:fill-white' /></button>



          <button onClick={() => swiper.slideNext()} className=" hover:text-white bg-active hover:bg-[#049E43] border-2 p-1  rounded-full  border-[#049E43]  "><FaChevronRight className='fill-[#049E43] hover:fill-white' /></button>
        </div>
      </div>
    </div>
  )
}
