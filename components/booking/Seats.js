import { useState } from "react";




const Seats = () => {

  const numRows = 5; // set the number of rows
  const seatsPerRow = 5; // set the number of seats per row

  const rowIndices = { 0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E' }; // set the row letters

  const [seatsArray, setSeatsArray] = useState(Array(numRows).fill().map(() => Array(seatsPerRow).fill()));

  


  const selectSeat = (rowIndex, seatIndex) => {
    const newSeatsArray = [...seatsArray];
    newSeatsArray[rowIndex][seatIndex] = newSeatsArray[rowIndex][seatIndex] === "selected" ? "" : "selected";
    setSeatsArray(newSeatsArray);
    console.log(rowIndices[rowIndex], seatIndex + 1 )
    
  }




  return (
    <div className="seats-container  bg-gray-500 p-4">
      {seatsArray.map((row, rowIndex) => (
        <div key={rowIndex} className="row h-10 flex items-center justify-center space-x-4" style={{ alignItems: 'flex-start' }}>
          {row.map((seat, seatIndex) => (
            <div key={seatIndex} 
              className="bg-gray-300 w-12 flex items-center justify-center text-lg font-bold" 
              style={{
            backgroundColor:
              seat === "selected"
                ? "green"
                : seat === "booked"
                ? "red"
                : "gray"
          }}

              onClick={() => selectSeat(rowIndex, (seatIndex))}>
              {rowIndices[rowIndex]}{seatIndex + 1}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


export default Seats;
