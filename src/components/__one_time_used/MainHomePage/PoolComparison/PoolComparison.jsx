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
  "Concrete Pools",
  "ICF Pools (Insulated Concrete Form)",
];

const TABLE_ROWS = [
  {
    id: 1,
    img: "/assets/swimming_pool_contractors/poolComparison/time.png",
    title: "Installation Time",
    vinyl: (
      <>
        <span>Moderate (4-8 weeks).</span>
      </>
    ),
    fiberglass: (
      <>
        <span>
          Quick installation (1-3 <br /> weeks).
        </span>
      </>
    ),
    concrete: (
      <>
        <span>Longest (3-6 months).</span>
      </>
    ),
    icf: (
      <>
        <span>Moderate (6-10 weeks).</span>
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
          To prevent liner tears, <br /> perform regular <br /> maintenance.
        </span>
      </>
    ),
    fiberglass: (
      <>
        <span>
          VThe smooth surface leads <br /> to low maintenance.
        </span>
      </>
    ),
    concrete: (
      <>
        <span>
          The porous surface requires <br /> high maintenance, <br />{" "}
          necessitating frequent <br /> cleaning.
        </span>
      </>
    ),
    icf: (
      <>
        <span>
          Maintenance is low to <br /> moderate; it is energy- <br /> efficient.
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
          Liners are less durable; <br /> they may need <br /> replacement every
          7-10 <br /> years.
        </span>
      </>
    ),
    fiberglass: (
      <>
        <span>
          Highly durable and <br /> resistant to algae growth.
        </span>
      </>
    ),
    concrete: (
      <>
        <span>
          Extremely durable and <br /> long-lasting.
        </span>
      </>
    ),
    icf: (
      <>
        <span>
          Very durable, with <br /> excellent insulation <br /> properties.
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
          The shape and size are <br /> highly customizable
        </span>
      </>
    ),
    fiberglass: (
      <>
        <span>
          Limited in size and shape <br /> options.
        </span>
      </>
    ),
    concrete: (
      <>
        <span>
          Concrete pools are fully <br /> customizable in any shape <br /> or
          size.
        </span>
      </>
    ),
    icf: (
      <>
        <span>
          Customization is <br /> available, but it comes <br /> with certain
          design <br /> limitations.
        </span>
      </>
    ),
  },
  {
    id: 5,
    img: "/assets/swimming_pool_contractors/poolComparison/cost.png",
    title: "Cost",
    vinyl: (
      <>
        <span>
          Vinyl pools have the lowest <br /> initial cost, but liner <br />{" "}
          replacement costs increase <br /> over time. On average, you <br />{" "}
          can expect to pay between <br /> <strong>$25,000 and $50,000</strong>{" "}
          for the <br /> installation of a vinyl pool.
        </span>
      </>
    ),
    fiberglass: (
      <>
        <span>
          Mid-range pricing, <br /> typically between vinyl <br /> and concrete.
          The cost of <br /> fibreglass pools in Toronto <br /> typically ranges
          from <br /> <strong>$30,000 to $70,000.</strong>
        </span>
      </>
    ),
    concrete: (
      <>
        <span>
          The highest cost is for both <br /> installation and long-term <br />{" "}
          upkeep. The cost of installing <br /> a concrete pool in Toronto{" "}
          <br /> typically ranges from{" "}
          <strong>
            $50,000 <br /> to $100,000
          </strong>{" "}
          or more, <br /> depending on a variety of <br /> factors.
        </span>
      </>
    ),
    icf: (
      <>
        <span>
          While the initial cost may be <br /> higher, energy efficiency can{" "}
          <br /> significantly reduce long-term <br /> operating expenses. In{" "}
          <br /> Toronto, the cost of installing <br /> an ICF (Insulated
          Concrete <br /> Form) pool typically ranges <br /> from{" "}
          <strong>$50,000 to $100,000</strong> or <br /> more, depending on
          several <br /> factors.
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
        <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center md:text-left leading-normal pt-[5px]">
          Fibreglass Pool, Vinyl Pool, Concrete Pool, and ICF Pool Comparisons
        </h2>
        <p className="text-lg font-normal text-black pt-[10px] text-center pb-[15px]">
          Each pool type offers different advantages based on durability, cost,
          maintenance, and customization options, allowing you to choose the
          best fit for your needs and budget.
        </p>
      </div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD?.map((head, idx) => (
                <th
                  key={idx}
                  className="p-4 pt-10 border border-[#838383] bg-[#E1FFFE]"
                >
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="leading-none text-lg text-[20px] font-bold text-black"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS?.map(
              ({ id, img, title, vinyl, fiberglass, concrete, icf }, idx) => {
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
                        variant="h4"
                        color="blue-gray"
                        className="text-center pt-[10px] text-lg font-bold text-black"
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
    </div>
  );
};

export default PoolComparison;
