import Image from "next/image";
import UpperNavbar from "./UpperNavbar";
import "./Header.css";
import Link from "next/link";
import { UtilsModule } from "@/app/utils/nav-menus";
import WebBrandSvg from "../../ui/WebBrandSvg";

const Header = () => {
  return (
    <header className="custom-container">
      {/* Social small nav */}
      <UpperNavbar />

      {/* Main navbar */}
      {/* <nav className="px-5 md:px-10 xl:px-20 2xl:px-[120px] py-2 main__header"> */}
      <nav className="container py-2 main__header">
        <div className="flex items-center justify-between">
          <div>
            <WebBrandSvg />
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-x-2 md:gap-x-5 xl:gap-x-10 2xl:gap-x-[75px]">
              {UtilsModule.navMenus.map(
                ({ mainMenu, url, subMenu, svg = null }, index) => (
                  <li key={index}>
                    <Link
                      href={url}
                      className={`${
                        svg ? "flex items-center gap-x-1" : ""
                      } text-[20px] text-dark-100 font-bold`}
                    >
                      {mainMenu} {svg}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="flex items-center gap-x-6 md:gap-x-7 lg:gap-x-8">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/phone-call.png"
                width={24}
                height={24}
                alt="canada leaf"
                className="w-[24px] h-[24px]"
              />
              <Link
                href="/"
                className="text-secondary font-bold xs:text-base sm:text-xl md:text-2xl 2xl:text-3xl"
              >
                +1(647) 449 9512
              </Link>
            </div>
            <div className="block lg:hidden">
              <Image
                src="/assets/icons/menu.png"
                width={22}
                height={22}
                alt="Menu"
                className="w-[22px] h-[22px]"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
