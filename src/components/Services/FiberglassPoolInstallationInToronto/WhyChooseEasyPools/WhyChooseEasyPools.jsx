import HeadingIcon from "@/components/ui/HeadingIcon";
import Image from "next/image";
import "./WhyChooseEasyPools.css";
import { headingIconText } from "@/utils/heading-text";

const WhyChooseEasyPools = () => {
  return (
    <div className="bg__fiberglassPage common__padding__top">
      <div className="full__section_r_p">
        <div className="relative flex flex-col lg:flex-row items-center px-7 md:px-0">
          <div className="md:mb-5 lg:mb-0 lg:mr-5 lg:w-[50%] mt-8 md:mt-0">
            <Image
              alt="Is Concrete Pumping Costly"
              src="/assets/fiberglass/whychooseus.png"
              width={910}
              height={650}
              className="w-full h-auto lg:w-[910px] lg:h-[650px]"
            />
          </div>
          <div className="card__onImg py-5 px-[14px] lg:p-[13px] xl:p-[15px] 2xl:p-[20px] 3xl:p-[25px] 4xl:p-[30px] 5xl:p-[35px] w-full lg:max-w-[55%] lg:absolute lg:right-0">
            <HeadingIcon
              text={headingIconText.whyChooseEasyPools__inFiberglassText}
            />
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px]">
              Choose Easy Pools and Have a Relaxed
            </h3>
            <p className="text-sm md:text-base font-normal text-center md:text-left text-black pt-[15px] md:pt-[25px] leading-6 lg:leading-8">
              Choose the best and relax with Easy Pools, your fiberglass pool
              installation experts. We specialize in transforming your backyard
              into an oasis with our expert fiberglass pool installations. With
              years of experience and a commitment to quality, we ensure that
              each project is handled with care and precision. We deliver pools
              that not only enhance your property but also provide a lasting
              source of relaxation and enjoyment. Choosing our company means
              choosing peace of mind. We pride ourselves on our attention to
              detail and customer satisfaction, ensuring that your new
              fiberglass pool meets your expectations and exceeds them. Whether
              you're looking to create a vibrant entertainment space, we have
              the expertise to make your vision a reality. Contact us today to
              discover why we are the trusted choice for fiberglass pool
              installations. Let us help you choose the best and relax with Easy
              Pools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseEasyPools;
