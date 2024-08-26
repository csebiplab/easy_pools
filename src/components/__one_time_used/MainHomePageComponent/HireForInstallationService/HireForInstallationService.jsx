import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const HireForInstallationService = () => {
  return (
    <div>
      <div className="container">
        <div className="px-[35px] md:px-0 grid md:grid-cols-2 3xl:gap-[50px] gap-8 3xl:py-[120px] lg:py-[80px] py-[60px] ">
          <div className="hidden md:block">
            <Image
              src="/assets/random/hire-easy-pool.png"
              height={700}
              width={500}
              alt="hire"
              className="h-auto w-auto"
            />
          </div>
          {/* ==================== mobile device ========== */}
          <div className="block md:hidden">
            <div className="flex justify-center items-center">
              <div className=" ">
                <div>
                  <Image
                    src="/assets/hire/hire1.png"
                    width={650}
                    height={210}
                    alt="hire"
                    className="mb-2"
                  />
                </div>
                <div className=" w-[240px] h-[128px] border-[14px] border-[#049E43] my-[12px] mx-auto">
                  <div className=" text-center px-[40px] py-[23px]  ">
                    <div className="">
                      <p className="text-[16px] leading-4 mb-2">
                        We Provide Service Almost
                      </p>
                      <p className="font-bold text-[25px]">45+ State</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src="/assets/hire/hire2.png"
                    width={650}
                    height={210}
                    alt="hire"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start ">
              <HeadingIcon text={headingIconText.hire__IconText} />

              <div>
                <p className="text-lg md:text-3xl lg:text-4xl text-dark 3xl:pb-[28px] pb-[16px] text-center md:text-start  ">
                  Hire Easy Pools For Your Pool Installation Services
                </p>
              </div>
            </div>
            <div>
              <p className=" text-center md:text-start 2xl:text-[16px] md:text-sm text-sm 2xl:leading-[35px] lg:leading-[25px] leading-[20px]">
                Looking to transform your backyard into an oasis of relaxation
                and enjoyment? Look no further than Easy Pools for all your pool
                installation needs. Our team of experienced professionals is
                dedicated to providing top-notch service, from consultation to
                completion. Whether you're dreaming of a serene lap pool or a
                luxurious oasis with all the bells and whistles, we've got you
                covered. <br />
                With our company, excellence meets efficiency. Our skilled
                professionals are committed to delivering top-notch
                craftsmanship, ensuring your swimming pool installation is a
                seamless and enjoyable journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireForInstallationService;
