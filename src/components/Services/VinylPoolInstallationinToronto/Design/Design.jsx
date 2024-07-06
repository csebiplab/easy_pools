
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
// import { SwipButton } from "../BenefitsWithEasyPools/SwipButton";

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
    title: "Outdoor Pools in Vaughan",
    description: `Outdoor pools are recreational water facilities situated outside, typically found in parks, resorts, or private residences. We specialize in crafting stunning pools tailored to your style and space, enhancing your outdoor living experience.`,
  },
  {
    title: "Indoor Pools",
    description: `Our dedicated team handles every aspect of the indoor pool installation process, ensuring a stress-free experience for you. Using high-quality materials and cutting-edge techniques, we guarantee a durable and visually stunning indoor pool.`,
  },
  {
    title: "Above-Ground Pools",
    description: `Above-ground pools are freestanding swimming pools installed on top of the ground's surface, rather than being dug into the ground like traditional in-ground pools. We offer a hassle-free setup, quality materials, and personalized designs.`,
  },
  {
    title: "Inground Pools",
    description: `Transform your outdoor space into a luxurious retreat with a custom-designed inground pool tailored to your specifications. Our team of experts ensures a seamless installation process, utilizing top-quality materials to create a stunning.`,
  },
  {
    title: "Saltwater Pools",
    description: `Discover the epitome of luxury and relaxation with our premium saltwater pool installation service. Say goodbye to the harsh chemicals of traditional pools and immerse yourself in the gentle embrace of saltwater. Our expert team ensures.`,
  },
  {
    title: "Freshwater Pools",
    description: `Transform your backyard oasis dreams into reality with our professional freshwater pool installation service. With meticulous attention to detail, we'll create a serene retreat where you can unwind and make lasting memories with family.`,
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
          <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center">
          Our Swimming Pool Installation Services
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
          {/* <SwipButton/> */}
        </Swiper>
      </div>
    </div>
    </div>
    
  );
};

export default Design;
