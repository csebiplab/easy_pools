import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const Expert = () => {
  return (
    <div className="full__section_r_p padding__top pl-3 md:pl-0">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5 xl:gap-6 3xl:gap-7 5xl:gap-[30px]">
        <div className="md:col-span-3">
          <div>
            <Image
              src="/assets/swimming_pool_contractors/expert_pool.png"
              alt="trust us image"
              width={836}
              height={850}
            />
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start">
          <div>
            <HeadingIcon
              text={headingIconText.expertPoolContractors__IconText}
            />
          </div>
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center md:text-left ">
            Expert Pool Contractors for Your Dream Pool
          </h2>
          <p className="text-lg font-normal text-center md:text-left text-black pt-[10px]">
            Easy Pools is your go-to expert pool contractor for crafting your
            dream pool. Our team is dedicated to turning your vision into a
            stunning reality with expert design and construction services. We
            specialize in creating custom pools tailored to your preferences,
            whether you're looking for a serene retreat or a vibrant
            entertainment space. With a focus on quality materials, innovative
            design, and meticulous attention to detail, we ensure your pool is
            not only beautiful but also durable and functional. Our expert pool
            contractors at our swimming pool company are here to guide you every
            step of the way, from initial consultation to final installation. We
            take pride in our ability to listen to your needs, understand your
            vision, and deliver a pool that exceeds your expectations. Our
            experienced team employs the latest technology and industry best
            practices to ensure a smooth and efficient process. We handle
            everything from design and permitting to construction and finishing
            touches, ensuring a hassle-free experience. Let us bring your dream
            pool to life with our unparalleled expertise and commitment to
            excellence. With our dedication to excellence and customer
            satisfaction, you can trust us to create a breathtaking pool that
            enhances your lifestyle and adds value to your home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expert;
