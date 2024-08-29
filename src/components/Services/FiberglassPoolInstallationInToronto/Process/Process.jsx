// "use client";

// import HeadingIcon from "@/components/ui/HeadingIcon";
// import "./Process.css";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import "swiper/css/virtual";
// import { Autoplay, Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// const breakpoints = {
//   0: {
//     slidesPerView: 1,
//   },
//   768: {
//     slidesPerView: 3,
//   },
// };

// const allImages = [
//   "/assets/fiberglass/process/process1.png",
//   "/assets/fiberglass/process/process2.png",
//   "/assets/fiberglass/process/process3.png",
//   "/assets/fiberglass/process/process4.png",
//   "/assets/fiberglass/process/process5.png",
//   "/assets/fiberglass/process/process6.png",
//   "/assets/fiberglass/process/process7.png",
//   "/assets/fiberglass/process/process8.png",
//   "/assets/fiberglass/process/process9.png",
//   "/assets/fiberglass/process/process10.png",
//   "/assets/fiberglass/process/process11.png",
// ];

// const Process = ({ sHeading = "empty", bHeading = "empty" }) => {
//   return (
//     <div className="">
//       <div className="container common__padding__top">
//         <div className="flex flex-col justify-center items-center">
//           <HeadingIcon text={sHeading} />
//           <h2 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
//             {bHeading}
//           </h2>
//         </div>

//         <div className="relative mt-20">
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center w-full">
//             <button aria-label="prev">
//               <span className="sr-only">Prev</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="52"
//                 height="50"
//                 viewBox="0 0 52 50"
//                 fill="none"
//               >
//                 <rect width="52" height="50" rx="9" fill="#049E43" />
//                 <path
//                   d="M15.4697 24.4697C15.1768 24.7626 15.1768 25.2374 15.4697 25.5303L20.2426 30.3033C20.5355 30.5962 21.0104 30.5962 21.3033 30.3033C21.5962 30.0104 21.5962 29.5355 21.3033 29.2426L17.0607 25L21.3033 20.7574C21.5962 20.4645 21.5962 19.9896 21.3033 19.6967C21.0104 19.4038 20.5355 19.4038 20.2426 19.6967L15.4697 24.4697ZM36 24.25H16V25.75H36V24.25Z"
//                   fill="white"
//                 />
//               </svg>
//             </button>
//             <div className="bg-secondary h-3 w-full" />
//             <button aria-label="next">
//               <span className="sr-only">Next</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="52"
//                 height="50"
//                 viewBox="0 0 52 50"
//                 fill="none"
//               >
//                 <rect width="52" height="50" rx="9" fill="#049E43" />
//                 <path
//                   d="M36.5303 25.5303C36.8232 25.2374 36.8232 24.7626 36.5303 24.4697L31.7574 19.6967C31.4645 19.4038 30.9896 19.4038 30.6967 19.6967C30.4038 19.9896 30.4038 20.4645 30.6967 20.7574L34.9393 25L30.6967 29.2426C30.4038 29.5355 30.4038 30.0104 30.6967 30.3033C30.9896 30.5962 31.4645 30.5962 31.7574 30.3033L36.5303 25.5303ZM16 25.75H36V24.25H16V25.75Z"
//                   fill="white"
//                 />
//               </svg>
//             </button>
//           </div>
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             speed={3000}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//               pauseOnMouseEnter: false,
//               disableOnInteraction: false,
//               stopOnLastSlide: false,
//             }}
//             allowTouchMove={false}
//             breakpoints={breakpoints}
//             className="!flex justify-between !overflow-hidden"
//           >
//             {allImages.map((img, index) => (
//               <SwiperSlide key={index}>
//                 <div className="flex justify-center">
//                   <Image
//                     src={img}
//                     width={182}
//                     height={153}
//                     alt="working process"
//                     className="w-[182px] h-[153px]"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         <div className="text__card w-full md:w-[385px] px-3 py-4 mx-auto mt-28">
//           <p className="text-center text-2xl font-medium text-secondary mb-1">
//             Excavate with precision
//           </p>
//           <p className="text-center text-base font-medium leading-[218%]">
//             Ensure accurate dimensions and smooth contours for a seamless pool
//             foundation.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Process;


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
    img: "/assets/fiberglass/process/process.png",
    title: "Premium backfill material",
    desc: "Use high-quality, compacted backfill to support the pool structure and prevent settling",
  },
  {
    id: 2,
    img: "/assets/fiberglass/process/process1.png",
    title: "Excavate with precision",
    desc: "Ensure accurate dimensions and smooth contours for a seamless pool foundation.",
  },
  {
    id: 3,
    img: "/assets/fiberglass/process/process2.png",
    title: "Meticulous grading & leveling",
    desc: "Achieve a perfectly even pool surface, enhancing both aesthetics and functionality.",
  },
  {
    id: 4,
    img: "/assets/fiberglass/process/process3.png",
    title: "Premium backfill material",
    desc: "Use high-quality, compacted backfill to support the pool structure and prevent settling",
  },
  {
    id: 5,
    img: "/assets/fiberglass/process/process4.png",
    title: "Meticulous grading & leveling",
    desc: "Achieve a perfectly even pool surface, enhancing both aesthetics and functionality.",
  },
  {
    id: 6,
    img: "/assets/fiberglass/process/process5.png",
    title: "Advanced coping & decking",
    desc: "Integrate stylish and durable materials around the pool perimeter for a polished finish.",
  },
  {
    id: 7,
    img: "/assets/fiberglass/process/process6.png",
    title: "Professional finishing",
    desc: "Detail-oriented craftsmanship in final touches ensures a flawless and inviting inground pool.",
  },
  {
    id: 8,
    img: "/assets/fiberglass/process/process7.png",
    title: "High-tech filtration system",
    desc: "Implement cutting-edge filtration technology to maintain water clarity and purity effortlessly.",
  },
  {
    id: 9,
    img: "/assets/fiberglass/process/process8.png",
    title: "Eco-friendly landscaping",
    desc: "Surround the pool area with environmentally conscious plants & hardscaping for a harmonious backyard",
  },
  {
    id: 10,
    img: "/assets/fiberglass/process/process9.png",
    title: "Safety-first approach",
    desc: "Install a secure pool fence and comply with safety regulations to provide a worry-free environment for all.",
  },
  {
    id: 11,
    img: "/assets/fiberglass/process/process10.png",
    title: "Thorough client orientation",
    desc: "Educate pool owners on maintenance routines, ensuring long-term enjoyment and satisfaction.",
  },
  {
    id: 12,
    img: "/assets/fiberglass/process/process11.png",
    title: "Quality control inspection",
    desc: "Conduct a rigorous quality check to guarantee every aspect of the installation meets industry standards.",
  },
];


const Process = () => {
  const [selectImageIndex, setSelectImageIndex] = useState(0);
  return (
    <div className="">
      <div className="container padding__top">
        <div className="flex flex-col justify-center items-center">
        <HeadingIcon
                  text={headingIconText.process__inFiberglassText}
                />
          <h2 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-normal text-black text-center pb-[25px]">
          Process of Installing Fiberglass Pools in Toronto
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

