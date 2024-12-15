"use client"
import React from "react";
import "./PoolComparison.css";
import Image from 'next/image';
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "",
  "Vinyl Pools",
  "Fiberglass Pools",
  "Concrete Pools (Gunite or Shotcrete)",
  "ICF Pools (Insulated Concrete Form)",
];

const TABLE_ROWS = [
  {
    id: 1,
    img: "/assets/swimming_pool_contractors/poolComparison/time.png",
    title: "Installation Time",
    vinyl: (
      <>
        <span>
          Typically quick, around <br /> 1-2 weeks.
        </span>
      </>
    ),
    fiberglass: (
      <>
        <span>
          Quick installation, <br /> usually within 1-2 <br /> weeks.
        </span>
      </>
    ),
    concrete: (
      <>
        <span>
          Takes the longest to <br /> build, about 3-6 months.
        </span>
      </>
    ),
    icf: (
      <>
        <span>
          Takes longer than <br /> fiberglass but is quicker <br /> than
          traditional <br /> concrete pools.
        </span>
      </>
    ),
  },
  {
    id: 2,
    img: "/assets/swimming_pool_contractors/poolComparison/maintenance.png",
    title: "Maintenance",
    vinyl: (
      <>
        <span>
          Requires periodic liner <br /> replacement and more <br /> chemical
          use to prevent <br /> algae growth.
        </span>
      </>
    ),
    fiberglass: (
      <>
        <span>
          Very low maintenance <br /> compared to other types. <br /> Requires
          fewer chemicals <br /> and less frequent cleaning.
        </span>
      </>
    ),
    concrete: (
      <>
        <span>
          Requires the most <br /> maintenance, including <br /> regular
          resurfacing (every <br /> 10-15 years), and is more <br /> susceptible
          to algae growth.
        </span>
      </>
    ),
    icf: (
      <>
        <span>
          Low maintenance with <br /> good thermal insulation <br /> that can
          reduce heating <br /> costs.
        </span>
      </>
    ),
  },
  {
    id: 3,
    img: "/assets/swimming_pool_contractors/poolComparison/durability.png",
    title: "Durability",
    vinyl: (
      <>
        <span>
          Vinyl liners last about <br /> 7-10 years but can be <br /> punctured
          by sharp <br /> objects or pets.
        </span>
      </>
    ),
    fiberglass: (
      <>
        <span>
          Extremely durable with <br /> minimal risk of cracks; <br /> resistant
          to algae.
        </span>
      </>
    ),
    concrete: (
      <>
        <span>
          Extremely durable, but <br /> prone to cracking over time.
        </span>
      </>
    ),
    icf: (
      <>
        <span>
          Very strong and well- <br /> insulated, resistant to <br /> shifting,
          cracking, or <br /> weather damage.
        </span>
      </>
    ),
  },
  {
    id: 4,
    img: "/assets/swimming_pool_contractors/poolComparison/customization.png",
    title: "Customization",
    vinyl: (
      <>
        <span>
          High flexibility in size <br /> and shape.
        </span>
      </>
    ),
    fiberglass: (
      <>
        <span>
          Limited design and size <br /> options as they're pre- <br /> molded.
        </span>
      </>
    ),
    concrete: (
      <>
        <span>
          Offers limitless design <br /> flexibility in terms of shape, <br />{" "}
          size, and features.
        </span>
      </>
    ),
    icf: (
      <>
        <span>
          Highly customizable in <br /> shape and size, similar <br /> to
          concrete pools.
        </span>
      </>
    ),
  },
  {
    id: 5,
    img: "/assets/swimming_pool_contractors/poolComparison/aesthetic.png",
    title: "Aesthetic Appeal",
    vinyl: (
      <>
        <span>
          Liners are available in <br /> various patterns, but <br /> they tend
          to fade over <br /> time.
        </span>
      </>
    ),
    fiberglass: (
      <>
        <span>
          Modern, sleek look; fewer <br /> customization options for <br />{" "}
          features like steps and <br /> benches.
        </span>
      </>
    ),
    concrete: (
      <>
        <span>
          High-end custom finishes, <br /> including plaster, pebble, or <br />{" "}
          tile.
        </span>
      </>
    ),
    icf: (
      <>
        <span>
          Can be finished with <br /> vinyl or concrete-like <br /> surfaces,
          offering <br /> flexibility in design.
        </span>
      </>
    ),
  },
  {
    id: 6,
    img: "/assets/swimming_pool_contractors/poolComparison/comfort.png",
    title: "Comfort",
    vinyl: (
      <>
        <span>
          Smooth surface, gentle <br /> on the skin.
        </span>
      </>
    ),
    fiberglass: (
      <>
        <span>
          Smooth, non-porous <br /> surface that feels good to <br /> the touch.
        </span>
      </>
    ),
    concrete: (
      <>
        <span>
          Rough surface, which can <br /> be uncomfortable to walk <br /> on.
        </span>
      </>
    ),
    icf: (
      <>
        <span>
          Smooth surface <br /> depending on the finish.
        </span>
      </>
    ),
  },
  {
    id: 7,
    img: "/assets/swimming_pool_contractors/poolComparison/lifespan.png",
    title: "Lifespan",
    vinyl: (
      <>
        <span>
          Vinyl liners need <br /> replacement every 7-10 <br /> years, but the
          structure <br /> lasts much longer.
        </span>
      </>
    ),
    fiberglass: (
      <>
        <span>
          Can last 25-30 years or <br /> more with proper care.
        </span>
      </>
    ),
    concrete: (
      <>
        <span>
          Can last 50+ years with <br /> proper maintenance.
        </span>
      </>
    ),
    icf: (
      <>
        <span>
          Smooth surface <br /> depending on the finish.
        </span>
      </>
    ),
  },
  {
    id: 8,
    img: "/assets/swimming_pool_contractors/poolComparison/cost.png",
    title: "Cost",
    vinyl: (
      <>
        <span>
          Generally the most <br /> affordable option. <br />
          <strong>$60,000-$150,000.</strong>
        </span>
      </>
    ),
    fiberglass: (
      <>
        <span>
          More expensive upfront <br /> than vinyl but less costly <br /> than
          concrete. <br />
          <strong>$60,000-$120,000.</strong>
        </span>
      </>
    ),
    concrete: (
      <>
        <span>
          The most expensive option, <br /> both upfront and long-term. <br />
          <strong>$100,000-$300,000.</strong>
        </span>
      </>
    ),
    icf: (
      <>
        <span>
          Comparable to concrete but <br /> offers savings over time due <br />{" "}
          to energy efficiency. <br /> <strong>$80,000-$240,000.</strong>
        </span>
      </>
    ),
  },
];

