import { useState} from "react"


const MyAccount = () => {

  const [selector, setSelector] = useState("bookings");

  return (
    <div className="text-center text-white container mx-auto py-4" >
      <div className="border-red-500 border text-2xl font-bold">
      <h1>User Dashboard</h1>
      </div>
     <div className="gap-5 flex flex-row justify-center mt-5 border-red-500 border">
      <button className={selector === "bookings" ? "text-white" : "text-gray-500"}>View Bookings</button>
      <button className={selector === "account" ? "text-white" : "text-gray-500"}>Manage Account</button>
     </div>
      
    </div>
  )
}

export default MyAccount