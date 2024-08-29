"use client";
import google from "../../../../../public/assets/projects/images/google.png";
import review from "../../../../../public/assets/projects/images/review.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ReviewSlider.css";
import { SwiperNavButtons } from "./SwiperSliderButton";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";

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

const reviews = [
  {
    reviewText:
      "I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks. From start to finish working with Easy Renovation was a great experience.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks. From start to finish working with Easy Renovation was a great experience.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks. From start to finish working with Easy Renovation was a great experience.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks. From start to finish working with Easy Renovation was a great experience.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks. From start to finish working with Easy Renovation was a great experience.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks. From start to finish working with Easy Renovation was a great experience.",
    author: "Lisa Silva",
    address: "North York",
  },
];

const Review = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="padding__all">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <HeadingIcon text={projectsHeadingIconText.review__IconText} />
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
              Here's what to expect when you hire us as your Pool Installer in
              Toronto.
            </h2>
          </div>
          {/* =================== Card Section =============== */}
          <Swiper
            // spaceBetween={21}
            // slidesPerView={3}
            // modules={[Navigation]}
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            // slidesPerView={5}
            speed={3000}
            allowTouchMove={false}
            // modules={[Autoplay,Navigation, Scrollbar]}
            breakpoints={breakpoints}
          >
            {reviews.map(({ address, author, reviewText }, i) => (
              <SwiperSlide
                key={i}
                className={`text-center py-4 lg:py-10 md:pr-[21px]`}
              >
                <div className="bg-[#D9D9D980] rounded-lg shadow-md w-[370px] md:w-full h-[302px] md:h-full card-sd p-[14px] md:mx-0 mx-auto">
                  <Image
                    src={google}
                    width={89.92}
                    height={51}
                    alt="google"
                    className="mb-2"
                  />
                  <Image
                    src={review}
                    width={83}
                    height={12}
                    alt="google"
                    className=""
                  />

                  <div className="text-start">
                    <p className="text-sm md:text-[12px] mt-4  text-black leading-[22px] md:leading-6">
                      {reviewText}
                    </p>
                    <p className="font-semibold lg:text-sm text-sm mt-3">
                      {author}
                    </p>
                    <p className="text-[#4A4A4A] text-[8px] mt-2">{address}</p>
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
