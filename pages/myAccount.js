import ViewBookings from "@/components/user/ViewBookings";
import { AuthContext } from '@/hooks/AuthContext';
import { useState, useContext, useEffect} from "react"
import { db } from "@/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import React from "react";


const MyAccount = () => {

  const [selector, setSelector] = useState("bookings");
  const { user } = React.useContext(AuthContext);
  const [userBookings, setUserBookings] = useState([]);

  const fetchUserBookings = async () => {
    const userRef = doc(collection(db, "users"), user.uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      console.log(docSnap.data().bookings)
      setUserBookings(docSnap.data().bookings)
    } else {
      console.log("No such document!");
    }
  }
  
  useEffect(() => {
    fetchUserBookings()
  }, []);

  return (
    <div className="text-center text-white container mx-auto py-4" >
      <div className="text-2xl font-bold">
      <h2>Hello {user.displayName}</h2>
      <h1>User Dashboard</h1>
      </div>
     <div className="gap-5 flex flex-row justify-center mt-5">
      <button className={selector === "bookings" ? "text-white" : "text-gray-500"}>View Bookings</button>
      <button className={selector === "account" ? "text-white" : "text-gray-500"}>Manage Account</button>
     </div>
      <ViewBookings />
    </div>
  )
}

export default MyAccount