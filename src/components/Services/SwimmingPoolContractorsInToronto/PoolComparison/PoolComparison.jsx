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
    id : 1,
    img : "/assets/swimming_pool_contractors/poolComparison/time.png",
    title : "Installation Time",
    vinyl: (
      <>
        <p>Typically quick, around <br/> 1-2 weeks.</p>
      </>
    ),
    fiberglass: (
      <>
        <p>Quick installation, <br/> usually within 1-2 <br/> weeks.</p>
      </>
    ),
    concrete: (
      <>
        <p>Takes the longest to <br/> build, about 3-6 months.</p>
      </>
    ),
    icf: (
      <>
        <p>Takes longer than <br/> fiberglass but is quicker <br/> than traditional <br/> concrete pools.</p>
      </>
    ),
  },
  {
    id : 2,
    img : "/assets/swimming_pool_contractors/poolComparison/maintenance.png",
    title : "Maintenance",
    vinyl: (
      <>
        <p>Requires periodic liner <br/> replacement and more <br/> chemical use to prevent <br/> algae growth.</p>
      </>
    ),
    fiberglass: (
      <>
        <p>Very low maintenance <br/> compared to other types. <br/> Requires fewer chemicals <br/> and less frequent cleaning.</p>
      </>
    ),
    concrete: (
      <>
        <p>Requires the most <br/> maintenance, including <br/> regular resurfacing (every <br/> 10-15 years), and is more <br/> susceptible to algae growth.</p>
      </>
    ),
    icf: (
      <>
        <p>Low maintenance with <br/> good thermal insulation <br/> that can reduce heating <br/> costs.</p>
      </>
    ),
  },
  {
    id : 3,
    img : "/assets/swimming_pool_contractors/poolComparison/durability.png",
    title : "Durability",
    vinyl: (
      <>
        <p>Vinyl liners last about <br/> 7-10 years but can be <br/> punctured by sharp <br/> objects or pets.</p>
      </>
    ),
    fiberglass: (
      <>
        <p>Extremely durable with <br/> minimal risk of cracks; <br/> resistant to algae.</p>
      </>
    ),
    concrete: (
      <>
        <p>Extremely durable, but <br/> prone to cracking over time.</p>
      </>
    ),
    icf: (
      <>
        <p>Very strong and well- <br/> insulated, resistant to <br/> shifting, cracking, or <br/> weather damage.</p>
      </>
    ),
  },
  {
    id : 4,
    img : "/assets/swimming_pool_contractors/poolComparison/customization.png",
    title : "Customization",
    vinyl: (
      <>
        <p>High flexibility in size <br/> and shape.</p>
      </>
    ),
    fiberglass: (
      <>
        <p>Limited design and size <br/> options as they're pre- <br/> molded.</p>
      </>
    ),
    concrete: (
      <>
        <p>Offers limitless design <br/> flexibility in terms of shape, <br/> size, and features.</p>
      </>
    ),
    icf: (
      <>
        <p>Highly customizable in <br/> shape and size, similar <br/> to concrete pools.</p>
      </>
    ),
  },
  {
    id : 5,
    img : "/assets/swimming_pool_contractors/poolComparison/aesthetic.png",
    title : "Aesthetic Appeal",
    vinyl: (
      <>
        <p>Liners are available in <br/> various patterns, but <br/> they tend to fade over <br/> time.</p>
      </>
    ),
    fiberglass: (
      <>
        <p>Modern, sleek look; fewer <br/> customization options for <br/> features like steps and <br/> benches.</p>
      </>
    ),
    concrete: (
      <>
        <p>High-end custom finishes, <br/> including plaster, pebble, or <br/> tile.</p>
      </>
    ),
    icf: (
      <>
        <p>Can be finished with <br/> vinyl or concrete-like <br/> surfaces, offering <br/> flexibility in design.</p>
      </>
    ),
  },
  {
    id : 6,
    img : "/assets/swimming_pool_contractors/poolComparison/comfort.png",
    title : "Comfort",
    vinyl: (
      <>
        <p>Smooth surface, gentle <br/> on the skin.</p>
      </>
    ),
    fiberglass: (
      <>
        <p>Smooth, non-porous <br/> surface that feels good to <br/> the touch.</p>
      </>
    ),
    concrete: (
      <>
        <p>Rough surface, which can <br/> be uncomfortable to walk <br/> on.</p>
      </>
    ),
    icf: (
      <>
        <p>Smooth surface <br/> depending on the finish.</p>
      </>
    ),
  },
  {
    id : 7,
    img : "/assets/swimming_pool_contractors/poolComparison/lifespan.png",
    title : "Lifespan",
    vinyl: (
      <>
        <p>Vinyl liners need <br/> replacement every 7-10 <br/> years, but the structure <br/> lasts much longer.</p>
      </>
    ),
    fiberglass: (
      <>
        <p>Can last 25-30 years or <br/> more with proper care.</p>
      </>
    ),
    concrete: (
      <>
        <p>Can last 50+ years with <br/> proper maintenance.</p>
      </>
    ),
    icf: (
      <>
        <p>Smooth surface <br/> depending on the finish.</p>
      </>
    ),
  },
  {
    id : 8,
    img : "/assets/swimming_pool_contractors/poolComparison/cost.png",
    title : "Cost",
    vinyl: (
      <>
        <p>Generally the most <br/> affordable option. <br/>
        <strong>$60,000-$150,000.</strong></p>
      </>
    ),
    fiberglass: (
      <>
        <p>More expensive upfront <br/> than vinyl but less costly <br/> than concrete. <br/>
        <strong>$60,000-$120,000.</strong></p>
      </>
    ),
    concrete: (
      <>
        <p>The most expensive option, <br/> both upfront and long-term. <br/>
        <strong>$100,000-$300,000.</strong></p>
      </>
    ),
    icf: (
      <>
        <p>Comparable to concrete but <br/> offers savings over time due <br/> to energy efficiency. <br/> <strong>$80,000-$240,000.</strong></p>
      </>
    ),
  },
  {
    id : 9,
    img : (
      <>
        <p><strong>Best for Budget:</strong></p>
      </>
    ),
    title : (
      <>
        <p>inyl pools offer the lowest <br/> upfront cost.</p>
      </>
    ),
    vinyl: (
      <>
        <p><strong>Best for Quick Installation:</strong> <br/>
        Fiberglass pools can be <br/> installed within a couple of <br/> weeks.</p>
      </>
    ),
    fiberglass: (
      <>
        <p><strong>Best for Customization:</strong> <br/> Concrete and ICF pools <br/> allow for the most design <br/> flexibility.</p>
      </>
    ),
    concrete: (
      <>
        <p><strong>Best for Low Maintenance:</strong> <br/> Fiberglass pools require the <br/> least amount of upkeep.</p>
      </>
    ),
    icf: (
      <>
        <p><strong>Best for Longevity:</strong> <br/> Concrete and ICF pools have <br/> the longest lifespan with <br/> proper maintenance.</p>
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
          When deciding on a pool material, understanding the differences between vinyl, fiberglass, concrete, and insulated concrete form (ICF) pools can help you make an informed choice. Here's a comparison of the key features:
          </p>
        </div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="p-4 pt-10 cart__bg">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ number, img, title, vinyl, fiberglass, concrete, icf }) => {
              return (
                <tr key={number}>
                  <td className="p-4 cart__bg ">
                    <Image className="w-[46px] h-[46px] mx-auto" src={img} alt="time" width={46} height={46}/>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      <p className="text-center">{title}</p>
                    </Typography>
                  </td>
                  <td className="p-4 cart__bg">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {vinyl}
                    </Typography>
                  </td>
                  <td className="p-4 cart__bg">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {fiberglass}
                    </Typography>
                  </td>
                  <td className="p-4 cart__bg">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {concrete}
                    </Typography>
                  </td>
                  <td className="p-4 cart__bg">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {icf}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default PoolComparison;
