import Image from "next/image";
import "./SwimmingPoolBanner.css";
import GetAnEstimateButton from "@/components/common/GetAnEstimateButton";

const SwimmingPoolBanner = () => {
  return (
    <>
      <div className="hero__section__vaughan custom-container">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[50%] pl-3 md:pl-5 lg:pl-10 xl:pl-20 2xl:pl-28 3xl:pl-40 4xl:pl-52 5xl:pl-[285px]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="leading-normal text-[36px] md:text-[40px] lg:text-[43px] xl:text-[46px] 2xl:text-[48px] 3xl:text-[52px] 4xl:text-[56px] 5xl:text-[60px] font-bold text-left text-black">
              Swimming Pool Installation in Vaughan
              </h1>
              <p className="text-lg font-normal mb-5 leading-6 mt-4 text-black">
                From concept to completion, our Vaughan swimming pool
                installation company specializes in creating stunning pools
                tailored to your vision.
              </p>
              <div className="mb-4 md:mb-0">
                <GetAnEstimateButton />
              </div>
            </div>
          </div>
          <div className="hero__right__vaughan relative hidden md:block">
            <Image
              width={858}
              height={832}
              src="/assets/swimmingPool/hero__section.jpg"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SwimmingPoolBanner;
