"use client";
import React from "react";
import "./CostFactors.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
};

const costFactors = [
  {
    id: 1,
    title: "Type of Pool",
    desc: (
      <>
        <p>
        <strong>Vinyl:</strong> Typically the least expensive option, but you'll need to budget for future liner replacements.
      </p>
      <p>
        <strong>Fiberglass:</strong> More costly than vinyl, but it comes with lower maintenance costs.
      </p>
      <p>
        <strong>Concrete:</strong> The most expensive option due to the labor-intensive construction process, but offers the most customization.
      </p>
      <p>
        <strong>ICF (Insulated Concrete Form):</strong> Similar to concrete in price, but with potential long-term savings due to energy efficiency.
      </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Pool Size and Depth",
    desc: (
      <>
        <p>
        Larger pools require more materials, labor, and time, increasing the overall cost.
      </p>
      <p>
      Deeper pools are more expensive to install than shallower ones due to excavation and structural needs.
      </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Pool Shape and Design",
    desc: (
      <>
        <p>
        Standard shapes like rectangles are more affordable compared to custom shapes or complex designs, which require additional materials and skilled labor.
      </p>
      <p>
      Features like tanning ledges, waterfalls, and built-in seating also add to the cost.
      </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Site Preparation",
    desc: (
      <>
        <p>
        <strong>Land Grading:</strong> If the land isn't level, grading or excavation is necessary, adding to the cost.
      </p>
      <p>
        <strong>Access to Site:</strong> Difficult access to construction equipment can increase costs, especially in tight spaces or sloped areas.
      </p>
      <p>
        <strong>Soil Condition:</strong> Poor soil conditions may require reinforcement or specialized construction techniques.
      </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Labor and Contractor Fees",
    desc: (
      <>
        <p>
        Labor costs can vary depending on the region, the experience of the contractor, and the complexity of the installation. Hiring skilled professionals may come at a higher cost but can ensure better quality and fewer issues down the road.
      </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Permits and Zoning Requirements",
    desc: (
      <>
        <p>
        Most areas require permits to build a pool, and fees for these permits vary by location. Fulfilling zoning requirements, such as fencing or distance from property lines, may also affect the total cost.
      </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Pool Equipment",
    desc: (
      <>
        <p>
        <strong>Pumps and Filters:</strong> High-quality filtration systems and energy-efficient pumps can be more expensive upfront but save on long-term operational costs.
      </p>
      <p>
        <strong>Heaters:</strong> Adding a pool heater increases the initial investment, especially if you choose solar or energy-efficient options.
      </p>
      <p>
        <strong>Lighting:</strong> Installing underwater lights, deck lighting, or LED features adds to the cost but improves safety and aesthetics.
      </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Decking and Landscaping",
    desc: (
      <>
        <p>
        The type of pool deck you choose, such as concrete, stone, or pavers, impacts the total cost.
        </p>
        <p>
        Additional landscaping, like plants, fences, or outdoor furniture, can significantly increase the overall price but enhance the pool area's appeal.
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: "Additional Features",
    desc: (
      <>
        <p>
        <strong>Waterfalls and Fountains:</strong> Custom water features can elevate the look of the pool but come with added installation costs.
      </p>
      <p>
        <strong>Spa or Hot Tub:</strong> Integrating a spa or hot tub into your pool design will significantly raise the cost.
      </p>
      <p>
        <strong>Automated Systems:</strong> Automated pool covers, cleaning systems, or smart controls will add to the budget but offer convenience and long-term savings.
      </p>
      </>
    ),
  },
  {
    id: 10,
    title: "Ongoing Maintenance and Operational Costs",
    desc: (
      <>
        <p>
        Consider future costs, such as chemical treatments, cleaning supplies, and electricity for pumps and heaters. Lower-maintenance options like fiberglass pools may cost more upfront but save in the long run.
        </p>
      </>
    ),
  },
  {
    id: 11,
    title: "Location",
    desc: (
      <>
        <p>
        Pool installation costs vary by region, as materials, labor, and permits may be more expensive in certain areas. Additionally, local climate can affect the choice of materials and features needed for longevity.
        </p>
      </>
    ),
  },
  {
    id: 12,
    title: "Insurance and Safety Measures",
    desc: (
      <>
        <p>
        Pools often increase homeowners' insurance premiums, and installing safety measures such as pool covers, alarms, and fences may be required by law or your insurance provider, adding to the cost.
        </p>
      </>
    ),
  },
  
];

const CostFactors = () => {
  return (
    <div>
      <div className="container padding__top padding__bottom !overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <HeadingIcon text={headingIconText.costFactors__IconText} />
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center pt-[5px]">
            Cost Factors for Swimming Pool Installation
          </h2>
          <p className="text-lg font-normal text-black pt-[10px] text-center pb-[270px]">
            The cost of installing a swimming pool can vary widely based on
            several factors. Here are the key pool installation cost factors to
            consider:
          </p>
        </div>
        {/* ==================== swiper slider ================ */}
        <Swiper
          className=" !overflow-visible"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={breakpoints}
          spaceBetween={12}
        >
          {costFactors?.map((data) => (
            <SwiperSlide key={data.id} className={`bg-secondary py-[50px] px-[25px] !h-auto !md:h-full`}>
                <div className="cart__bg !bg-white pb-[50px] pt-[39px] pr-[15px] pl-[8px] -mt-[250px]">
                  <p className="text-center text-[25px] text-black font-bold pb-[15px]">{data.title}</p>
                  <p className="text-center text-lg font-normal text-black">{data.desc}</p>
                </div>
              {/* <div className="bg-secondary px-[25px] pb-[95px] ">
                
              </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CostFactors;
