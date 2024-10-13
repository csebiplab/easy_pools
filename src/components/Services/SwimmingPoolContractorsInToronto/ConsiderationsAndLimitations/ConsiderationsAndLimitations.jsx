"use client";

import "./ConsiderationsAndLimitations.css";

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

import vc1 from "../../../../../public/assets/swimming_pool_contractors/icons/cal1.png";
import vc2 from "../../../../../public/assets/swimming_pool_contractors/icons/cal2.png";
import vc3 from "../../../../../public/assets/swimming_pool_contractors/icons/cal3.png";
import vc4 from "../../../../../public/assets/swimming_pool_contractors/icons/cal4.png";
import vc5 from "../../../../../public/assets/swimming_pool_contractors/icons/cal5.png";
import vc6 from "../../../../../public/assets/swimming_pool_contractors/icons/cal6.png";
import vc7 from "../../../../../public/assets/swimming_pool_contractors/icons/cal7.png";
import vc8 from "../../../../../public/assets/swimming_pool_contractors/icons/cal8.png";
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
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

const services = [
  {
    desc: "Pools can be expensive to install and maintain. Beyond the initial cost, consider ongoing expenses for repairs, chemicals, heating, and insurance. Stick to a realistic budget to avoid overspending.",
    title: "Budget",
    img: vc1,
  },
  {
    desc: "Ensure your yard has enough space for the pool and any required decking or safety features. Zoning laws and property line setbacks may limit where you can place your pool.",
    title: "Space and Location",
    img: vc2,
  },
  {
    desc: "Consider whether you'll manage regular cleaning, chemical balancing, and equipment upkeep yourself or hire a service, as this adds time and cost.",
    title: "Maintenance",
    img: vc3,
  },
  {
    desc: "In colder climates, pools require heating or closing during winter months. This can add to operational costs. Additionally, consider the impact of weather on pool materials.",
    title: "Climate",
    img: vc4,
  },
  {
    desc: "Installing safety features like fences, pool covers, and alarms is essential to prevent accidents. Local laws may also require specific safety measures, increasing installation costs.",
    title: "Safety",
    img: vc5,
  },
  {
    desc: "While pools can increase property value, they may limit the market of potential buyers. Families with young children or those concerned about maintenance might be less interested.",
    title: "Resale Value",
    img: vc6,
  },
  {
    desc: "Pool installation can take weeks or even months, causing disruptions to your daily life. Noise, debris, and construction may be inconvenient during this time.",
    title: "Time and Disruption",
    img: vc7,
  },
  {
    desc: "Pools consume water and energy. Consider installing energy-efficient equipment or water-saving measures to reduce the environmental footprint.",
    title: "Environmental Impact",
    img: vc8,
  }
];

const ConsiderationsAndLimitations = () => {
  return (
    <div className=" ">
      <div className="bg_vinylPool container padding__top">
        <div className="!overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.considerationsAndLimitations__IconText} />
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
            Considerations and Limitations for Pool Investment
            </h2>
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
                  className="border-4 rounded-[12px] border-secondary !h-auto !md:h-full px-2 py-6 md:py-0"
                >
                  <div className="mx-auto relative px-2">
                    <div className="py-7">
                      <p className="mt-4 mx-auto text-center text-2xl font-bold">
                        {service.title}{" "}
                      </p>
                      <p className="mx-auto text-center text-sm  xl:text-base 3xl:text-lg font-normal">
                        {service.desc}{" "}
                      </p>
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

export default ConsiderationsAndLimitations;
