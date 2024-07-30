import React from "react";
import "./TodoItem.css";

export default function TodoItem({ task, onClick, id }) {
  return (
    <li className="todo__item">
      <span>{task}</span>
      <button className="todo__delete-btn" onClick={() => onClick(id)}>
        &#10060;
      </button>
    </li>
  );
}
