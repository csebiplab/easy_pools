import Image from "next/image";
import "./PartnerNRatings.css";
import { CiCircleInfo } from "react-icons/ci";

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

const PartnerNRatings = () => {
  return (
    <div className="flex justify-center w-full border border-red-600 px-4 md:px-8 xl:px-16 2x:px-[120px] -mt-[75px] z-50">
      <div className="w-full mx-auto">
        <div className="px-4 py-4 rating__area w-full 2xl:w-[93%] mx-auto !border !border-red-500">
          <div className="flex justify-between w-full gap-x-[15px]">
            <div className="w-[15%] border border-red-500">
              <div className="h-full border border-red-500 flex items-center">
                <div>
                  <div className="flex items-center gap-x-1">
                    <h4 className="text-dark-300 text-base font-bold">
                      Star Score
                    </h4>
                    <CiCircleInfo className="h-4 w-4 fill-dark-300" />
                  </div>
                  <div className="flex items-center gap-x-[5px]">
                    <Image
                      src="/assets/images/star.png"
                      width={60}
                      height={60}
                      className="w-[60px] h-[60px]"
                      alt="star"
                      loading="lazy"
                    />
                    <span className="font-semibold md:text-3xl xl:text-4xl 2xl:text-[40px] text-dark-400">
                      99%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[42%] border border-red-500">
              <div className="flex flex-col gap-y-3">
                <div className="flex items-center justify-end gap-x-1">
                  <p className="text-[12px]">Average Rating</p>
                  <div className="rating__progress" />
                  <CiCircleInfo className="h-4 w-4 fill-dark-300" />
                </div>
                <div className="flex items-center justify-end gap-x-1">
                  <p className="text-[12px]">Recency</p>
                  <div className="rating__progress" />
                  <CiCircleInfo className="h-4 w-4 fill-dark-300" />
                </div>
                <div className="flex items-center justify-end gap-x-1">
                  <p className="text-[12px]">Reputation</p>
                  <div className="rating__progress" />
                  <CiCircleInfo className="h-4 w-4 fill-dark-300" />
                </div>
                <div className="flex items-center justify-end gap-x-1">
                  <p className="text-[12px]">Responsiveness</p>
                  <div className="rating__progress" />
                  <CiCircleInfo className="h-4 w-4 fill-dark-300" />
                </div>
              </div>
            </div>
            <div className="w-[30%] border border-red-500">
              <div className="flex flex-col gap-y-3">
                <div>
                  <p className="text-[15px] text-dark-300">
                    <span className="font-bold">Reviews by rating</span> (past
                    12 months)
                  </p>
                </div>
                <div className="flex items-center justify-end gap-x-1">
                  <p className="text-[12px]">Great</p>
                  <div className="review__progress__first" />
                </div>
                <div className="flex items-center justify-end gap-x-1">
                  <p className="text-[12px]">Average</p>
                  <div className="review__progress" />
                </div>
                <div className="flex items-center justify-end gap-x-1">
                  <p className="text-[12px]">Poor</p>
                  <div className="review__progress" />
                </div>
              </div>
            </div>
            <div className="w-[13%] flex items-center justify-center border border-red-500">
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
        <div className="grid grid-cols-6 items-center justify-center gap-9 mt-[25px]">
          {ratingImgs.map(({ imgUrl, text }, index) => (
            <div
              className="partner flex justify-center items-center px-6 py-[15px]"
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
                <p className="mt-4">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerNRatings;
