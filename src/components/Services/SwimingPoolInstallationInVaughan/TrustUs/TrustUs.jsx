import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const TrustUs = () => {
  return (
    <div className="bg_swimmingPool">
      <div className="full__section_r_p">
        <div className="grid md:grid-cols-7 grid-cols-1 gap-7 padding__top">
          <div className="md:col-span-4 flex items-center md:items-start">
            <div className="">
              <Image
                src="/assets/swimmingPool/Trust Us.png"
                width={836}
                height={479}
                alt="trust us image"
                className=""
              />
            </div>
          </div>

          <div className=" md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.trusUs__IconText} />
            </div>
            <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
              Swimming Pool Contractors You Can Trust
            </h3>

            <p className="text-black text-lg font-normal mt-4 text-center md:text-left">
            With years of experience and a commitment to excellence, our team specializes in designing and constructing stunning swimming pools tailored to your unique vision and space. From concept to completion, we handle every aspect of the project with precision and professionalism, ensuring a seamless and stress-free experience for our clients. Whether you're dreaming of a luxurious infinity pool or a family-friendly oasis, you can trust our experts to bring your vision to life. Dive into your dream pool today with our reliable and reputable swimming pool contractors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustUs;
