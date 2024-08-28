"use client";

import "./OurApproach.css";
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HireUsSliderButton from "./HireUsSliderButton";
import { useState } from "react";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
};

const allContents = [
  {
    id: 1,
    img: "/assets/poolInstallationCompanyInMarkham/oa5.png",
    title: "Tailored Design Solutions",
    desc: "Our approach involves creating customized pool designs that seamlessly integrate with your surroundings, ensuring a perfect fit for your lifestyle and preferences.",
  },
  {
    id: 2,
    img: "/assets/poolInstallationCompanyInMarkham/oa2.png",
    title: "Innovative Construction ",
    desc: "Our team utilizes innovative techniques to enhance durability, reduce installation time, and minimize environmental impact, setting us apart from traditional installation methods.",
  },
  {
    id: 3,
    img: "/assets/poolInstallationCompanyInMarkham/oa1.png",
    title: "Transparent Costing",
    desc: "There are no hidden fees or surprises. We provide detailed cost breakdowns, allowing you to make informed decisions that suit your budget without compromising on quality.",
  },
  {
    id: 4,
    img: "/assets/poolInstallationCompanyInMarkham/oa6.png",
    title: "Sustainable Practices",
    desc: "Our experts are committed to eco-friendly pool installations. We incorporate sustainable materials and energy-efficient solutions, contributing to a greener and more responsible.",
  },
  {
    id: 5,
    img: "/assets/poolInstallationCompanyInMarkham/oa4.png",
    title: "Rapid Installation",
    desc: "Our efficient installation process means you can enjoy your pool sooner. We optimize our workflow to reduce construction time without compromising on the quality.",
  },
  {
    id: 6,
    img: "/assets/poolInstallationCompanyInMarkham/oa3.png",
    title: "Quality Assurance",
    desc: "Our company stands behind the quality of its installations. We offer a comprehensive guarantee, giving you peace of mind and confidence in the longevity and performance of your pool.",
  }
];


const OurApproach = () => {
  const [selectImageIndex, setSelectImageIndex] = useState(0);
  return (
    <div className="">
      <div className="container padding__top">
        <div className="flex flex-col justify-center items-center">
        <HeadingIcon
                  text={headingIconText.ourApproach__IconText}
                />
          <h2 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-bold text-black text-center pb-[25px]">
          Our Approach to Swimming Pool Installation Is Different
          </h2>
        </div>

        <div className=" ">
          <Swiper
            modules={[Navigation, Autoplay]}
            speed={3000}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            allowTouchMove={false}
            breakpoints={breakpoints}
            className="!relative"
          >
            {allContents?.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-end items-center">
                    <div className="bg-[#049E43] h-3 w-full" />
                  <Image
                    src={img?.img}
                    width={165}
                    height={165}
                    alt="our approach"
                    className="w-[165px] h-[165px] border-[8px] border-[#049E43] rounded-[16px] bg-white p-5"
                  />
                   <div className="bg-[#049E43] h-3 w-full" />
                </div>
                
                
              </SwiperSlide>
            ))}
            <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
              <HireUsSliderButton
                setSelectImageIndex={setSelectImageIndex}
                selectImageIndex={selectImageIndex}
              />
            </div>
          </Swiper>
        </div>

        {/* content part  */}

        <div className="mt-[25px] mx-auto w-80">
          <div className="cart_bg p-4">
          <p className="text-[25px] font-bold text-center text-[#049E43]">{allContents[selectImageIndex]?.title}</p>
          <p className="text-[#1E252B] text-lg font-normal text-center">{allContents[selectImageIndex]?.desc}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OurApproach;
