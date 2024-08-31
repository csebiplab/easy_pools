"use client";

import google from "../../../../../public/assets/projects/images/google.png";
import review from "../../../../../public/assets/projects/images/review.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";
import { reviews } from "@/constants/reviews.constant";
import { SwiperNavButtons } from "./SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

const Review = () => {
  return (
    <div className="bg-white">
      <div className="container padding__all text-center">
        <HeadingIcon text={projectsHeadingIconText.review__IconText} />
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-black pt-2 md:pt-4 pb-4 md:pb-9">
          Here's what to expect when you hire us as your Pool Installer in
          Toronto.
        </h3>
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
          }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={breakpoints}
        >
          {reviews?.map(({ address, author, reviewText }, i) => (
            <SwiperSlide key={i} className="text-center py-4 lg:py-10 md:pr-5">
              <div className="bg-gray-200 rounded-lg shadow-md w-80 md:w-full h-64 md:h-full mx-auto p-3">
                <Image
                  src={google}
                  width={90}
                  height={51}
                  alt="google"
                  className="mb-2"
                />
                <Image src={review} width={83} height={12} alt="review" />
                <div className="text-start">
                  <p className="text-sm md:text-xs mt-4 text-gray-900 leading-6">
                    {reviewText}
                  </p>
                  <h6 className="font-semibold text-sm mt-3 text-gray-800">
                    {author}
                  </h6>
                  <p className="text-gray-600 text-xs mt-2">{address}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
