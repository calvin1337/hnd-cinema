import Seats from '@/components/booking/Seats'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {doc, getDoc} from "firebase/firestore";
import {db} from  "../../firebase"
import { Spinner } from '@/components/layout/Spinner';
import { Payment } from '@/components/booking/Payment';


const BookingPage = () => {

  const router = useRouter();
  const { slug } = router.query;


  const [showing, setShowing] = useState(null);
  const [loading, setLoading] = useState(true);

  const [booking, setBooking] = useState([]);

  const [completeBooking, setCompleteBooking] = useState(false);
  


  useEffect(() => {
    const fetchShowing = async () => {
      try {
        const docRef = doc(db, 'showings', slug);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const showingData = docSnap.data();
          const movieDocRef = doc(db, 'movies', showingData.movie_id);
          const movieDocSnap = await getDoc(movieDocRef);
          if (movieDocSnap.exists()) {
            const movieData = movieDocSnap.data();
            setShowing({ ...showingData, ...movieData, showingID: docSnap.id });            
            setLoading(false);
          } else {
            throw new Error('Movie not found');
          }
        } else {
          throw new Error('Document not found');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    if (slug) {
      fetchShowing();
    }
  }, [slug]);

  if (loading) {
    return <Spinner />;
  }
  
  const confirmBooking = (x) => {
    setCompleteBooking(true);
    console.log(x)
  } 

  const createBooking  = async (seats) => {
    setBooking(seats);
    console.log(seats)
  }

  function handleClick() {
    if (completeBooking === true){
      setCompleteBooking(false)
    } else {
      router.back();
    }
    
  }

  
  return (
    <>

    

    

  <div className="text-center w-full flex flex-col items-center" style={{perspective:"1000px"}}>
    {/* Booking Info */}
    <div className="mt-10">
      <h2>Booking Info</h2>
      <h3>{showing.title}</h3>
      <h3>Screen: 4</h3>
      <h3>Time: {showing.time}</h3>
    </div>
    
   
    {!completeBooking ? ( 
    <>
    <div className="screen w-1/4 h-20 bg-white transform mt-5" style={{transform: "rotateX(-45deg)"}}></div>

    
    <Seats userSelectedSeats={createBooking} showingID={slug}/>

    <div className="user-booking">
    <h3>Seats selected: {booking.join(",")}</h3>
    </div>

    </>
    
    ) : (<Payment seats={booking} booked={showing}> </Payment>)
    }
    

  <div className="btn- mt-5">
    {/* https://flowbite.com/docs/components/buttons/ */}
    {/* Change buttons */}
    <button onClick={handleClick} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Back</button>
    <button onClick={() => confirmBooking(booking)}  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " >Book</button>
  </div>
  </div>
  
  </>


  )
}

export default BookingPage