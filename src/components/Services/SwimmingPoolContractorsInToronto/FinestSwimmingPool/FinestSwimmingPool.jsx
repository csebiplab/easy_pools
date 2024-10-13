import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const FinestSwimmingPool = () => {
  return (
    <div className="full__section_l_p padding__top pr-3 md:pr-0">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5 xl:gap-6 3xl:gap-7 5xl:gap-[30px]">
        <div className="order-1 md:order-2 md:col-span-3">
          <div>
            <Image
              src="/assets/swimming_pool_contractors/finestSwimmingPool.png"
              alt="finestSwimmingPool image"
              width={836}
              height={780}
            />
          </div>
        </div>
        <div className="order-2 md:order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start">
          <div>
            <HeadingIcon text={headingIconText.finestSwimmingPool__IconText} />
          </div>
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center md:text-left ">
          Toronto's Finest Swimming Pool Contractors
          </h2>
          <p className="text-lg font-normal text-center md:text-left text-black pt-[10px]">
          Easy Pools is renowned as Toronto's finest swimming pool contractor, celebrated for our exceptional expertise and dedication to creating bespoke swimming pools. With years of experience, our team excels in designing and constructing diverse pools, including fiberglass, concrete, ICF, infinity, salt water, and more. We pride ourselves on delivering top-tier craftsmanship and high-quality materials, ensuring that every project is visually stunning and built to last. From the initial design consultation to the final installation and ongoing maintenance, we offer a seamless, client-focused experience that transforms your backyard into a luxurious retreat. Our commitment to excellence extends beyond design and construction.
          </p>
          <p className="text-lg font-normal text-center md:text-left text-black">
          At our swimming pool company, we ensure that every detail is meticulously handled, from obtaining necessary permits and conducting thorough site assessments to providing comprehensive post-installation support. We understand that a swimming pool is not just a feature but an integral part of your home and lifestyle. That's why we prioritize clear communication, transparency, and a client-centric approach to ensure that your vision is realized to perfection. Our unparalleled expertise and dedication make your backyard a stunning oasis, making us the premier choice for swimming pool contractors in Toronto. Choose our swimming pool contractors for unparalleled service and the finest swimming pool solutions in Toronto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinestSwimmingPool;
