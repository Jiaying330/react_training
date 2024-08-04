import React, { useEffect, useState } from "react";
import { data } from "../../data";
import TableRow from "./TableRow";

export default function Table1() {
  const groupedData = data.reduce((acc, car) => {
    if (!acc[car.region]) {
      acc[car.region] = { total: 0, cars: [] };
    }
    acc[car.region].total += car.sales;
    acc[car.region].cars.push(car);
    return acc;
  }, {});

  return (
    <>
      <table className="table">
        <tbody className="table__body">
          <tr className="table__heads">
            <th className="table__head">region</th>
            <th className="table__head">model</th>
            <th className="table__head">sales</th>
          </tr>
          {Object.entries(groupedData).map(([region, { total, cars }], i) => {
            return (
              <React.Fragment key={i}>
                <TableRow
                  car={{ region: region, model: "sum", sales: total }}
                />
                {cars.map((car, j) => {
                  return <TableRow key={i + j} car={car} />;
                })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
