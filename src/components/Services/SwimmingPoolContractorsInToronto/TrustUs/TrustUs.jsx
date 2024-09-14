import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const TrustUs = () => {
  return (
    <div className="full__section_r_p pl-3 md:pl-0">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5 xl:gap-6 3xl:gap-7 5xl:gap-[30px]">
        <div className="md:col-span-3">
          <div>
            <Image
              src="/assets/swimming_pool_contractors/trustUs.png"
              alt="trust us image"
              width={836}
              height={708}
            />
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start">
          <div>
            <HeadingIcon text={headingIconText.trustUs__IconText} />
          </div>
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center md:text-left ">
           Trusted Pool Contractors Toronto for Quality Service
          </h2>
          <p className="text-lg font-normal text-center md:text-left text-black pt-[10px]">
          Easy Pools is your trusted partner for top-quality pool construction and renovation in Toronto. With a strong reputation for excellence, our team of skilled professionals is dedicated to delivering superior craftsmanship and exceptional service. At our swimming pool company, we take pride in using premium materials and advanced techniques to ensure that each pool we build or renovate stands the test of time. Our team is dedicated to making the process smooth and enjoyable for you, handling everything from obtaining permits to performing thorough site evaluations and providing expert post-installation support. With a client-focused approach, we prioritize understanding your vision and delivering results that exceed your expectations. Choose our swimming pool contractors for a trusted, reliable, and high-quality pool experience that enhances your home and lifestyle in Toronto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustUs;
