import Seats from '@/components/booking/Seats'
import React from 'react'

const BookingPage = () => {
  return (
    <>
  <div className="text-center w-full flex flex-col items-center" style={{perspective:"1000px"}}>
    {/* Booking Info */}
    <div className="mt-10">
      <h2>Booking Info</h2>
      <h3>Creed III</h3>
      <h3>Screen: 4</h3>
      <h3>Time: 16:20</h3>
    </div>
    
    {/* Screen */}
    <div className="screen w-1/4 h-20 bg-white transform mt-5" style={{transform: "rotateX(-45deg)"}}></div>

    {/* Component? */}
    <Seats/>

    <div className="user-booking">
    <h3>Seats selected: A1, A2</h3>
    </div>

  <div className="btn- mt-5">
    {/* https://flowbite.com/docs/components/buttons/ */}
    {/* Change buttons */}
    <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Back</button>
    <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " >Book</button>
  </div>
  </div>
  
  </>


  )
}

export default BookingPage