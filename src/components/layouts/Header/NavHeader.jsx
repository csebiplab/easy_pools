"use client";

import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UpperNavbar from "./UpperNavbar";
import WebBrandSvg from "@/components/ui/WebBrandSvg";
import "./Header.css";
import "./NavHeader.css";

const our__location__menuItem = [
  {
    title: "Pool Installation Services In Barrie",
    route: "/pool-installation-services-in-barrie",
  },
];

function OurLocationMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = (data = []) => {
    return data?.map(({ route, title }, key) => (
      <Link href={route} key={key}>
        <MenuItem className="rounded-md">
          <Typography color="blue-gray">{title}</Typography>
        </MenuItem>
      </Link>
    ));
  };

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
        className="bg-gray-100"
      >
        <MenuHandler>
          <div
            className="font-medium text-lg"
            aria-expanded={isMenuOpen} // Dynamically set the value based on the menu state
            aria-haspopup="true" // Indicating this element triggers a popup
            id=":RrarjtaH2:"
            role="button"
          >
            <ListItem
              className="flex items-center text-lg text-dark-500 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Location
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        <MenuList className="!p-0 hidden max-w-[300px] w-full lg:block outline-0 bg-gray-100">
          <div className="!p-0 !border-none !outline-none w-full">
            <div className="w-full">
              <ul className="w-full">
                <li>{renderItems(our__location__menuItem)}</li>
              </ul>
            </div>
          </div>
        </MenuList>
      </Menu>

      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <ul>
            <li>{renderItems(our__location__menuItem)}</li>
          </ul>
          <hr className="my-1" />
        </Collapse>
      </div>
    </>
  );
}

// our services nav menu
const our_service_menu_items = {
  interior: [
    {
      title: "Swimming Pool Installation In Vaughan",
      route: "/swimming-pool-installation-in-vaughan",
    },
    {
      title: "Vinyl Pool Installation In Toronto",
      route: "/vinyl-pool-installation-in-toronto",
    },
    {
      title: "Fiberglass Pool Installation In Toronto",
      route: "/fiberglass-pool-installation-in-toronto",
    },
    {
      title: "Pool Installation Company In Markham",
      route: "/pool-installation-company-in-markham",
    },
  ],
};

function OurServiceManu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = (data = []) => {
    return data?.map(({ route, title }, key) => (
      <Link href={route} key={key}>
        <MenuItem className="rounded-md">
          <Typography color="blue-gray">{title}</Typography>
        </MenuItem>
      </Link>
    ));
  };

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
        className="bg-gray-100"
      >
        <MenuHandler>
          <div
            className="font-medium text-lg"
            aria-expanded={isMenuOpen} // Dynamically set the value based on the menu state
            aria-haspopup="true" // Indicating this element triggers a popup
            id=":RrarjtaH2:"
            role="button"
          >
            <ListItem
              className="flex items-center text-lg text-dark-500 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Our Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        <MenuList className="hidden max-w-[100vw] w-screen lg:block border-0 outline-0 bg-gray-100">
          <div className="container grid grid-cols-3 gap-y-2">
            <div>
              <h3 className="mb-1 text-primary font-semibold">Interior</h3>
              <ul>
                <li>{renderItems(our_service_menu_items.interior)}</li>
              </ul>
            </div>
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <h4 className="text-primary mb-1 font-semibold">Interior</h4>
          <ul>
            <li>{renderItems(our_service_menu_items.interior)}</li>
          </ul>
          <hr className="my-1" />
        </Collapse>
      </div>
    </>
  );
}

// our services nav list end
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row md:items-center border-0 outline-none">
      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm lg:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="flex items-start md:items-center text-lg text-dark-500 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6">
          About Us
        </ListItem>
      </Typography>

      <div className="mt-[6px]">
        <OurServiceManu />
      </div>

      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="flex items-start md:items-center text-lg text-dark-500 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6">
          Blog
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="flex items-start md:items-center text-lg text-dark-500 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6">
          Projects
        </ListItem>
      </Typography>

      <div className="mt-[6px] ">
        <OurLocationMenu />
      </div>

      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="flex items-start md:items-center text-lg text-dark-500 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavHeader() {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <UpperNavbar />
      <header className="sticky top-0 z-50">
        <div className="custom-container main__nav">
          <Navbar className="container rounded-none py-2 shadow-none max-w-full">
            <div className="flex items-center justify-between text-blue-gray-900">
              <Link href="/" aria-label="Home">
                <WebBrandSvg />
                <span className="sr-only">Home</span>
              </Link>
              <div className="hidden lg:block">
                <NavList />
              </div>

              <div className="flex gap-x-4">
                <div className="flex items-center gap-x-6 md:gap-x-7 lg:gap-x-8 pr-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/images/phone-call.png"
                      width={24}
                      height={24}
                      alt="canada leaf"
                      className="w-[24px] h-[24px]"
                    />
                    <a
                      href="tel:+1(647) 449 9512"
                      className="text-secondary-700 font-bold xs:text-base sm:text-xl md:text-2xl 2xl:text-3xl"
                    >
                      +1(647) 449 9512
                    </a>
                  </div>
                </div>
                <IconButton
                  variant="text"
                  color="blue-gray"
                  className="lg:hidden !pl-4"
                  aria-label="Menu"
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                  ) : (
                    <Image
                      src="/assets/projects/images/nenu-bar.png"
                      alt="menu bar"
                      width={20}
                      height={20}
                    />
                  )}
                  <span className="sr-only">Menu</span>
                </IconButton>
              </div>
            </div>
          </Navbar>
        </div>
      </header>
      <Drawer
        placement="right"
        open={openNav}
        onClose={() => setOpenNav(false)}
        className="p-4 overflow-y-auto pb-24 !z-[1000000000000000000]"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Easy Pools
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            className="!pl-4"
            aria-label="Menu"
            onClick={() => setOpenNav(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="sr-only">Menu</span>
          </IconButton>
        </div>
        <NavList />
      </Drawer>
    </>
  );
}
