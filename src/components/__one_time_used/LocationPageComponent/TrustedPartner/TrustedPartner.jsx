import React from "react";
import "./TrustedPartner.css";
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";
import { BsDot } from "react-icons/bs";

const trustedLine1 = [
  {
    id: 1,
    para: "Expertise and Experience",
  },
  {
    id: 2,
    para: "Transparent Communication",
  },
  {
    id: 3,
    para: "Proven Track Record",
  },
  {
    id: 4,
    para: "Continued & Maintenance",
  },
  {
    id: 5,
    para: "Comprehensive Project",
  },
  {
    id: 6,
    para: "Commitment to Satisfaction",
  },
  {
    id: 7,
    para: "Accessible and Responsive",
  },
];
const trustedLine2 = [
  {
    id: 10,
    para: "Superior Quality Materials",
  },
  {
    id: 20,
    para: "Timely Project Completion",
  },
  {
    id: 30,
    para: "Customized Solutions",
  },
  {
    id: 40,
    para: "Innovative Design Concepts",
  },
  {
    id: 5,
    para: "Eco-Friendly Practices",
  },
  {
    id: 60,
    para: "Local Reputation & Recognition",
  },
  {
    id: 70,
    para: "Dedication to Safety & Compliance",
  },
];
const trustedLine3 = [
  {
    id: 100,
    para: "Unmatched Craftsmanship",
  },
  {
    id: 200,
    para: "Exceptional Customer Service",
  },
  {
    id: 300,
    para: "Attention to Detail",
  },
  {
    id: 400,
    para: "Certified & Skilled",
  },
  {
    id: 500,
    para: "Competitive Pricing",
  },
  {
    id: 600,
    para: "Collaborative Approach",
  },
];

const TrustedPartner = () => {
  return (
    <div className="bg__color">
      <div className="full__section_l_p pr-3 md:pr-0">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-10">
          <div className="order-2 md:order-1 md:col-span-3 pt-[25px] md:pt-[28px] lg:pt-[30px] xl:pt-[32px] 2xl:pt-[35px] 3xl:pt-[37px] 4xl:pt-[40px] 5xl:pt-[43px]">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon
                text={projectsHeadingIconText.trustedPartner__IconText}
              />
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px">
              Your Trusted Partner for Pools Installation in Barrie
            </h2>
            <p className="text-sm  5xl:text-base font-normal text-center md:text-left text-black pt-[14px] md:pt-[15px]">
              As your trusted partner for impeccable pool installations in
              Barrie, we bring years of expertise and dedication to every
              project. Why we are trusted or our good keys are:
            </p>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-1 xl:gap-2 2xl:gap-3 3xl:gap-[14px] 4xl:gap-4 5xl:gap-[18px] pb-[15px]">
              <div>
                {trustedLine1?.map((trust) => {
                  return (
                    <ul key={trust.id}>
                      <li className="flex justify-center lg:justify-start items-center text-sm  5xl:text-base font-normal text-center md:text-left text-black pt-[14px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[13px] 4xl:pt-[14px] 5xl:pt-[15px]">
                        <BsDot />
                        {trust.para}
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div>
                {trustedLine2?.map((trust) => {
                  return (
                    <ul key={trust.id}>
                      <li className="flex justify-center lg:justify-start items-center text-sm  5xl:text-base font-normal text-center md:text-left text-black pt-[14px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[13px] 4xl:pt-[14px] 5xl:pt-[15px]">
                        <BsDot />
                        {trust.para}
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div>
                {trustedLine3?.map((trust) => {
                  return (
                    <ul key={trust.id}>
                      <li className="flex justify-center lg:justify-start items-center text-sm  5xl:text-base font-normal text-center md:text-left text-black pt-[14px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[13px] 4xl:pt-[14px] 5xl:pt-[15px]">
                        <BsDot />
                        {trust.para}
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 md:col-span-3 flex justify-end items-center">
            <div>
              <Image
                src="/assets/projects/images/Trusted-Partner.png"
                alt="Trusted-Partner"
                width={200}
                height={200}
                className="w-[815px] h-[310px] md:h-[586px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartner;
