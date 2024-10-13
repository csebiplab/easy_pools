
"use client";


import "./Benefits.css";

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
    title: "Convenience & Accessibility",
    description: `A private pool provides instant access to swimming without needing to travel to public facilities. It's available anytime for a quick dip or extended leisure.`,
  },
  {
    title: "Health and Fitness",
    description: `Swimming is a full-body workout that improves cardiovascular health, strengthens muscles, and enhances flexibility. Having a pool encourages regular exercise, which can boost overall well-being.`,
  },
  {
    title: "Relaxation & Stress Relief",
    description: `A swimming pool is an excellent place to unwind after a long day. Water has a calming effect, and swimming or lounging by the pool can help reduce stress and promote relaxation.`,
  },
  {
    title: "Bonding & Entertainment",
    description: `A pool is a great place for family activities, offering endless fun for children and adults alike. It serves as a gathering spot for family and friends, creating lasting memories through pool parties or casual get-togethers.`,
  },
  {
    title: "Refreshing in Hot Weather",
    description: `During hot summer days, having a pool provides a quick way to cool down and enjoy the outdoors comfortably. It helps beat the heat without needing to leave home.`,
  },
  {
    title: "Healthy Outdoor Lifestyle",
    description: `Having a pool encourages spending more time outdoors, leading to a more active and healthy lifestyle. Whether swimming, sunbathing or simply relaxing by the pool, it promotes outdoor activities.`,
  }, 
  {
    title: "Enjoyment & Luxury",
    description: `Owning a pool offers a sense of luxury and personal enjoyment. It provides the freedom to swim and relax in privacy, making it a retreat within your own home.`,
  }  
];

const Benefits = () => {
  return (
    <div className="bg_vinylPool">
      <div className="container padding__top">
      <div className="">
        <div className="text-center pb-6">
          <div className="flex justify-center gap-[54px]">
            <HeadingIcon text={headingIconText.benefits__IconText}/>
          </div>
          <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center">
          Benefits of Having Own Swimming Pool
          </h2>
          <p className="text-lg font-normal text-center text-black pt-[10px]">Owning a swimming pool offers numerous benefits, enhancing both lifestyle and property value. Here are some key advantages:</p>
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
                  <p className="text-[25px] 5xl:text-[28px] font-bold py-1 md:py-2 text-center text-balck">
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

export default Benefits;
