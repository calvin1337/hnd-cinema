import { useState, useEffect } from 'react';


const DatePicker = () => {
  
  const [days, setDays] = useState([]);

  useEffect(() => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    const reorderedDays = weekdays.slice(today).concat(weekdays.slice(0, today));
    setDays(reorderedDays);
  }, []);
  

  return (
    <div className="text-center">
        {/* Day picker */}
          <h1>Date picker</h1>
          <div className="gap-5 flex flex-row justify-center mt-5">
          {days.map((day, index) => (
        <button key={index} className="btn">{index === 0 ? 'Today' : day}</button>
      ))}
          </div>
      </div>
  )
}

export default DatePicker