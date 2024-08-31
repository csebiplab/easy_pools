import Image from "next/image";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-white text-[27px] lg:text-[40px] leading-normal lg:leading-[1.2]">
          Swimming Pool Installation in Toronto
        </h1>
        <p className="mt-4 text-white text-sm lg:text-[18px]">
          Welcome to our luxury swimming pool installation company in Toronto.
        </p>
        <a
          href="tel:+1(647) 449 9512"
          aria-label="Get an Estimate"
          className="mt-6 inline-flex items-center bg-secondary-700 rounded-full py-3 px-8"
        >
          <span className="text-white text-sm">Get an Estimate</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            className="ml-2"
          >
            <path
              d="M0 11.4267L4.59 6.83738L0 2.24811L1.42 0.838335L7.42 6.83738L1.42 12.8364L0 11.4267Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <Image
        src="/assets/images/home_banner.webp"
        layout="fill"
        objectFit="cover"
        priority
        alt="Banner Image"
        className="z-[-1]" // Push image behind the content
      />
    </div>
  );
};

export default HomeBanner;
