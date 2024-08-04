import React from "react";

export default function TableRow({ car }) {
  const { region, model, sales } = car;
  return (
    <tr className="table__rows">
      <td className="table__cell">{region}</td>
      <td className="table__cell">{model}</td>
      <td className="table__cell">{sales}</td>
    </tr>
  );
}
