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
    customer: "CompanyINC",
    amount: "$14,000",
    issued: "31 Jan 2024",
    date: "31 Feb 2024",
  },
  {
    number: "#MS-415647",
    customer: "CompanyINC",
    amount: "$4,000",
    issued: "24 Jan 2024",
    date: "24 Feb 2024",
  },
  {
    number: "#MS-415648",
    customer: "CompanyINC",
    amount: "$11,000",
    issued: "12 Jan 2024",
    date: "12 Feb 2024",
  },
  {
    number: "#MS-415649",
    customer: "CompanyINC",
    amount: "$2,600",
    issued: "10 Jan 2024",
    date: "10 Feb 2024",
  },
];

const PoolComparison = () => {
  return (
    <div className="container padding__top swimmingPoolContractor__bg">
      <div className="flex flex-col items-center justify-center">
          <HeadingIcon text={headingIconText.poolComparison__IconText} />
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center pt-[5px]">
            Cost Factors for Swimming Pool Installation
          </h2>
          <p className="text-lg font-normal text-black pt-[10px] text-center pb-[15px]">
            The cost of installing a swimming pool can vary widely based on
            several factors. Here are the key pool installation cost factors to
            consider:
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
            {TABLE_ROWS.map(({ number, img, title, customer, amount, issued, date }) => {
              return (
                <tr key={number}>
                  <td className="p-4 cart__bg">
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
                      {customer}
                    </Typography>
                  </td>
                  <td className="p-4 cart__bg">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {amount}
                    </Typography>
                  </td>
                  <td className="p-4 cart__bg">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {issued}
                    </Typography>
                  </td>
                  <td className="p-4 cart__bg">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {date}
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
