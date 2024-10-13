"use client";
import Image from "next/image";
import "./SwimmingPoolContractorsInTorontoBanner.css";
import GetAnEstimateButton from "@/components/common/GetAnEstimateButton";

const SwimmingPoolContractorsInTorontoBanner = () => {
  return (
    <>
      <div className="hero__section__markham custom-container">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[50%] pl-3 md:pl-5 lg:pl-10 xl:pl-20 2xl:pl-28 3xl:pl-40 4xl:pl-52 5xl:pl-[285px]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="leading-normal text-[36px] md:text-[39px] lg:text-[42px] xl:text-[45px] 2xl:text-[48px] 3xl:text-[50px] 4xl:text-[53px] 5xl:text-[55px] font-bold text-left text-black">
                Swimming Pool Contractors in Toronto
              </h1>
              <p className="text-lg font-normal mb-5 leading-6 mt-4 text-black">
              Easy Pools is one of the best swimming pool contractors in Toronto, specializing in custom pool design, installation, and maintenance.
              </p>
              <div className="mb-4 md:mb-0">
                <GetAnEstimateButton/>
              </div>
            </div>
          </div>
          <div className="hero__right__markham relative hidden md:block">
            <Image
              width={858}
              height={832}
              src="/assets/swimming_pool_contractors/hero-bg.png"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SwimmingPoolContractorsInTorontoBanner;
