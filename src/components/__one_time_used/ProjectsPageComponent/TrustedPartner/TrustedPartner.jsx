import React from "react";
import "./TrustedPartner.css";
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";
import { BsDot } from "react-icons/bs";

const trustedLine1 = [
    {
        id : 1,
        para : "Expertise and Experience"
    },
    {
        id : 2,
        para : "Transparent Communication"
    },
    {
        id : 3,
        para : "Proven Track Record"
    },
    {
        id : 4,
        para : "Continued & Maintenance"
    },
    {
        id : 5,
        para : "Comprehensive Project"
    },
    {
        id : 6,
        para : "Commitment to Satisfaction"
    },
    {
        id : 7,
        para : "Accessible and Responsive"
    }
]
const trustedLine2 = [
    {
        id : 1,
        para : "Superior Quality Materials"
    },
    {
        id : 2,
        para : "Timely Project Completion"
    },
    {
        id : 3,
        para : "Customized Solutions"
    },
    {
        id : 4,
        para : "Innovative Design Concepts"
    },
    {
        id : 5,
        para : "Eco-Friendly Practices"
    },
    {
        id : 6,
        para : "Local Reputation & Recognition"
    },
    {
        id : 7,
        para : "Dedication to Safety & Compliance"
    }
]
const trustedLine3 = [
    {
        id : 1,
        para : "Unmatched Craftsmanship"
    },
    {
        id : 2,
        para : "Exceptional Customer Service"
    },
    {
        id : 3,
        para : "Attention to Detail"
    },
    {
        id : 4,
        para : "Certified & Skilled"
    },
    {
        id : 5,
        para : "Competitive Pricing"
    },
    {
        id : 6,
        para : "Collaborative Approach"
    }
]

const TrustedPartner = () => {
  return (
    <div className="bg__color">
      <div className="full__section_l_p">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-10">
          <div className="md:col-span-3 pt-[25px] md:pt-[28px] lg:pt-[30px] xl:pt-[32px] 2xl:pt-[35px] 3xl:pt-[37px] 4xl:pt-[40px] 5xl:pt-[43px]">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon
                text={projectsHeadingIconText.trustedPartner__IconText}
              />
            </div>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px">Your Trusted Partner for Pools Installation in Barrie</p>
            <p className="text-xs xl md:text-base font-normal text-center md:text-left text-black pt-[10px] md:pt-[15px]">
              As your trusted partner for impeccable pool installations in
              Barrie, we bring years of expertise and dedication to every
              project. Why we are trusted or our good keys are:
            </p>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-1 xl:gap-2 2xl:gap-3 3xl:gap-[14px] 4xl:gap-4 5xl:gap-5">
            <div>
                {
                    trustedLine1?.map((trust)=>{
                        return <ul key={trust.id}>
                            <li className="flex justify-center lg:justify-start items-center "><BsDot/>{trust.para}</li>
                        </ul>
                    })
                }
            </div>
            <div>
                {
                    trustedLine2?.map((trust)=>{
                        return <ul key={trust.id}>
                            <li className="flex justify-center lg:justify-start items-center "><BsDot/>{trust.para}</li>
                        </ul>
                    })
                }
            </div>
            <div>
                {
                    trustedLine3?.map((trust)=>{
                        return <ul key={trust.id}>
                            <li className="flex justify-center lg:justify-start items-center "><BsDot/>{trust.para}</li>
                        </ul>
                    })
                }
            </div>
            </div>
          </div>
          <div className="md:col-span-3 flex justify-end items-center">
            <div>
              <Image
                src="/assets/projects/images/Trusted-Partner.png"
                alt="Trusted-Partner"
                width={200}
                height={200}
                className="w-[815px] h-[586px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartner;
