import type { Metadata } from "next";
import "./globals.css";
import { newsreader, PlayfairDisplay, publicSans } from "@/ui/fonts";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import { ToastContainer } from "react-toastify/unstyled";
import 'react-toastify/dist/ReactToastify.css';


export const metadata: Metadata = {
  title: "CCSSSP - Catholic Community of St. Stephen’s - St. Patrick’s Parish",
  description: "The Catholic Community of St. Stephen’s - St. Patrick’s (CCSSSP) is a vibrant and welcoming parish community located in the heart of the city. We are committed to fostering a deep sense of faith, community, and service among our members."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${PlayfairDisplay.variable} ${newsreader.variable} h-full antialiased overflow-x-hidden`}
    >
      <body>
         <Navbar />
        {children}
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" 
        />
        </body>
    </html>
  );
}
