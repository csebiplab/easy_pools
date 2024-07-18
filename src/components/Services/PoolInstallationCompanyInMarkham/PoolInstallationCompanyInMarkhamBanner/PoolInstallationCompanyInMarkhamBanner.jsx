"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import "./PoolInstallationCompanyInMarkhamBanner.css";

const PoolInstallationCompanyInMarkhamBanner = () => {
  return (
    <>
      <div className="hero-section ">
        <div className="md:flex items-center relative full__section_l_p">
          <div className="w-full md:w-[50%] ">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="leading-normal text-[36px] md:text-[39px] lg:text-[42px] xl:text-[45px] 2xl:text-[48px] 3xl:text-[50px] 4xl:text-[53px] 5xl:text-[55px] font-bold text-left text-black">
              #1 Pool Installation Company in Markham
              </h1>
              <p className="text-lg font-normal mb-5 leading-6 mt-4 text-black">
              Transform your backyard with our professional pool installation services in Markham.
              </p>
              <div className="mb-4 md:mb-0">
                <a
                  href={`tel:+1(647) 449 9512`}
                  className="text-sm font-bold text-white"
                >
                  <Button className="hero_btn text-white text-sm lg:text-base font-bold capitalize flex items-center gap-x-2">
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
              width={926}
              height={812}
              src="/assets/poolInstallationCompanyInMarkham/hero-bg.jpg"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PoolInstallationCompanyInMarkhamBanner;
