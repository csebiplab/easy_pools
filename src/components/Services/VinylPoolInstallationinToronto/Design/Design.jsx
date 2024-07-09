
"use client";


import "./Design.css";

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
    title: "Tailored Patterns",
    description: `Easy Pools offer a myriad of vinyl patterns, from mosaics to geometric designs, allowing for a personalized touch that suits your aesthetic preferences.`,
  },
  {
    title: "Color Palette Diversity",
    description: `Choose from a wide array of vinyl colors to harmonize with your outdoor space, creating a pool that seamlessly integrates into your landscape.`,
  },
  {
    title: "Texture Selection",
    description: `Customizable vinyl textures provide a luxurious feel, enhancing both the visual and tactile appeal of your pool and elevating its overall elegance.`,
  },
  {
    title: "Inlay Options",
    description: `Our company allows for unique inlays, such as logos or intricate designs, adding a distinctive flair that transforms your pool into a true reflection of your style.`,
  },
  {
    title: "Border Varieties",
    description: `Select from different border options, like decorative tiles or contrasting vinyl strips, to frame your pool and enhance its visual appeal.`,
  },
  {
    title: "Underwater Illumination",
    description: `Enhance the nighttime ambiance by choosing vinyl with light-diffusing properties, transforming your pool into a captivating display with customizable.`,
  },
  {
    title: "Transition Effects",
    description: `Our company provides options for gradient vinyl designs, allowing for subtle color transitions that create a visually stunning and dynamic effect.`,
  },
  {
    title: "Custom Vinyl Murals",
    description: `Commission bespoke vinyl murals that showcase your creativity, turning your pool into a one-of-a-kind art vinyl pool installation that captivates and inspires.`,
  }
  
];

const Design = () => {
  return (
    <div className="bg_vinylPool">
      <div className="container padding__top">
      <div className="">
        <div className="text-center pb-6">
          <div className="flex justify-center gap-[54px]">
            <HeadingIcon text={headingIconText.design__IconText}/>
          </div>
          <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-normal text-center">
          Design Options for Vinyl Pool Installation in Toronto
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
          <SwiperNavButtons/>
        </Swiper>
      </div>
    </div>
    </div>
    
  );
};

export default Design;
