import React from "react";
import "./CostCalculating.css";
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const CostCalculating = () => {
  return (
    <div className="bg__fiberglassPage common__padding__top">
      <div className="full__section_l_p">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-10">
          <div className="md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.cost__inFiberglassText} />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px">
              Easy Pools Leads the Fiberglass Pool Installation Industry
            </h3>
            <p className="text-sm md:text-base font-normal text-center md:text-left text-black pt-[10px] md:pt-[15px]">
              Easy Pools is a leader in the fiberglass pool installation
              industry, renowned for its exceptional craftsmanship and customer
              service. With a commitment to quality and innovation, our company
              offers a wide range of stylish and durable fiberglass pools,
              tailored to meet the unique needs of each client. With a
              reputation built, we stand out in the competitive market for our
              attention to detail and personalized approach. We use the highest
              quality materials to ensure longevity and reliability, offering
              clients peace of mind with every installation. Our comprehensive
              services include initial consultation, custom design, expert
              installation, and post-installation support, making the entire
              process smooth and stress-free. Our commitment to customer
              satisfaction is reflected in our numerous positive reviews and
              repeat clientele. By continuously embracing new technologies and
              industry best practices, our company maintains its position at the
              forefront of the fiberglass pool installation industry.
            </p>
          </div>
          <div className="md:col-span-3 flex">
            <div>
              <Image
                src="/assets/fiberglass/cost-calculating.png"
                alt="Trusted-Partner"
                width={200}
                height={200}
                className="w-[815px] h-[528px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculating;
