import type { Metadata } from "next";
import "./globals.css";
import { newsreader, PlayfairDisplay, publicSans } from "@/ui/fonts";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import ClientLayout from "./ClientLayout";

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
        <ClientLayout>
         <Navbar />
        {children}
        <Footer />
        </ClientLayout>
        </body>
    </html>
  );
}
