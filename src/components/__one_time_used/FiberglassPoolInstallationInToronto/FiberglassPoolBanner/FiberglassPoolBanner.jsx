"use client";

import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import "./FiberglassPoolBanner.css";

const FiberglassPoolBanner = () => {
  return (
    <>
      <div className="hero-section custom-container">
        <div className="md:flex items-center relative h-full">
          <div className="flex items-center w-full h-full border border-red-500 md:w-[58%] pl-3 md:pl-5 lg:pl-10 xl:pl-20 2xl:pl-28 3xl:pl-40 4xl:pl-52 5xl:pl-[285px]">
            <div className="border border-red-500 py-[300px] md:py-0 px-4 md:pl-0">
              <h1 className="leading-normal text-[34px] md:text-[36px] xl:text-[38px] 2xl:text-[42px] 3xl:text-[46px] 4xl:text-[50px] 5xl:text-[55px] font-bold text-left">
                Fiberglass Pool <br /> Installation in Toronto
              </h1>
              <p className="text-base lg:text-lg font-normal mb-5 leading-6 mt-4 text-black">
                Easy Pools is the best fiberglass pool installation company in
                Toronto <br /> for ensuring a hassle-free installation process
                for modern living.
              </p>
              <div className="mb-4 md:mb-0">
                <Link href={`tel:+1 (646) 683-4612`} className="inline-block">
                  <Button className="!px-[34px] !py-4 btn__bannerFiberglass !text-white text-xs lg:text-lg font-bold capitalize flex items-center gap-x-2">
                    <span className="!text-white">Get an Estimate</span>
                    <span>
                      <FaChevronRight fill="white" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiberglassPoolBanner;
