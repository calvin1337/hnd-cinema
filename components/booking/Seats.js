// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: Seats component for selecting seats and displaying their availability

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Seats = (props) => {

  // Set the number of rows and seats per row
  const numRows = 5;
  const seatsPerRow = 5;

  // Define the row indices using row letters
  const rowIndices = { 0: "A", 1: "B", 2: "C", 3: "D", 4: "E" };

  // Initialize the seats array state
  const [seatsArray, setSeatsArray] = useState(
    Array(numRows)
      .fill()
      .map(() => Array(seatsPerRow).fill())
  );

  // Initialize the already booked seats and user cart states
  const [alreadyBooked, setAlreadyBooked] = useState([]);
  const [userCart, setUserCart] = useState([]);

  // Function to select a seat
  const selectSeat = async (rowIndex, seatIndex) => {
    const newSeatsArray = [...seatsArray];
    newSeatsArray[rowIndex][seatIndex] =
      newSeatsArray[rowIndex][seatIndex] === "selected" ? "" : "selected";
    setSeatsArray(newSeatsArray);

    // Update userCart state
    const currentSeat = rowIndices[rowIndex] + (seatIndex + 1);
    if (newSeatsArray[rowIndex][seatIndex] === "selected") {
      setUserCart((prevUserCart) => [...prevUserCart, currentSeat]);
    } else {
      setUserCart((prevUserCart) =>
        prevUserCart.filter((seat) => seat !== currentSeat)
      );
    }
  };

  // Update the parent component with the user's selected seats
  useEffect(() => {
    props.userSelectedSeats(userCart);
  }, [userCart, props]);

  // Fetch already booked seats from the showing document in Firestore
  useEffect(() => {
    const showingRef = doc(db, 'showings', props.showingID);
    getDoc(showingRef)
      .then((doc) => {
        if (doc.exists()) {
          const bookings = doc.data().bookings;
          setAlreadyBooked(bookings);
          updateSeatsArray(bookings);
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });

    // Update the seats array with the booked seats
    const updateSeatsArray = (bookings) => {
      const newSeatsArray = Array(numRows)
        .fill()
        .map(() => Array(seatsPerRow).fill(""));

      bookings.forEach((booking) => {
        const [row, seat] = booking.split("");
        const rowIndex = Object.keys(rowIndices).findIndex(
          (key) => rowIndices[key] === row
        );
        const seatIndex = Number(seat) - 1;
        newSeatsArray[rowIndex][seatIndex] = "booked";
      });

      setSeatsArray([...newSeatsArray]);
    };
  }, [props.showingID]);

  

  return (
    <div className="seats-container  bg-gray-500 p-4">
      {seatsArray.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="row h-10 flex items-center justify-center space-x-4"
          style={{ alignItems: "flex-start" }}
        >
          {row.map((seat, seatIndex) => (
            <button
              key={seatIndex}
              className="bg-gray-300 w-12 flex items-center justify-center text-lg font-bold"
              style={{
                backgroundColor:
                  seat === "selected"
                    ? "green"
                    : seat === "booked"
                    ? "red"
                    : "gray",
              }}
              onClick={() => selectSeat(rowIndex, seatIndex)}
              disabled={seat === "booked"}
            >
              {rowIndices[rowIndex]}
              {seatIndex + 1}
              
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Seats;
