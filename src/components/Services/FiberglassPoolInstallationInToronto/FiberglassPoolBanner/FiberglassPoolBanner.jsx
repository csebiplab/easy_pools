import Image from "next/image";
import "./FiberglassPoolBanner.css";
import GetAnEstimateButton from "@/components/common/GetAnEstimateButton";

const FiberglassPoolBanner = () => {
  return (
    <>
      <div className="hero__section__fiberglass custom-container">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[58%] pl-3 md:pl-5 lg:pl-10 xl:pl-20 2xl:pl-28 3xl:pl-40 4xl:pl-52 5xl:pl-[285px]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="leading-normal text-[34px] md:text-[36px] xl:text-[38px] 2xl:text-[42px] 3xl:text-[46px] 4xl:text-[50px] 5xl:text-[55px] font-bold text-left">
                Fiberglass Pool <br /> Installation in Toronto
              </h1>
              <p className="text-base lg:text-lg font-normal mb-5 leading-6 mt-4 text-black">
                Easy Pools is the best fiberglass pool installation company in
                Toronto for ensuring a hassle-free installation process for
                modern living.
              </p>
              {/* <div className="mb-4 md:mb-0">
                <a
                  href={`tel:+1(647) 449 9512`}
                  className="text-sm font-bold text-white"
                >
                  <Button className="!px-[34px] !py-4 btn__bannerFiberglass !text-white text-sm lg:text-lg font-bold capitalize flex items-center gap-x-2">
                    <span className="!text-white">Get an Estimate</span>
                    <span>
                      <FaChevronRight fill="white" />
                    </span>
                  </Button>
                </a>
              </div> */}

              <div className="mb-4 md:mb-0">
                <GetAnEstimateButton />
              </div>
            </div>
          </div>
          <div className="hero-right relative hidden md:block">
            <Image
              width={858}
              height={832}
              src="/assets/fiberglass/pool-installation.png"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FiberglassPoolBanner;
