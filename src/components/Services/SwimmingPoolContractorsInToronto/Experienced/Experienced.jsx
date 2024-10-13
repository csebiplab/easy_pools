import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const Experienced = () => {
  return (
    <div className="full__section_l_p padding__top pr-3 md:pr-0">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5 xl:gap-6 3xl:gap-7 5xl:gap-[30px]">
        <div className="order-1 md:order-2 md:col-span-3">
          <div>
            <Image
              src="/assets/swimming_pool_contractors/experienced.png"
              alt="experienced image"
              width={836}
              height={708}
            />
          </div>
        </div>
        <div className="order-2 md:order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start">
          <div>
            <HeadingIcon text={headingIconText.experienced__IconText} />
          </div>
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center md:text-left ">
           Experienced Pool Contractors 
          in Toronto
          </h2>
          <p className="text-lg font-normal text-center md:text-left text-black pt-[10px]">
          Easy Pools is your trusted choice for experienced pool contractors in Toronto. With a proven track record in designing and building a wide range of pools—including fiberglass, concrete, ICF, infinity, salt water and more—our expert team delivers exceptional craftsmanship and personalized service. We handle every aspect of your pool project with precision, from initial consultation and design to construction and maintenance.
          </p>
          <p className="text-lg font-normal text-center md:text-left text-black">
          From the initial planning stages to the final installation and beyond, our swimming pool contractors provide comprehensive support throughout the entire process. We handle all aspects of the project, including obtaining necessary permits, conducting site assessments, and performing meticulous construction work. Additionally, we offer ongoing maintenance services to keep your pool in pristine condition.
          </p>
          <p className="text-lg font-normal text-center md:text-left text-black">
          At our swimming pool company, our client-focused approach ensures clear communication and transparency every step of the way. We are dedicated to making your pool-building experience smooth and enjoyable, with a focus on exceeding your expectations and delivering a stunning backyard oasis. Choose us for unparalleled expertise and craftsmanship in Toronto's pool industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experienced;
