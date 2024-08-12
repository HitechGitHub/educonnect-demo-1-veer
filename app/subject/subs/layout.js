import BtnDark from "../../components/btnDark";
import { Inter } from "next/font/google";
import "../../globals.css"
// import { store } from "../redux/store";
import Dashboard from "../Dashboard";
import Navbar from "../../components/Navbar";
import MainProvider from "../../redux/provider";
// import callClick from "../components/scriptMode";
import AtomicStructure from "./atomic-structure/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EduCONNECT - Study Online",
  description: "Made For Omkarians | eduCONNECT",
};

export default function SubjectLayout({ children }) {
  return (

    <div >

      <MainProvider>
        <Navbar />

        <Dashboard />
        {children}
      </MainProvider>


    </div>

  );
}
