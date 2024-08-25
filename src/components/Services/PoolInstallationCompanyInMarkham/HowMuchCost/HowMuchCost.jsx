import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const HowMuchCost = () => {
  return (
    <div className="container padding__top">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5 xl:gap-6 3xl:gap-7 5xl:gap-[30px]">
        <div className="order-2 md:col-span-3">
          <div>
            <Image
              src="/assets/poolInstallationCompanyInMarkham/How Much  Cost.png"
              alt="how much cost image"
              width={886}
              height={456}
            />
          </div>
        </div>
        <div className="order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start">
          <div>
            <HeadingIcon text={headingIconText.howMuchCost__IconText} />
          </div>
          <h3 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center md:text-left ">
            How Much Does the Pool Installation Project Cost?
          </h3>
          <p className="text-lg font-normal text-center md:text-left text-black pt-[14px]">
            The cost of a pool installation project can vary widely depending on
            factors such as the size, type, materials used, labor costs, and
            additional features like landscaping or decking. On average, basic
            inground pool installations can range from $20,000 to $50,000, while
            more luxurious options with custom designs and high-end features can
            cost upwards of $100,000 or more. It's essential to obtain multiple
            quotes from reputable contractors and factor in any additional
            expenses to ensure an accurate budget for your specific project.
          </p>
          <p className="text-lg font-normal text-center md:text-left text-black">
            Factors that contribute to the overall cost include excavation,
            permits, plumbing, electrical work, and any necessary site
            preparation. Additionally, the choice of pool materials, such as
            fiberglass, vinyl, or concrete, will influence the final price. It's
            crucial to consider long-term maintenance and operating costs, such
            as water and energy expenses when budgeting for a pool installation
            project. Hiring a professional contractor with experience in pool
            installation ensures quality workmanship and adherence to safety
            regulations, ultimately providing peace of mind throughout the
            process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowMuchCost;
