import "./globals.css";
import { Roboto_Serif } from "next/font/google";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";

const robotoSerif = Roboto_Serif({ subsets: ["latin"] });

export const metadata = {
  title: "Easy Pools",
  description: "Easy Pools description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoSerif.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
