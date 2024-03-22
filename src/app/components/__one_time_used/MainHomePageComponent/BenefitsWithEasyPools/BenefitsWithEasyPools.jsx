import React from "react";
import con from "../../../../../../public/assets/benefits/convenince.png";
import cost from "../../../../../../public/assets/benefits/cost.png";
import dur from "../../../../../../public/assets/benefits/durability.png";
import saf from "../../../../../../public/assets/benefits/safety.png";
import topright from "../../../../../../public/assets/benefits/topcorner.png";
import bottomleft from "../../../../../../public/assets/benefits/bottomcorner.png";
import { headingIconText } from "@/app/utils/heading-text";
import HeadingIcon from "@/app/components/ui/HeadingIcon";

const BenefitsWithEasyPools = () => {
  const services = [
    {
      title: "Convenience",
      img: con,
      details:
        "Our pool company provides a hassle-free installation process, saving time and effort compared to traditional pool construction methods.",
    },
    {
      title: "Cost-effectiveness",
      img: cost,
      details:
        "With our pool contractor, you can often save money on both installation and maintenance costs. The streamlined process and materials used may result in lower expenses compared to custom-built pools.",
    },
    {
      title: "Durability",
      img: dur,
      details:
        "Despite the streamlined installation process, Easy Pools are built to last. They typically utilize high-quality materials that are resistant to wear and tear, ensuring longevity and reducing the need for frequent repairs.",
    },
    {
      title: "Safety Features",
      img: saf,
      details:
        "Our pool services company comes with built-in safety features such as non-slip surfaces, sturdy construction, and secure fencing options. These features help prevent accidents and provide peace of mind, especially for families with children or pets.",
    },
  ];

  return (
    <div className="container">
      <div className="lg:py-[120px] py-20">
        <div className=" flex flex-col justify-center items-center ">
          <HeadingIcon text={headingIconText.benefits__IconText} />

          <div>
            <p className="lg:text-[36px] text-[20px] md:mb-14 mb-8 ">
              Benefits of Installing Swimming Pools with Easy Pools
            </p>
          </div>
        </div>

        <div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 3xl:gap-8 md:gap-5 md:gap-y-12 xs:gap-y-10 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-span-1 border-2 shadow-md rounded border-green-600 relative md:gap-5 xs:px-[10px] xs:pb-[10px]"
              >
                {/* SVG background for left bottom corner */}
                <div className="absolute bottom-0 left-0 z-10">
                  <img
                    className="lg:w-20 lg:h-20 w-14 h-14  border-black"
                    src={bottomleft.src}
                    alt="Profile"
                  />
                </div>
                {/* SVG background for right top corner */}
                <div className="absolute top-0 right-0 z-10">
                  <img
                    className="lg:w-20 lg:h-20 w-14 h-14   border-black"
                    src={topright.src}
                    alt="Profile"
                  />
                </div>
                <div className="mx-auto rounded-lg relative z-20">
                  <div className="5xl:pt-[30px] pt-[20px]">
                    <p className=" mx-auto text-center lg:text-[24px] text-md">
                      {service.title}{" "}
                    </p>
                  </div>
                  <div>
                    <p className="5xl:px-[20px] lg:px-[15px] px-4 5xl:pb-[30px] lg:pb-[20px] md:text-[15px] text-[14px] text-center flex items-center leading-normal ">
                      {" "}
                      {service.details}{" "}
                    </p>
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-30">
                    <img
                      className="lg:w-20 lg:h-20 w-14 h-14 bg-white rounded-full border-black"
                      src={service.img.src}
                      alt="Profile"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsWithEasyPools;
