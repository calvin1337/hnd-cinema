import Link from "next/link";

export default function Navigation() {
  
  

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
            <li className="py-2 md:px-6 bg-gray-900 text-white rounded-md mx-2">
              <Link exact href="/">Home</Link>
            </li>
            <li className="py-2 md:px-6 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md mx-2">
              <Link exact href="/whatson">What&apos;s On</Link>
            </li>
            <li className="py-2 md:px-6 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md mx-2">
              <Link exact href="/comingsoon">Coming Soon</Link>
            </li>
            <li className="py-2 md:px-6 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md mx-2">
              <Link exact href="/about">About</Link>
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
