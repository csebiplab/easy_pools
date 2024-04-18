import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";
import { Roboto_Slab } from "next/font/google";
import "../globals.css"

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Easy Pools",
  description: "Easy Pools description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
