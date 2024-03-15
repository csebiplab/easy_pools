import Image from "next/image";

const Header = () => {
  return (
    <header className="custom-container">
      {/* Social small nav */}
      <nav className="px-5 md:px-20 py-2 bg-primary">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <Image
              src="/assets/images/fag_of_canada_leaf.png"
              width={38}
              height={40}
              alt="canada leaf"
              className="w-[38px] h-[40px]"
            />
            <h5 className="text-18px text-white">
              Swimming Pool Installation in Toronto
            </h5>
          </div>

          <div className="flex items-center gap-x-8">
            <Image
              src="/assets/socials/facebook.png"
              width={25}
              height={25}
              className="w-[25px] h-[25px]"
              alt="facebook"
            />
            <Image
              src="/assets/socials/x.png"
              width={25}
              height={25}
              className="w-[25px] h-[25px]"
              alt="x"
            />
            <Image
              src="/assets/socials/insta.png"
              width={25}
              height={25}
              className="w-[25px] h-[25px]"
              alt="instagram"
            />
            <Image
              src="/assets/socials/in.png"
              width={25}
              height={25}
              className="w-[25px] h-[25px]"
              alt="linkedin"
            />
            <Image
              src="/assets/socials/google.png"
              width={25}
              height={25}
              className="w-[25px] h-[25px]"
              alt="google"
            />
          </div>
        </div>
      </nav>

      {/* Main navbar */}
      <nav>main nav</nav>
    </header>
  );
};

export default Header;
