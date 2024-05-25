import Image from "next/image";
import "./CompanyIntroduction.css";
import { headingIconText } from "@/utils/heading-text";
import HeadingIcon from "@/components/ui/HeadingIcon";

const CompanyIntroduction = () => {
  return (
    <div className=" bg-white">
      <div className=" container">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px] 2xl:py-[100px] lg:py-[70px] py-[50px]">
          <div className="order-2 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/about_us.png"
                width={596}
                height={490}
                alt="about us image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-4 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.aboutUs__IconText} />
            </div>
            <p className="mt-4 lg:mb-[25px] mb-[15px] text-lg md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center">
              About Our Pool Installation Company in Toronto
            </p>
            <p className=" 2xl:text-[16px] md:text-[14px] text-[10px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] md:text-start text-center">
              Easy Pools custom designs and builds pool and spa solutions that
              reflect your unique needs and personal aesthetic. With over 10
              combined years of experience in the pool construction industry,
              you can trust the team of designers and construction specialists
              to create the perfect swimming pool, spa, and landscaped backyard.
              From start to finish, our company does it all. We guarantee
              on-time completion and quality.
            </p>
            <p className="mt-3 2xl:text-[16px] md:text-[14px] text-[10px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] md:text-start text-center">
              From start to finish, Easy Pools uses quality materials,
              equipment, and its in-house expert staff to ensure a superior
              finished product. All projects are supervised by our pool
              installation company. With their shared commitment to excellence
              and their involvement in every stage of construction, The Easy
              Pools has a hands-on business approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyIntroduction;
