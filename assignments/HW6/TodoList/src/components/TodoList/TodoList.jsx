import React from "react";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ tasks, deleteBtnOnClick }) {
  return (
    <ul className="todo__list">
      {tasks.map((task) => {
        return (
          <TodoItem
            key={task.id}
            task={task.task}
            onClick={deleteBtnOnClick}
            id={task.id}
          />
        );
      })}
    </ul>
  );
}
