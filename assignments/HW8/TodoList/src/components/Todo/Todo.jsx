import React, { Component } from "react";
import API from "../../hooks/APIs";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import "./Todo.css";

class Todo extends Component {
  constructor() {
    super();
    this.apis = API();
    this.state = {
      todos: [],
    };
    this.apis.getTodos().then((res) => this.setState({ todos: res }));
  }

  addBtnOnClick = (input) => {
    if (input.length > 0) {
      this.apis
        .createTodo({ task: input })
        .then((res) => this.setState({ todos: [...this.state.todos, res] }));
    }
  };

  deleteBtnOnClick = (id) => {
    this.apis.deleteTodo(id);
    const newTodos = this.state.todos.filter((todo) => todo.id != id);
    this.setState({ todos: newTodos });
  };

  changeBtnOnClick = (id, task) => {
    this.apis.updateTodo(id, task).then((res) => {
      const newTodo = this.state.todos.map((todo) =>
        todo.id == id ? res : todo
      );
      this.setState({ todos: newTodo });
    });
  };

  render() {
    return (
      <div className="todo">
        <h1 className="todo__title">Todo List</h1>
        <TodoForm addTask={this.addBtnOnClick} />
        <TodoList
          tasks={this.state.todos}
          deleteBtnOnClick={this.deleteBtnOnClick}
          changeBtnOnClick={this.changeBtnOnClick}
        />
      </div>
    );
  }
}

export default Todo;
