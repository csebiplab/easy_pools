export const dashboardConfig = {
    sidebarNav: [
        {
            title: "Home",
            href: "/dashboard/admin/profile",
            icon: "home",
        },
        {
            title: "Customers",
            href: "/dashboard/customers",
            icon: "users",
            submenu: true,
            submenus: [
                {
                    title: "All Customers",
                    href: "/dashboard/customers/all",
                    icon: "dessert",
                },
                {
                    title: "Add Customer",
                    href: "/dashboard/customers/add",
                    icon: "dessert",
                },
            ],
        },
        {
            title: "Pages",
            href: "/dashboard/allpages/home",
            icon: "boxes",
            submenu: true,
            submenus: [
                {
                    title: "Home",
                    href: "/dashboard/allpages/home",
                    icon: "dessert",
                },
                {
                    title: "Blogs",
                    href: "/dashboard/allpages/blogs",
                    icon: "dessert",
                },
                {
                    title: "Testimonials",
                    href: "/dashboard/allpages/testimonials",
                    icon: "dessert",
                },
                {
                    title: "Contact Us",
                    href: "/dashboard/allpages/contactUs",
                    icon: "dessert",
                },
            ],
        },
        {
            title: "Seo",
            href: "/dashboard/siteVerification",
            icon: "boxes",
            submenu: true,
            submenus: [
                {
                    title: "Site Verification",
                    href: "/dashboard/siteVerification",
                    icon: "dessert",
                },
                {
                    title: "Sitemap",
                    href: "/dashboard/siteMap",
                    icon: "dessert",
                },
                {
                    title: "RobotTXT",
                    href: "/dashboard/robottxt",
                    icon: "dessert",
                },
            ],
        },
        {
            title: "Blogs",
            href: "/dashboard/blogs",
            icon: "boxes",
            submenu: true,
            submenus: [
                {
                    title: "All Blog",
                    href: "/dashboard/blogs",
                    icon: "dessert",
                },
                {
                    title: "Add New",
                    href: "/dashboard/blogs/addNew",
                    icon: "dessert",
                },
                {
                    title: "Categories",
                    href: "/dashboard/blogs/categories",
                    icon: "dessert",
                },
                {
                    title: "Tags",
                    href: "/dashboard/blogs/tags",
                    icon: "dessert",
                },
            ],
        },
    ],
};
