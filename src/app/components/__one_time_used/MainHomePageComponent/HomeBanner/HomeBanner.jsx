import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="container home-banner py-20 min-h-screen flex justify-center items-center bg-blend-multiply bg-dark-200">
      <div className="text-center banner-content">
        <div>
          <h1 className="text-white title">
            Swimming Pool Installation in Toronto
          </h1>
          <p className="mt-8 leading-10 text-white text-2xl font-normal">
            Welcome to our luxury swimming pool installation company in Toronto.
          </p>
          <div className="flex justify-center">
            <button className="flex items-center rounded-full bg-secondary py-4 px-8 mt-8">
              <span className="text-white text-lg">Get an Estimate</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
