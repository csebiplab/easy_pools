import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const BestPoolDesigner = () => {
  return (
    <div className="full__section_r_p padding__top pl-3 md:pl-0">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5 xl:gap-6 3xl:gap-7 5xl:gap-[30px]">
        <div className="md:col-span-3">
          <div>
            <Image
              src="/assets/poolInstallationCompanyInMarkham/Best Pool Designers.png"
              alt="best pool designers image"
              width={886}
              height={456}
            />
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start">
          <div>
            <HeadingIcon text={headingIconText.bestPoolDesigners__IconText} />
          </div>
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center md:text-left ">
            We are the Best Pool Designers in Markham
          </h2>
          <p className="text-lg font-normal text-center md:text-left text-black pt-[14px]">
            At our pool installation company, we understand that a pool is more
            than just a place to swim—it's a focal point of relaxation,
            entertainment, and luxury in your home. That's why we work closely
            with each client to design a pool that not only meets their
            practical needs but also exceeds their aesthetic expectations. From
            sleek and modern designs to timeless classics, we offer a wide range
            of styles to suit any home or landscape.
          </p>
          <p className="text-lg font-normal text-center md:text-left text-black">
            Whether you envision a tranquil oasis for quiet reflection or a
            vibrant hub for lively gatherings, we have the expertise to turn
            your vision into reality. Our commitment to quality craftsmanship
            and attention to detail ensures that every pool we design is not
            only visually stunning but also built to stand the test of time.
            Using the latest technology and materials, we create pools that are
            not only beautiful but also efficient, easy to maintain, and
            environmentally friendly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestPoolDesigner;
