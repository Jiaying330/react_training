import React, { useState, useEffect } from "react";
import DateCell from "../DateCell/DateCell";
import "./Calendar.css";

export default function Calendar({ year, month, monthName }) {
  const [dates, setDates] = useState([]);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  function generateCalendar() {
    const daysInMonth = getDaysInMonth(year, month);
    const datesArray = [];
    const firstDayIndex = new Date(year, month, 1).getDay();
    if (firstDayIndex > 0) {
      datesArray.push(...Array(firstDayIndex).fill(null));
    }
    for (let day = 1; day <= daysInMonth; day++) {
      datesArray.push({
        day,
        active: false,
        date: new Date(year, month, day),
      });
    }
    const extra = Math.ceil(datesArray.length / 7) * 7 - datesArray.length;
    if (extra > 0) {
      datesArray.push(...Array(extra).fill(null));
    }
    setDates(datesArray);
  }

  useEffect(() => {
    generateCalendar();
  }, [year, month]);

  function handleOnClick(index) {
    if (dates[index]) {
      const updatedDates = dates.map((date, i) =>
        i === index ? { ...date, active: true } : { ...date, active: false }
      );
      setDates(updatedDates);
    }
  }

  return (
    <div className="calendar">
      <div className="calendar__month">{monthName}</div>
      <div className="calendar__days">
        {days.map((day) => (
          <div key={day} className="calendar__day">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar__dates">
        {dates.map((date, i) => (
          <DateCell
            key={`${i}-${date && date.active}`}
            id={i}
            date={date}
            onClick={handleOnClick}
          />
        ))}
      </div>
    </div>
  );
}
