import React from "react";
import hireeasypool from '../../../../../../public/assets/random/hire-easy-pool.png'
import hire1 from '../../../../../../public/assets/hire/hire1.png'
import hire2 from '../../../../../../public/assets/hire/hire2.png'
import HeadingIcon from "@/app/components/ui/HeadingIcon";
import { headingIconText } from "@/app/utils/heading-text";
import Image from "next/image";

const HireForInstallationService = () => {
  return <div>
    <div className="container">
      <div className=" md:px-0 xs:px-[35px] grid md:grid-cols-2 3xl:gap-[50px] gap-8 3xl:py-[120px] lg:py-[80px] py-[60px] ">

        <div className="md:block xs:hidden">
          <img src={hireeasypool.src} alt="" />
        </div>

        <div className=" md:hidden xs:block  ">
          <div className="flex justify-center items-center">
            <div className="  ">
              <div>
                <Image src={hire1} width={"360px"} height={"285px"} />
              </div>
              <div className=" w-[240px] h-[128px] border-[10px] border-[#049E43] my-[12px] mx-auto">
                <div className=" text-center px-[40px] py-[23px]  ">
                  <div className="">
                    <p className="text-[16px] leading-4 mb-2">We Provide Service Almost</p>
                    <h6 className=" text-[25px]">45+ State</h6>
                  </div>
                </div>
              </div>
              <div>
                <Image src={hire2} width={"360px"} height={"285px"} />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" flex flex-col justify-center md:items-start xs:items-center  ">

            <HeadingIcon text={headingIconText.hire__IconText} />

            <div>
              <p className="2xl:text-[36px] lg:text-[20px] text-[18px] 3xl:pb-[28px] pb-[16px] xs:text-center md:text-start  ">
                Hire Easy Pools For Your Pool Installation Services
              </p>
            </div>
          </div>
          <div >
            <p className=" xs:text-center md:text-start 2xl:text-[16px] lg:text-[14px] text-[10px] lg:leading-6 xs:leading-4">
              Looking to transform your backyard into an oasis of relaxation and enjoyment? Look no further than Easy Pools for all your pool installation needs. Our team of experienced professionals is dedicated to providing top-notch service, from consultation to completion. Whether you're dreaming of a serene lap pool or a luxurious oasis with all the bells and whistles, we've got you covered. <br />
              With our company, excellence meets efficiency. Our skilled professionals are committed to delivering top-notch craftsmanship, ensuring your swimming pool installation is a seamless and enjoyable journey.
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default HireForInstallationService;
