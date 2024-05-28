import Image from "next/image";
import "./TopRatedPoolInstallation.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";

const TopRatedPoolInstallation = () => {
  return (
    <div className=" bg__color">
      <div className=" container">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px] 2xl:py-[100px] lg:py-[70px] py-[50px]">
          <div className="md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/projects/images/Top-Rated.png"
                width={596}
                height={490}
                alt="about us image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-4 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon
                text={projectsHeadingIconText.topRated__IconText}
              />
            </div>
            <p className="mt-4 lg:mb-[25px] mb-[15px] text-lg md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center">
            Barrie’s Top-Rated Pool Installation Specialists
            </p>
            <p className=" 2xl:text-[16px] md:text-[14px] text-[10px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] md:text-start text-center">
            Transform your backyard into a haven of opulence with Easy Pools pool installation specialists. With a commitment to excellence and a reputation for unparalleled craftsmanship, our pool company in Barrie brings the epitome of luxury to your doorstep. Whether you envision a sleek, modern oasis or a classic, resort-style retreat, their team of experts will work closely with you to turn your dreams into reality. From the initial consultation to the finishing touches, our pool installers ensure a seamless and stress-free experience, providing personalized solutions that cater to your unique preferences and lifestyle. From innovative water features to state-of-the-art lighting and automation systems, we combine functionality with aesthetics, creating a space that not only reflects your style but also enhances your overall well-being. Dive into the lap of luxury with us, where every swim is an indulgence and every moment by the poolside is a celebration of sophistication and leisure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedPoolInstallation;
