import React, { useEffect, useState } from "react";
import useTodo from "../../hooks/useTodo";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import "./Todo.css";

export default function Todo() {
  const { todos, createTodo, deleteTodo, updateTodo } = useTodo([]);

  function addBtnOnClick(input) {
    if (input.length > 0) {
      createTodo({ task: input });
    }
  }

  function deleteBtnOnClick(id) {
    deleteTodo(id);
  }

  function changeBtnOnClick(id, task) {
    updateTodo(id, task);
  }

  return (
    <div className="todo">
      <h1 className="todo__title">Todo List</h1>
      <TodoForm addTask={addBtnOnClick} />
      <TodoList
        tasks={todos}
        deleteBtnOnClick={deleteBtnOnClick}
        changeBtnOnClick={changeBtnOnClick}
      />
    </div>
  );
}
