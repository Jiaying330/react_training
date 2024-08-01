import React, { Component } from "react";
import "./TodoList.css";
import TodoItem from "../Todo/TodoItem/TodoItem";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="todo__list">
        {this.props.tasks.map((task) => {
          return (
            <TodoItem
              key={task.id}
              task={task.task}
              deleteOnClick={this.props.deleteBtnOnClick}
              changeOnClick={this.props.changeBtnOnClick}
              id={task.id}
            />
          );
        })}
      </ul>
    );
  }
}
