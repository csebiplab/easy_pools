import CommonButton from "@/app/components/ui/CommonButton";
import Image from "next/image";
import React from "react";

const ServiceCard = ({ serv }) => {
  const { imgUrl, title, desc } = serv ?? {};

  return (
    <div className="service__card">
      <div className="text-center">
        <Image
          src={imgUrl}
          width={400}
          height={117}
          className="W-full h-[117px]"
        />
        <div className="px-[10px]">
          <h5 className="py-[25px]">{title}</h5>
          <p className="pb-[45px]">{desc}</p>
          <div className="pb-5 flex justify-center relative">
            <CommonButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
