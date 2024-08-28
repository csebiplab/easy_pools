
"use client";


import "./VetPoolInstallers.css";

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
    title: "Research & Recommendations",
    description: `Start by researching pool installers in your area. Look online, check review websites, and ask friends, family, or neighbors who have had pools installed for recommendations. Pay attention to reviews, ratings, and any complaints lodged against the companies.`,
  },
  {
    title: "Evaluate Experience & Expertise",
    description: `Look for pool installers with a solid track record of experience in the industry. Ask about their previous projects, especially those similar in size and scope to what you're envisioning for your pool. Inquire about the expertise of their team, including their designers, engineers`,
  },
  {
    title: "Request References & Portfolio",
    description: `Ask the pool installers for references from past clients. Request to see a portfolio of their previous pool installations. This will give you an idea of their design capabilities and the quality of their finished projects.`,
  },
  {
    title: "Obtain Quotes & Contracts",
    description: `Request detailed quotes from multiple pool installers. The quotes should outline all the costs involved, including materials, labor, permits, and any additional fees. Review the contracts carefully, paying attention to warranties, timelines, payment schedules, and any terms and conditions.`,
  },
  {
    title: "Communication & Service",
    description: `Prompt responses, clear explanations, and transparency are all indicators of good customer service. Choose a company that you feel comfortable communicating with and that listens to your needs and concerns.`,
  },
  {
    title: "Get Multiple Quotes & Compare",
    description: `Don't settle for the first pool installer you come across. Instead, obtain quotes from multiple companies and compare them based on factors such as price, reputation, experience, and services offered.`,
  }  
];

const VetPoolInstallers = () => {
  return (
    <div className="bg_vinylPool">
      <div className="container padding__top">
      <div className="">
        <div className="text-center pb-6">
          <div className="flex justify-center gap-[54px]">
            <HeadingIcon text={headingIconText.vetPoolInstallers__IconText}/>
          </div>
          <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center">
          How to Vet Pool Installers for Your Dream Pool
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
          {slideData.map((slideInfo, index) => (
            <SwiperSlide key={index} className={`px-[30px] md:px-0 !h-auto !md:h-full`}>
              <div className="w-full !h-full  card-sd bg-primary">
                <div className="text-center py-3 md:px-2 px-1">
                  <p className="text-[25px] font-bold py-1 md:py-2 text-center text-balck">
                    {slideInfo?.title}
                  </p>
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

export default VetPoolInstallers;
