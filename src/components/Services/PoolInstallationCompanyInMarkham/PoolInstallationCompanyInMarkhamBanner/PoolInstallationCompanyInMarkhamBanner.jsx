"use client";
import Image from "next/image";
import "./PoolInstallationCompanyInMarkhamBanner.css";

const PoolInstallationCompanyInMarkhamBanner = () => {
  return (
    <>
      <div className="hero__section__markham custom-container">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[50%] pl-3 md:pl-5 lg:pl-10 xl:pl-20 2xl:pl-28 3xl:pl-40 4xl:pl-52 5xl:pl-[285px]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="leading-normal text-[36px] md:text-[39px] lg:text-[42px] xl:text-[45px] 2xl:text-[48px] 3xl:text-[50px] 4xl:text-[53px] 5xl:text-[55px] font-bold text-left text-black">
                #1 Pool Installation Company in Markham
              </h1>
              <p className="text-lg font-normal mb-5 leading-6 mt-4 text-black">
                Transform your backyard with our professional pool installation
                services in Markham.
              </p>
              <div className="mb-4 md:mb-0">
                <a
                  href={`tel:+1(647) 449 9512`}
                  className="text-sm font-bold text-white"
                >
                  <button className="px-[34px] py-2 hero_btn text-white text-sm lg:text-lg font-bold capitalize flex items-center gap-x-2">
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
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="hero__right__markham relative hidden md:block">
            <Image
              width={858}
              height={832}
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
