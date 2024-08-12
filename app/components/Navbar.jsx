"use client"

import { useState} from "react";
import Link from "next/link";
import { useSidebarToggle } from "../hooks/sidebar";
import "./nav.css"
const Navbar = () => {
  let [open,setOpen]=useState(false);
  useSidebarToggle();
  
  let Links = [
    {name:"HOME",link:"/"},
    {name:"ABOUT US",link:"/about"},
    {name:"SUBJECT",link:"/subject"},
    {name:"FEEDBACK",link:"/feed"},
  ];
 
  return (
    <div>
      <a className="hidden" href="https://lordicon.com/">Icons by Lordicon.com</a>
      <header className="fixed top-0 ">
        <div className="flex header bg-slate-500 nav shadow-lg shadow-2 shadow-slate-400 dark:shadow-slate-800 dark:bg-slate-800 fixed w-[100vw]">
          <div id="" className=" z-40 items-center flex flex-row text-white ">

            <ul className="flex z-10 gap-6">
              <li className="ml-3 text-3xl md:hover:text-green-800 md:hover:scale-105 md:block hidden md:dark:hover:text-green-500 px-3 pt-2 transition-all ">
                <Link href="/#">Home</Link>
              </li>
              <li className="text-3xl hidden md:hover:text-green-800 md:hover:scale-105 md:block md:dark:hover:text-green-500 px-3 pt-2 transition-all ">
                <Link href="/about">About Us</Link>
              </li>
              <li className="text-3xl hidden md:hover:text-green-800 md:hover:scale-105 md:block md:dark:hover:text-green-500 px-3 pt-2 transition-all ">
                <Link href="/subject">Subjects</Link>
              </li>
              <li className="text-3xl hidden md:hover:text-green-800 md:hover:scale-105 md:block  md:dark:hover:text-green-500 px-3 pt-2 transition-all ">
                <Link href="/feed">Feedback</Link>
              </li>
              
            </ul>
          </div>

          <div className="flex-1 flex  flex-row p-4">

            <div className="p-4  text-transparent text-lg scale-150 relative -z-10 ml-7 transition-all d duration-300 font-bold">
              {"<"}edu<span className=" uppercase">Connect</span>/{">"}
            </div>
          </div>
          <div className="p-4 absolute text-white z-20 scale-110 md:text-2xl  md:hover:scale-125 right-8 top-5 dark:text-white transition-all duration-300 font-bold">
            {"<"}edu<span className="text-green-500 uppercase">Connect</span>/{'>'}
          </div>
        </div>
        <button onClick={()=>setOpen(!open) } className="px-3 py-1 text-slate-800 dark:text-slate-200 bg-green-500 md:hidden absolute top-7  capitalize left-3 dark:bg-green-700 rounded-md  font-bold">toggle nav</button>
        <ul className={`md:hidden w-[100vw] md:items-center md:pb-0 pb-12 absolute md:static dark:bg-slate-800 dark:text-white bg-white md:z-auto  left-0  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <>
            <li key={link.name} className='md:ml-8 text-xl md:my-0  my-7'>
              <Link href={link.link} className='text-gray-800  dark:text-white md:hover:text-gray-400 duration-500'>{link.name}</Link>
              
            </li>
            </>
          ))
        }
        </ul>
        
      </header>

      
    </div>
  )
}

export default Navbar
