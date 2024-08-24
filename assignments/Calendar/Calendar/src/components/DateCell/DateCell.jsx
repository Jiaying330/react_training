import React from "react";
import "./DateCell.css";

export default function DateCell({ date, onClick, id }) {
  return (
    <div
      className={`calendar__date ${date && date.active ? "active" : ""}`}
      onClick={(e) => onClick(id, e)}
    >
      {date && date.day}
    </div>
  );
}
