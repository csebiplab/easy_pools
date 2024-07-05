import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const ReadyToStart = () => {
  return (
    <div className="bg_vinylPool">
      <div className="full__section_l_p pr-3 md:pr-0 padding__top">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7">
          <div className="order-2 md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/VinylPool/ready-to_start.png"
                width={836}
                height={449}
                alt="ready-to_start image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.readyToStart__IconText} />
            </div>
            <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-normal text-center md:text-left">
            Ready to Start Your Project with Easy Pools
            </h3>

            <p className="text-black text-lg font-normal mt-4 text-center md:text-left">
            Transform your backyard into an oasis of relaxation and fun with Easy Pools, your premier vinyl pool installation company. Whether you're envisioning a serene space for family gatherings or a refreshing retreat from the summer heat, our expert team is dedicated to making your dream pool a reality. Whether you need regular cleaning, equipment upgrades, or repairs, our knowledgeable team is here to ensure your pool remains a source of enjoyment for years to come. Ready to dive into the Easy Pools experience? Contact us today to learn more about our services, explore design options, and start planning your perfect backyard getaway. Let us turn your outdoor space into a sanctuary of relaxation and joy with our expertly crafted vinyl pools. Your oasis awaits—let's create it together.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;
