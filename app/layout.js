import BtnDark from "./components/btnDark";
import { Inter } from "next/font/google";
import "./globals.css";
import Contact from "./contact/page";
import About from "./about/page";
import AtomicStructure from "./subject/subs/atomic-structure/page";
import Subject from "./subject/page";
import Navbar from "./components/Navbar";
import { store } from "./redux/store";
import MainProvider from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EduCONNECT - Study Online",
  description: "Made For Omkarians | eduCONNECT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}` + " scroll-smooth"}>
        
        <MainProvider>
          <Navbar/>
          <BtnDark/>
          {children}
        </MainProvider>
        
        
      </body>
    </html>
  );
}
