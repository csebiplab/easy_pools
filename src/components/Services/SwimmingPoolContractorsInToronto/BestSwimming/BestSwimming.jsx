import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const BestSwimming = () => {
  return (
    <div className="full__section_r_p padding__top pl-3 md:pl-0">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5 xl:gap-6 3xl:gap-7 5xl:gap-[30px]">
        <div className="md:col-span-3">
          <div>
            <Image
              src="/assets/swimming_pool_contractors/bestSwimming.png"
              alt="best swimming image"
              width={836}
              height={708}
            />
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start">
          <div>
            <HeadingIcon text={headingIconText.bestSwimmingPoolContractors__IconText} />
          </div>
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center md:text-left ">
          About Our Toronto Swimming Pool Contractors
          </h2>
          <p className="text-lg font-normal text-center md:text-left text-black pt-[10px]">
          At Easy Pools, our skilled Toronto swimming pool contractors specialize in designing, building, and maintaining custom pools tailored to your needs. With years of experience, we provide top-quality craftsmanship, ensuring your pool is both beautiful and durable. Whether you're looking for a luxurious backyard retreat or a simple, elegant pool, we deliver personalized solutions and exceptional service.
          Our Toronto swimming pool contractors work closely with you throughout the entire process, from initial consultation and design to the final touches of construction. We use high-quality materials and innovative techniques to ensure your pool meets the highest standards of safety and performance. Whether it's a complete pool installation, renovation, or routine maintenance, we are committed to exceeding your expectations. At our swimming pool company, we pride ourselves on delivering exceptional results on time and within budget, making your dream pool a reality. Trust our team to transform your outdoor space into a stunning oasis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestSwimming;
