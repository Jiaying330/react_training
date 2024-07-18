const APIs = (() => {
  const baseURL = "http://localhost:3000/todos";

  const getTodos = () => {
    return fetch(baseURL).then((res) => res.json());
  };

  const createTodo = (newTodo) => {
    return fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then((res) => res.json());
  };

  const deleteTodo = (id) => {
    return fetch(`${baseURL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  return {
    getTodos,
    createTodo,
    deleteTodo,
  };
})();

// Model - manage data
const Model = (() => {
  class State {
    #todos;
    #onChange;
    constructor() {
      this.#todos = [];
    }
    get todos() {
      return this.#todos;
    }

    set todos(newTodos) {
      this.#todos = newTodos;
      this.#onChange();
    }

    subscribe(cb) {
      this.#onChange = cb;
    }
  }
  return {
    State,
    ...APIs,
  };
})();

// View - manage UI, what users will see
const View = (() => {
  const todoList = document.querySelector(".todo__list");
  const addBtn = document.querySelector(".todo__input-button");
  const addInput = document.querySelector(".todo__input");

  const getInputValue = () => {
    return addInput.value;
  };
  const clearInput = () => {
    addInput.value = "";
  };

  const renderTodos = (todos) => {
    todoList.innerHTML = "";
    for (const todo of todos) {
      const newTodoEl = document.createElement("li");
      const spanEl = document.createElement("span");
      const deleteBtn = document.createElement("button");

      spanEl.innerHTML = todo.content;
      deleteBtn.innerHTML = "&#10060;";
      deleteBtn.classList.add("todo__list-delete-btn");

      newTodoEl.appendChild(spanEl);
      newTodoEl.appendChild(deleteBtn);

      newTodoEl.classList.add("todo__list-item");
      newTodoEl.id = `${todo.id}`;
      todoList.appendChild(newTodoEl);
    }
  };
  return {
    todoList,
    addBtn,
    addInput,
    getInputValue,
    clearInput,
    renderTodos,
  };
})();

// Controller - handle events, interact with Model and View
const Controller = ((model, view) => {
  const state = new model.State();

  const setupAddHandler = () => {
    view.addBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const inputValue = view.getInputValue();
      console.log(inputValue);
      const newTodo = {
        content: inputValue,
      };
      model.createTodo(newTodo).then((res) => {
        console.log("calling createTodo", res);
        state.todos = [...state.todos, res];
        view.clearInput();
      });
    });
  };

  view.todoList.addEventListener("click", (event) => {
    const element = event.target;
    if (element.parentElement.classList[0] == "todo__list-item") {
      element.parentElement.classList.toggle("done");
    }
    if (element.className == "todo__list-delete-btn") {
      const id = element.parentElement.getAttribute("id");
      model.deleteTodo(element.parentElement.id).then(() => {
        state.todos = state.todos.filter((todo) => todo.id !== id);
      });
    }
  });

  const init = () => {
    state.subscribe(() => {
      view.renderTodos(state.todos);
    });

    model.getTodos().then((data) => {
      state.todos = data;
    });
    setupAddHandler();
  };
  return {
    init,
  };
})(Model, View);

Controller.init();
