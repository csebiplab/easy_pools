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
            <HeadingIcon
              text={headingIconText.bestSwimmingPoolContractors__IconText}
            />
          </div>
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center md:text-left ">
            Best Swimming Pool Contractors in Toronto
          </h2>
          <p className="text-lg font-normal text-center md:text-left text-black pt-[10px]">
            Easy Pools is known as one of the best swimming pool contractors in
            Toronto, delivering exceptional craftsmanship and personalized
            designs. We specialize in creating custom swimming pools that
            enhance your outdoor living space, offering everything from modern,
            elegant designs to luxurious backyard retreats. Our experienced team
            ensures a seamless process, from the initial consultation to the
            final construction, with a focus on quality, safety, and customer
            satisfaction. As one of the best swimming pool contractors in
            Toronto, our swimming pool company is dedicated to providing
            unparalleled service and results. Our team combines expertise with
            creativity to design and build pools that perfectly match your
            vision and lifestyle. We use top-quality materials and the latest
            technology to ensure durability and efficiency. From the initial
            design phase to the final touches, we work closely with you to
            ensure every detail meets your standards. With our commitment to
            excellence, we guarantee a stunning and functional pool that
            enhances your outdoor experience and adds value to your home. Trust
            us to provide expert advice, innovative solutions, and a pool that
            exceeds your expectations, making your dream pool a reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestSwimming;
