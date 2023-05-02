import Link from "next/link";
import { useState } from "react";
import  useAuth  from "@/hooks/AuthContext";
import { AuthContext } from '@/hooks/AuthContext';
import React from "react";


export default function Navigation(props) {
  
 const [activeLink, setActiveLink] = useState("home");
 
 const { user } = React.useContext(AuthContext);
 const { signOut } = useAuth()

const setActive = (active) => {
    setActiveLink(active);
 }


// COULD ADD ALWAYS AT TOP OF PAGE ON SCROLLING
  return (
    <nav style={{background:"#222"}}>
      {/* Main container*/}
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 text-white">
        {/* Logo container */}
        <div className="flex items-start py-3 md:py-5 md:block w-1/4">
         LOGO
        </div>
        {/* Link container */}
        <div className="flex items-center py-3 md:py-5 md:block w-full">
          <ul className="justify-center md:flex">
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
        <div className="flex items-end justify-between py-3 md:py-5 md:block w-1/4">
      {user ? (
        <div className="flex items-center gap-4" >
          <Link href="/myAccount" className="ppy-2 md:px-6 bg-neutral-900 text-white rounded-md mx-2">Account</Link>
          <button onClick={signOut} className="py-2 md:px-6 text-center border-2 border-neutral-900 hover:cursor-pointer">
            Logout
          </button>
        </div>
      ) : (
        <ul className="items-center justify-center gap-4 md:flex">
          <li onClick={() => props.toggle("login")} className="py-2 md:px-6 text-center border-2 border-neutral-900 hover:cursor-pointer">
            Login
          </li>
          <li onClick={() => props.toggle("reg")} className="py-2 md:px-6 text-center border-2  border-neutral-900 hover:cursor-pointer">
            Register
          </li>
        </ul>
      )}
    </div>
      </div>
     
    </nav>
  )
}
