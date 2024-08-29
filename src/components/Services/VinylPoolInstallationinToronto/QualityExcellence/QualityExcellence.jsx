import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import Link from "next/link";

const QualityExcellence = () => {
  return (
    <div className="bg_vinylPool">
      <div className="full__section_l_p pr-3 md:pr-0 padding__top">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7">
          <div className="order-2 md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/VinylPool/QualityExcellence.png"
                width={836}
                height={449}
                alt="QualityExcellence image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.qualityExcellence__IconText} />
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-normal text-center md:text-left">
            Easy Pools Ensures Quality and Aquatic Excellence
            </h2>

            <p className="text-black text-lg font-normal mt-4 text-center md:text-left">
            Quality meets innovation at Easy Pools' vinyl pool installation wonders, setting a new benchmark for excellence in the world of aquatic indulgence. Imbued with meticulous craftsmanship, our vinyl pools reflect a commitment to durability and design that goes beyond expectations. Transform your outdoor space into a sanctuary of relaxation, where our company's vinyl wonders redefine the very essence of superior pool experiences. At our company, we understand that a pool is more than just a recreational space; it's a statement of your lifestyle. Our vinyl wonders epitomize this philosophy by seamlessly blending modern aesthetics with enduring quality. Step into a realm where each pool reflects our dedication to providing not just a <Link className="text-primary hover:underline" href="https://en.wikipedia.org/wiki/Swimming">swimming</Link> pool but an enduring piece of aquatic art that enhances the beauty of your home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityExcellence;
