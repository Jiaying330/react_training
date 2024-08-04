import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";

function App() {
  return (
    <>
      <h2 className="">Question 1</h2>
      <Table1 />
      <h2 className="">Question 2</h2>
      <Table2 />
    </>
  );
}

export default App;
