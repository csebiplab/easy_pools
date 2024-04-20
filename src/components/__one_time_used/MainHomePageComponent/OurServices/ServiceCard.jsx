import CommonButton from "@/components/ui/CommonButton";
import Image from "next/image";

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
          <h5 className="py-[15px] 2xl:text-[24px] text-[20px]">{title}</h5>
          <p className=" 2xl:text-[15px] text-[12px]">{desc}</p>
          <div className="pb-5 mt-5 flex justify-center items-b relative">
            <CommonButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
