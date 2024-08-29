import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InstallationAndConstruction = () => {
  return (
    <div className="container padding__top">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5 xl:gap-6 3xl:gap-7 5xl:gap-[30px]">
        <div className="order-2 md:col-span-3">
          <div>
            <Image
              src="/assets/poolInstallationCompanyInMarkham/Installation and Construction.png"
              alt="about us image"
              width={886}
              height={456}
            />
          </div>
        </div>
        <div className="order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start">
          <div>
            <HeadingIcon
              text={headingIconText.installationAndConstruction__IconText}
            />
          </div>
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center md:text-left ">
            Markham Swimming Pool Installation and Construction
          </h2>
          <p className="text-lg font-normal text-center md:text-left text-black pt-[14px]">
            Our pool installers are seasoned experts specializing in the
            installation and construction of swimming pools in Markham Ontario.
            With a wealth of experience and a commitment to excellence, our team
            delivers precision and quality in every project. From the initial
            consultation to the final touches, we prioritize customer
            satisfaction, providing tailored solutions to suit your unique
            requirements. Whether you desire an inground pool, an above-ground
            pool, or any other aquatic feature, our Markham pool installers are
            dedicated to enhancing your outdoor space and lifestyle with
            exceptional results.
          </p>
          <p className="text-lg font-normal text-center md:text-left text-black">
            We understand that a{" "}
            <Link
              className="text-primary-600 hover:underline "
              href="https://en.wikipedia.org/wiki/Swimming_(sport)"
            >
              swimming
            </Link>{" "}
            pool is not just a structure, but a centerpiece of leisure and
            relaxation for your home. That's why our Markham pool installers
            approach each project with meticulous attention to detail, ensuring
            that every aspect of the installation process is handled with care
            and expertise. Trust our Markham pool installation company to
            transform your backyard into a haven of tranquility and enjoyment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstallationAndConstruction;
