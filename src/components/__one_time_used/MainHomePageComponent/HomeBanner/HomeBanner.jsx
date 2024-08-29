"use client";

import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="container home-banner py-32 flex justify-center items-center bg-blend-multiply bg-dark-200">
      <div className="text-center banner-content">
        <div>
          <h1 className="text-white text-[27px] lg:text-[55px] leading-normal">
            Swimming Pool Installation in Toronto
          </h1>
          <p className="mt-4 lg:mt-8 lg:leading-10 leading-normal text-white lg:text-[25px] text-sm font-normal">
            Welcome to our luxury swimming pool installation company in Toronto.
          </p>
          <div className="flex justify-center">
            <a href="tel:+1(647) 449 9512">
              <button
                aria-label="Get an Estimate"
                className="flex items-center rounded-full bg-secondary-700 py-3 md:py-4 px-8 mt-7 md:mt-8"
              >
                <span className="text-white text-sm md:text-lg">
                  Get an Estimate
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  className="ml-3"
                >
                  <path
                    d="M0 11.4267L4.59 6.83738L0 2.24811L1.42 0.838335L7.42 6.83738L1.42 12.8364L0 11.4267Z"
                    fill="white"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
