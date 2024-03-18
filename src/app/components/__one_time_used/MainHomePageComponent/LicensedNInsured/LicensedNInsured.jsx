import React from "react";
import unlocke from '../../../../../../public/assets/licensed/unlock.png'
import penter from '../../../../../../public/assets/licensed/pentair.png'
import techo from '../../../../../../public/assets/licensed/techo.png'
import latham from '../../../../../../public/assets/licensed/latham.png'
import permacon from '../../../../../../public/assets/licensed/permacon.png'
import Image from "next/image";



const LicensedNInsured = () => {

  const imgList = [
    {
      img: unlocke
    },
    {
      img: penter
    },
    {
      img: techo
    },
    {
      img: latham
    },
    {
      img: permacon
    }
  ]


  return <div>
    <div className=" custom-container">
      <div className="mx-auto lg:pt-28 pt-12 lg:pb-12 pb-8 flex flex-col items-center justify-center">

        <div className='flex items-center pb-2'>
          {/* <Image src={servicesIcon} className='h-5 w-10 mr-2' /> */}
          <p>SINCE ’94</p>
        </div>

        <div>
          <h2 className="lg:text-[36px] text-[20px]">LICENSED & INSURED</h2>
        </div>

      </div>


    </div>
    <div className=" flex justify-between lg:pb-16 pb-8">
      {
        imgList.map((im, i) => <div key={im.img}>
          <img src={im.img.src} alt="" />
        </div>)
      }
    </div>
  </div>;
};

export default LicensedNInsured;
