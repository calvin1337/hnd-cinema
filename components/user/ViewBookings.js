// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: component for users to view bookings they have made


import React, { useContext, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { AuthContext } from '@/hooks/AuthContext';

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const userBookings = userData.bookings || [];
          setBookings(userBookings);
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    if (user) {
      fetchBookings();
    }
  }, [user]);

  return (
    <div className="container mx-auto py-4 h-96">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex justify-between">
          <div className="w-1/4">Booking ID</div>
          <div className="w-1/4">Seats</div>
          <div className="w-1/4">Movie</div>
          <div className="w-1/4">Time</div>
          <div className="w-1/4">Screen</div>
        </div>
      </div>
      {/* Display the bookings */}
      {bookings.map((booking) => (
        <div key={booking.bookingID} className="px-4 py-3 border-b border-gray-200">
          <div className="flex justify-between">
            <div className="w-1/4">{booking.bookingID}</div>
            <div className="w-1/4">{booking.seats.join(', ')}</div>
            <div className="w-1/4">{booking.title}</div>
            <div className="w-1/4">{booking.time}</div>
            <div className="w-1/4">{booking.screen}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewBookings;