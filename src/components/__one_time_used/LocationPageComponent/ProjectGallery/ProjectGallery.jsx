"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";

const ProjectGallery = () => {
  const galImgs = [
    "/assets/gellary/img1.png",
    "/assets/gellary/img2.png",
    "/assets/gellary/img3.png",
    "/assets/gellary/img4.png",
    "/assets/gellary/img1.png",
    "/assets/gellary/img6.png",
    "/assets/gellary/img9.png",
    "/assets/gellary/img10.png",
  ];

  const galImgs2 = [
    "/assets/gellary/img4.png",
    "/assets/gellary/img3.png",
    "/assets/gellary/img2.png",
    "/assets/gellary/img4.png",
    "/assets/gellary/img6.png",
    "/assets/gellary/img1.png",
    "/assets/gellary/img10.png",
    "/assets/gellary/img9.png",
  ];

  return (
    <div className="bg-white">
      <div className="  custom-container padding__all">
        <div className="">
          <div className=" flex flex-col justify-center items-center ">
            <HeadingIcon text={headingIconText.gellary__IconText} />

            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
                Swimming Pools Installation Gallery Of Past Projects
              </h2>
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
            },
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
                width={400}
                height={400}
                className="object-contain w-full h-auto mx-auto"
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
            },
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
                width={400}
                height={400}
                className="object-contain w-full h-auto mx-auto "
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
