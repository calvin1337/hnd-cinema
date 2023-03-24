import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  
 const [activeLink, setActiveLink] = useState("home");

//   Sets styles for active link

const setActive = (active) => {
    setActiveLink(active);
 }


  return (
    <nav className="bg-gray-800">
      {/* Main container*/}
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 text-white">
        {/* Logo container */}
        <div className="flex items-center justify-between py-3 md:py-5 md:block ">
         LOGO
        </div>
        {/* Link container */}
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <ul className="items-center justify-center md:flex">
            <li className={activeLink === "home" ? "py-2 md:px-6 bg-gray-900 text-white rounded-md mx-2" : "py-2 md:px-6 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md mx-2"} onClick={() => setActive("home")}>
              <Link exact href="/">Home</Link>
            </li>
            <li className={activeLink === "about" ? "py-2 md:px-6 bg-gray-900 text-white rounded-md mx-2" : "py-2 md:px-6 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md mx-2"} onClick={() => setActive("about")}>
              <Link exact href="/about">About</Link>
            </li>
            <li className={activeLink === "whatson" ? "py-2 md:px-6 bg-gray-900 text-white rounded-md mx-2" : "py-2 md:px-6 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md mx-2"} onClick={() => setActive("whatson")}>
              <Link exact href="/whatson">What&apos;s On</Link>
            </li>
            <li className={activeLink === "comingsoon" ? "py-2 md:px-6 bg-gray-900 text-white rounded-md mx-2" : "py-2 md:px-6 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md mx-2"} onClick={() => setActive("comingsoon")}>
              <Link exact href="/comingsoon">Coming Soon</Link>
            </li>
            
          </ul>
        </div>
        {/* Login container */}
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <ul className="items-center justify-center md:flex">
            <li className="py-2 md:px-6 text-center">
              Login
            </li>
            <li className="py-2 md:px-6 text-center">
              Sign up
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
