import React, { useEffect, useState } from "react";
import { data } from "../../data";
import Filter from "./Filter";
import TableRow from "./TableRow";

export default function Table2() {
  const [region, setRegion] = useState("all");
  const [model, setModel] = useState("all");
  const [rows, setRows] = useState([]);
  const regions = data.reduce((acc, car) => {
    if (!acc.includes(car.region)) acc.push(car.region);
    return acc;
  }, []);
  const models = data.reduce((acc, car) => {
    if (!acc.includes(car.model)) acc.push(car.model);
    return acc;
  }, []);

  useEffect(() => {
    let filteredData = data;
    if (region != "all") {
      filteredData = filteredData.filter((car) => car.region == region);
    }
    if (model != "all") {
      filteredData = filteredData.filter((car) => car.model == model);
    }
    setRows(filteredData);
  }, [region, model]);

  function handleOnChange(value, filterName) {
    if (filterName == "Region") {
      setRegion(value);
    } else {
      setModel(value);
    }
  }
  return (
    <>
      <Filter
        label={"Region"}
        selections={["all", ...regions]}
        value={region}
        onChange={handleOnChange}
      />
      <Filter
        label={"Model"}
        selections={["all", ...models]}
        value={model}
        onChange={handleOnChange}
      />
      <table className="table">
        <tbody className="table__body">
          <tr className="table__heads">
            <th className="table__head">region</th>
            <th className="table__head">model</th>
            <th className="table__head">sales</th>
          </tr>
          {rows.map((car, i) => {
            return <TableRow key={i} car={car} />;
          })}
          {}
        </tbody>
      </table>
    </>
  );
}
