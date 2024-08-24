import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import Selector from "./components/Selector/Selector";

function App() {
  const [month, setMonth] = useState(1);
  const [index, setIndex] = useState(1);
  const monthNames = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function handleLeftClick() {
    if (index > 1) {
      setIndex((prev) => prev - 1);
    }
  }

  function handleRightClick() {
    if (index < 10) {
      setIndex((prev) => prev + 1);
    }
  }

  function handleSelectMonth(month) {
    setMonth(month);
  }

  return (
    <>
      <Selector
        index={index}
        selected={month}
        monthOnClick={handleSelectMonth}
        leftOnClick={handleLeftClick}
        rightOnClick={handleRightClick}
      />
      <h1 className="calendar-title">
        Calendar for {monthNames[month]} 2022 (United States)
      </h1>
      <Calendar year={2022} month={month} monthName={monthNames[month]} />
    </>
  );
}

export default App;
