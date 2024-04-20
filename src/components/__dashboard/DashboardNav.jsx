"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
// import ThemeToggle from "../ui/ToggleTheme";
import { Icons } from "../ui/__dashboard_ui/icons";
import { dashboardConfig } from "@/constants/dashboard/dashboard.constants";
import { useState } from "react";
import { cn } from "@/libs/utils";

export default function DashboardNav() {
  return (
    <div className="flex flex-col gap-5 h-full">
      <h1 className="font-medium text-lg">Admin Dashboard</h1>
      <nav className="flex flex-col flex-1 gap-2">
        {dashboardConfig.sidebarNav.map((item, i = 1) => {
          return (
            <div key={i + 1}>
              <MenuItem item={item} />
            </div>
          );
        })}
      </nav>

      <div className="w-full flex justify-end">{/* <ThemeToggle /> */}</div>
    </div>
  );
}

const MenuItem = ({ item }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  const IconOne = Icons[item?.icon];
  return (
    <div className="">
      {item?.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.href) ? "bg-zinc-100 text-gray-900" : ""
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              <IconOne size={16} />
              <span className="">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-6 flex flex-col space-y-4">
              {item?.submenus?.map((subItem, i = 1) => {
                const IconTwo = Icons[subItem?.icon];
                return (
                  <Link
                    key={i + 1}
                    href={subItem.href}
                    className={cn(
                      "py-1 text-sm px-2 rounded-lg flex flex-row gap-2 transition-colors items-center ",
                      pathname === subItem.href ? "bg-gray-2" : ""
                    )}
                  >
                    <div className="flex flex-row space-x-4 items-center">
                      <IconTwo size={16} />
                      <span>{subItem.title}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item?.href}
          className={cn(
            "py-1 text-sm px-2 rounded-lg flex flex-row gap-2 transition-colors items-center ",
            pathname === item.href ? "bg-gray-2" : ""
          )}
        >
          <div className="flex flex-row space-x-4 items-center">
            <IconOne size={16} />
            <span className="">{item.title}</span>
          </div>
        </Link>
      )}
    </div>
  );
};
