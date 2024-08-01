import React, { Component } from "react";
import "./TodoForm.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  inputOnChange = (event) => {
    const value = event.target.value;
    this.setState({ value: value });
  };

  btnOnClick = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form className="todo__form">
        <input
          type="text"
          className="todo__input"
          placeholder="Add your task..."
          value={this.state.value}
          onChange={this.inputOnChange}
        />
        <button className="todo__input-btn" onClick={this.btnOnClick}>
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;
