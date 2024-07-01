"use client";

import "./Benefits.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const services = [
  {
    title: "Extended Seasons",
    desc: "Fibreglass pools in Toronto and Barrie offer a longer swimming season with their durable and weather-resistant material.",
  },
  {
    title: "Low Maintenance",
    desc: "Enjoy hassle-free pool ownership with minimal maintenance, as fiberglass pools require less upkeep compared to traditional options.",
  },
  {
    title: "Energy Efficiency",
    desc: "Fibreglass pools in Toronto and Barrie offer a longer swimming season with their durable and weather-resistant material.",
  },
  {
    title: "Quick Installation",
    desc: "Fibreglass pools in Toronto and Barrie offer a longer swimming season with their durable and weather-resistant material.",
  },
  {
    title: "Cost Savings",
    desc: "Fibreglass pools in Toronto and Barrie offer a longer swimming season with their durable and weather-resistant material.",
  },
];

const SelectionPreparation = () => {
  return (
    <div className="bg__fiberglassPage common__padding__top">
      <div className="">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.benefits__inFiberglassText} />
            </div>
            <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-bold text-black text-center pb-[25px]">
              Benefits of Installing a Fiberglass Swimming Pool in Toronto
            </h3>
          </div>

          <div className="w-full h-[2px] bg-primary" />
          {/* large device  */}
          <div className="hidden md:block">
            <div className="flex justify-around ">
              <div className="w-[2px] h-[70px] bg-primary" />
              <div className="w-[2px] h-[70px] bg-primary" />
              <div className="w-[2px] h-[70px] bg-primary" />
              <div className="w-[2px] h-[70px] bg-primary" />
              <div className="w-[2px] h-[70px] bg-primary" />
            </div>
          </div>
          {/* small device  */}
          <div className="block md:hidden">
            <div className=" flex justify-center">
              <div className="w-[2px] h-[70px] bg-primary" />
            </div>
          </div>

          <div className="">
            <div className="!px-5 md:px-0 grid grid-cols-5">
              {services.map((service, index) => (
                <div key={index} className="">
                  <div className="mx-auto w-[210px] cart p-4 ">
                    <div>
                      <h6 className="heading">{service.title}</h6>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionPreparation;
