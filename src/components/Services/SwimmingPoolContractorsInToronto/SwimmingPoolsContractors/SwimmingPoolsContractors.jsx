import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

import "./SwimmingPoolsContractors.css";

const SwimmingPoolsContractors = () => {
  return (
    <div className="full__section_r_p pl-3 md:pl-0 padding__top">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5 xl:gap-6 3xl:gap-7 5xl:gap-[30px]">
        <div className="md:col-span-3">
          <div>
            <Image
              src="/assets/poolInstallationCompanyInMarkham/Why Choose US.png"
              alt="Why Choose US image"
              width={886}
              height={456}
            />
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start">
          <div>
            <HeadingIcon text={headingIconText.swimmingPoolsContractors__IconText} />
          </div>
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center md:text-left ">
          Start With Our Toronto Swimming Pools Contractors
          </h2>
          <p className="text-lg font-normal text-center md:text-left text-black pt-[14px]">
          Begin your journey to a stunning backyard oasis with Easy Pools, your premier Toronto swimming pool contractor. Our team of experts specializes in crafting exceptional swimming pools tailored to your vision and lifestyle. Whether you're interested in fiberglass, concrete, ICF, infinity, or saltwater pools, we provide top-notch design, construction, and maintenance services to ensure your project is executed with precision and excellence.
          </p>
          <p className="text-lg font-normal text-center md:text-left text-black">
          Starting with us means benefiting from our extensive experience, high-quality materials, and client-focused approach. We handle every step of the process, from initial consultation and custom design to seamless installation and ongoing support. Let our swimming pool contractors transform your outdoor space into a luxurious retreat with our trusted expertise and commitment to quality. Start with us today and experience the difference of working with Toronto's finest pool contractors.
          </p>
          <a href="tel:+1(647) 449 9512">
            <button className="btn_bg text-white flex items-center gap-2 py-1 px-8 text-base font-bold my-5">
              Get Your Free Estimated{" "}
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
            </button>
          </a>

          <h5 className="text-[25px] lg:text-[30px] font-semibold text-[#0C1C3C]">
            or Call Us:{" "}
            <a className="text-[#7BB344] font-bold" href="tel:+1(647) 449 9512">
            +1(647) 449 9512
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SwimmingPoolsContractors;
