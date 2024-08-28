import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const AboutUsInSwimmingPool = () => {
  return (
    <div className="bg_swimmingPool">
      <div className="full__section_r_p pl-3 md:pl-0 padding__top">
        <div className="grid md:grid-cols-7 grid-cols-1 gap-7 lg:gap-7 xl:gap-x-5 3xl:gap-x-2 5xl:gap-x-1  common__padding__top common__padding__btm">
          <div className="md:col-span-4 flex items-center md:items-start">
            <div className="">
              <Image
                src="/assets/swimmingPool/About Us.png"
                width={836}
                height={449}
                alt="about us image"
                className=""
              />
            </div>
          </div>

          <div className=" md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.about__usInFiberglassText} />
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
              About Easy Pools Vaughan
            </h2>

            <p className="text-black text-lg font-normal mt-4 text-center md:text-left">
              Easy Pools is a reputable provider of top-quality pool services in
              Vaughan, Ontario. Specializing in pool installation, maintenance,
              and repair, our company caters to both residential and commercial
              clients. And ensure their pools are kept in pristine condition
              year-round. With a commitment to customer satisfaction, we offer
              personalized solutions tailored to meet each client's unique
              needs. Whether installing a new pool or addressing repairs, Easy
              Pools Vaughan delivers professional service with reliability and
              expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInSwimmingPool;
