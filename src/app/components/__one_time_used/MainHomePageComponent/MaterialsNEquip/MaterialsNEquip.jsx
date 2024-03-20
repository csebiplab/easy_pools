import HeadingIcon from "@/app/components/ui/HeadingIcon";
import { headingIconText } from "@/app/utils/heading-text";
import CommonButton from "../../../ui/CommonButton";
import "./MaterialsNEquip.css";
import Image from "next/image";

const MaterialsNEquip = () => {
  return (
    <div className="px-5 md:px-10 xl:px-20 2xl:px-[120px] py-[69px]">
      <div className="grid grid-cols-2 gap-x-[75px]">
        <div className="border border-red-500">
          <div className="">
            <div className="stats__area text-white rotate-[270deg] -ml-[90px] mt-[90px] px-[17px] py-[4px]">
              <div className="text-center">
                <span className="pools__num text-white">25+</span>
                <p className="text-white install__pool">
                  Year Experience in install <br /> pool
                </p>
              </div>
            </div>
            <div className="-mt-[192px]">
              <Image
                src="/assets/images/equip2.png"
                width={650}
                height={493}
                loading="lazy"
                className="h-[493px] w-[650px] pl-32 mr-2 rounded-[9px]"
              />
              <div className="-ml-[130px] mt-[-12rem]">
                <Image
                  src="/assets/images/equip1.png"
                  width={513}
                  height={335}
                  loading="lazy"
                  className="h-[335px] !w-[513px] pl-32 mr-2 rounded-[9px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <HeadingIcon text={headingIconText.meterialNEquip__IconText} />
          <h3 className="heading__text text-black mt-4 mb-[25px]">
            Materials and Equipment Needed for
            <br />
            Pool Installation
          </h3>
          <p className="material__para">
            To install a pool, you'll need various materials and pool equipment
            to ensure a smooth and efficient process. Firstly, you'll require
            essential construction materials such as concrete, rebar, and
            waterproofing materials for building the pool structure.
            Additionally, pool decking materials like pavers, concrete, or wood
            may be needed to create the surrounding area. Equipment such as
            excavators, concrete mixers, and pumps are essential for digging the
            hole, pouring the concrete, and circulating water respectively. Pool
            liners, filtration systems, and plumbing materials are also crucial
            components to ensure proper functioning and maintenance of the pool
            once installed.
          </p>
          <div className="mt-[55px] flex justify-end">
            <CommonButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialsNEquip;
