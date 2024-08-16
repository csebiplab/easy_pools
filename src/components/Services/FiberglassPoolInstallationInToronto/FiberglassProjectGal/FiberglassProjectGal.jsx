"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";

const ProjectGalleryInFiberglass = () => {
  const galImgs = [
    "/assets/fiberglass/projects-gal/img1.png",
    "/assets/fiberglass/projects-gal/img2.png",
    "/assets/fiberglass/projects-gal/img3.png",
    "/assets/fiberglass/projects-gal/img4.png",
    "/assets/fiberglass/projects-gal/img5.png",
    "/assets/fiberglass/projects-gal/img6.png",
    "/assets/fiberglass/projects-gal/img8.png",
  ];

  const galImgs2 = [
    "/assets/fiberglass/projects-gal/img7.png",
    "/assets/fiberglass/projects-gal/img8.png",
    "/assets/fiberglass/projects-gal/img9.png",
    "/assets/fiberglass/projects-gal/img10.png",
    "/assets/fiberglass/projects-gal/img11.png",
    "/assets/fiberglass/projects-gal/img1.png",
    "/assets/fiberglass/projects-gal/img2.png",
  ];

  return (
    <div className="bg__fiberglassPage common__padding__top">
      <div className="custom-container">
        <div className="">
          <div className=" flex flex-col justify-center items-center ">
            <HeadingIcon text={headingIconText.gellary__IconText} />

            <div>
              <p className="px-3 text-black text-lg md:text-3xl lg:text-4xl 3xl:pb-[30px] pb-[25px] text-center ">
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
          speed={4000}
          allowTouchMove={false}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
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
          speed={4000}
          allowTouchMove={false}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
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

export default ProjectGalleryInFiberglass;
