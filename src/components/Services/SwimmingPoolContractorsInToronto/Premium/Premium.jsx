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
        title : "Rooftop Swimming Pool Toronto",
        desc : "Easy Pools specializes in designing and installing indoor swimming pools in Toronto, bringing the luxury of a private retreat right into your home. Our expert team creates stunning indoor pool environments that combine elegance with functionality, ensuring year-round enjoyment regardless of the weather. We handle every aspect of the project, from initial design and planning to construction and finishing touches, using high-quality materials and innovative solutions. Whether you're looking for a sleek, modern pool or a serene wellness space, we tailor our services to meet your specific needs and enhance your indoor living experience.",
        link : "Rooftop Swimming Pool Toronto"
    },
    {
        id : 4,
        img : "/assets/swimming_pool_contractors/premium/vinyl.png",
        title : "Vinyl Swimming Pool Toronto",
        desc : "Easy Pools provides expert design and installation of vinyl swimming pools in Toronto, offering a stylish and versatile solution for your backyard. Our team specializes in creating custom vinyl pools that combine durability with aesthetic appeal. We handle all aspects of the project, from initial design and selection of high-quality vinyl liners to precise installation and finishing. With a range of styles and colors to choose from, we ensure your vinyl pool perfectly complements your outdoor space while delivering lasting performance and ease of maintenance.",
        link : "Vinyl Swimming Pool Toronto"
    },
    {
        id : 5,
        img : "/assets/swimming_pool_contractors/premium/fiberglass.png",
        title : "Fiberglass Swimming Pools Toronto",
        desc : "At Easy Pools, we bring your dream of a perfect backyard oasis to life with our top-notch fiberglass swimming pools. Based in Toronto, we specialize in the design, installation, and maintenance of high-quality fiberglass pools that offer both elegance and durability. Fiberglass pools are known for their ease of maintenance, quick installation, and resistance to cracking and fading. At our swimming pool contractors, we enhance these benefits with tailored solutions, including custom features like built-in spas, cascading waterfalls, and LED lighting to elevate your pool experience.",
        link : "Fiberglass Swimming Pools Toronto"
    },
    {
        id : 6,
        img : "/assets/swimming_pool_contractors/premium/icf.png",
        title : "ICF Swimming Pool Toronto",
        desc : "Transform your backyard with Easy Pools, the premier provider of Insulated Concrete Form (ICF) swimming pools in Toronto. Our ICF pools combine superior durability with exceptional energy efficiency, offering a long-lasting and low-maintenance solution for your outdoor space. Expertly designed and installed by our experienced team, our ICF pools are tailored to meet your unique needs and preferences. Enjoy the benefits of a pool that maintains water temperature effectively, withstands Toronto's diverse climate, and enhances your backyard with modern elegance.",
        link : "ICF Swimming Pool Toronto"
    },
    {
        id : 7,
        img : "/assets/swimming_pool_contractors/premium/concrete.png",
        title : "Concrete Pool Toronto",
        desc : "Elevate your outdoor living with Easy Pools, Toronto's leading experts in concrete swimming pools. We specialize in crafting custom-designed concrete pools that combine durability with exceptional aesthetic appeal. Our skilled team ensures every project reflects your unique style and enhances your backyard space. With our focus on quality craftsmanship and personalized service, our swimming pool company delivers stunning, long-lasting concrete pools that stand the test of time. Transform your home with a pool that offers both elegance and enduring performance",
        link : "Concrete Pool Toronto"
    },
    {
        id : 8,
        img : "/assets/swimming_pool_contractors/premium/infinity.png",
        title : "Infinity Pool Toronto",
        desc : "Experience the ultimate in luxury with Easy Pools, your top choice for stunning infinity pools in Toronto. We design and build breathtaking infinity pools that create a seamless visual connection between your pool and the horizon, enhancing your outdoor space with a touch of elegance and sophistication. Our expert team ensures meticulous attention to detail and high-quality craftsmanship, delivering an exceptional pool that elevates both your property and your lifestyle. Transform your backyard into a breathtaking retreat with an infinity pool from our swimming pool contractors.",
        link : "Infinity Pool Toronto"
    },
    {
        id : 9,
        img : "/assets/swimming_pool_contractors/premium/salt.png",
        title : "Salt Water Pool Toronto",
        desc : "Transform your backyard with Easy Pools, Toronto's expert in salt water pool installations. We offer a comprehensive installation process that includes custom design, precise construction, and seamless integration into your outdoor space. Our skilled team ensures every detail is handled with care, from initial consultation to the final setup, delivering a high-quality, beautifully crafted pool. Beyond installation, our swimming pool contractors provide ongoing maintenance and support for your saltwater pool. Our services include regular cleaning, system checks, and troubleshooting to keep your pool in pristine.",
        link : "Salt Water Pool Toronto"
    },
    {
        id : 10,
        img : "/assets/swimming_pool_contractors/premium/public.png",
        title : "Public Swimming Pools Toronto",
        desc : "Easy Pools is proud to offer expert design and construction services for public swimming pools in Toronto. Our team specializes in creating safe, functional, and aesthetically pleasing pools for community centers, sports complexes, and recreational facilities. We manage every aspect of the project, from planning and design to construction and maintenance, ensuring that your public pool meets all safety standards and operational requirements. With a focus on durability and user-friendly features, we deliver high-quality solutions that enhance community enjoyment and serve the needs of all users.",
        link : "Public Swimming Pools Toronto"
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
          <p className="text-lg font-normal text-black pt-[10px] text-center pb-[25px]">
          Easy Pools offers premium swimming pool service in Toronto, providing top-tier design, construction, and maintenance for discerning clients. Our team is committed to delivering exceptional quality and personalized care, ensuring that your pool remains a stunning and functional centerpiece of your outdoor space. From bespoke pool designs and state-of-the-art installations to regular upkeep and expert repairs, we offer comprehensive services tailored to meet your unique needs. Trust us for a seamless and luxurious pool experience that enhances both the beauty and enjoyment of your home. In Toronto, we offer various swimming pool services:
          </p>
        </div>
        {/* card  */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[36px]">
            {
                premiumData.map((data)=>{
                    return <div key={data.id} className="cart__bg">
                        <Image src={data.img} alt="premium img" width={657} height={257}/>
                        <div className="text-center px-[12px]">
                        <p className="text-[25px] font-bold text-black pt-[17px] pb-[25px]">{data.title}</p>
                        <p className="text-lg font-normal text-dark-200">{data.desc}</p>
                        <p className="flex items-center justify-center gap-[5px] text-lg font-bold text-secondary pb-[9px] pt-[35px]">{data.link} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                        <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989593 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75L17 6.75V5.25L1 5.25L1 6.75Z" fill="#049E43"/>
                        </svg></p>
                        </div>

                    </div>
                })
            }
        </div>
    </div>
  );
};

export default Premium;
