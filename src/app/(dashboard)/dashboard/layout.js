import DashboardNav from "@/components/__dashboard/DashboardNav";
import "../../globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardShell from "@/components/__dashboard/DashboardShell";
import DashboardHeader from "@/components/__dashboard/DashboardHeader";


export default function DashboardLayout({ children }) {
  return (
    <html>
      <body>
        <div className="flex flex-row p-3 gap-3 h-screen">
          <aside
            className="max-h-screen w-60 p-5 bg-gray-3 border border-gray-2
      rounded-lg sticky top-0 max-md:hidden overflow-scroll"
          >
            <DashboardNav />
          </aside>
          <main className="flex-1 bg-gray-3 border border-gray-2  rounded-lg  max-h-screen overflow-auto pb-5 ">
            <DashboardShell>
              <DashboardHeader title={"Admin Profile"} />
              {children}
            </DashboardShell>
          </main>
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}


