import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";
import "./JoinWithUs.css";
import Link from "next/link";

const JoinWithUs = () => {
  return (
    <div className="full__section_l_p pr-3 md:pr-0 padding__top">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-2 z-30">
          <div className="flex flex-col items-center justify-start join_cart_bg py-[10px] md:py-[20px] 5xl:py-[37px] px-[12px] md:px-[20px] 5xl:px-[33px] mt-[25px] -mr-0 md:-mr-[80px]">
            <div className="w-full flex justify-start">
              <HeadingIcon text={headingIconText.joinWithUs__IconText} />
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-left leading-normal pt-[5px]">
              Ready to Start Your Swimming Pool Installation With Us?
            </h2>
            <p className="text-lg font-normal text-black text-left pt-[10px]">
              At Easy Pools, our pool contractors specialize in transforming
              your backyard into a personal paradise. From custom-designed pools
              to seamless installations, our experienced contractors ensure that
              every step of the process is stress-free and tailored to your
              vision. Whether looking for a luxurious oasis or a simple, elegant
              design, we're here to ready your dream pool.
            </p>
            <p className="text-lg font-normal text-black text-left">
              Start your pool service with Easy Pools, your trusted partner for
              swimming pool installation in Toronto. Our team of expert
              contractors ensures a hassle-free experience. From concept to
              completion, our contractors guarantee a swift and stress-free
              process, making your aquatic oasis a reality.
            </p>
            <div className="w-full flex justify-start items-center gap-[25px] md:gap-[33px] pt-[20px] 5xl:pt-[25px]">
              <button className="text-base 5xl:text-lg font-bold py-[6px] px-[20px] xl:py-[12px] xl:px-[25px] 5xl:py-[18px] 5xl:px-[31px] text-white leading-normal btn_bg">
                <Link className="flex items-center gap-[5px] text-white" href="tel: 647-931-0164">
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
              <p className="text-base 5xl:text-lg font-bold text-secondary">or</p>
              <p className="text-base 5xl:text-lg font-bold text-secondary"><Link className="text-secondary" href="tel : 647-931-0164">Call Us: 647-931-0164</Link></p>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <Image
            src="/assets/homePage/joinWhitUs.png"
            alt="join with us"
            width={857}
            height={632}
            className="w-full h-[235px] xl:w-[857px] xl:h-[670px] 5xl:w-[957px] 5xl:h-[673px]"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinWithUs;
