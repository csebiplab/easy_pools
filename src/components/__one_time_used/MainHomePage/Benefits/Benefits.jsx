"use client";

import "./Benefits.css";
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Link from "next/link";

const benefitsData = [
  {
    id: 1,
    img: "/assets/homePage/benefits/benefits1.png",
    title: "Convenience",
    desc: "Our pool contractors provide a hassle-free installation process, saving time and effort compared to traditional pool construction methods.",
  },
  {
    id: 2,
    img: "/assets/homePage/benefits/benefits2.png",
    title: "Cost-effectiveness",
    desc: "Our pool company frequently saves money on installation and maintenance expenses.",
  },
  {
    id: 3,
    img: "/assets/homePage/benefits/benefits3.png",
    title: "Durability",
    desc: "Despite the streamlined installation process, Easy Pools builds all projects to last. We use high-quality materials resistant to wear and tear.",
  },
  {
    id: 4,
    img: "/assets/homePage/benefits/benefits4.png",
    title: "Safety Features",
    desc: "Our pool services company has various built-in safety features, such as non-slip surfaces, sturdy construction, and secure fencing options. ",
  },
];
const benefitsData1 = [
  {
    id: 1,
    img: "/assets/homePage/benefits/benefits5.png",
    title: "Increased Property Value",
    desc: "A well-maintained swimming pool can boost your property's value. Easy Pools offers an attractive addition to your home, potentially increasing its resale value.",
  },
  {
    id: 2,
    img: "/assets/homePage/benefits/benefits6.png",
    title: "Entertainment & Relax",
    desc: "A swimming pool is an excellent place to entertain and relax. We ensure your pool will be an affordable space for you and all visitors.",
  }
];

const Benefits = () => {
  return (
    <div className=" ">
      <div className="container padding__top">
        <div className="!overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.benefits__IconText} />
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center leading-normal pt-[5px]">
              Benefits of Installing <br className="block md:hidden" /> Swimming
              Pools with Easy <br className="block md:hidden" /> Pools
            </h2>
            <p className="text-lg font-normal text-center text-black pt-[10px] pb-[50px]">
              For your Toronto swimming pools, installing with our pool
              installer offers several benefits for your Toronto swimming pools:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-[50px] 5xl:gap-[33px]">
            {benefitsData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className="px-[6px] py-[20px] bg-white border-2 border-secondary rounded-[10px] "
                >
                  <Image
                    src={data.img}
                    alt="benefits image"
                    width={44}
                    height={44}
                    className="w-[64px] h-[64px] mx-auto p-2 rounded-full border-2 border-secondary -mt-[55px] bg-white"
                  />
                  <p className="text-[24px] font-bold text-center text-gray-700">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-black text-center pt-[9px]">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
          {/* second div  */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[25px] 5xl:gap-[33px] pt-[50px]">
            {/* <div className="md:col-span-1">
              <div className="px-[6px] py-[20px] bg-white border-2 border-secondary rounded-[10px] ">
                <Image
                  src="/assets/homePage/benefits/benefits5.png"
                  alt="benefits image"
                  width={44}
                  height={44}
                  className="w-[64px] h-[64px] mx-auto p-2 rounded-full border-2 border-secondary -mt-[55px] bg-white"
                />
                <p className="text-[24px] font-bold text-center text-gray-700">
                  Increased Property Value
                </p>
                <p className="text-lg font-normal text-black text-center pt-[9px]">
                  A well-maintained swimming pool can boost your property's
                  value. Easy Pools offers an attractive addition to your home,
                  potentially increasing its resale value.
                </p>
              </div>
            </div>
            <div className="md:col-span-1 h-full">
              <div className="px-[6px] py-[20px] bg-white border-2 border-secondary rounded-[10px] ">
                <Image
                  src="/assets/homePage/benefits/benefits6.png"
                  alt="benefits image"
                  width={44}
                  height={44}
                  className="w-[64px] h-[64px] mx-auto p-2 rounded-full border-2 border-secondary -mt-[55px] bg-white"
                />
                <p className="text-[24px] font-bold text-center text-gray-700">
                  Entertainment & Relax
                </p>
                <p className="text-lg font-normal text-black text-center pt-[9px]">
                  A swimming pool is an excellent place to entertain and relax.
                  We ensure your pool will be an affordable space for you and
                  all visitors.
                </p>
              </div>
            </div> */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-[50px] 5xl:gap-[33px]">
            {benefitsData1?.map((data) => {
              return (
                <div
                  key={data.id}
                  className="px-[6px] py-[20px] bg-white border-2 border-secondary rounded-[10px] "
                >
                  <Image
                    src={data.img}
                    alt="benefits image"
                    width={44}
                    height={44}
                    className="w-[64px] h-[64px] mx-auto p-2 rounded-full border-2 border-secondary -mt-[55px] bg-white"
                  />
                  <p className="text-[24px] font-bold text-center text-gray-700">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-black text-center pt-[9px]">
                    {data.desc}
                  </p>
                </div>
              );
            })}
            </div>
            <div className="md:col-span-2 flex flex-col items-center justify-center bg-white border-2 border-secondary rounded-[10px] py-[25px] md:py-0">
              <p className="text-[24px] 5xl:text-[36px] font-bold text-black text-center">
                Have a project in mind? <br className="hidden md:block"/>
                Contact us!
              </p>
              <div className="w-full flex justify-center items-center gap-[10px] md:gap-[33px] pt-[20px] 5xl:pt-[25px]">
                <button className="text-sm xl:text-base 5xl:text-lg font-bold py-[6px] px-[10px] xl:py-[12px] xl:px-[25px] 5xl:py-[18px] 5xl:px-[31px] text-white leading-normal btn_bg">
                  <Link
                    className="flex items-center gap-[3px] xl:gap-[5px] text-white"
                    href="tel:+1(647)449-9512"
                  >
                    Get an Estimate{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                    >
                      <path
                        d="M0 9.70771L4.33019 5.50087L0 1.29404L1.33962 0.00174999L7 5.50087L1.33962 11L0 9.70771Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </button>
                <p className="text-sm xl:text-base 5xl:text-lg font-bold text-secondary">
                  or
                </p>
                <p className="text-sm xl:text-base 5xl:text-lg font-bold text-secondary">
                  <Link className="text-secondary" href="tel:+1(647)449-9512">
                    Call Us: +1(647) 449 9512
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
