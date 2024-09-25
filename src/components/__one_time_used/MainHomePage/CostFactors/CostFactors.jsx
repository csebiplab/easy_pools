"use client"
import React from "react";
import "./CostFactors.css";
import Image from 'next/image';
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "Pool Type",
  "Size and Shape",
  "Materials",
  "Features",
  "Landscaping",
  "Location",
];

const TABLE_ROWS = [
  {
    id : 1,
    poolType: (
      <>
        <p>In Toronto, in- <br/>ground pools are <br/> more expensive <br/> than above- <br/>ground pools.</p>
      </>
    ),
    sizeAndShape: (
      <>
        <p>Larger or custom- <br/> shaped pools <br/> typically cost more.</p>
      </>
    ),
    materials: (
      <>
        <p>Concrete, vinyl, and <br/> fibreglass have <br/> different price points.</p>
      </>
    ),
    features: (
      <>
        <p>Extras like heating, <br/> lighting, waterfalls, or <br/> spas add to the cost.</p>
      </>
    ),
    landscaping: (
      <>
        <p>Site preparation, <br/> grading, and additional <br/> landscaping can affect <br/> the price.</p>
      </>
    ),
    location: (
      <>
        <p>Local regulations, <br/> permits, and labour <br/> costs vary by region.</p>
      </>
    ),
  },
  
  
];


const CostFactors = () => {
  return (
    <div className="container padding__top swimmingPoolContractor__bg">
      <div className="flex flex-col items-center justify-center">
          <HeadingIcon text={headingIconText.costFactors__IconText} />
          <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center md:text-left leading-normal pt-[5px]">
          Cost Factors for Swimming <br className="block md:hidden" /> Pool Installation
          </h2>
          <p className="text-lg font-normal text-black pt-[10px] text-center pb-[15px]">
          Several factors, including the following, affect the cost of swimming pool installation.
          </p>
        </div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="p-4 pt-10 border border-[#838383] bg-[#E1FFFE]">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none text-lg font-bold text-black "
                  >
                    <h4 className="text-[20px] font-bold text-black">{head}</h4>
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ number, poolType, sizeAndShape, materials, features, landscaping, location }) => {
              return (
                <tr key={number}>
                  <td className="py-[4px] px-[17px] border border-[#838383] bg-[#E1FFFE]">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600 text-base 5xl:text-lg text-center font-normal text-black"
                    >
                      {poolType}
                    </Typography>
                  </td>
                  <td className="py-[4px] px-[17px]  border border-[#838383] bg-[#E1FFFE]">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600 text-base 5xl:text-lg text-center font-normal text-black"
                    >
                      {sizeAndShape}
                    </Typography>
                  </td>
                  <td className="py-[4px] px-[17px]  border border-[#838383] bg-[#E1FFFE]">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600 text-base 5xl:text-lg text-center font-normal text-black"
                    >
                      {materials}
                    </Typography>
                  </td>
                  <td className="py-[4px] px-[17px]  border border-[#838383] bg-[#E1FFFE]">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600 text-base 5xl:text-lg text-center font-normal text-black"
                    >
                      {features}
                    </Typography>
                  </td>
                  <td className="py-[4px] px-[17px]  border border-[#838383] bg-[#E1FFFE]">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600 text-base 5xl:text-lg text-center font-normal text-black"
                    >
                      {landscaping}
                    </Typography>
                  </td>
                  <td className="py-[4px] px-[17px]  border border-[#838383] bg-[#E1FFFE]">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600 text-base 5xl:text-lg text-center font-normal text-black"
                    >
                      {location}
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

export default CostFactors;
