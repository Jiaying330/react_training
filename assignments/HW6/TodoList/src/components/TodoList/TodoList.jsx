import React from "react";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({
  tasks,
  deleteBtnOnClick,
  changeBtnOnClick,
}) {
  return (
    <ul className="todo__list">
      {tasks.map((task) => {
        return (
          <TodoItem
            key={task.id}
            task={task.task}
            deleteOnClick={deleteBtnOnClick}
            changeOnClick={changeBtnOnClick}
            id={task.id}
          />
        );
      })}
    </ul>
  );
}
