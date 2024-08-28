import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import "./Excelence.css";
import Link from "next/link";

const Excelence = () => {
  return (
    <div className="bg__fiberglassPage">
      <div className="container">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 common__padding__top ">
          <div className="md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/fiberglass/fiberglass-excelence.png"
                width={596}
                height={490}
                alt="about us image"
                
              />
            </div>
          </div>

          <div className="md:col-span-4 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.excelence__inFiberglassText} />
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px]">
              Excellence Inground Fiberglass Pool in Toronto
            </h2>
            <p className="text-sm md:text-base font-normal text-center md:text-left text-black pt-[15px] md:pt-[25px] leading-6 lg:leading-8">
              Easy Pools stands as the pinnacle of inground fiberglass pool
              excellence in Toronto, setting unmatched standards in design and
              service. With a commitment to innovation, our pools redefine
              luxury, seamlessly integrating cutting-edge technology with
              timeless aesthetics. Our unwavering dedication to quality
              craftsmanship ensures each pool is a masterpiece, reflecting our
              passion for creating aquatic sanctuaries that stand the test of
              time. From concept to completion, our company is synonymous with
              excellence, redefining the standard for sophistication and
              unparalleled luxury in Toronto's backyard havens. Residents of
              Toronto trust us to transform their backyard dreams into a reality
              that exceeds expectations. Say goodbye to the stress of
              traditional <Link className="text-primary hover:underline" href="https://en.wikipedia.org/wiki/Swimming_pool_service_technician">pool maintenance</Link> and embrace the effortless beauty of
              fiberglass, creating a haven where the symphony of relaxation
              plays on, creating a timeless ambiance for you and your loved
              ones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excelence;
