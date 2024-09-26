"use client";

import "./Review.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./SwiperSliderButton";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const reviews = [
    {
      google : "/assets/homePage/icons/google.png",
      star : "/assets/homePage/icons/star.png",
      text: "One the friend recommend easy pools company, who does pool services. Rustam came and give us good price. One day job, replace all system (gas, heater and filter). They installed for us Pentair, high efficiency product. Now, I can control everything from my phone.on the end of the day, they clean up all place. Ill highly recommend to my friends and other. Thank you",
      author: "Lisa Silva",
      location: "North York",
    },
    {
      google : "/assets/homePage/icons/google.png",
      star : "/assets/homePage/icons/star.png",
      text: "easy pools did great job for us, winterizing procces take 1 hour, highly recommended if you need any type of work ( very easy to work with), great costumer service. Thank you Easy pools",
      author: "Lisa Silva",
      location: "North York",
    },
    {
      google : "/assets/homePage/icons/google.png",
      star : "/assets/homePage/icons/star.png",
      text: "Easy Pools built us a custom concrete pool complete with 2 sets of floating steps and also a pool patio. We were extremely happy with the attention to detail and the level of service we received. Recommend",
      author: "Lisa Silva",
      location: "North York",
    },
    {
      google : "/assets/homePage/icons/google.png",
      star : "/assets/homePage/icons/star.png",
      text: "We have used Easy Pools for weekly pool maintenance, and to open and close our pool/spa for 2 years. The service has been excellent. Friendly staff and workers. They have always dealt with issues (like pool liner tears) in a quick and efficient manner. Most of the houses in our neighborhood also use Easy Pools. Would strongly recommend them. Thank you again",
      author: "Lisa Silva",
      location: "North York",
    },
    {
      google : "/assets/homePage/icons/google.png",
      star : "/assets/homePage/icons/star.png",
      text: "The Easy pools are an interesting bunch. It's pricey but you get what you pay for. The service team especially inisfill are fantastic. If you want a good quality pool and understand value added service Easy pools is the company for you.",
      author: "Lisa Silva",
      location: "North York",
    },
    {
      google : "/assets/homePage/icons/google.png",
      star : "/assets/homePage/icons/star.png",
      text: "I would recommend Easy Pools to anybody looking to put in a pool. Russ and Alex and Chris provided first class, attentive and timely service from the initial consultation to the completion of the project. We are delighted with our pool and appreciated the suggestions and attention to detail offered.",
      author: "Lisa Silva",
      location: "North York",
    },
    
  ];

const Review = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="">
          <div className="text-center pb-6">
            <div className="flex justify-center gap-[54px]">
              <HeadingIcon text={headingIconText.review__IconText} />
            </div>
            <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center leading-normal pt-[5px]'>
            Here's what to expect when you hire us as your Pool Installer in Toronto.
            </h2>
          </div>

          {/* ==================== swiper slider ================ */}
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            speed={3000}
            allowTouchMove={false}
            breakpoints={breakpoints}
            spaceBetween={12}
          >
            {reviews.map((slideInfo, index) => (
              <SwiperSlide
                key={index}
                className={`!h-auto !md:h-full`}
              >
                <div className="w-full !h-full card-bg ">
                  <div className="text-left py-[13px] px-[19px]">
                    <Image src={slideInfo.google} alt="google logo" width={148} height={83}/>
                    <Image className="pt-[9px]" src={slideInfo.star} alt="star logo" width={177} height={26}/>
                    <p className="text-lg font-normal leading-[25px] text-balck pt-[12px]">
                      {slideInfo?.text}
                    </p>
                    <p className="text-base font-bold leading-[24px] text-black pt-[12px]">
                      {slideInfo?.author}
                    </p>
                    <p className="text-[10px] font-normal text-dark-500 leading-[18px]">
                      {slideInfo?.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
