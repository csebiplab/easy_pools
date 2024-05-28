"use client";

import p1 from "../../../../../public/assets/projects/images/p1.png";
import p2 from "../../../../../public/assets/projects/images/p2.png";
import p3 from "../../../../../public/assets/projects/images/p3.png";
import p4 from "../../../../../public/assets/projects/images/p4.png";
import p5 from "../../../../../public/assets/projects/images/p5.png";
import p6 from "../../../../../public/assets/projects/images/p6.png";
import p7 from "../../../../../public/assets/projects/images/p7.png";
import p8 from "../../../../../public/assets/projects/images/p8.png";
import p9 from "../../../../../public/assets/projects/images/p9.png";
import p10 from "../../../../../public/assets/projects/images/p10.png";
import p11 from "../../../../../public/assets/projects/images/p11.png";
import p12 from "../../../../../public/assets/projects/images/p12.png";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./SwiperSliderButton";
import "./OurProcessSteps.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 4,
  },
};

const slideData = [
  {
    imgSrc: p1,
    description: `Schedule a consultation with the client to discuss their requirements, preferences, and budget.`,
  },
  {
    imgSrc: p2,
    description: `Present a customized pool design proposal that aligns with the client's vision.`,
  },
  {
    imgSrc: p3,
    description: `Handle the necessary permits and approvals from local authorities to ensure compliance with regulations.`,
  },
  {
    imgSrc: p4,
    description: `Mobilize excavation equipment and prepare the site for pool installation in Barrie`,
  },
  {
    imgSrc: p5,
    description: `Ensure proper grading and soil compaction to provide a stable foundation for the pool.`,
  },
  {
    imgSrc: p6,
    description: `Construct the pool shell using high-quality materials, considering factors such as durability and longevity.`,
  },
  {
    imgSrc: p7,
    description: `Install the necessary plumbing and electrical components according to the design specifications.`,
  },
  {
    imgSrc: p8,
    description: `Reinforce the pool structure as needed for safety and longevity in Barrie`,
  },
  {
    imgSrc: p9,
    description: `Apply finishes such as tiles, plaster, or other selected materials to enhance the pool's aesthetic appeal.`
  },
  {
    imgSrc: p10,
    description: `Install pumps, filters, and other equipment to ensure proper water circulation and sanitation.`,
  },
  {
    imgSrc: p11,
    description: `Construct pool decking and any additional features, like steps or seating areas`,
  },
  {
    imgSrc: p12,
    description: `Provide the client with a thorough orientation on pool operation, maintenance, and safety measures.`,
  }
];

const OurProcessSteps = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="py-6 lg:py-[55px]">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <HeadingIcon
                text={projectsHeadingIconText.ourProcess__IconText}
              />
            </div>

            <h2 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-center">
              Process of Our Swimming Pool Installation in Barrie
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
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
          >
            {slideData.map((slide, index) => (
              <SwiperSlide
                key={index}
                className={`text-center py-4 lg:py-10 px-20 md:px-14 lg:px-6`}
              >
                <div className="w-full h-auto md:h-[153px] card-sd rounded-sm p-[10px]">
                  <Image
                    src={slide.imgSrc}
                    width={100}
                    height={95}
                    alt="RH"
                    // className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]"
                    className="w-14 h-14 lg:w-[80px] lg:h-[80px] mx-auto p-[14px] lg:p-[20px] bg-white rounded-full border-[3px] border-secondary-50"
                  />
                  <div className="text-center">
                    <p className="text-[10px] md:text-[16px] mt-2 mb-3  text-black leading-[20px] md:leading-6">
                      {slide.description}
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

export default OurProcessSteps;
