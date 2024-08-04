import React from "react";

export default function Filter({ label, selections, value, onChange }) {
  return (
    <>
      <label htmlFor={label + " Filter"} className="table__select-label">
        {label}
      </label>
      <select
        name={label}
        id={label}
        className="tabel__select"
        value={value}
        onChange={(e) => onChange(e.target.value, label)}
      >
        {selections.map((selection, i) => {
          return (
            <option key={i} value={selection} className="tabel__select-option">
              {selection}
            </option>
          );
        })}
      </select>
    </>
  );
}
