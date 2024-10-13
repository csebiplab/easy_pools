import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const TopRatedPoolContractors = () => {
  return (
    <div className="container padding__top">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5 xl:gap-6 3xl:gap-7 5xl:gap-[30px]">
        <div className="md:col-span-3">
          <div>
            <Image
              src="/assets/swimming_pool_contractors/topRatedPool.png"
              alt="top rated pool image"
              width={477}
              height={772}
            />
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start">
          <div>
            <HeadingIcon
              text={headingIconText.topRatedPoolContractors__IconText}
            />
          </div>
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center md:text-left ">
            Top-Rated Pool Contractors in Toronto
          </h2>
          <p className="text-lg font-normal text-center md:text-left text-black pt-[10px]">
            Easy Pools is proud to be recognized as one of the top-rated pool
            contractors in Toronto. Our commitment to quality, attention to
            detail, and customer satisfaction has earned us a reputation for
            excellence in pool design, construction, and maintenance. We offer a
            wide range of services, from building custom pools to renovating
            existing ones, ensuring your outdoor space reflects your unique
            style and needs. As top-rated pool contractors in Toronto, we take
            pride in our ability to bring your vision to life. Whether you're
            dreaming of a sleek modern pool, a luxurious infinity pool, or a
            family-friendly backyard oasis, our team has the expertise to create
            a design that suits your lifestyle. We guide you through every step,
            offering personalized service, transparent communication, and expert
            advice. From landscaping around your pool to installing custom
            features like waterfalls, lighting, and heating systems, our
            swimming pool company ensures your pool is beautiful but also
            functional and enjoyable year-round. With a team of experienced
            professionals, we deliver reliable and efficient service, making us
            the trusted choice for pool projects in Toronto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopRatedPoolContractors;
