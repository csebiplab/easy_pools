import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import Link from "next/link";
import "./HireUs.css";

const HireUs = () => {
  return (
    <div className="bg_swimmingPool">
      <div className="full__section_r_p pl-3 md:pl-0 padding__top">
        <div className=" grid md:grid-cols-7 grid-cols-1 md:gap-[30px]">
          <div className="md:col-span-4 flex items-center ">
            <div className="">
              <Image
                src="/assets/swimmingPool/Hire Us.png"
                width={940}
                height={580}
                alt="Hire us image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 pt-3 lg:pt-0 flex flex-col justify-center items-center md:items-start md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.hireUs_IconText} />
            </div>
            <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
              Hire the Best Swimming Pool Installation Company
            </h3>
            <p className="text-black text-lg font-normal mt-4 text-center md:text-left">
              Our team of skilled technicians meticulously handles every aspect
              of the installation process, ensuring precision and attention to
              detail. We take pride in using only the finest materials and
              state-of-the-art equipment to guarantee durability and longevity.
              Additionally, our commitment to transparent communication and
              personalized solutions means you'll be involved and informed at
              every stage of the project. Trust us to create a stunning focal
              point for your outdoor space, where you can create lasting
              memories with family and friends for years to come. Choose our
              swimming pool installation company for unparalleled expertise and
              unparalleled results.
            </p>
            <div className="flex justify-center md:justify-start pt-[35px]">
              <button
                type="submit"
                className="bg_btn_hire px-6 lg:px-10 py-2 text-base font-bold flex justify-center items-center"
              >
                <span className="mr-2">
                  <Link
                    href="tel:+1(647) 449 9512"
                    className="text-white flex items-center gap-2"
                  >
                    Get Your Free Estimated{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                    >
                      <path
                        d="M0 10.5902L4.59 6.00095L0 1.41168L1.42 0.00190926L7.42 6.00095L1.42 12L0 10.5902Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </span>
              </button>
            </div>
            <p className="text-black text-2xl font-semibold leading-normal mt-4 text-center md:text-left">
              or Call Us:{" "}
              <span className="text-[#7BB344]">
                <Link href="tel:+1(647) 449 9512">+1(647) 449 9512</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireUs;
