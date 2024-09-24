"use client";

import "./Review.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./SwiperSliderButton";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const reviews = [
    {
      google : "/assets/homePage/icons/google.png",
      star : "/assets/homePage/icons/star.png",
      text: "I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks. From start to finish working with Easy Renovation was a great experience.",
      author: "Lisa Silva",
      location: "North York",
    },
    {
      google : "/assets/homePage/icons/google.png",
      star : "/assets/homePage/icons/star.png",
      text: "I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks. From start to finish working with Easy Renovation was a great experience.",
      author: "Lisa Silva",
      location: "North York",
    },
    {
      google : "/assets/homePage/icons/google.png",
      star : "/assets/homePage/icons/star.png",
      text: "I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks. From start to finish working with Easy Renovation was a great experience.",
      author: "Lisa Silva",
      location: "North York",
    },
    {
      google : "/assets/homePage/icons/google.png",
      star : "/assets/homePage/icons/star.png",
      text: "I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks. From start to finish working with Easy Renovation was a great experience.",
      author: "Lisa Silva",
      location: "North York",
    },
    {
      google : "/assets/homePage/icons/google.png",
      star : "/assets/homePage/icons/star.png",
      text: "I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks. From start to finish working with Easy Renovation was a great experience.",
      author: "Lisa Silva",
      location: "North York",
    },
    {
      google : "/assets/homePage/icons/google.png",
      star : "/assets/homePage/icons/star.png",
      text: "I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks. From start to finish working with Easy Renovation was a great experience.",
      author: "Lisa Silva",
      location: "North York",
    },
    
  ];

const Review = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="">
          <div className="text-center pb-6">
            <div className="flex justify-center gap-[54px]">
              <HeadingIcon text={headingIconText.review__IconText} />
            </div>
            <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center leading-normal pt-[5px]'>
            Here's what to expect when you hire us as your Pool Installer in Toronto.
            </h2>
          </div>

          {/* ==================== swiper slider ================ */}
          <Swiper
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
            {reviews.map((slideInfo, index) => (
              <SwiperSlide
                key={index}
                className={`!h-auto !md:h-full`}
              >
                <div className="w-full !h-full card-bg ">
                  <div className="text-left py-[13px] px-[19px]">
                    <Image src={slideInfo.google} alt="google logo" width={148} height={83}/>
                    <Image className="pt-[9px]" src={slideInfo.star} alt="star logo" width={177} height={26}/>
                    <p className="text-lg font-normal leading-[25px] text-balck pt-[12px]">
                      {slideInfo?.text}
                    </p>
                    <p className="text-base font-bold leading-[24px] text-black pt-[12px]">
                      {slideInfo?.author}
                    </p>
                    <p className="text-[10px] font-normal text-dark-500 leading-[18px]">
                      {slideInfo?.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
