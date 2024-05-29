import HeadingIcon from "@/components/ui/HeadingIcon";
import "./HireUs.css";
import Image from "next/image";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";

const HireUs = () => {
  return (
    <div className="bg__color">
      <div className="container py-[40px]">
        <div className="flex flex-col justify-center items-center">
          <HeadingIcon text={projectsHeadingIconText.hireUs__IconText} />
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
            What to Consider First When You Want to Hire a Pool Installer?
          </h3>
        </div>
        <div className="relative mt-20">
          <div className="flex justify-between items-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="50"
                viewBox="0 0 52 50"
                fill="none"
              >
                <rect width="52" height="50" rx="9" fill="#049E43" />
                <path
                  d="M15.4697 24.4697C15.1768 24.7626 15.1768 25.2374 15.4697 25.5303L20.2426 30.3033C20.5355 30.5962 21.0104 30.5962 21.3033 30.3033C21.5962 30.0104 21.5962 29.5355 21.3033 29.2426L17.0607 25L21.3033 20.7574C21.5962 20.4645 21.5962 19.9896 21.3033 19.6967C21.0104 19.4038 20.5355 19.4038 20.2426 19.6967L15.4697 24.4697ZM36 24.25H16V25.75H36V24.25Z"
                  fill="white"
                />
              </svg>
            </button>
            <div className="bg-[#049E43] h-3 w-full" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="50"
                viewBox="0 0 52 50"
                fill="none"
              >
                <rect width="52" height="50" rx="9" fill="#049E43" />
                <path
                  d="M36.5303 25.5303C36.8232 25.2374 36.8232 24.7626 36.5303 24.4697L31.7574 19.6967C31.4645 19.4038 30.9896 19.4038 30.6967 19.6967C30.4038 19.9896 30.4038 20.4645 30.6967 20.7574L34.9393 25L30.6967 29.2426C30.4038 29.5355 30.4038 30.0104 30.6967 30.3033C30.9896 30.5962 31.4645 30.5962 31.7574 30.3033L36.5303 25.5303ZM16 25.75H36V24.25H16V25.75Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="absolute -top-12 left-0 right-0">
            <div className="flex justify-between px-20 relative">
              {/* Left image */}
              <div className="hidden md:block">
                <Image
                  src="/assets/projects/images/Why Hire us-1.png"
                  width={182}
                  height={153}
                  alt="working process"
                  className="w-[182px] h-[153px]"
                />
              </div>
              {/* Middle image visible only on phone view */}
              <div className="block">
                <Image
                  src="/assets/projects/images/Why Hire us-2.png"
                  width={252}
                  height={211}
                  alt="working process"
                  className="w-[252px] h-[211px] absolute left-[50%] transform -translate-x-1/2 -top-[35px]"
                />
              </div>
              {/* Right image */}
              <div className="hidden md:block">
                <Image
                  src="/assets/projects/images/Why Hire us-3.png"
                  width={182}
                  height={153}
                  alt="working process"
                  className="w-[182px] h-[153px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text__card w-full md:w-[385px] px-3 py-4 mx-auto mt-28">
          <h5 className="text-center text-2xl font-medium text-[#049E43] mb-1">
            Portfolio of Past Projects
          </h5>
          <p className="text-center text-base font-medium leading-[218%]">
            Review the company's portfolio of past pool installations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HireUs;
