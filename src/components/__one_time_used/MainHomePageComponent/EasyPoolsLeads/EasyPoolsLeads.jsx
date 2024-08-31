import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";
import "./EasyPoolsLeads.css";

const EasyPoolsLeads = () => {
  return (
    <div className="">
      <div className="bg__color full__section_l_p pr-3 md:pr-0 py-[25px]  md:py-[30px] lg:py-[35px] xl:py-[40px] 2xl:py-[45px] 3xl:py-[50px] 4xl:py-[54px] 5xl:py-[58px]">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[35px] 3xl:gap-[53px] md:mx-0 mx-[35px]">
          <div className="order-2 md:order-1 md:col-span-3">
            <div className="flex justify-center md:justify-start">
              <HeadingIcon text={headingIconText.easyPoolsLeads__IconText} />
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[28px] 2xl:text-[29px] 3xl:text-[31px] 4xl:text-[33px]  5xl:text-[36px] font-normal text-center md:text-left leading-normal pb-[25px]">
              Easy Pools Leads the Way in Toronto Swimming Pool Installations
            </h2>
            <p className="text-base font-normal text-center md:text-left">
              Easy Pools, your gateway to effortless elegance, stands at the
              forefront of Toronto's swimming pool installation scene. With a
              commitment to transforming ordinary spaces into havens of
              relaxation, Easy Pools combines expertise and innovation to create
              aquatic masterpieces that redefine outdoor living. From compact
              urban settings to sprawling suburban landscapes, our team is adept
              at tailoring installations that seamlessly blend with your unique
              style and preferences.
            </p>
            <p className="text-base font-normal text-center md:text-left">
              Discover a world where simplicity meets sophistication with us.
              Our commitment to delivering not just pools but refined outdoor
              retreats is evident in every project we undertake. As a beacon of
              innovation in Toronto's swimming pool companies, our company
              invites you to experience the fusion of cutting-edge design,
              quality craftsmanship, and a touch of magic that turns your
              backyard into a sanctuary of effortless elegance.
            </p>
          </div>
          <div className="order-1 md:order-2 md:col-span-3">
            <div>
              <Image
                src="/assets/images/EasyPoolsLeads.png"
                alt="Easy Pools Leads image"
                width={895}
                height={547}
                layout="responsive"
                className="w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyPoolsLeads;
