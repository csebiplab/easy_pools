"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import "./VinylPoolBanner.css";

const VinylPoolBanner = () => {
  return (
    <>
      <div className="hero-section custom-container">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[58%] pl-3 md:pl-5 lg:pl-10 xl:pl-20 2xl:pl-28 3xl:pl-40 4xl:pl-52 5xl:pl-[285px]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="leading-normal text-[36px] md:text-[40px] lg:text-[43px] xl:text-[46px] 2xl:text-[48px] 3xl:text-[52px] 4xl:text-[56px] 5xl:text-[60px] font-bold text-left text-black">
              Vinyl Pool Installation in Toronto
              </h1>
              <p className="text-lg font-normal mb-5 leading-6 mt-4 text-black">
              Discover the artistry of vinyl pool installation in Toronto with Easy Pools where precision meets passion to create aquatic masterpieces.
              </p>
              <div className="mb-4 md:mb-0">
                <a
                  href={`tel:+1(647) 449 9512`}
                  className="text-sm font-bold text-white"
                >
                  <Button className="hero_btn text-white text-xs lg:text-base font-bold capitalize flex items-center gap-x-2">
                    <span className="text-white">Get an Estimate </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                      >
                        <path
                          d="M0 10.5902L4.59 6.00095L0 1.41168L1.42 0.00190926L7.42 6.00095L1.42 12L0 10.5902Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-right relative hidden md:block">
            <Image
              width={858}
              height={832}
              src="/assets/VinylPool/hero-section.jpg"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VinylPoolBanner;
