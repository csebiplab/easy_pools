import React from "react";
import hireeasypool from '../../../../../../public/assets/random/hire-easy-pool.png'
import HeadingIcon from "@/app/components/ui/HeadingIcon";
import { headingIconText } from "@/app/utils/heading-text";

const HireForInstallationService = () => {
  return <div>
    <div  className="container">
      <div className=" grid md:grid-cols-2 grid-cols-1 3xl:gap-[50px] gap-8 3xl:py-[120px] lg:py-[80px] py-[60px] ">
        <div>
          <img src={hireeasypool.src} alt="" />
        </div>
        <div className="">
          <div className=" flex flex-col justify-center  ">

            <HeadingIcon text={headingIconText.hire__IconText} />

            <div>
              <p className="lg:text-[36px] text-[20px] 3xl:pb-[28px]  ">
                Hire Easy Pools For Your Pool Installation Services
              </p>
            </div>
          </div>
          <div >
            <p className=" lg:text-[16px] text-[14px] leading-8">
              Looking to transform your backyard into an oasis of relaxation and enjoyment? Look no further than Easy Pools for all your pool installation needs. Our team of experienced professionals is dedicated to providing top-notch service, from consultation to completion. Whether you're dreaming of a serene lap pool or a luxurious oasis with all the bells and whistles, we've got you covered.
            </p> <br />
            <p className=" lg:text-[16px] text-[14px] leading-8">
              With our company, excellence meets efficiency. Our skilled professionals are committed to delivering top-notch craftsmanship, ensuring your swimming pool installation is a seamless and enjoyable journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default HireForInstallationService;
