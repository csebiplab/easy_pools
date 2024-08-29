import Image from "next/image";

const UpperNavbar = () => {
  return (
    // <nav className="px-5 md:px-10 xl:px-20 2xl:px-[120px] py-5 bg__uppernav">
    <nav className="container py-2 bg__uppernav hidden md:block">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-3">
          <Image
            src="/assets/images/fag_of_canada_leaf.png"
            width={38}
            height={40}
            alt="canada leaf"
            className="w-[38px] h-[40px]"
          />
          <p className="text-18px text-white">
            Swimming Pool Installation in Toronto
          </p>
        </div>

        <div className="flex items-center gap-x-4 md:gap-x-6 xl:gap-x-9">
          <Image
            src="/assets/socials/facebook.png"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
            alt="facebook"
          />
          <Image
            src="/assets/socials/x.png"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
            alt="x"
          />
          <Image
            src="/assets/socials/insta.png"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
            alt="instagram"
          />
          <Image
            src="/assets/socials/in.png"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
            alt="linkedin"
          />
          <Image
            src="/assets/socials/google.png"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
            alt="google"
          />
        </div>
      </div>
    </nav>
  );
};

export default UpperNavbar;
