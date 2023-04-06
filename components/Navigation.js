import Link from "next/link";
import { useState } from "react";


export default function Navigation() {
  
 const [activeLink, setActiveLink] = useState("home");
 


const setActive = (active) => {
    setActiveLink(active);
 }



  return (
    <nav style={{background:"#222"}}>
      {/* Main container*/}
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 text-white">
        {/* Logo container */}
        <div className="flex items-center justify-between py-3 md:py-5 md:block ">
         LOGO
        </div>
        {/* Link container */}
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <ul className="items-center justify-center md:flex">
            <li>
              <Link className={activeLink === "home" ? "py-2 md:px-6 bg-neutral-900 text-white rounded-md mx-2" : "py-2 md:px-6 text-gray-300 hover:bg-neutral-700 hover:text-white rounded-md mx-2"} onClick={() => setActive("home")} exact href="/">Home</Link>
            </li>
            <li >
              <Link className={activeLink === "about" ? "py-2 md:px-6 bg-neutral-900 text-white rounded-md mx-2" : "py-2 md:px-6 text-gray-300 hover:bg-neutral-700 hover:text-white rounded-md mx-2"} onClick={() => setActive("about")} exact href="/about">About</Link>
            </li>
            <li >
              <Link className={activeLink === "whatson" ? "py-2 md:px-6 bg-neutral-900 text-white rounded-md mx-2" : "py-2 md:px-6 text-gray-300 hover:bg-neutral-700 hover:text-white rounded-md mx-2"} onClick={() => setActive("whatson")}exact href="/whatson">What&apos;s On</Link>
            </li>
            <li >
              <Link className={activeLink === "comingsoon" ? "py-2 md:px-6 bg-neutral-900 text-white rounded-md mx-2" : "py-2 md:px-6 text-gray-300 hover:bg-neutral-700 hover:text-white rounded-md mx-2"} onClick={() => setActive("comingsoon")} exact href="/comingsoon">Coming Soon</Link>
            </li>
            
          </ul>
        </div>


        {/* Login container */}
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <ul className="items-center justify-center gap-4 md:flex">
            <li className="py-2 md:px-6 text-center border-2 border-neutral-900 hover:cursor-pointer">
              Login
            </li>
            <li  className="py-2 md:px-6 text-center border-2  border-neutral-900 hover:cursor-pointer">
              Register
            </li>
          </ul>
        </div>
      </div>
     
    </nav>
  )
}
