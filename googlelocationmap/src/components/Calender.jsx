import React, { useEffect, useState } from "react";

function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDay, setStartDay] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);

    const days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    setDaysInMonth(days);
    setStartDay(new Date(year, month, 1).getDay());
  }, [currentDate]);

  const daysName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handlePrev = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNext = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const handleDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar">
      <div className="calender-header">
        <button onClick={handlePrev}>&lt;</button>
        <span>{currentDate.toLocaleString("default", { month: "long" })}</span>
        <span>{currentDate.getFullYear()}</span>
        <button onClick={handleNext}>&gt;</button>
      </div>
      <div className="calender-day--name">
        {daysName.map((day) => {
          return (
            <div key={day} className="day-name">
              {day}
            </div>
          );
        })}
      </div>
      <div className="calender-date">
        {Array.from({ lenght: startDay }).map((_, index) => (
          <div className="empty-day" key={index}></div>
        ))}
        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`day ${
              day.getDate() === new Date().getDate() &&
              day.getMonth() === new Date().getMonth() &&
              day.getFullYear() === new Date().getFullYear()
                ? "today"
                : ""
            }  
                ${
                  selectedDate &&
                  day.toDateString() === selectedDate.toDateString()
                    ? "selected"
                    : ""
                }`}
            onClick={() => handleDate(day)}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calender;
