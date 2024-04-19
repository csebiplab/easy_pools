import "../../globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function DashboardLayout({ children }) {
  return (
    <html>
      <body>
        <div className="flex flex-row p-3 gap-3 h-screen">
          {/* <ThemeProvider attribute="class" disableTransitionOnChange> */}
          <aside
            className="max-h-screen w-60 p-5 bg-gray-3 border border-gray-2
      rounded-lg sticky top-0 max-md:hidden overflow-scroll"
          >
            sidebar
          </aside>
          <main className="flex-1 bg-gray-3 border border-gray-2  rounded-lg  max-h-screen overflow-auto pb-5 ">
            {children}
          </main>
          {/* </ThemeProvider> */}
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}


