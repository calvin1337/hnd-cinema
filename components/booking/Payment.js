import { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import React from 'react';
import { AuthContext } from '@/hooks/AuthContext';

export const Payment = (props) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const { user } = React.useContext(AuthContext);

  useEffect(() => {
    const addBookingToDatabase = async () => {
      try {
        const showingRef = doc(db, 'showings', props.booked.showingID);
        const docSnap = await getDoc(showingRef);
        if (docSnap.exists()) {
          const showingData = docSnap.data();
          console.log('Showing Data:', showingData);

          // Get the existing bookings array
          const existingBookings = showingData.bookings || [];

          // Add the new booking to the existing bookings array
          const updatedBookings = [...existingBookings, ...props.seats];

          // Update the bookings field in the document
          await updateDoc(showingRef, { bookings: updatedBookings });
          console.log('Booking added to the database.');

          // Set booking success to true
          setBookingSuccess(true);

          // Update the user's account with the booking details
          const userRef = doc(db, 'users', user.uid); // Replace 'users' with the appropriate collection name for users
          const userDocSnap = await getDoc(userRef);
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();

            // Add the new booking to the user's bookings array
            const userBookings = userData.bookings || [];
            const updatedUserBookings = [...userBookings, { seats: props.seats, showingID: props.booked.showingID, title: props.booked.title, time: props.booked.time, screen: 4}];

            // Update the bookings field in the user document
            await updateDoc(userRef, { bookings: updatedUserBookings });
            console.log('Booking added to the user account.');
          } else {
            console.log('User document not found!');
          }
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log('Error getting document:', error);
      }
    };

    addBookingToDatabase();
  }, [props.booked.showingID, props.seats, user.uid]);

  console.log(props.booked);

  return (
    <div>
      {bookingSuccess && <p>Booking successful!</p>}
      {/* Payment component content */}
    </div>
  );
};