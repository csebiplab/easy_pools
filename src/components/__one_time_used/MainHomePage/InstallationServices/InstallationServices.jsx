import React from "react";
import "./InstallationServices.css";
import Image from 'next/image';
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const installationServicesData = [
    {
        id : 1, 
        img : "/assets/homePage/services1.png",
        title : "Vinyl pool",
        desc : "Swimming pools lined with vinyl material offer durability and customization. Vinyl liner pools are a type of vinyl pool installed over a metal or plastic frame. Vinyl liners for inground pools are becoming increasingly popular in Toronto. Vinyl pools provide a smooth, non-abrasive surface, ensuring a comfortable swimming experience. Easy Pools specializes in installing high-quality vinyl pools, offering homeowners a durable and cost-effective solution."
    },
    {
        id : 2, 
        img : "/assets/homePage/services2.png",
        title : "Fiberglass pools",
        desc : "Fibreglass pools are preformed structures made of reinforced plastic coated with fiberglass. They are durable, low-maintenance, and quickly installed in various shapes and sizes for residential or commercial swimming needs. With a variety of shapes and sizes, Easy Pools ensures an effortless and efficient fibreglass pool installation process."
    },
    {
        id : 3, 
        img : "/assets/homePage/services3.png",
        title : "Concrete pools",
        desc : "At Easy Pools, we specialize in designing and installing durable, high-quality concrete pools in Toronto. Concrete pools bring luxury and lasting value to your home. You can tailor concrete pools to fit any shape or size, and they are durable and long-lasting. Our skilled contractors use the latest techniques in concrete pool construction to ensure a durable, long-lasting structure."
    },
    {
        id : 4, 
        img : "/assets/homePage/services4.png",
        title : "ICF pools",
        desc : "Easy Pools offers insulated concrete for pool installation, combining energy efficiency, strength, and versatility. Insulated concrete blocks, used in the construction of ICF pools, offer superior thermal insulation, thereby lowering heating expenses and prolonging the warmth of your pool water. Through the design and installation process, our expert contractors customize your ICF pool to meet your specific needs."
    },
]


const InstallationServices = () => {
  return (
    <div className="container padding__top">
      <div className="flex flex-col items-center justify-center">
          <HeadingIcon text={headingIconText.installationServices__IconText} />
          <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center md:text-left leading-normal pt-[5px]">
          Our Toronto Swimming Pool Installation Services
          </h2>
          <p className="text-lg font-normal text-black pt-[10px] text-center pb-[15px]">
          Our pool contractors specialize in professional swimming pool installation services, transforming your backyard into a luxurious retreat. Whether you're looking for a sleek modern design or a classic pool style, our team ensures top-quality construction services to install your pool. From initial consultation to the final installation, our contractors provide a seamless experience, offering a range of options, including in-ground, above-ground, and custom pools.
          </p>
        </div>

        {/* cart info  */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[15px]">
            {
                installationServicesData?.map((data)=>{
                    return <div key={data.id} className="Services_cart__bg">
                        <Image className="rounded-t-[9px] w-full h-[140px]" src={data.img} alt="services image" width={326} height={140}  />
                        <div className=" py-[16px] 5xl:py-[20px] px-[18px] 5xl:px-[22px]">
                        <h3 className="text-[20px] xl:text-[22px] 5xl:text-[24px] font-bold text-center leading-normal text-black pb-[9px]">{data.title}</h3>
                        <p className="text-base 5xl:text-lg font-normal text-center leading-[28px[ text-balck text-center">{data.desc}</p>
                        </div>
                        
                    </div>
                })
            }
        </div>

    </div>
  );
};

export default InstallationServices;
