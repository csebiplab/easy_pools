import React from "react";

export default function Button({ title }) {
  return (
    <div>
      <button
        aria-label={title}
        className="service__card__btn flex justify-center items-center"
      >
        <span className="text-white text-sm font-bold lg:text-[16px] md:text-sm">
          {title}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          className="ml-2"
        >
          <path
            d="M0 10.0475L4.33019 5.84072L0 1.63389L1.33962 0.341594L7 5.84072L1.33962 11.3398L0 10.0475Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
