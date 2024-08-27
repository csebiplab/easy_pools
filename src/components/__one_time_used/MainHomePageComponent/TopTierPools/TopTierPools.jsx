import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const TopTierPools = () => {
  return (
    <div className="">
      <div className="container bg-[#188B891A] grid md:grid-cols-2 py-[40px] md:py-[50px]">
        <div className="md:pr-[45px] text-center md:text-left">
          <div className="flex justify-center md:justify-end">
            <HeadingIcon text={headingIconText.toptail__IconText} />
          </div>
          <h2 className="text-black text-lg md:text-3xl lg:text-4xl py-2 md:py-3 !font-semibold">
            Toronto's Top-Tier Pools Installation Solutions
          </h2>
          <p className="text-sm md:text-sm 2xl:text-[16px] font-bold mt-2">
            Looking for top-tier pool installation solutions in Toronto? Look no
            further.
          </p>
          <p className="text-sm md:text-sm 2xl:text-[16px] mt-2">
            Our company specializes in providing premium pool installation
            services tailored to meet your specific needs and preferences. With
            our team of skilled professionals and years of experience in the
            industry, we ensure that every aspect of your pool installation
            project is handled with utmost care and precision, from design to
            completion. Quality and reliability are paramount for pool
            installation, and that's exactly what we deliver.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            alt="top tier pools"
            src="/assets/random/toptier.png"
            height={551}
            width={828}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TopTierPools;
