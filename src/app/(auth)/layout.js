import "../globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function AuthLayout({ children }) {

    return (
        <html>
            <body>
                {children}
                <ToastContainer />
            </body>
        </html>
    )
}