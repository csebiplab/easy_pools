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
          alt="easy pools"
          width={400}
          height={177}
          className="w-full"
        />

        <div className="px-[14px]">
          <h3 className="py-3 md:py-[15px] 2xl:text-[24px] lg:text-xl text-sm leading-normal">
            {title}
          </h3>
          <p className=" 2xl:text-[15px] text-sm leading-[20px]">{desc}</p>
          <div className="pb-5 mt-5 flex justify-center items-b relative">
            <Link href={`/${url}`}>
              <CommonButton buttonText={`Learn More`} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
