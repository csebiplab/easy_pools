"use client";

import Button from "../__one_time_used/LocationPageComponent/BestChoice/Button";

export default function GetAnEstimateButton() {
  return (
    <a href={`tel:+1(647) 449 9512`} className="text-sm font-bold text-white">
      <Button className="hero_btn text-white text-sm lg:text-base font-bold capitalize flex items-center gap-x-2">
        <span className="text-white">Get an Estimate</span>
        <span>
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
        </span>
      </Button>
    </a>
  );
}
