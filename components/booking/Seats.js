import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Seats = (props) => {
  const numRows = 5; // set the number of rows
  const seatsPerRow = 5; // set the number of seats per row

  const rowIndices = { 0: "A", 1: "B", 2: "C", 3: "D", 4: "E" }; // set the row letters

  const [seatsArray, setSeatsArray] = useState(
    Array(numRows)
      .fill()
      .map(() => Array(seatsPerRow).fill())
  );
  const [alreadyBooked, setAlreadyBooked] = useState([]);

  const selectSeat = (rowIndex, seatIndex) => {
    const newSeatsArray = [...seatsArray];
    newSeatsArray[rowIndex][seatIndex] =
      newSeatsArray[rowIndex][seatIndex] === "selected" ? "" : "selected";
    setSeatsArray(newSeatsArray);
    console.log(rowIndices[rowIndex], seatIndex + 1);
    console.log(seatsArray);
  };

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
  }, []);

  const updateSeatsArray = (bookings) => {
    const newSeatsArray = [...seatsArray];
    // loop through each booking in the array
    for (const booking of bookings) {
      // split the booking string into its row and seat parts
      const [row, seat] = booking.split("");
      // find the index of the row in the rowIndices object
      const rowIndex = Object.keys(rowIndices).findIndex(
        (key) => rowIndices[key] === row
      );
      // convert the seat string to a number and subtract 1 to get the seat index
      const seatIndex = Number(seat) - 1;
      newSeatsArray[rowIndex][seatIndex] = "booked";
    }
    setSeatsArray(newSeatsArray);
  };

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
