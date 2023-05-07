import { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export const Payment = (props) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);

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
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log('Error getting document:', error);
      }
    };

    addBookingToDatabase();
  }, [props.booked.showingID, props.seats]);

  console.log(props.booked);

  return (
    <div>
      {bookingSuccess && <p>Booking successful!</p>}
      {/* Payment component content */}
    </div>
  );
};