import React from "react";
import "./Selector.css";

export default function Selector({
  index,
  selected,
  monthOnClick,
  leftOnClick,
  rightOnClick,
}) {
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="selector">
      <button className="btn" onClick={leftOnClick}>
        &#8592;
      </button>
      <div className="selector__months">
        {months.slice(index, index + 3).map((month, i) => (
          <div
            key={`${i}-${selected}`}
            onClick={() => monthOnClick(index + i)}
            className={`selector__month ${
              selected === index + i ? "active" : ""
            }`}
          >
            {month}
          </div>
        ))}
      </div>
      <button className="btn" onClick={rightOnClick}>
        &#8594;
      </button>
      <div className="">Full year 2022</div>
    </div>
  );
}
