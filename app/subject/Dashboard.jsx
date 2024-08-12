"use client"

import { useEffect } from "react";
import dashboardScript from "../utils/dashboard"
import CardHolder from "./CardHolder";
import { useSelector } from "react-redux";
import "./dash.css"

const Dashboard = () => {

  useEffect(() => {
    dashboardScript();
  }, []);

  const fetchedDataForListening = useSelector((data)=>data.card.value.name)
  
  return (
    <div className=" ">

      <div className="overflow-hidden  min-h-[100%] fixed flex items-center ">
      <div className="dashboard flex z-10 top-24">
        <div className="dashArrow  select-none text-4xl  left-0 h-fit z-10 text-black dark:text-white py-1 px-6 pr-14 overflow-hidden hover:opacity-80 bg-slate-800 w-9 rounded-r-xl text-center opacity-60 flex items-center">
          {'>'}
        </div>
        <div className="dashboardM flex pt-3 p-2 flex-col w-64 bg-slate-400 dark:bg-slate-900 h-[100%] mt-[90px] top-0 fixed -translate-x-full transform transition-all duration-300">
         <div className={`headDash ${(fetchedDataForListening === null || undefined ? "visible" : "hidden")} text-black dark:text-slate-600 select-none text-2xl mb-32`}> Nothing is Selected</div>
         <div className="text-black dark:text-white">
          <CardHolder/>
         </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Dashboard
