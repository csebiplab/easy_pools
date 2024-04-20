"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const DynamicDashboardHeaderTitle = () => {
  const [title, setTitle] = useState("Static Title");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/dashboard/blogs") {
      setTitle("All Blogs");
    }
    if (pathname === "/dashboard/blogs/addNew") {
      setTitle("Add A New Blog");
    }

    return () => {
      setTitle("Static Title");
    };
  }, [pathname]);

  return <h3 className="text-xl font-medium flex-1 text-primary">{title}</h3>;
};

export default DynamicDashboardHeaderTitle;
