import React, { useState } from "react";
import "./TodoForm.css";

export default function TodoForm({ addTask }) {
  const [input, setInput] = useState("");

  function inputOnChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  function btnOnClick(event) {
    event.preventDefault();
    addTask(input);
    setInput("");
  }

  return (
    <form className="todo__form">
      <input
        type="text"
        className="todo__input"
        placeholder="Add your task..."
        value={input}
        onChange={inputOnChange}
      />
      <button className="todo__input-btn" onClick={btnOnClick}>
        Add
      </button>
    </form>
  );
}
