import Footer from "@/components/layouts/Footer/Footer";
import { Roboto_Slab } from "next/font/google";
import "../globals.css"
import { NavHeader } from "@/components/layouts/Header/NavHeader";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "#1 Swimming Pool Installation in Toronto | Easy Pools",
  keywords: "easy pools, best pools, great pools, Toronto Pool Installation, Pool Installation Toronto, ",
  description: "Easy Pools offers expert swimming pool installation services in Toronto. Our skilled Toronto pool installers ensure top-quality workmanship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>
        <NavHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
