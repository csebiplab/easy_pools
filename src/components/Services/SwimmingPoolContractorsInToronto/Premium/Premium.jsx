"use client"
import React from "react";
import "./Premium.css";
import Image from 'next/image';
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const premiumData = [
    {
        id : 1,
        img : "/assets/swimming_pool_contractors/premium/indoor.png",
        title : "Indoor Swimming Pools Toronto",
        desc : "Easy Pools specializes in designing and installing indoor swimming pools in Toronto, bringing the luxury of a private retreat right into your home. Our expert team creates stunning indoor pool environments that combine elegance with functionality, ensuring year-round enjoyment regardless of the weather. We handle every aspect of the project, from initial design and planning to construction and finishing touches, using high-quality materials and innovative solutions. Whether you're looking for a sleek, modern pool or a serene wellness space, we tailor our services to meet your specific needs and enhance your indoor living experience.",
        link : "Indoor Swimming Pools Toronto"
    },
    {
        id : 2,
        img : "/assets/swimming_pool_contractors/premium/outdoor.png",
        title : "Outdoor Swimming Pool Toronto",
        desc : "Easy Pools excels in designing and installing outdoor swimming pools in Toronto, creating exquisite backyard retreats tailored to your lifestyle. Our team specializes in crafting custom pools that enhance your outdoor space, offering a range of styles from contemporary and sleek to classic and inviting. We manage every aspect of the project, including design, construction, and finishing touches, ensuring high-quality results and a seamless experience. With a focus on durability, aesthetics, and functionality, we transform your outdoor area into a stunning oasis where you can relax and entertain in style.",
        link : "Outdoor Swimming Pool Toronto"
    },
    {
        id : 3,
        img : "/assets/swimming_pool_contractors/premium/rooftop.png",
        title : "Indoor Swimming Pools Toronto",
        desc : "Easy Pools specializes in designing and installing indoor swimming pools in Toronto, bringing the luxury of a private retreat right into your home. Our expert team creates stunning indoor pool environments that combine elegance with functionality, ensuring year-round enjoyment regardless of the weather. We handle every aspect of the project, from initial design and planning to construction and finishing touches, using high-quality materials and innovative solutions. Whether you're looking for a sleek, modern pool or a serene wellness space, we tailor our services to meet your specific needs and enhance your indoor living experience.",
        link : "Indoor Swimming Pools Toronto"
    },
    {
        id : 4,
        img : "/assets/swimming_pool_contractors/premium/vinyl.png",
        title : "Indoor Swimming Pools Toronto",
        desc : "Easy Pools specializes in designing and installing indoor swimming pools in Toronto, bringing the luxury of a private retreat right into your home. Our expert team creates stunning indoor pool environments that combine elegance with functionality, ensuring year-round enjoyment regardless of the weather. We handle every aspect of the project, from initial design and planning to construction and finishing touches, using high-quality materials and innovative solutions. Whether you're looking for a sleek, modern pool or a serene wellness space, we tailor our services to meet your specific needs and enhance your indoor living experience.",
        link : "Indoor Swimming Pools Toronto"
    },
]


const Premium = () => {
  return (
    <div className="container padding__top swimmingPoolContractor__bg">
      <div className="flex flex-col items-center justify-center">
          <HeadingIcon text={headingIconText.premium__IconText} />
          <h2 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center pt-[5px]">
          Premium Swimming Pools Installation Service Toronto
          </h2>
          <p className="text-lg font-normal text-black pt-[10px] text-center pb-[15px]">
          Easy Pools offers premium swimming pool service in Toronto, providing top-tier design, construction, and maintenance for discerning clients. Our team is committed to delivering exceptional quality and personalized care, ensuring that your pool remains a stunning and functional centerpiece of your outdoor space. From bespoke pool designs and state-of-the-art installations to regular upkeep and expert repairs, we offer comprehensive services tailored to meet your unique needs. Trust us for a seamless and luxurious pool experience that enhances both the beauty and enjoyment of your home. In Toronto, we offer various swimming pool services:
          </p>
        </div>
        {/* card  */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[36px]">
            {
                premiumData.map((data)=>{
                    return <div key={data.id}>
                        <Image src={data.img} alt="premium img" width={657} height={257}/>
                        <div className="text-center">
                        <p>{data.title}</p>
                        <p>{data.desc}</p>
                        <p>{data.link}</p>
                        </div>

                    </div>
                })
            }
        </div>
    </div>
  );
};

export default Premium;
