import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";

// import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Dousoft EduVerse | Student Internship Platform",
  description: "Internship based learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Public folder me style.css include karne ke liye */}
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className="fw-bold">
        {/* <Navbar /> */}
        {children}
        <Footer />
        <ToastContainer/>
      </body>
    </html>
  );
}

