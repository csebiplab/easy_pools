import Image from "next/image";
import "./CompanyIntroduction.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";

const CompanyIntroduction = () => {
  return (
    <div className=" bg-white">
      <div className=" container">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px] padding__all">
          <div className="order-2 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/projects/images/introduction__company.png"
                width={596}
                height={490}
                alt="about us image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-4 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon
                text={projectsHeadingIconText.companyIntroduction__IconText}
              />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px]">
              Introduction to Our Swimming Pool Company in Barrie
            </h3>
            <p className="text-xs md:text-base font-normal text-center md:text-left text-black pt-[15px] md:pt-[25px] leading-6 lg:leading-8">
              Easy Pools custom designs and builds pool and spa solutions that
              reflect your unique needs and personal aesthetic. With over 10
              combined years of experience in the industry of swimming pool
              installation in Barrie, you can trust our team of designers and
              construction specialists to create the perfect swimming pool, spa,
              and landscaped backyard. From start to finish, our company does it
              all. From initial consultation to final touches, our dedicated
              team is committed to providing unparalleled craftsmanship and
              customer satisfaction. Whether you're envisioning a serene oasis
              for relaxation or a lively space for entertaining, trust us to
              bring your vision to life in Barrie and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyIntroduction;
