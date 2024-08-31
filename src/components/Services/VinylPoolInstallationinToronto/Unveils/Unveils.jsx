import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const Unveils = () => {
  return (
    <div className="">
      <div className="bg_vinylPool container padding__top">
        <div className="grid md:grid-cols-7 grid-cols-1 gap-7">
          <div className="md:col-span-3 flex justify-end items-center">
            <div className="">
              <Image
                src="/assets/VinylPool/Unveils.png"
                width={836}
                height={649}
                alt="Unveils image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.unveils__IconText} />
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-normal text-center md:text-left">
            Easy Pools Unveils the Swimming Pool Perfection
            </h2>

            <p className="text-black text-lg font-normal mt-4 text-center md:text-left">
            Step into the epitome of aquatic sophistication with Easy Pools' vinyl pool perfection. Crafted with precision and an unwavering dedication to quality, these pools redefine backyard aesthetics. Our company's commitment to excellence extends beyond design, incorporating user-friendly features that make maintenance a breeze. Vinyl pool installation becomes an embodiment of hassle-free luxury, where the joy of pool ownership is as refreshing as the crystal-clear waters themselves. Dive into a realm where innovation meets tranquility and experience the sheer delight of a pool that transcends expectations—Easy Pools, where perfection is made effortless. From meticulous planning to flawless execution, we take pride in transforming your vision into a stunning reality. Whether you're creating a backyard oasis in Toronto, our unmatched professionalism and attention to detail make us the go-to choice for vinyl pool installations, providing you with a durable and visually appealing aquatic escape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unveils;