const table_row2 = [
  {
    id: 1,
    title: (
      <>
        <span>
          <strong>Best for Budget:</strong> <br /> inyl pools offer the lowest{" "}
          <br /> upfront cost.
        </span>
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        <span>
          <strong>Best for Quick Installation:</strong> <br />
          Fiberglass pools can be <br /> installed within a couple of <br />{" "}
          weeks.
        </span>
      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
        <span>
          <strong>Best for Customization:</strong> <br /> Concrete and ICF pools{" "}
          <br /> allow for the most design <br /> flexibility.
        </span>
      </>
    ),
  },
  {
    id: 4,
    title: (
      <>
        <span>
          <strong>Best for Low Maintenance:</strong> <br /> Fiberglass pools
          require the <br /> least amount of upkeep.
        </span>
      </>
    ),
  },
  {
    id: 5,
    title: (
      <>
        <span>
          <strong>Best for Longevity:</strong> <br /> Concrete and ICF pools
          have <br /> the longest lifespan with <br /> proper maintenance.
        </span>
      </>
    ),
  },
];

const PoolComparison = () => {
  return (
    <div className="container padding__top swimmingPoolContractor__bg">
      <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingIconText.poolComparison__IconText} />
        <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center pt-[5px]">
          Pool Comparison: Vinyl vs Fiberglass vs Concrete vs ICF
        </h2>
        <p className="text-lg font-normal text-black pt-[10px] text-center pb-[15px]">
          When deciding on a pool material, understanding the differences
          between vinyl, fiberglass, concrete, and insulated concrete form (ICF)
          pools can help you make an informed choice. Here's a comparison of the
          key features:
        </p>
      </div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="p-4 pt-10 border border-[#838383] bg-[#E1FFFE]"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="leading-none text-lg font-bold text-black "
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ img, title, vinyl, fiberglass, concrete, icf }, idx) => {
                return (
                  <tr key={idx}>
                    <td className="p-4 border border-[#838383] bg-[#E1FFFE]">
                      <Image
                        className="w-[46px] h-[46px] mx-auto"
                        src={img}
                        alt="time"
                        width={46}
                        height={46}
                      />
                      <Typography
                        variant="paragraph"
                        color="blue-gray"
                        className="font-bold text-center pt-[10px]"
                      >
                        {title}
                      </Typography>
                    </td>
                    <td className="py-[4px] px-[17px] border border-[#838383] bg-[#E1FFFE]">
                      <Typography
                        variant="paragraph"
                        className="text-base 5xl:text-lg text-center font-normal text-black"
                      >
                        {vinyl}
                      </Typography>
                    </td>
                    <td className="py-[4px] px-[17px]  border border-[#838383] bg-[#E1FFFE]">
                      <Typography
                        variant="paragraph"
                        className="text-base 5xl:text-lg text-center font-normal text-black"
                      >
                        {fiberglass}
                      </Typography>
                    </td>
                    <td className="py-[4px] px-[17px]  border border-[#838383] bg-[#E1FFFE]">
                      <Typography
                        variant="paragraph"
                        className="text-base 5xl:text-lg text-center font-normal text-black"
                      >
                        {concrete}
                      </Typography>
                    </td>
                    <td className="py-[4px] px-[17px]  border border-[#838383] bg-[#E1FFFE]">
                      <Typography
                        variant="paragraph"
                        className="text-base 5xl:text-lg text-center font-normal text-black"
                      >
                        {icf}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
      {/* second div  */}
      <div className="border border-[#838383] bg-[#E1FFFE]">
        <p className="text-center text-[25px] font-bold text-black py-[42px]">
          Summary
        </p>
      </div>
      {/* third div  */}
      <div className="grid grid-cols-1 md:grid-cols-5">
        {table_row2?.map((data, index) => {
          return (
            <div
              key={index}
              className="border border-[#838383] bg-[#E1FFFE] text-center py-[14px] px-[4px] 5xl:px-[8px]"
            >
              <p className="text-base 5xl:text-lg">{data?.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PoolComparison;
