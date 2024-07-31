import React, { useState, useRef, useEffect } from "react";
import "./TodoItem.css";

export default function TodoItem({ task, deleteOnClick, changeOnClick, id }) {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(task);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  function editOnClick() {
    setEditing((prev) => !prev);
  }

  function inputOnChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  function confirmOnClick() {
    changeOnClick(id, { task: input });
    setEditing((prev) => !prev);
  }

  return (
    <li className="todo__item">
      {editing ? (
        <input
          type="text"
          value={input}
          onChange={inputOnChange}
          ref={inputRef}
        />
      ) : (
        <span>{task}</span>
      )}
      {!editing && (
        <button className="todo__delete-btn" onClick={() => deleteOnClick(id)}>
          &#10060;
        </button>
      )}
      {editing ? (
        <button className="todo__edit-btn" onClick={() => confirmOnClick()}>
          Confirm
        </button>
      ) : (
        <button className="todo__edit-btn" onClick={() => editOnClick()}>
          Edit
        </button>
      )}
    </li>
  );
}
