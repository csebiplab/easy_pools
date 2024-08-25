import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const SkilledContractors = () => {
  return (
    <div className="full__section_r_p padding__top pl-3 md:pl-0">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5 xl:gap-6 3xl:gap-7 5xl:gap-[30px]">
        <div className="md:col-span-3">
          <div>
            <Image
              src="/assets/poolInstallationCompanyInMarkham/Skilled Contractors.png"
              alt="Skilled Contractors image"
              width={886}
              height={456}
            />
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start">
          <div>
            <HeadingIcon text={headingIconText.skilledContractors__IconText} />
          </div>
          <h3 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center md:text-left ">
            Skilled Pool Contractors Bring Your Vision to Life
          </h3>
          <p className="text-lg font-normal text-center md:text-left text-black pt-[14px]">
            Our skilled pool contractors are dedicated to bringing your vision
            to life, transforming your backyard into a stunning oasis of
            relaxation and luxury. With meticulous attention to detail and years
            of experience, we specialize in creating custom-designed pools that
            perfectly complement your lifestyle and preferences. From sleek,
            modern designs to timeless classics, we work closely with you to
            understand your needs and preferences, ensuring that every aspect of
            your dream pool is realized. Whether you envision a serene retreat
            for unwinding after a long day or a lively entertainment space for
            gatherings with family and friends, our team is committed to
            delivering exceptional craftsmanship and unparalleled pool
            installation service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkilledContractors;
