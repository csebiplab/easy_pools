import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const Expert = () => {
  return (
    <div className="bg_swimmingPool">
      <div className=" container">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px] padding__top">
          <div className="order-2 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/swimmingPool/Expert.png"
                width={596}
                height={490}
                alt="expert image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-3 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.expert__IconText} />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px]">
            Expert Swimming Pool Builder Vaughan
            </h3>
            <p className="text-xs md:text-base font-normal text-center md:text-left text-black pt-[15px] md:pt-[25px] leading-6 lg:leading-8">
            Our team specializes in crafting stunning, customized swimming pools tailored to your specific preferences and needs. With years of experience, we ensure that each pool we build exceeds expectations in both aesthetics and functionality. From design conception to installation, we're committed to delivering exceptional results that transform your backyard into a luxurious oasis.
            </p>
            <p className="text-xs md:text-base font-normal text-center md:text-left text-black pt-[5px] leading-6 lg:leading-8">
            Our expert swimming pool builders in Vaughan combine innovation with meticulous attention to detail to create pools that not only enhance the beauty of your outdoor space but also provide a refreshing escape from the summer heat. We work closely with you to understand your vision, offering personalized solutions that reflect your style and requirements. Whether you desire a modern design or a natural oasis, we have the expertise to bring your ideas to fruition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
