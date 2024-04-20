import Image from "next/image";
import "./AboutUs.css";
import { headingIconText } from "@/utils/heading-text";
import HeadingIcon from "@/components/ui/HeadingIcon";

const AboutUs = () => {
  return (
    <div className=" bg-white">
      <div className=" container">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px] 2xl:py-[100px] lg:py-[70px] py-[50px]">
          <div className=" md:col-span-3 flex justify-center items-center ">
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

          <div className="md:col-span-4 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.aboutUs__IconText} />
            </div>
            <h3 className="mt-4 lg:mb-[25px] mb-[15px] text-base text-dark leading-normal md:text-start text-center">
              About Our Pool Installation Company in Toronto
            </h3>
            <p className=" 2xl:text-[16px] lg:text-[14px] text-[10px] 2xl:leading-[32px] lg:leading-[25px] leading-[15px] md:text-start text-center">
              Easy Pools custom designs and builds pool and spa solutions that
              reflect your unique needs and personal aesthetic. With over 10
              combined years of experience in the pool construction industry,
              you can trust the team of designers and construction specialists
              to create the perfect swimming pool, spa, and landscaped backyard.
              From start to finish, our company does it all. We guarantee
              on-time completion and quality.
              <br />
              <br />
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

export default AboutUs;
