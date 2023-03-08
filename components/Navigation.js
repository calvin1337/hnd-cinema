import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gray-800">
      {/* Main container*/}
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 text-white">
        <div className="flex items-center justify-between py-3 md:py-5 md:block ">
         Logo
        </div>
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <ul className="h-screen md:h-auto items-center justify-center md:flex">
            <li className="py-2 md:px-6 text-center">
              <Link exact href="/">Home</Link>
            </li>
            <li className="py-2 md:px-6 text-center">
              <Link exact href="/">What&apos;s On</Link>
            </li>
            <li className="py-2 md:px-6 text-center">
              <Link exact href="/">Coming Soon</Link>
            </li>
            <li className="py-2 md:px-6 text-center">
              <Link exact href="/">About</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <ul className="h-screen md:h-auto items-center justify-center md:flex">
            <li>
              Login
            </li>
            <li>
              Sign up
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
