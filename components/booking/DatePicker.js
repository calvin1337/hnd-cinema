// Author: Calvin Donaldson
// Date: 07/05/2023 
// Description: This code defines a React component called DatePicker. It provides a user interface for selecting a day from a week view.

import { useState, useEffect } from "react";

const DatePicker = (props) => {
  const { selectDay, active, day } = props;

  const [days, setDays] = useState([]);


  useEffect(() => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date().getDay();
    const reorderedDays = weekdays
      .slice(today)
      .concat(weekdays.slice(0, today));
    setDays(reorderedDays);
  }, []);

  // Calculate the start and end of the week for display
  const calDate = new Date();
  const startOfThisWeek = new Date(
    calDate.getFullYear(),
    calDate.getMonth(),
    calDate.getDate(),
    calDate.getDay()
  );
  const startOfNextWeek = new Date(
    startOfThisWeek.getFullYear(),
    startOfThisWeek.getMonth(),
    startOfThisWeek.getDate() 
  );
  const endOfNextWeek = new Date(
    startOfNextWeek.getFullYear(),
    startOfNextWeek.getMonth(),
    startOfNextWeek.getDate() + 6
  );
  const displayDate = `The week starting on ${startOfNextWeek.toDateString()} and ending on ${endOfNextWeek.toDateString()}.`;

  return (
    <div className="text-center">
            <h1 className="mt-5 mb-5 text-xl">{displayDate}</h1>

      {/* Day picker */}

      <div className="gap-1 lg:gap-5 flex flex-row justify-center mt-5 mb-5">
      {days && days.map((day, index) => (
  <button
  key={index}
  className={active === day ? "text-white text-xs sm:text-lg" : "text-gray-500 text-xs sm:text-lg"}
      
  onClick={() => selectDay(day)}
>
  {day}
</button>
))}
      </div>
    </div>
  );
};

export default DatePicker;
