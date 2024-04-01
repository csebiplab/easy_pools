"use client";
import React, { useState } from "react";
import con from "../../../../../../public/assets/benefits/convenince.png";
import cost from "../../../../../../public/assets/benefits/cost.png";
import dur from "../../../../../../public/assets/benefits/durability.png";
import saf from "../../../../../../public/assets/benefits/safety.png";
import topright from "../../../../../../public/assets/benefits/topcorner.png";
import bottomleft from "../../../../../../public/assets/benefits/bottomcorner.png";
import { headingIconText } from "@/app/utils/heading-text";
import HeadingIcon from "@/app/components/ui/HeadingIcon";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";

const BenefitsWithEasyPools = () => {
  const services = [
    {
      title: "Convenience",
      img: con,
      details:
        "Our pool company provides a hassle-free installation process, saving time and effort compared to traditional pool construction methods.",
    },
    {
      title: "Cost-effectiveness",
      img: cost,
      details:
        "With our pool contractor, you can often save money on both installation and maintenance costs. The streamlined process and materials used may result in lower expenses compared to custom-built pools.",
    },
    {
      title: "Durability",
      img: dur,
      details:
        "Despite the streamlined installation process, Easy Pools are built to last. They typically utilize high-quality materials that are resistant to wear and tear, ensuring longevity and reducing the need for frequent repairs.",
    },
    {
      title: "Safety Features",
      img: saf,
      details:
        "Our pool services company comes with built-in safety features such as non-slip surfaces, sturdy construction, and secure fencing options. These features help prevent accidents and provide peace of mind, especially for families with children or pets.",
    },
  ];

  const [currentInedex, setcurrentIndex] = useState(0)

  const handlePrev = () => {
    const newIndex = currentInedex === 0 ? services.length - 1 : currentInedex - 1;
    setcurrentIndex(newIndex)
  }
  const handleNext = () => {
    const newIndex = currentInedex === services.length - 1 ? 0 :  currentInedex + 1;
    setcurrentIndex(newIndex)
  }

  return (
    <div className="container">
      <div className="lg:py-[120px] py-20 md:px-0 xs:px-[35px]">
        <div className=" flex flex-col justify-center items-center ">
          <HeadingIcon text={headingIconText.Benefits__IconText} />

          <div>
            <p className="lg:text-[36px] text-[20px] md:mb-14 xs:mb-10 mb-8 text-center  ">
              Benefits of Installing Swimming Pools with Easy Pools
            </p>
          </div>
        </div>

        <div className=" xs:hidden sm:block"> 
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 3xl:gap-8 md:gap-10 sm:gap-10 md:gap-y-12 xs:gap-y-10 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-span-1 border-2 shadow-md rounded border-green-600 relative md:gap-5 xs:px-[10px] xs:pb-[10px]"
              >
                {/* SVG background for left bottom corner */}
                <div className="absolute bottom-0 left-0 z-10">
                  <img
                    className="lg:w-20 lg:h-20 w-14 h-14  border-black"
                    src={bottomleft.src}
                    alt="Profile"
                  />
                </div>
                {/* SVG background for right top corner */}
                <div className="absolute top-0 right-0 z-10">
                  <img
                    className="lg:w-20 lg:h-20 w-14 h-14   border-black"
                    src={topright.src}
                    alt="Profile"
                  />
                </div>
                <div className="mx-auto rounded-lg relative z-20">
                  <div className="5xl:pt-[30px] pt-[20px]">
                    <p className=" mx-auto text-center lg:text-[24px] text-md mb-2">
                      {service.title}{" "}
                    </p>
                  </div>
                  <div>
                    <p className="5xl:px-[20px] lg:px-[15px] px-4 5xl:pb-[30px] lg:pb-[20px] xl:text-[15px] lg:text-[12px] md:text-[15px] xs:text-[15px] text-center flex items-center leading-normal ">
                      {" "}
                      {service.details}{" "}
                    </p>
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-30">
                    <img
                      className="lg:w-20 lg:h-20 md:w-14 md:h-14 xs:w-16 xs:h-16 bg-white rounded-full border-black"
                      src={service.img.src}
                      alt="Profile"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="xs:block sm:hidden mt-14">

          <div className=" ">
            <div
              className="col-span-1 border-2 shadow-md rounded border-green-600 relative md:gap-5 xs:px-[10px] xs:pb-[10px]"
            >
              {/* SVG background for left bottom corner */}
              <div className="absolute bottom-0 left-0 z-10">
                <Image
                  className="  border-black"
                  src={bottomleft}
                  alt="Profile"
                  height={"70px"}
                  width={"70px"}
                />
              </div>
              {/* SVG background for right top corner */}
              
              <div className="absolute top-0 right-0 z-10">
                <Image
                  className="   border-black"
                  src={topright}
                  alt="Profile"
                  height={"70px"}
                  width={"70px"}
                />
              </div>

              <div className="mx-auto rounded-lg relative z-20">
                <div className="5xl:pt-[30px] pt-[20px]">
                  <p className=" mx-auto text-center lg:text-[24px]  md:text-md xs:text-[18px] mb-2 xs:mt-8">
                    {services[currentInedex].title}{" "}
                  </p>
                </div>
                <div>
                  <p className="5xl:px-[20px] lg:px-[15px] px-4 5xl:pb-[30px] lg:pb-[20px] xs:pb-[45px] xl:text-[15px] lg:text-[12px] md:text-[15px] xs:text-[15px] text-center flex items-center leading-normal ">
                    {" "}
                    {services[currentInedex].details}{" "}
                  </p>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-30">
                  <Image
                    className=" bg-white rounded-full border-black"
                    src={services[currentInedex].img}
                    alt="Profile"
                    height={"70px"}
                    width={"70px"}
                  />
                </div>
              </div>

            </div>
          </div>


          <div className="flex gap-8 mt-5 items-center justify-center py-5">
            {/* ========= first line ======== */}
            <div className="w-[330px] h-0.5  bg-[#049E43]  ">

            </div>

            <div className="flex gap-5">

              <button onClick={handlePrev} className="p-1 rounded-full border-2 border-[#049E43] hover:text-white hover:bg-[#049E43]  "><FaChevronLeft className='fill-[#049E43] hover:fill-white' /></button>

              <button onClick={handleNext} className=" hover:text-white bg-active hover:bg-[#049E43] border-2 p-1  rounded-full  border-[#049E43]  "><FaChevronRight className='fill-[#049E43] hover:fill-white' /></button>

            </div>
            {/* =============== second line ============= */}
            <div className="w-[330px] h-0.5 bg-[#049E43] ">

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BenefitsWithEasyPools;
