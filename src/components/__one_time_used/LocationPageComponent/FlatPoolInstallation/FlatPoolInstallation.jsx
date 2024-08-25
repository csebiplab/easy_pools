import Image from "next/image";
import "./FlatPoolInstallation.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";

const FlatPoolInstallation = () => {
  return (
    <div className=" bg-white">
      <div className=" container">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px] padding__all">
          <div className="order-2 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/projects/images/pool__installation.png"
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
                text={projectsHeadingIconText.flatPoolInstallation__IconText}
              />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px]">
              Get Your Resort-Style Pool in 7 Days
            </h3>
            <p className="text-sm md:text-base font-normal text-center md:text-left text-black pt-[15px] md:pt-[25px] leading-6 lg:leading-8">
              Easy Pools is a premier destination for your swimming pool
              installation in Barrie in just seven days! At our company, we
              understand the importance of having a refreshing and luxurious
              swimming pool right in the comfort of your own home. Our team is
              dedicated to providing swift and efficient service without
              compromising on quality. We take pride in our ability to deliver a
              resort-style pool experience to the residents of Barrie, ensuring
              that you can start enjoying the benefits of your private paradise
              in record time. Our streamlined process allows us to create custom
              swimming pools tailored to your specific preferences and space
              constraints. From the initial consultation to the final splash, we
              prioritize open communication, ensuring that every detail is
              accounted for. Choose from a variety of pool installation shapes,
              sizes, and features to match your lifestyle and aesthetic
              preferences. With us, you're not just getting a pool; you're
              investing in a piece of luxury that enhances your property value
              and brings endless joy to your family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatPoolInstallation;
