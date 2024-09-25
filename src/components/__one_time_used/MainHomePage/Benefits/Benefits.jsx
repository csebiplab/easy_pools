"use client";

import "./Benefits.css";
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const benefitsData = [
  {
    id : 1,
    img : "/assets/homePage/benefits/benefits1.png",
    title: "Convenience",
    desc: "Our pool contractors provide a hassle-free installation process, saving time and effort compared to traditional pool construction methods.",
  },
  {
    id : 2,
    img : "/assets/homePage/benefits/benefits2.png",
    title: "Cost-effectiveness",
    desc: "Our pool company frequently saves money on installation and maintenance expenses.",
  },
  {
    id : 3,
    img : "/assets/homePage/benefits/benefits3.png",
    title: "Durability",
    desc: "Despite the streamlined installation process, Easy Pools builds all projects to last. We use high-quality materials resistant to wear and tear.",
  },
  {
    id : 4,
    img : "/assets/homePage/benefits/benefits4.png",
    title: "Safety Features",
    desc: "Our pool services company has various built-in safety features, such as non-slip surfaces, sturdy construction, and secure fencing options. ",
  },
  
];

const Benefits = () => {
  return (
    <div className=" ">
      <div className="container padding__top">
        <div className="!overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.benefits__IconText} />
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center leading-normal pt-[5px]">
            Benefits of Installing <br className="block md:hidden" /> Swimming Pools with Easy <br className="block md:hidden" /> Pools
            </h2>
            <p className="text-lg font-normal text-center text-black pt-[10px] pb-[50px]">For your Toronto swimming pools, installing with our pool installer offers several benefits for your Toronto swimming pools:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-[20px] 5xl:gap-[33px]">
              {
                benefitsData?.map((data)=>{
                  return <div key={data.id} className="px-[6px] py-[20px] bg-white border-2 border-secondary rounded-[10px] ">
                    <Image src={data.img} alt="benefits image" width={44} height={44} className="w-[64px] h-[64px] mx-auto p-2 rounded-full border-2 border-secondary -mt-[55px] bg-white"/>
                    <p className="text-[24px] font-bold text-center text-gray-700">{data.title}</p>
                    <p className="text-lg font-normal text-black text-center pt-[9px]">{data.desc}</p>
                  </div>
                })
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
