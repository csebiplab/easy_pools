"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";

import GalImg1 from "../../../../../../public/assets/gellary/img1.png";
import GalImg2 from "../../../../../../public/assets/gellary/img2.png";
import GalImg3 from "../../../../../../public/assets/gellary/img3.png";
import GalImg4 from "../../../../../../public/assets/gellary/img4.png";
import GalImg5 from "../../../../../../public/assets/gellary/img1.png";
import GalImg6 from "../../../../../../public/assets/gellary/img6.png";
import GalImg7 from "../../../../../../public/assets/gellary/img9.png";
import GalImg8 from "../../../../../../public/assets/gellary/img10.png";

import GalImg18 from "../../../../../../public/assets/gellary/img4.png";
import GalImg19 from "../../../../../../public/assets/gellary/img3.png";
import GalImg20 from "../../../../../../public/assets/gellary/img2.png";
import GalImg21 from "../../../../../../public/assets/gellary/img4.png";
import GalImg22 from "../../../../../../public/assets/gellary/img6.png";
import GalImg23 from "../../../../../../public/assets/gellary/img1.png";
import GalImg24 from "../../../../../../public/assets/gellary/img10.png";
import GalImg25 from "../../../../../../public/assets/gellary/img9.png";
import HeadingIcon from "@/app/components/ui/HeadingIcon";
import { headingIconText } from "@/app/utils/heading-text";

const ProjectGallery = () => {
  const galImgs = [
    GalImg1,
    GalImg2,
    GalImg3,
    GalImg4,
    GalImg5,
    GalImg6,
    GalImg7,
    GalImg8,
  ];

  const galImgs2 = [
    GalImg18,
    GalImg19,
    GalImg20,
    GalImg21,
    GalImg22,
    GalImg23,
    GalImg24,
    GalImg25,
  ];

  return (
    <div className="bg-[#188B891A]">
      <div className="  custom-container 3xl:py-[85px] py-[50px]">
        <div className="">
          <div className=" flex flex-col justify-center items-center ">
            <HeadingIcon text={headingIconText.gellary__IconText} />

            <div>
              <p className="lg:text-[36px] text-[18px] 3xl:pb-[30px] pb-[25px] text-center ">
                Swimming Pools Installation Gallery Of Past Projects
              </p>
            </div>
          </div>
        </div>

        <Swiper
          className="sample-slider w-full"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            reverseDirection: true,
            stopOnLastSlide: false,
          }}
          // slidesPerView={5}
          speed={4000}
          allowTouchMove={false}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 10,
            }
          }}

        // ,
        //   360: {
        //     slidesPerView: 4,
        //     spaceBetween: 20,
        //   },
        //   750: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   950: {
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //   },
        >
          {galImgs.map((imgUrl, idx) => (
            <SwiperSlide key={idx} className="m-2">
              <Image
                // width={400}
                // height={400}

                // className="w-auto h-52 mx-8 select-none"
                className="object-contain w-auto h-auto mx-auto"
                src={imgUrl}
                alt="gallery"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          className="sample-slider w-full"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            reverseDirection: false,
          }}
          // slidesPerView={5}
          speed={4000}
          allowTouchMove={false}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 10,
            }
          }}
        // ,
        //   360: {
        //     slidesPerView: 4,
        //     spaceBetween: 20,
        //   },
        //   750: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   950: {
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //   },
        >
          {galImgs2.map((imgUrl, i) => (
            <SwiperSlide key={i} className="m-2 ">
              <Image
                // width={400}
                // height={400}
                // className="w-auto h-52 mx-8 select-none"
                className="object-contain w-auto h-auto mx-auto "
                src={imgUrl}
                alt="gallery"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectGallery;
