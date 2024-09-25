"use client";

import "./Benefits.css";

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
    desc: "Our pool contractors provide a hassle-free installation process, saving time and effort compared to traditional pool construction methods.",
    title: "Convenience",
    img: vc1,
  },
  {
    desc: "Our pool company frequently saves money on installation and maintenance expenses.",
    title: "Cost-effectiveness",
    img: vc2,
  },
  {
    desc: "Despite the streamlined installation process, Easy Pools builds all projects to last. We use high-quality materials resistant to wear and tear.",
    title: "Durability",
    img: vc3,
  },
  {
    desc: "Our pool services company has various built-in safety features, such as non-slip surfaces, sturdy construction, and secure fencing options. ",
    title: "Safety Features",
    img: vc4,
  },
  
];

const Benefits = () => {
  return (
    <div className=" ">
      <div className="container padding__top">
        <div className="!overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.benefits__IconText} />
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center leading-normal pt-[5px]">
            Benefits of Installing <br className="block md:hidden" /> Swimming Pools with Easy <br className="block md:hidden" /> Pools
            </h2>
            <p className="text-lg font-normal text-center text-black pt-[10px]  pb-[16px] md:pb-[36px]">For your Toronto swimming pools, installing with our pool installer offers several benefits for your Toronto swimming pools:</p>
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
                  <div className="mx-auto relative px-2 bg__color">
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
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
