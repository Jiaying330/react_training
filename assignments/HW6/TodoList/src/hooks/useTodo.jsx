import React, { useEffect, useState } from "react";

export default function useTodo(initValue) {
  const baseURL = "http://localhost:3000/todos";
  const [todos, setTodos] = useState(initValue);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    let res = await fetch(baseURL);
    res = await res.json();
    setTodos(res);
  }

  async function createTodo(newTodo) {
    let res = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    res = await res.json();
    setTodos((prevTodos) => [...prevTodos, res]);
  }

  async function deleteTodo(id) {
    let res = await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await res.json();
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  async function updateTodo(id, newTodo) {
    let res = await fetch(`${baseURL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    res = await res.json();
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? res : todo))
    );
  }

  return { todos, createTodo, deleteTodo, updateTodo };
}
