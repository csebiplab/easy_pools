import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DesignandCustomization = () => {
  return (
    <div className="bg-white">
      <div className="container padding__all">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[35px] 3xl:gap-[53px] md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3">
            <div className="flex justify-center md:justify-start">
              <HeadingIcon
                text={headingIconText.designAndCustomization__IconText}
              />
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[28px] 2xl:text-[29px] 3xl:text-[31px] 4xl:text-[33px]  5xl:text-[36px] font-normal text-center md:text-left leading-normal pb-[25px]">
              Pool Design and Customization Options in Toronto
            </h2>
            <p className="text-base font-normal text-center md:text-left">
              Homeowners have a plethora of choices to suit their preferences
              and lifestyles for swimming pool design and customization options
              in Toronto. From sleek, modern designs to more traditional and
              rustic styles, Toronto's pool designers offer a wide range of
              options to cater to every taste. Clients can customize features
              such as shape, size, depth, and materials to{" "}
              <Link
                className="text-primary-700 hover:underline"
                href="https://en.wikipedia.org/wiki/Swimming_pool"
                rel="nofollow"
                target="_blank"
              >
                create a pool <span className="pl-[1px]"></span>
              </Link>
              that seamlessly integrates with their outdoor space while
              reflecting their unique aesthetic vision. Additionally, advanced
              technology and sustainable practices are becoming increasingly
              popular in Toronto's pool design scene. Homeowners can opt for
              eco-friendly solutions like energy-efficient heating systems, LED
              lighting, and water-saving features to minimize environmental
              impact and reduce operational costs.{" "}
            </p>
          </div>
          <div className=" order-1 md:col-span-3">
            <div>
              <Image
                src="/assets/images/DesignandCustomization.png"
                alt="DesignandCustomization image"
                width={600}
                height={465}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignandCustomization;
