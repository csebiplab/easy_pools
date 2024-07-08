"use client";
import HeadingIcon from "@/components/ui/HeadingIcon";
import "./HireUs.css";
import Image from "next/image";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HireUsSliderButton from "./HireUsSliderButton";
import { WhyHireUs } from "@/constants/hireUs";
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
    img: "/assets/projects/images/Why Hire us-1.png",
    title: "Portfolio of Past Projects",
    desc: "Review the company's portfolio of past pool installations.",
  },
  {
    id: 2,
    img: "/assets/projects/images/Why Hire us-2.png",
    title: "Expertise in Pool Design & Construction",
    desc: "Choose a company that offers expertise in both pool design and construction.",
  },
  {
    id: 3,
    img: "/assets/projects/images/Why Hire us-3.png",
    title: "Quality of Materials & Equipment",
    desc: "Inquire about the quality of materials & equipment the company uses for pool.",
  },
  {
    id: 4,
    img: "/assets/projects/images/Why Hire us-4.png",
    title: "Timelines and Project Management",
    desc: "Make sure they can provide a clear timeline for the installation process.",
  },
  {
    id: 5,
    img: "/assets/projects/images/Why Hire us-5.png",
    title: "Timelines and Project Managements",
    desc: "Make sure they can provide a clear timeline for the installation process.",
  },
  {
    id: 6,
    img: "/assets/projects/images/Why Hire us-6.png",
    title: "Cost and Payment Terms",
    desc: "Get multiple quotes from different pool installer companies and compare their costs.",
  },
  {
    id: 7,
    img: "/assets/projects/images/Why Hire us-7.png",
    title: "Communication and Customer Service",
    desc: "Choose a company that is responsive, transparent, and willing to address concerns",
  },
];


const HireUs = () => {
  const [selectImageIndex, setSelectImageIndex] = useState(0);
  return (
    <div className="bg__color">
      <div className="container py-[40px]">
        <div className="flex flex-col justify-center items-center">
          <HeadingIcon text={projectsHeadingIconText.hireUs__IconText} />
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
            What to Consider First When You Want to Hire a Pool Installer?
          </h3>
        </div>

        <div className=" mt-20">
          <Swiper
            modules={[Navigation]}
            breakpoints={breakpoints}
            className="!relative"
          >
            {allContents?.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <Image
                    src={img?.img}
                    width={182}
                    height={153}
                    alt="working process"
                    className="w-[182px] h-[153px]"
                  />
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
          <h4 className="text-[25px] font-medium text-center text-[#049E43]">{allContents[selectImageIndex]?.title}</h4>
          <p className="text-[#1E252B] text-base font-normal text-center">{allContents[selectImageIndex]?.desc}</p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default HireUs;
