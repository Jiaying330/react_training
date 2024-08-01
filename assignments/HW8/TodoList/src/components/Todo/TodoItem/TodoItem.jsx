import React, { Component, createRef } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      input: props.task,
    };
    this.inputRef = createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.editing && !prevState.editing) {
      this.inputRef.current.focus();
    }
  }

  editOnClick = () => {
    this.setState((prevState) => ({
      editing: !prevState.editing,
    }));
  };

  inputOnChange = (event) => {
    const value = event.target.value;
    this.setState({
      input: value,
    });
  };

  confirmOnClick = () => {
    const { changeOnClick, id } = this.props;
    changeOnClick(id, { task: this.state.input });
    this.setState((prevState) => ({
      editing: !prevState.editing,
    }));
  };

  render() {
    const { task, deleteOnClick, id } = this.props;
    const { editing, input } = this.state;

    return (
      <li className="todo__item">
        {editing ? (
          <input
            type="text"
            value={input}
            onChange={this.inputOnChange}
            ref={this.inputRef}
          />
        ) : (
          <span>{task}</span>
        )}
        {!editing && (
          <button
            className="todo__delete-btn"
            onClick={() => deleteOnClick(id)}
          >
            &#10060;
          </button>
        )}
        {editing ? (
          <button className="todo__edit-btn" onClick={this.confirmOnClick}>
            Confirm
          </button>
        ) : (
          <button className="todo__edit-btn" onClick={this.editOnClick}>
            Edit
          </button>
        )}
      </li>
    );
  }
}

export default TodoItem;
