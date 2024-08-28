import React from "react";
import "./CostCalculating.css";
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const CostCalculating = () => {
  return (
    <div className="bg__fiberglassPage common__padding__top">
      <div className="full__section_l_p pr-3 md:pr-0">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-10">
          <div className="md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.cost__inFiberglassText} />
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px">
            Calculating the Cost of Fiberglass Pool Installation
            </h2>
            <p className="text-sm md:text-base font-normal text-center md:text-left text-black pt-[14px] md:pt-[15px]">
            Installing a fiberglass inground pool involves various factors that contribute to the overall cost. Firstly, the size and shape of the pool significantly impact expenses, with larger and more intricate designs requiring more materials and labor. Additionally, the location and accessibility of the installation site can influence costs, as difficult terrain or limited access may necessitate specialized equipment or additional manpower. Furthermore, labor costs play a crucial role in determining the overall expenditure. Homeowners should obtain multiple quotes, considering both material and labor expenses, to accurately assess the total investment required for fiberglass pool installation. Proper planning and research are essential to ensure a transparent understanding of the costs involved and to make informed decisions that align with the desired pool specifications and budget constraints. 
            </p>
          </div>
          <div className="md:col-span-3 flex">
            <div>
              <Image
                src="/assets/fiberglass/cost-calculating.png"
                alt="Trusted-Partner"
                width={200}
                height={200}
                className="w-[430px] md:w-[815px] h-[434px] md:h-[528px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculating;
