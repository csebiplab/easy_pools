import HeadingIcon from "@/components/ui/HeadingIcon";
import Image from "next/image";
import "./Expert.css";
import { headingIconText } from "@/utils/heading-text";

const Expert = () => {
  return (
    <div className="bg__fiberglassPage">
      <div className="full__section_r_p common__padding__top">
        <div className="relative flex flex-col lg:flex-row items-center px-7 md:px-0">
          <div className="md:mb-5 lg:mb-0 lg:mr-5 lg:w-[50%] mt-8 md:mt-0">
            <Image
              alt="Is Concrete Pumping Costly"
              src="/assets/projects/images/bestChoice.png"
              width={910}
              height={650}
              className="w-full h-auto lg:w-[910px] lg:h-[650px]"
            />
          </div>
          <div className="card__onImg py-5 px-[14px] lg:p-[13px] xl:p-[15px] 2xl:p-[20px] 3xl:p-[25px] 4xl:p-[30px] 5xl:p-[35px] w-full lg:max-w-[55%] lg:absolute lg:right-0">
            <HeadingIcon text={headingIconText.expert__inFiberglassText} />
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px]">
              Expert Swimming Pool Installer Await in Toronto
            </h2>
            <p className="text-sm md:text-base font-normal text-center md:text-left text-black pt-[15px] md:pt-[25px] leading-6 lg:leading-8">
              Elevate your lifestyle and indulge in the ultimate luxury
              experience as our skilled professionals meticulously craft a pool
              that reflects your taste and complements your surroundings. Dive
              into a world of sophistication and relaxation, where every detail
              is designed for enduring beauty and pleasure. Our team of
              dedicated experts takes pride in delivering unparalleled
              craftsmanship, ensuring your fiberglass pool installation exceeds
              expectations. With a commitment to quality and innovation, we use
              cutting-edge techniques and premium materials to create a pool
              that seamlessly integrates with your outdoor space. Let us turn
              your dreams of a luxurious oasis into reality, providing a haven
              for leisure and entertainment that will be the envy of all.
              Discover the epitome of elegance as you entrust your fiberglass
              inground pool installation to our seasoned professionals. From
              concept to completion, we prioritize your vision, turning it into
              a breathtaking reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
