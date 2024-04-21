import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const TopTierPools = () => {
  return (
    <div
      className=" bg-[#188B891A]
            "
    >
      <div className=" container ">
        <div className="overflow-hidden sm:px-0  px-[35px]  grid md:grid-cols-2 5xl:py-[70px] 3xl:py-[50px] py-[40px] ">
          <div className="4xl:pr-[65px] pr-[45px] order-2 md:order-1 text-center md:text-left">
            <div className="flex flex-col md:justify-start justify-center  md:mt-0 mt-[25px] items-center md:items-start">
              <HeadingIcon text={headingIconText.toptail__IconText} />

              <div className="py-1 md:py-2">
                <p className="text-black text-lg md:text-3xl lg:text-4xl 5xl:pb-[25px] pb-[10px] text-center md:text-start">
                  Toronto's Top-Tier Pools Installation Solutions
                </p>
              </div>
            </div>
            <div className=" ltr:sm:text-left rtl:sm:text-right">
            <p className="2xl:text-[16px] md:text-[14px] text-[10px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] text-center md:text-start mt-0 md:mt-2 font-bold">
            
                  Looking for top-tier pool installation solutions in Toronto?
                
            </p>
              <p className="2xl:text-[16px] md:text-[14px] text-[10px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] text-center md:text-start mt-3 md:mt-1">
                {" "}
               
                Look no further. Our company specializes in providing premium
                pool installation services tailored to meet your specific needs
                and preferences. With our team of skilled professionals and
                years of experience in the industry, we ensure that every aspect
                of your pool installation project is handled with utmost care
                and precision, from design to completion.
                Quality and reliability are paramount for pool installation, and
                that's exactly what we deliver.
              </p>
            </div>
          </div>

          <div className=" flex justify-center items-center xs:order-1 md:order-2 ">
            {/* ========== Large Screen ======== */}
            <div className="hidden md:block">
            <Image
              alt="top tire pools"
              src="/assets/random/toptier.png"
              height={700}
              width={425}
              className="w-full"
            />
            </div>
            {/* ========= Mobile view ========== */}
            <div className="block md:hidden">
            <Image
              alt="top tire pools"
              src="/assets/random/toptier.png"
              height={700}
              width={425}
              className=""
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTierPools;
