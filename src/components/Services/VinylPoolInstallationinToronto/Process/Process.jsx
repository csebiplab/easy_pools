"use client";

import "./Process.css";
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
import { useState } from "react";
import ProcessSliderButton from "./ProcessSliderButton";

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
    img: "/assets/VinylPool/process.png",
    title: "Precision Moulding",
    desc: "Easy Pools utilizes cutting-edge molding techniques, ensuring precise and consistent shapes for vinyl pool installation.",
  },
  {
    id: 2,
    img: "/assets/VinylPool/process1.png",
    title: "Precision Moulding",
    desc: "Easy Pools utilizes cutting-edge molding techniques, ensuring precise and consistent shapes for vinyl pool installation.",
  },
  {
    id: 3,
    img: "/assets/VinylPool/process2.png",
    title: "Precision Moulding",
    desc: "Easy Pools utilizes cutting-edge molding techniques, ensuring precise and consistent shapes for vinyl pool installation.",
  },
  {
    id: 4,
    img: "/assets/VinylPool/process3.png",
    title: "Modular Construction",
    desc: "We utilize a modular construction approach, facilitating efficient assembly on-site, reducing installation time, & providing flexibility in pool design.",
  },
  {
    id: 5,
    img: "/assets/VinylPool/process4.png",
    title: "Eco-Friendly Practices",
    desc: "The manufacturing process incorporates eco-conscious practices, utilizing recycled materials where possible and minimizing environmental impact",
  },
  {
    id: 6,
    img: "/assets/VinylPool/process5.png",
    title: "Innovative Welding",
    desc: "Our company employs state-of-the-art welding methods to seamlessly join vinyl panels, ensuring leak-proof seams and enhancing the structural integrity",
  },
  {
    id: 7,
    img: "/assets/VinylPool/process6.png",
    title: "Seamless Integration",
    desc: "The assembly process seamlessly integrates various components, creating a cohesive and structurally sound final product that enhances the overall pool",
  },
  {
    id: 8,
    img: "/assets/VinylPool/process7.png",
    title: "Quality Assurance",
    desc: "Rigorous quality checks are implemented at every stage, guaranteeing that each vinyl pool meets stringent standards for safety.",
  },
  {
    id: 9,
    img: "/assets/VinylPool/process8.png",
    title: "Tailored Design",
    desc: "Our company offers customizable designs, allowing customers to personalize their vinyl pools with unique patterns, colors, and sizes.",
  },
  {
    id: 10,
    img: "/assets/VinylPool/process9.png",
    title: "Advanced Materials",
    desc: "The manufacturing process incorporates high-quality vinyl materials known for their durability, UV resistance, and longevity.",
  }
];


const Process = () => {
  const [selectImageIndex, setSelectImageIndex] = useState(0);
  return (
    <div className="bg_vinylPool">
      <div className="container padding__top">
        <div className="flex flex-col justify-center items-center">
        <HeadingIcon
                  text={headingIconText.process__inFiberglassText}
                />
          <h2 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-normal text-black text-center pb-[25px]">
          Process for Vinyl Pool Manufacturing
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
                    <div className="bg-secondary h-3 w-full" />
                  <Image
                    src={img?.img}
                    width={165}
                    height={165}
                    alt="our approach"
                    className="w-[165px] h-[165px] border-[8px] border-secondary rounded-[16px] bg-white p-5"
                  />
                   <div className="bg-secondary h-3 w-full" />
                </div>
                
                
              </SwiperSlide>
            ))}
            <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
              <ProcessSliderButton
                setSelectImageIndex={setSelectImageIndex}
                selectImageIndex={selectImageIndex}
              />
            </div>
          </Swiper>
        </div>

        {/* content part  */}

        <div className="mt-[25px] mx-auto w-80">
          <div className="cart_bg p-4">
          <p className="text-[25px] font-bold text-center text-secondary">{allContents[selectImageIndex]?.title}</p>
          <p className="text-[#1E252B] text-lg font-normal text-center">{allContents[selectImageIndex]?.desc}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Process;

