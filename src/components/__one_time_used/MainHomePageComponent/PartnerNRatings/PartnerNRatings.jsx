import Image from "next/image";
import { CiCircleInfo } from "react-icons/ci";
import "./PartnerNRatings.css";

const ratingImgs = [
  {
    imgUrl: "/assets/images/google.png",
    text: "Read our 5-star reviews on Google Maps",
  },
  {
    imgUrl: "/assets/images/houzz.png",
    text: "Easy excels at turning ordinary into outstanding.",
  },
  {
    imgUrl: "/assets/images/blogto.png",
    text: "Join our satisfied customers",
  },
  {
    imgUrl: "/assets/images/homestars.png",
    text: "Outstanding Achievement Award",
  },
  {
    imgUrl: "/assets/images/tpi.png",
    text: "Getting a professional design service in addition",
  },
  {
    imgUrl: "/assets/images/bark.png",
    text: "Getting a professional design service in addition",
  },
];

const PartnerNRatings = ({ classNames }) => {
  return (
    <div className={`${classNames ? classNames?.bg : "bg-white"}`}>
      <div className="container flex justify-center w-full  z-50 ">
        <div
          className={`${
            classNames ? classNames?.bg : "bg-white"
          } w-full mx-auto lg:px-0 px-[30px] mt-4 md:mt-0 lg:rounded-xl`}
        >
          <div
            className={`bg-white
             p-4 mx-auto border-2`}
          >
            <div className="grid lg:grid-cols-9 grid-cols-1 lg:justify-between justify-center items-center w-full gap-x-[15px] p-2 ">
              <div className=" lg:col-span-1 flex items-center justify-center text-center mx-auto py-5  ">
                <div className="h-full flex items-center">
                  <div className="">
                    <div className="flex items-center gap-x-1">
                      <p className="text-dark-300 text-base font-bold">
                        Star Score
                      </p>
                      <CiCircleInfo className="h-4 w-4 fill-dark-300" />
                    </div>
                    <div className="flex items-center gap-x-[5px]">
                      <Image
                        src="/assets/images/star.png"
                        width={40}
                        height={40}
                        className="w-[40px] h-[40px]"
                        alt="star"
                        loading="lazy"
                      />
                      <span className="font-semibold md:text-2xl xl:text-3xl 2xl:text-[36px] text-dark-400">
                        99%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" lg:col-span-4  ">
                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center lg:justify-end justify-between  gap-x-1">
                    <p className="2xl:text-[12px] lg:text-sm text-[9px]">
                      Average Rating
                    </p>
                    <div className="border-[6px] w-[70%] 4xl:w-[80%] 2xl:w-[75%] sm:w-[80%]  border-[#8BC540] rounded-full" />
                    <CiCircleInfo className="h-4 w-4 fill-dark-300 lg:block hidden" />
                  </div>
                  <div className="flex items-center lg:justify-end justify-between  gap-x-1">
                    <p className="2xl:text-[12px] lg:text-sm text-[9px]">
                      Recency
                    </p>
                    <div className="border-[6px] w-[70%] 4xl:w-[80%] 2xl:w-[75%] sm:w-[80%]  border-[#8BC540] rounded-full" />
                    <CiCircleInfo className="h-4 w-4 fill-dark-300 lg:block hidden" />
                  </div>
                  <div className="flex items-center lg:justify-end justify-between  gap-x-1">
                    <p className="2xl:text-[12px] lg:text-sm text-[9px]">
                      Reputation
                    </p>
                    <div className="border-[6px] w-[70%] 4xl:w-[80%] 2xl:w-[75%] sm:w-[80%]  border-[#8BC540] rounded-full" />
                    <CiCircleInfo className="h-4 w-4 fill-dark-300 lg:block hidden" />
                  </div>
                  <div className="flex items-center lg:justify-end justify-between  gap-x-1">
                    <p className="2xl:text-[12px] lg:text-sm text-[9px]">
                      Responsiveness
                    </p>
                    <div className="border-[6px] w-[70%] 4xl:w-[80%] 2xl:w-[75%] sm:w-[80%]  border-[#8BC540] rounded-full" />
                    <CiCircleInfo className="h-4 w-4 fill-dark-300 lg:block hidden" />
                  </div>
                </div>
              </div>

              <div className=" lg:col-span-3  ">
                <div className="flex flex-col gap-y-3">
                  <div>
                    <p className="text-[11px] lg:text-[15px] text-dark-300 lg:py-0 py-4">
                      <span className="font-bold">Reviews by rating</span> (past
                      12 months)
                    </p>
                  </div>
                  <div className="flex items-center lg:justify-end justify-between gap-x-1">
                    <p className="2xl:text-[12px] lg:text-sm text-[9px] ">
                      Great
                    </p>
                    <div className="border-[6px] w-[70%] sm:w-[80%] lg:w-[85%] border-[#8BC540] rounded-full" />
                  </div>
                  <div className="flex items-center lg:justify-end justify-between gap-x-1">
                    <p className="2xl:text-[12px] lg:text-sm text-[9px] ">
                      Average
                    </p>
                    <div className="border-[6px] w-[70%] sm:w-[80%] lg:w-[85%]  rounded-full" />
                  </div>
                  <div className="flex items-center lg:justify-end justify-between  gap-x-1">
                    <p className="2xl:text-[12px] lg:text-sm text-[9px]  text-right ">
                      Poor
                    </p>
                    <div className="border-[6px] w-[70%] sm:w-[80%] lg:w-[85%]  rounded-full " />
                  </div>
                </div>
              </div>

              <div className=" lg:col-span-1 py-5 flex justify-center ">
                <Image
                  src="/assets/images/verified.png"
                  width={78}
                  height={76}
                  className="w-[78px] h-[76px]"
                  alt="verified"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* partner company card */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-center gap-3 md:gap-9 mt-[25px]">
            {ratingImgs.map(({ imgUrl, text }, index) => (
              <div
                className="flex justify-center items-center px-6 py-[15px] lg:border-none border-2 rounded-xl h-full"
                key={index}
              >
                <div className="text-center">
                  <div className="flex justify-center">
                    <Image
                      src={imgUrl}
                      width={78}
                      height={76}
                      className="w-auto h-auto"
                      alt="dynamic image"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="md:mt-4 mt-2 md:text-sm text-[8px]">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerNRatings;
