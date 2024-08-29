"use client";

import { useSwiper } from "swiper/react";

const ProcessSliderButton = ({ setSelectImageIndex, selectImageIndex }) => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-between items-center">
      <div
        onClick={() =>
          setSelectImageIndex(selectImageIndex === 11 ? 11 : selectImageIndex + 1)
        }
      >
        <button aria-label="next" onClick={() => swiper.slideNext()}>
          <span className="sr-only">Next</span>
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
      </div>
      {/* <div className="bg-secondary h-3 w-full" /> */}
      <div
        onClick={() =>
          setSelectImageIndex(selectImageIndex === 0 ? 0 : selectImageIndex - 1)
        }
      >
        <button aria-label="prev" onClick={() => swiper.slidePrev()}>
          <span className="sr-only">Prev</span>
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
    </div>
  );
};
export default ProcessSliderButton;
