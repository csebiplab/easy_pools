import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import CommonButton from "../../../ui/CommonButton";
import "./MaterialsNEquip.css";

const MaterialsNEquip = () => {
  return (
    <div className=" container ">
      <div className=" 2xl:py-[120px] lg:py-[80px] py-[50px] md:px-[0px] px-[35px] ">
        <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-x-[75px] lg:gap-x-[40px] gap-x-[25px]">
          <div className=" ">
            {/* show when medium or large screen */}
            <div className="md:block hidden">
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
                  height={474}
                  loading="lazy"
                  alt="easy pools"
                  layout="responsive"
                  className="w-[650px] pl-32 mr-2 rounded-[9px]"
                />
                <div className="-ml-[130px] mt-[-12rem]">
                  <Image
                    src="/assets/images/equip1.png"
                    width={513}
                    height={335}
                    alt="easy pools"
                    loading="lazy"
                    className="!w-[513px] pl-32 mr-2 rounded-[9px]"
                  />
                </div>
              </div>
            </div>

            {/* show when sm or xs screen */}
            <div className=" md:hidden ">
              <div>
                <div className=" rounded-xl overflow-hidden flex justify-center items-center">
                  <Image
                    src="/assets/images/equip2.png"
                    width={650}
                    height={474}
                    alt="easy pools"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <div className="text-center  bg-green-600 rounded-xl mx-14 px-4 py-5 my-2">
                    <span className=" text-white text-[25px]">25+</span>
                    <p className=" text-white">
                      Year Experience in install pool
                    </p>
                  </div>
                </div>
                <div className=" rounded-xl overflow-hidden flex justify-center items-center">
                  <Image
                    src="/assets/images/equip1.png"
                    width={513}
                    height={335}
                    alt="easy pools"
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center md:pt-0 pt-[20px]">
            <div>
              <HeadingIcon text={headingIconText.meterialNEquip__IconText} />
              <p className=" text-black text-lg md:text-3xl lg:text-4xl mt-4 mb-[25px]">
                Materials and Equipment Needed for Pool Installation
              </p>
              <p className=" 2xl:text-[16px] md:text-sm text-sm 2xl:leading-[35px] lg:leading-[25px] leading-[20px] ">
                To install a pool, you'll need various materials and pool
                equipment to ensure a smooth and efficient process. Firstly,
                you'll require essential construction materials such as
                concrete, rebar, and waterproofing materials for building the
                pool structure. Additionally, pool decking materials like
                pavers, concrete, or wood may be needed to create the
                surrounding area. Equipment such as excavators, concrete mixers,
                and pumps are essential for digging the hole, pouring the
                concrete, and circulating water respectively. Pool liners,
                filtration systems, and plumbing materials are also crucial
                components to ensure proper functioning and maintenance of the
                pool once installed.
              </p>
              <div className="mt-5 md:mt-8 lg:mt-[55px] flex lg:justify-end">
                <CommonButton buttonText={"Learn More"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialsNEquip;
