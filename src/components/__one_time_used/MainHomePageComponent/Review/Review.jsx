"use client";
// import googleIcon from "../../../../../../public/assets/review/Google-Review-Logo 3.png";
// import starIcon from "../../../../../../public/assets/review/ratingstar.png";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { SwipButton } from "../BenefitsWithEasyPools/SwipButton";

const testimonials = [
  {
    text: "I cannot express enough how delighted I am with the exceptional service provided by this company. Despite our tight budget constraints, they approached our project with ingenuity and professionalism. ",
    author: "Lisa Silva",
    location: "London",
  },
  {
    text: "I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks.",
    author: "Nuan Projip",
    location: "North York",
  },
  {
    text: "I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius most genius cost-saving suggestion that we pulled off effortlessly.",
    author: "Alex ross",
    location: "Barling",
  },
];

const Review = () => {
  return (
    <div className="bg-[#188B891A] ">
      <div className="  container 3xl:py-[50px] py-[30px]">
        <div>
          <div className=" flex flex-col justify-center items-center ">
            <HeadingIcon text={headingIconText.revidw__IconText} />

            <div>
              <p className="text-lg md:text-3xl lg:text-4xl text-dark md:text-start text-center md:mb-20 mb-8 text ">
                Here’s what to expect when you hire us as your Pool Installer in
                Toronto.
              </p>
            </div>
          </div>
        </div>

        <div className="!px-10 md:px-0">
          <Swiper
            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 55,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {testimonials.map((test, i) => (
              <SwiperSlide key={i}>
                <div className=" bg-[#D9D9D980] rounded-lg shadow-md p-[13px] ">
                  <div>
                    <Image
                      src="/assets/review/Google-Review-Logo 3.png"
                      width={100}
                      height={100}
                      alt="star"
                      className="h-auto w-auto"
                    />
                  </div>
                  <div className="lg:pt-2">
                    <Image
                      src="/assets/review/ratingstar.png"
                      width={100}
                      height={100}
                      alt="star"
                      className="h-auto w-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-800 py-3 3xl:text-[14px] ">
                    {test.text}
                  </p>
                  <h6 className="font-semibold text-gray-900 ">
                    {test.author}
                  </h6>
                  <p className="text-gray-600 text-xs ">{test.location}</p>
                </div>
              </SwiperSlide>
            ))}

            <div>
              <SwipButton />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
