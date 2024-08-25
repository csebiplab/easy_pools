import Image from "next/image";
import "./TopRatedPoolInstallation.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";

const TopRatedPoolInstallation = () => {
  return (
    <div className=" bg__color">
      <div className=" container">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px] py-[40px] md:py-[48px]">
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
              <HeadingIcon text={projectsHeadingIconText.topRated__IconText} />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px]">
              Barrie’s Top-Rated Pool Installation Specialists
            </h3>
            <p className="text-sm md:text-base font-normal text-center md:text-left text-black pt-[15px] md:pt-[25px] leading-6 lg:leading-8">
              Transform your backyard into a haven of opulence with Easy Pools
              pool installation specialists. With a commitment to excellence and
              a reputation for unparalleled craftsmanship, our pool company in
              Barrie brings the epitome of luxury to your doorstep. Whether you
              envision a sleek, modern oasis or a classic, resort-style retreat,
              their team of experts will work closely with you to turn your
              dreams into reality. From the initial consultation to the
              finishing touches, our pool installers ensure a seamless and
              stress-free experience, providing personalized solutions that
              cater to your unique preferences and lifestyle. From innovative
              water features to state-of-the-art lighting and automation
              systems, we combine functionality with aesthetics, creating a
              space that not only reflects your style but also enhances your
              overall well-being. Dive into the lap of luxury with us, where
              every swim is an indulgence and every moment by the poolside is a
              celebration of sophistication and leisure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedPoolInstallation;
