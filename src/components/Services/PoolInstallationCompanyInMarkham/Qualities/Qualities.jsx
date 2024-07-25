"use client";

import "./Qualities.css";

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
import { SwiperNavButtons } from "../../SwimingPoolInstallationInVaughan/Review/SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  767: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
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
  1536: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1736: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

const services = [
  {
    img: "/assets/poolInstallationCompanyInMarkham/qualities5.png",
    title: "Experience",
    para: "Our pool installers possess extensive experience in the field, having completed numerous projects with various requirements and complexities.",
  },
  {
    img: "/assets/poolInstallationCompanyInMarkham/qualities6.png",
    title: "Reliability",
    para: "Customers can rely on our pool installers to complete the project within the agreed timeline and budget. They are punctual, dependable, and dedicated to meeting deadlines.",
  },
  {
    img: "/assets/poolInstallationCompanyInMarkham/qualities1.png",
    title: "Communication Skills",
    para: "Our installers maintain clear and open communication with clients throughout the entire project. They listen to their needs, provide updates, and address any concerns promptly .",
  },
  {
    img: "/assets/poolInstallationCompanyInMarkham/qualities2.png",
    title: "Professionalism",
    para: "Our team of installers conducts themselves with professionalism at all times. They are courteous, and respectful, and strive to exceed customer expectations with their work ethic.",
  },
  {
    img: "/assets/poolInstallationCompanyInMarkham/qualities3.png",
    title: "Problem-Solving Ability",
    para: "In the face of challenges or unexpected issues, our pool installers demonstrate excellent problem-solving skills. They approach problems with a solution-oriented mindset.",
  },
  {
    img: "/assets/poolInstallationCompanyInMarkham/qualities4.png",
    title: "Customer Satisfaction",
    para: "Our installers go above and beyond to deliver results that meet or exceed the expectations of our clients, leaving them delighted with their new pool installation.",
  }
];

const Qualities = () => {
  return (
    <div className="bg_vinylPool">
      <div className="!overflow-hidden padding__top">
        <div className="bg__fiberglassPage">
          <div className="container">
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center lg:justify-normal items-center">
                <HeadingIcon
                  text={headingIconText.qualities__IconText}
                />
              </div>
              <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-bold text-black text-center pb-[25px]">
              Qualities of Our Professional Pool Installers in Markham
              </h3>
            </div>

            <div className="w-full h-[3px] bg-primary-500" />

            <div className="">
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
                className="!px-5 md:px-0 !overflow-hidden"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index} className="">

                    <div className="">
                      <div className="flex justify-around ">
                        <div className="w-[3px] h-[40px] bg-primary-500" />
                      </div>
                    </div>
                      
                    <div className="">
                      <Image
                        src={service.img}
                        width={58}
                        height={58}
                        alt="benifits image"
                        className="w-[58px] h-[58px] mx-auto p-2 border-2 border-primary-500 rounded-full"
                      />
                    </div>

                    <div className="">
                      <div className="flex justify-around ">
                        <div className="w-[3px] h-[40px] bg-primary-500" />
                      </div>
                    </div>
                    

                    <div className="mx-auto w-[323px] h-[226px] cart px-3 py-[13px]">
                      <div className="">
                        <h5 className="text-black text-2xl font-bold text-center">
                          {service.title}{" "}
                        </h5>
                        <p className="text-black text-lg font-normal text-center">
                          {service.para}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperNavButtons/>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualities;
