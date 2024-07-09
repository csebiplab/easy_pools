"use client";

import "./VinylCompare.css";

import Image from "next/image";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import vc1 from "../../../../../public/assets/VinylPool/vc1.png";
import vc2 from "../../../../../public/assets/VinylPool/vc2.png";
import vc3 from "../../../../../public/assets/VinylPool/vc3.png";
import vc4 from "../../../../../public/assets/VinylPool/vc4.png";
import vc5 from "../../../../../public/assets/VinylPool/vc5.png";
import vc6 from "../../../../../public/assets/VinylPool/vc6.png";
import vc7 from "../../../../../public/assets/VinylPool/vc7.png";
import vc8 from "../../../../../public/assets/VinylPool/vc8.png";
import vc9 from "../../../../../public/assets/VinylPool/vc9.png";
import vc10 from "../../../../../public/assets/VinylPool/vc10.png";
import { SwiperNavButtons } from "@/components/__one_time_used/LocationPageComponent/OurProcess/SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  767: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

const services = [
  {
    desc: "Vinyl excellence boasts superior resilience, outlasting traditional pool materials.",
    title: "Unmatched Durability",
    img: vc1,
  },
  {
    desc: "Dive into opulence without breaking the bank—vinyl offers affordable elegance.",
    title: "Budget-Friendly Luxury",
    img: vc2,
  },
  {
    desc: "Experience limitless design possibilities with vinyl, tailored to suit your unique vision.",
    title: "Seamless Customization",
    img: vc3,
  },
  {
    desc: "Enjoy a smooth and comfortable feel underfoot, enhancing the overall swimming experience.",
    title: "Comfortable Texture",
    img: vc4,
  },
  {
    desc: "Vinyl pools simplify upkeep, requiring minimal time and resources for long-lasting beauty.",
    title: "Effortless Maintenance",
    img: vc5,
  },
  {
    desc: "Vinyl's vibrant colors resist fading, maintaining a picturesque pool aesthetic over time.",
    title: "Fade-Resistant",
    img: vc6,
  },
  {
    desc: "Opt for sustainability with vinyl excellence, a material that aligns with environmental ",
    title: "Eco-Friendly Choice",
    img: vc7,
  },
  {
    desc: "Experience optimal water temperature retention, ensuring comfortable swims in any season.",
    title: "Temperature Control",
    img: vc8,
  },
  {
    desc: "Vinyl's flexibility guards against cracks, providing a durable and worry-free pool surface.",
    title: "Crack-Resistant",
    img: vc9,
  },
  {
    desc: "Choose vinyl for a swift & efficient pool setup, minimizing disruptions to your outdoor",
    title: "Quick Installation",
    img: vc10,
  },
];

const VinylCompare = () => {
  return (
    <div className="!overflow-hidden">
      <div className="bg_vinylPool padding__top">
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon
                text={headingIconText.comparePool__IconText}
              />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
            How Does Vinyl Compare to Other Pool Materials in Your Catalogue?
            </h3>
          </div>

          <div className="lg:mt-15 mt-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              breakpoints={breakpoints}
              loop={true}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                stopOnLastSlide: false,
              }}
              speed={3000}
              allowTouchMove={false}
              className="!px-5 md:px-0 !overflow-visible"
            >
              {services.map((service, index) => (
                <SwiperSlide
                  key={index}
                  className="border-4 rounded-[12px] border-secondary-50 !h-auto !md:h-full px-2 py-6 md:py-0"
                >
                  <div className="mx-auto relative px-2">
                    <div className="py-7">
                      <h6 className="mt-4 mx-auto text-center text-2xl font-bold">
                        {service.title}{" "}
                      </h6>
                      <h6 className="mx-auto text-center text-xs md:text-sm xl:text-base 3xl:text-lg font-normal">
                        {service.desc}{" "}
                      </h6>
                    </div>
                    <div className="absolute -top-10 md:-top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Image
                        src={service.img}
                        height={100}
                        width={100}
                        className="w-20 h-20 lg:w-[100px] lg:h-[100px] border-4 border-[#049E43] p-2 rounded-full"
                        alt="Profile"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperNavButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VinylCompare;
