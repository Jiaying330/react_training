const todoList = document.querySelector(".todo__list");
const addBtn = document.querySelector(".todo__input-button");
const addInput = document.querySelector(".todo__input");
console.log(addBtn);

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const newTask = addInput.value;
  addNewTask(newTask);
  addInput.value = "";
});

todoList.addEventListener("click", (event) => {
  if (event.target.parentElement.classList[0] == "todo__list-item") {
    event.target.parentElement.classList.toggle("done");
  }
  if (event.target.className == "todo__list-delete-btn") {
    deleteTask(event.target.parentElement);
  }
});

function addNewTask(task) {
  const newListItem = document.createElement("li");
  const spanEl = document.createElement("span");
  const deleteBtn = document.createElement("button");

  spanEl.innerHTML = task;
  deleteBtn.innerHTML = "&#10060;";
  deleteBtn.classList.add("todo__list-delete-btn");

  newListItem.appendChild(spanEl);
  newListItem.appendChild(deleteBtn);

  newListItem.classList.add("todo__list-item");

  todoList.appendChild(newListItem);
}

function deleteTask(task) {
  //   console.log(task);
  todoList.removeChild(task);
}
