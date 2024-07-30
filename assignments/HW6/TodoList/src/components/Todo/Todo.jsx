import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import "./Todo.css";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  function addBtnOnClick(input) {
    if (input.length > 0) {
      setTasks((prev) => [...prev, { id: count, task: input }]);
    }
    setCount((prev) => prev + 1);
  }

  function deleteBtnOnClick(id) {
    const newTasks = tasks.filter((task) => task.id != id);
    setTasks(newTasks);
  }

  return (
    <div className="todo">
      <h1 className="todo__title">Todo List</h1>
      <TodoForm addTask={addBtnOnClick} />
      <TodoList tasks={tasks} deleteBtnOnClick={deleteBtnOnClick} />
    </div>
  );
}
