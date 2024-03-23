import React from "react";
import unlocke from "../../../../../../public/assets/licensed/unlock.png";
import penter from "../../../../../../public/assets/licensed/pentair.png";
import techo from "../../../../../../public/assets/licensed/techo.png";
import latham from "../../../../../../public/assets/licensed/latham.png";
import permacon from "../../../../../../public/assets/licensed/permacon.png";
import HeadingIcon from "@/app/components/ui/HeadingIcon";
import { headingIconText } from "@/app/utils/heading-text";
import Image from "next/image";

const LicensedNInsured = () => {
  const imgList = [
    {
      img: unlocke,
    },
    {
      img: penter,
    },
    {
      img: techo,
    },
    {
      img: latham,
    },
    {
      img: permacon,
    },
  ];

  return (
    <div className=" container ">
      <div >
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
      <div className=" flex justify-between gap-5 lg:pb-16 pb-8">
        {imgList.map((im, idx) => (
          <div key={idx}>
            <Image src={im.img} width={"200px"} height={"35px"} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LicensedNInsured;
