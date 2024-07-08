
"use client";


import "./Benifits.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import { SwiperNavButtons } from "@/components/__one_time_used/LocationPageComponent/OurProcess/SwiperSliderButton";

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
    title: "Durability and Longevity",
    description: `Vinyl pools boast exceptional durability, resisting cracks and tears. Their longevity ensures a lasting investment in your home.`,
  },
  {
    title: "Design Versatility",
    description: `Easy Pools offers a myriad of design options with vinyl liners, allowing homeowners to customize their pool's appearance to match their aesthetic.`,
  },
  {
    title: "Cost-Effective",
    description: `Compared to other pool types, vinyl pools are often more budget-friendly, providing homeowners with a cost-effective solution for creating a refreshing oasis.`,
  },
  {
    title: "Low Maintenance",
    description: `Vinyl pools require minimal maintenance, simplifying the upkeep process for homeowners. This translates to more time enjoying the pool and less time.`,
  },
  {
    title: "Seamless Repairs",
    description: `In the event of any damage, vinyl pool repairs are often seamless and cost-effective. Small tears or punctures can be quickly addressed.`,
  },
  {
    title: "Energy Efficiency",
    description: `Vinyl pools can be insulated to help maintain water temperatures efficiently. This energy-saving feature not only contributes to environmental sustainability`,
  },
  {
    title: "Quick Installation",
    description: `Our company's vinyl construction facilitates quicker installation compared to other pool types. Homeowners can enjoy their aquatic retreat sooner, minimizing`,
  },
  {
    title: "Algae Resistance",
    description: `The smooth, non-porous surface of vinyl liners resists algae growth more effectively than other pool materials. This not only keeps the pool water clearer.`,
  }
  
];

const Benifits = () => {
  return (
    <div className="bg_vinylPool">
      <div className="container ">
      <div className="">
        <div className="text-center pb-6">
          <div className="flex justify-center gap-[54px]">
            <HeadingIcon text={headingIconText.benefits__IconText}/>
          </div>
          <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-normal text-center">
          The Benefits of Vinyl Pools for Homeowners
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
              <div className="w-full !h-full  card-sd bg-primary py-6">
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
          <SwiperNavButtons />
        </Swiper>
      </div>
    </div>
    </div>
    
  );
};

export default Benifits;
