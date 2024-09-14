import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const LuxuryDesigns = () => {
  return (
    <div className="full__section_l_p padding__top pr-3 md:pr-0">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5 xl:gap-6 3xl:gap-7 5xl:gap-[30px]">
        <div className="order-2 md:col-span-3">
          <div>
            <Image
              src="/assets/swimming_pool_contractors/luxuryDesigns.png"
              alt="luxuryDesigns image"
              width={836}
              height={708}
            />
          </div>
        </div>
        <div className="order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start">
          <div>
            <HeadingIcon text={headingIconText.luxuryDesigns__IconText} />
          </div>
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center md:text-left ">
            Leading Pool Contractors for Luxury Designs
          </h2>
          <p className="text-lg font-normal text-center md:text-left text-black pt-[10px]">
            Easy Pools stands out as a leading pool contractor specializing in
            luxury designs in Toronto. Our expertise in creating high-end,
            custom swimming pools ensures that each project is elegant and
            innovative. We offer many luxurious features, from infinity edges
            and bespoke waterfalls to custom lighting and state-of-the-art
            heating systems. Our dedicated team works with you to design a pool
            that reflects your sophisticated taste and enhances your outdoor
            space. With a focus on superior craftsmanship and attention to
            detail, we turn your vision into a stunning reality. As one of the
            leading pool contractors for luxury designs, our swimming pool
            company is committed to delivering exceptional quality and style.
            Our team combines artistic vision with technical expertise to create
            breathtaking poolscapes that are as functional as beautiful. From
            intricate tile work to custom water features, we ensure that every
            element of your pool complements your unique lifestyle and
            preferences. We handle every aspect of the project with precision,
            from concept to completion, ensuring a seamless and enjoyable
            experience. Trust us to transform your outdoor space into a
            luxurious retreat that stands out as a testament to your refined
            taste and sophistication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LuxuryDesigns;
