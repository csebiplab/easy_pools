"use client";
// import con from "../../../../../../public/assets/benefits/convenince.png";
// import cost from "../../../../../../public/assets/benefits/cost.png";
// import dur from "../../../../../../public/assets/benefits/durability.png";
// import saf from "../../../../../../public/assets/benefits/safety.png";
// import topright from "../../../../../../public/assets/benefits/topcorner.png";
import { headingIconText } from "@/utils/heading-text";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/virtual";

import HeadingIcon from "@/components/ui/HeadingIcon";
import Image from "next/image";
import { SwipButton } from "./SwipButton";

const services = [
  {
    title: "Convenience",
    img: "/assets/benefits/convenince.png",
    details:
      "Our pool company provides a hassle-free installation process, saving time and effort compared to traditional pool construction methods.",
  },
  {
    title: "Cost-effectiveness",
    img: "/assets/benefits/cost.png",
    details:
      "With our pool contractor, you can often save money on both installation and maintenance costs. The streamlined process and materials used may result in lower expenses compared to custom-built pools.",
  },
  {
    title: "Durability",
    img: "/assets/benefits/durability.png",
    details:
      "Despite the streamlined installation process, Easy Pools are built to last. They typically utilize high-quality materials that are resistant to wear and tear, ensuring longevity and reducing the need for frequent repairs.",
  },
  {
    title: "Safety Features",
    img: "/assets/benefits/safety.png",
    details:
      "Our pool services company comes with built-in safety features such as non-slip surfaces, sturdy construction, and secure fencing options. These features help prevent accidents and provide peace of mind, especially for families with children or pets.",
  },
];

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 55,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 50,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

const BenefitsWithEasyPools = () => {
  return (
    <div className="container">
      <div className="!overflow-x-hidden">
      <div className="lg:py-[120px] py-20 md:px-0 xs:px-[35px]">
        {/* heading  */}
        <div className=" flex flex-col justify-center items-center ">
          <HeadingIcon text={headingIconText.Benefits__IconText} />

          <div>
            <h2 className="text-lg md:text-3xl lg:text-4xl text-dark leading-normal md:mb-14xs :mb-10 mb-8 text-center">
              Benefits of Installing Swimming Pools with Easy Pools
            </h2>
          </div>
        </div>

        {/* show when sm screen to large */}
        <div className="mt-4 md:mt-7 ">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              reverseDirection: false,
              stopOnLastSlide: false,
            }}
            speed={4000}
            allowTouchMove={true}
            breakpoints={breakpoints}
            className=" !overflow-visible "
          >
            {services.map((service, index) => (
              <SwiperSlide
                key={index}
                className="border-2 shadow-md rounded border-green-600 md:gap-5 px-[14px] pb-[14px] !overflow-visible lg:!h-[270px] !h-auto "
              >
                {/* SVG background for left bottom corner */}
                <div className="absolute bottom-0 left-0 z-10">
                  <Image
                    src="/assets/benefits/bottomcorner.png"
                    alt="Profile"
                    width={64}
                    height={64}
                    className="lg:w-16 lg:h-16 w-14 h-14  border-black"
                  />
                </div>

                {/* SVG background for right top corner */}
                <div className="absolute top-0 right-0 z-10">
                  <Image
                    className="lg:w-16 lg:h-16 w-14 h-14 border-black"
                    src="/assets/benefits/topcorner.png"
                    alt="Profile"
                    width={64}
                    height={64}
                  />
                </div>

                <div className="mx-auto rounded-lg relative z-20 ">
                  <div className="pt-[40px] ">
                    <p className=" mx-auto text-center 2xl:text-[24px] lg:text-[18px] text-[15px] mb-2">
                      {service.title}{" "}
                    </p>
                  </div>

                  <div>
                    <p className="2xl:px-[20px] lg:px-[15px] px-4 xl:text-[15px] lg:text-[12px] text-sm text-center flex items-center md:leading-0 leading-[20px] ">
                      {" "}
                      {service.details}{" "}
                    </p>
                  </div>

                  <div className="absolute top-0 left-1/2  z-80  transform -translate-x-1/2 -translate-y-1/2 ">
                    <Image
                      src={service?.img}
                      alt="Profile"
                      width={64}
                      height={64}
                      className="lg:w-20 lg:h-20 md:w-14 md:h-14 w-16 h-16 bg-white rounded-full border-black"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwipButton></SwipButton>
          </Swiper>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BenefitsWithEasyPools;
