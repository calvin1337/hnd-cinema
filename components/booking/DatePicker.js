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
    startOfThisWeek.getDate() + 7
  );
  const endOfNextWeek = new Date(
    startOfNextWeek.getFullYear(),
    startOfNextWeek.getMonth(),
    startOfNextWeek.getDate() + 6
  );
  const displayDate = `The week starting on ${startOfNextWeek.toDateString()} and ending on ${endOfNextWeek.toDateString()}.`;

  return (
    <div className="text-center">
      {/* Day picker */}

      <div className="gap-5 flex flex-row justify-center mt-5">
      {days && days.map((day, index) => (
  <button
    key={index}
    className={active === index ? "text-white" : "text-gray-500"}
    onClick={() => selectDay(index)}
  >
    {index === 0 ? "Today" : day}
  </button>
))}
      </div>
      <h1 className="mt-5">{displayDate}</h1>
    </div>
  );
};

export default DatePicker;
