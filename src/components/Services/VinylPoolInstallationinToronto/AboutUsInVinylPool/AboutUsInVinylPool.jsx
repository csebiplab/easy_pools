import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const AboutUsInVinylPool = () => {
  return (
    <div className="bg_vinylPool">
      <div className="full__section_l_p pr-3 md:pr-0 padding__top">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7">
          <div className="order-2 md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/VinylPool/about_us.png"
                width={836}
                height={449}
                alt="about us image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.about__usInFiberglassText} />
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-normal text-center md:text-left">
            About Our Vinyl Pool Installation Company in Toronto
            </h2>

            <p className="text-black text-lg font-normal mt-4 text-center md:text-left">
            Welcome to Easy Pools, Toronto's premier vinyl pool installation company. With years of experience and a passion for creating luxurious outdoor spaces, we are dedicated to transforming your backyard into a personal oasis. At Easy Pools, we pride ourselves on our craftsmanship, attention to detail, and exceptional customer service. Our skilled professionals bring expertise and innovation to every project, ensuring that your pool is beautiful and built to last. We specialize in installing high-quality vinyl pools, offering a variety of designs and customization options to fit your style and budget. Our seamless installation process ensures that your pool is ready for use in no time. We provide comprehensive renovation services to update and enhance your pool's appearance and functionality. Our commitment to our clients extends beyond installation. We offer reliable maintenance and repair services to keep your pool in perfect condition year-round.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInVinylPool;
