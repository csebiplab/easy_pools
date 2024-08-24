import CommonButton from "@/components/ui/CommonButton";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ serv }) => {
  const { imgUrl, title, desc, url } = serv ?? {};

  return (
    <div className="service__card">
      <div className="text-center">
        <Image
          src={imgUrl}
          width={400}
          height={117}
          alt="easy pools"
          className="W-full h-[117px]"
        />
        <div className="px-[10px]">
          <h5 className="py-3 md:py-[15px] 2xl:text-[24px] lg:text-xl text-sm leading-normal">
            {title}
          </h5>
          <p className=" 2xl:text-[15px] text-[10px] leading-[20px]">{desc}</p>
          <div className="pb-5 mt-5 flex justify-center items-b relative">
            <Link href={`/${url}`}>
              <CommonButton buttonText={`Learn More About ${title}`} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
