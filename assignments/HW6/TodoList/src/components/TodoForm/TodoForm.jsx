import React from "react";
import "./TodoForm.css";

export default function TodoForm({ input, onChange, onClick }) {
  return (
    <form className="todo__form">
      <input
        type="text"
        className="todo__input"
        placeholder="Add your task..."
        value={input}
        onChange={onChange}
      />
      <button className="todo__input-btn" onClick={onClick}>
        Add
      </button>
    </form>
  );
}
