"use client";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/autoplay";
import { SwiperButton } from "@/components/__one_time_used/MainHomePage/OurServiceAreas/SwiperButton";

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

const reviews = [
  {
    text: "Absolutely thrilled with the pool installation by Easy Pools in Toronto! From start to finish, they were professional, efficient, and the end result exceeded our expectations. Highly recommend!",
    author: "Samantha",
    location: "Toronto",
  },
  {
    text: `Easy Pools did an incredible job installing our fiberglass pool in Barrie. The team was knowledgeable, 
    courteous, and completed the project ahead of schedule. We couldn't be happier with the outcome!`,
    author: "Taylor",
    location: "Toronto",
  },
  {
    text: `I had my doubts about finding reliable pool installers in Markham, but Easy Pools proved me wrong. They
    were punctual, skilled, and left no mess behind. Our backyard transformation is amazing!`,
    author: "Jennifer Martinez",
    location: "Toronto",
  },
  {
    text: `Hats off to Easy Pools for their outstanding service in Woodbridge. From the initial consultation to the 
    final touches, they were attentive to our needs and delivered a beautiful pool that our family enjoys every day.`,
    author: "Robert Wilson",
    location: "Barrie",
  },
  {
    text: `Choosing Easy Pools for our Vaughan swimming pool was the best decision we made. Their attention to detail
    and dedication to customer satisfaction are unmatched. Thank you for making our dream pool a reality!`,
    author: "Jessica",
    location: "Barrie",
  },
  {
    text: `Highly recommend Easy Pools for anyone in Thornhill looking to install a pool. Their team is professional
    , experienced, and made the entire process seamless. Couldn't be happier with the result!`,
    author: "David Jones",
    location: "Barrie",
  },
  {
    text: `Easy Pools turned our Etobicoke backyard into a paradise with their expert pool installation. They worked 
    tirelessly to ensure everything was perfect, and it truly shows. Thank you for exceeding our expectations!`,
    author: "Sarah Brown",
    location: "Toronto",
  },
  {
    text: `Kudos to Easy Pools for the fantastic job they did with our Oakville pool installation. From the quality of 
    workmanship to their customer service, they delivered excellence every step of the way. 10/10 would recommend!`,
    author: "Michael Williams",
    location: "Barrie",
  },
  {
    text: `Our experience with Easy Pools in Richmond Hill was exceptional. The team was attentive, responsive, and 
    completed the project with precision. We're thrilled with our new pool and couldn't be happier!`,
    author: "Emily Johnson",
    location: "Toronto",
  },
  {
    text: `Easy Pools surpassed all our expectations with our Aurora swimming pool installation. They were professional,
    reliable, and delivered a final product that wows everyone who sees it. Thank you for making our backyard a haven!`,
    author: "James",
    location: "Barrie",
  },
];

const ReviewsInFiberglass = () => {
  return (
    <div className="bg__fiberglassPage common__padding__top">
      <div className="container">
        <div>
          <div className=" flex flex-col justify-center items-center ">
            <HeadingIcon text={headingIconText.revidw__IconText} />

            <div>
              <h2 className="text-lg md:text-3xl lg:text-4xl text-dark md:text-start text-center md:mb-20 mb-8 text ">
                Here's what to expect when you hire us as your Pool Installer in
                Toronto.
              </h2>
            </div>
          </div>
        </div>

        <div className="!px-10 md:px-0">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            speed={4000}
            allowTouchMove={true}
            breakpoints={breakpoints}
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i} className="!h-auto">
                <div className="!h-full bg-[#D9D9D980] rounded-lg shadow-md p-[13px] ">
                  <div>
                    <Image
                      src="/assets/review/Google-Review-Logo 3.png"
                      width={100}
                      height={100}
                      alt="star"
                      className="h-auto w-auto"
                    />
                  </div>
                  <div className="lg:pt-2">
                    <Image
                      src="/assets/review/ratingstar.png"
                      width={100}
                      height={100}
                      alt="star"
                      className="h-auto w-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-800 py-3 3xl:text-sm ">
                    {review.text}
                  </p>
                  <author className="font-semibold text-gray-900 ">
                    {review.author}
                  </author>
                  <p className="text-gray-600 text-sm ">{review.location}</p>
                </div>
              </SwiperSlide>
            ))}

            <div>
              <SwiperButton />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReviewsInFiberglass;
