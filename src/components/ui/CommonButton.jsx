const CommonButton = ({ buttonText }) => {
  return (
    <button
      aria-label={buttonText}
      className="common_btn bg-secondary-800 flex justify-center items-center rounded-lg px-3 py-2"
    >
      <span className="text-white text-sm md:text-base font-bold">
        {buttonText}
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
  );
};

export default CommonButton;
