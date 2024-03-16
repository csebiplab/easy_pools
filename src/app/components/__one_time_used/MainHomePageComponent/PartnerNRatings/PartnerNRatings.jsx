import Image from "next/image";
import "./PartnerNRatings.css";
import { CiCircleInfo } from "react-icons/ci";

const PartnerNRatings = () => {
  return (
    <div className="flex justify-center w-full border border-red-600 px-[120px]">
      <div className="w-full mx-auto">
        <div className="px-4 py-4 rating__area w-[93%] mx-auto">
          <div className="flex ">
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
                />
                <span className="font-semibold text-[40px] text-dark-400">
                  99%
                </span>
                {/* <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="61"
                    viewBox="0 0 60 61"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_1022)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.2213 54.8013C14.7099 55.6087 12.9428 54.3003 13.2318 52.5845L15.6804 38.0282C15.7953 37.3478 15.573 36.6525 15.0877 36.1703L4.71525 25.8605C3.49278 24.6456 4.16699 22.5298 5.85622 22.2793L20.1924 20.156C20.8629 20.0551 21.4445 19.6252 21.7446 19.0047L28.1533 5.76042C28.909 4.20161 31.0909 4.20161 31.8466 5.76042L38.259 19.0047C38.5591 19.6252 39.1407 20.0551 39.8112 20.156L54.1437 22.2793C55.833 22.5298 56.5072 24.6456 55.2847 25.8605L44.9122 36.1703C44.427 36.6525 44.2047 37.3478 44.3195 38.0282L46.7682 52.5845C47.0571 54.3003 45.2938 55.6087 43.7824 54.8013L30.9576 47.9268C30.3575 47.6053 29.6425 47.6053 29.0424 47.9268L16.2213 54.8013Z"
                        fill="#FAD04F"
                      />
                      <path
                        style={{ mixBlendMode: "overlay" }}
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.0457 60.1557C12.2957 61.0778 10.2496 59.5837 10.5842 57.6242L13.4195 41.001C13.5524 40.224 13.2951 39.43 12.7332 38.8793L0.722952 27.1056C-0.692538 25.7182 0.088126 23.302 2.04408 23.016L18.6439 20.5912C19.4203 20.4759 20.0937 19.985 20.4412 19.2764L27.8618 4.15152C28.7368 2.37137 31.2632 2.37137 32.1382 4.15152L39.5631 19.2764C39.9106 19.985 40.584 20.4759 41.3604 20.5912L57.9559 23.016C59.9119 23.302 60.6925 25.7182 59.2771 27.1056L47.2668 38.8793C46.7049 39.43 46.4476 40.224 46.5805 41.001L49.4158 57.6242C49.7504 59.5837 47.7086 61.0778 45.9586 60.1557L31.1088 52.3051C30.4139 51.938 29.5861 51.938 28.8912 52.3051L14.0457 60.1557Z"
                        fill="url(#paint0_radial_1_1022)"
                        fillOpacity="0.4"
                      />
                      <path
                        style={{ mixBlendMode: "overlay" }}
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.0457 60.1557C12.2957 61.0778 10.2496 59.5837 10.5842 57.6242L13.4195 41.001C13.5524 40.224 13.2951 39.43 12.7332 38.8793L0.722952 27.1056C-0.692538 25.7182 0.088126 23.302 2.04408 23.016L18.6439 20.5912C19.4203 20.4759 20.0937 19.985 20.4412 19.2764L27.8618 4.15152C28.7368 2.37137 31.2632 2.37137 32.1382 4.15152L39.5631 19.2764C39.9106 19.985 40.584 20.4759 41.3604 20.5912L57.9559 23.016C59.9119 23.302 60.6925 25.7182 59.2771 27.1056L47.2668 38.8793C46.7049 39.43 46.4476 40.224 46.5805 41.001L49.4158 57.6242C49.7504 59.5837 47.7086 61.0778 45.9586 60.1557L31.1088 52.3051C30.4139 51.938 29.5861 51.938 28.8912 52.3051L14.0457 60.1557Z"
                        fill="url(#paint1_radial_1_1022)"
                        fillOpacity="0.3"
                      />
                      <path
                        style={{ mixBlendMode: "overlay" }}
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.0457 60.1557C12.2957 61.0778 10.2496 59.5837 10.5842 57.6242L13.4195 41.001C13.5524 40.224 13.2951 39.43 12.7332 38.8793L0.722952 27.1056C-0.692538 25.7182 0.088126 23.302 2.04408 23.016L18.6439 20.5912C19.4203 20.4759 20.0937 19.985 20.4412 19.2764L27.8618 4.15152C28.7368 2.37137 31.2632 2.37137 32.1382 4.15152L39.5631 19.2764C39.9106 19.985 40.584 20.4759 41.3604 20.5912L57.9559 23.016C59.9119 23.302 60.6925 25.7182 59.2771 27.1056L47.2668 38.8793C46.7049 39.43 46.4476 40.224 46.5805 41.001L49.4158 57.6242C49.7504 59.5837 47.7086 61.0778 45.9586 60.1557L31.1088 52.3051C30.4139 51.938 29.5861 51.938 28.8912 52.3051L14.0457 60.1557Z"
                        fill="url(#paint2_linear_1_1022)"
                        fillOpacity="0.6"
                      />
                    </g>
                    <defs>
                      <radialGradient
                        id="paint0_radial_1_1022"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(5761.97 2.81641) scale(5761.86 5761.86)"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" />
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_1_1022"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(7956.47 11053.8) scale(5761.86 5761.86)"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" />
                      </radialGradient>
                      <linearGradient
                        id="paint2_linear_1_1022"
                        x1="1743.54"
                        y1="256.915"
                        x2="4196.34"
                        y2="5522.7"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0.5" />
                        <stop offset="0.50369" stopOpacity="0.5" />
                        <stop offset="1" stopColor="white" stopOpacity="0.5" />
                      </linearGradient>
                      <clipPath id="clip0_1_1022">
                        <rect
                          width="60"
                          height="60"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </> */}
              </div>
            </div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
          </div>
        </div>
        <div className="flex mt-[25px]">
          <p>card</p>
          <p>card</p>
          <p>card</p>
          <p>card</p>
          <p>card</p>
        </div>
      </div>
    </div>
  );
};

export default PartnerNRatings;
