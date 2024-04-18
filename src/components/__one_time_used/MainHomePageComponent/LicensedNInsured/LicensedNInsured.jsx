import React from "react";
// import unlocke from "../../../../../../public/assets/licensed/unlock.png";
// import penter from "../../../../../../public/assets/licensed/pentair.png";
// import techo from "../../../../../../public/assets/licensed/techo.png";
// import latham from "../../../../../../public/assets/licensed/latham.png";
// import permacon from "../../../../../../public/assets/licensed/permacon.png";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";

const imgList = [
  {
    img: "/assets/licensed/unlock.png",
  },
  {
    img: "/assets/licensed/pentair.png",
  },
  {
    img: "/assets/licensed/techo.png",
  },
  {
    img: "/assets/licensed/latham.png",
  },
  {
    img: "/assets/licensed/permacon.png",
  },
];

const LicensedNInsured = () => {
  return (
    <div className=" container ">
      <div>
        <div className="mx-auto lg:pt-28 pt-12 lg:pb-12 pb-8 flex flex-col items-center justify-center">
          {/* <div className='flex items-center pb-2'>
          <Image src={sectionIcon} className='h-5 w-10 mr-2' />
          <p>SINCE ’94</p>
        </div> */}

          <HeadingIcon text={headingIconText.licensed__IconTxt} />

          <div>
            <h2 className="lg:text-[36px] text-[20px]">LICENSED & INSURED</h2>
          </div>
        </div>
      </div>
      <div className=" flex justify-between md:mx-auto xs:mx-[30px] gap-5 lg:pb-16 pb-8">
        {imgList.map((im, idx) => (
          <div key={idx}>
            <Image src={im.img} width={200} height={35} alt="licensed" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LicensedNInsured;
