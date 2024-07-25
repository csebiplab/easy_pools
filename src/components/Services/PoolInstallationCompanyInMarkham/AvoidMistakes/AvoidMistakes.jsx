
"use client";


import "./AvoidMistakes.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import { SwiperNavButtons } from "../../SwimingPoolInstallationInVaughan/Review/SwiperSliderButton";

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

const slideData = [
  {
    title: "Not Researching Properly",
    description: `One of the biggest mistakes is not researching pool installers thoroughly. Look for companies with a good reputation, positive reviews, and a track record of successful projects.`,
  },
  {
    title: "Focusing Solely on Price",
    description: `While cost is important, choosing the cheapest option can lead to poor quality workmanship or materials. Balance cost with quality to ensure you get a pool that will last.`,
  },
  {
    title: "Skipping References",
    description: `Don't skip asking for references from past clients. Contact them to inquire about their experience with the installer and the quality of the work performed.`,
  },
  {
    title: "Ignoring Contracts",
    description: `Never proceed without a detailed contract outlining the scope of work, timelines, payment schedules, and warranties. Review it carefully before signing.`,
  },
  {
    title: "Overlooking Permits",
    description: `Ensure the installer is knowledgeable about local building codes, permits, and regulations governing pool installation. Failure to comply can result in fines or having to redo the work.`,
  },
  {
    title: "Not Clarifying Design",
    description: `Communicate your preferences regarding pool design, materials, and features upfront to avoid misunderstandings or disappointments later.`,
  }  
];

const AvoidMistakes = () => {
  return (
    <div className="bg_vinylPool">
      <div className="container padding__top">
      <div className="">
        <div className="text-center pb-6">
          <div className="flex justify-center gap-[54px]">
            <HeadingIcon text={headingIconText.avoidMistakes__IconText}/>
          </div>
          <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center">
          Common Mistakes to Avoid When Hiring Pool Installers
          </h3>
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
          {slideData.map((slideInfo, index) => (
            <SwiperSlide key={index} className={`px-[30px] md:px-0 !h-auto !md:h-full`}>
              <div className="w-full !h-full  card-sd bg-primary">
                <div className="text-center py-3 md:px-2 px-1">
                  <h4 className="text-[25px] font-bold py-1 md:py-2 text-center text-balck">
                    {slideInfo?.title}
                  </h4>
                  <p className="text-lg font-normal md:px-1 text-center text-black">
                    {slideInfo?.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButtons/>
        </Swiper>
      </div>
    </div>
    </div>
    
  );
};

export default AvoidMistakes;
