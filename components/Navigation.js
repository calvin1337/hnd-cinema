// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: Navigation component for the app. 


import Link from "next/link";
import { useState } from "react";
import  useAuth  from "@/hooks/AuthContext";
import { AuthContext } from '@/hooks/AuthContext';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';



export default function Navigation(props) {
  
 const [activeLink, setActiveLink] = useState("home");
 const [open, setOpen ] = useState(false);
 
 const { user } = React.useContext(AuthContext);
 const { signOut } = useAuth()

const setActive = (active) => {
    setActiveLink(active);
 }

 const toggleMenu = () => {
  setOpen(!open)
 }


// COULD ADD ALWAYS AT TOP OF PAGE ON SCROLLING
  return (
    <nav style={{background:"#222"}} className={`${open ? "h-64" : ""}`}>
      {/* Main container*/}
      <div className="justify-between px-4 mx-auto lg:max-w-7xl items-center flex md:px-8 text-white">
        {/* Logo container */}
        <div className="flex items-start py-4 md:py-5 md:block w-1/2 lg:W-1/4">
         HNCD CINEMA
        </div>
        <div className="lg:hidden h-6 w-6 cursor-pointer" onClick={toggleMenu}>

        <FontAwesomeIcon className="w-full h-full" size={"xl"} icon={open ? faTimes : faBars} />         
        </div>
        {/* Link container */}
        <div className="items-center py-3 md:py-5 w-full hidden lg:block">
          <ul className="justify-center md:flex">
            <li>
              <Link className={activeLink === "home" ? "py-2 md:px-6 bg-neutral-900 text-white rounded-md md:mx-2" : "py-2 md:px-6 text-gray-300 hover:bg-neutral-700 hover:text-white rounded-md md:mx-2"} onClick={() => setActive("home")} exact href="/">Home</Link>
            </li>
            <li >
              <Link className={activeLink === "about" ? "py-2 md:px-6 bg-neutral-900 text-white rounded-md md:mx-2" : "py-2 md:px-6 text-gray-300 hover:bg-neutral-700 hover:text-white rounded-md md:mx-2"} onClick={() => setActive("about")} exact href="/about">About</Link>
            </li>
            <li >
              <Link className={activeLink === "whatson" ? "py-2 md:px-6 bg-neutral-900 text-white rounded-md md:mx-2" : "py-2 md:px-6 text-gray-300 hover:bg-neutral-700 hover:text-white rounded-md md:mx-2"} onClick={() => setActive("whatson")}exact href="/whatson">What&apos;s On</Link>
            </li>
            <li >
              <Link className={activeLink === "comingsoon" ? "py-2 md:px-6 bg-neutral-900 text-white rounded-md md:mx-2" : "py-2 md:px-6 text-gray-300 hover:bg-neutral-700 hover:text-white rounded-md md:mx-2"} onClick={() => setActive("comingsoon")} exact href="/comingsoon">Coming Soon</Link>
            </li>
            
          </ul>
        </div>


        {/* Login container */}
        <div className="items-end justify-between py-3 md:py-5 hidden lg:block w-1/4">
      {user ? (
        <div className="flex items-center gap-4" >
          <Link href="/myAccount" className="py-2 md:px-6 bg-neutral-900 text-white rounded-md mx-2"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Link>
          <button onClick={signOut} className="py-2 md:px-6 text-center text-red-700 rounded hover:cursor-pointer hover:bg-neutral-900 hover:text-red-500">
          <FontAwesomeIcon size={"xl"} icon={faRightFromBracket} />          
          </button>
        </div>
      ) : (
        <ul className="items-center justify-center gap-4 md:flex">
          <li onClick={() => props.toggle("login")} className="bg-neutral-950 border-neutral-950 border hover:bg-neutral-700 text-gray-100  font-bold py-2 px-4 rounded hover:cursor-pointer">
            Login
          </li>
          <li onClick={() => props.toggle("reg")} className="bg-neutral-950 border-neutral-950 border hover:bg-neutral-700 font-bold py-2 px-4 rounded hover:cursor-pointer">
            Register
          </li>
        </ul>
      )}
    </div>


        
      </div>
      <div className={`${open ? "flex" : "hidden"} `}>
        {/* Mobile nav links */}
      <div className="items-center py-3 md:py-5 w-full block text-center">
          <ul className="justify-center flex flex-col gap-2">
            <li>
              <Link className={activeLink === "home" ? "text-white" : "text-gray-500"} onClick={() => setActive("home")} exact href="/">Home</Link>
            </li>
            <li >
              <Link className={activeLink === "about" ? "text-white" : "text-gray-500"} onClick={() => setActive("about")} exact href="/about">About</Link>
            </li>
            <li >
              <Link className={activeLink === "whatson" ? "text-white" : "text-gray-500"} onClick={() => setActive("whatson")}exact href="/whatson">What&apos;s On</Link>
            </li>
            <li >
              <Link className={activeLink === "comingsoon" ? "text-white" : "text-gray-500"} onClick={() => setActive("comingsoon")} exact href="/comingsoon">Coming Soon</Link>
            </li>
            
          </ul>
        </div>
        </div>
        <div className={`${open ? "flex" : "hidden"} text-white`} >
        {user ? (
        <div className="items-center justify-center gap-4 w-full flex" >
          <Link href="/myAccount" className="py-2 md:px-6 text-white mx-2"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Link>
          <button onClick={signOut} className="py-2 md:px-6 text-center text-red-700 rounded hover:cursor-pointer hover:bg-neutral-900 hover:text-red-500">
          <FontAwesomeIcon size={"xl"} icon={faRightFromBracket} />          
          </button>
        </div>
      ) : (
        <ul className="items-center justify-center gap-4 flex w-full ">
          <li onClick={() => props.toggle("login")} className="text-green-600 font-bold">
            Login
          </li>
          <li onClick={() => props.toggle("reg")} className="text-blue-600 font-bold">
            Register
          </li>
        </ul>
      )}
        </div>
    </nav>
  )
}
